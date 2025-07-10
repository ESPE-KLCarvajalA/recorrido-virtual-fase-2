import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useConvexPolyhedron } from '@react-three/cannon';
import { GLTF } from 'three-stdlib';
import { BufferGeometry } from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';

type GLTFResult = GLTF & {
  nodes: {
    Plane049: THREE.Mesh;
    Plane049_1: THREE.Mesh;
    Plane049_2: THREE.Mesh;
  };
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial;
    ['Material.116']: THREE.MeshStandardMaterial;
    ['Material.061']: THREE.MeshStandardMaterial;
  };
};

export function PisoVereda(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda.glb') as unknown as GLTFResult;

  const geometries: BufferGeometry[] = [
    nodes.Plane049.geometry,
    nodes.Plane049_1.geometry,
    nodes.Plane049_2.geometry,
  ];

  // Recolectar todos los puntos de las geometrías en un solo array de Vector3
  const points: THREE.Vector3[] = [];

  geometries.forEach((geo) => {
    const posAttr = geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      points.push(new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)));
    }
  });

  // Generar hull convexo a partir de los puntos
  const convexGeometry = new ConvexGeometry(points);

  // Extraer vertices para useConvexPolyhedron (en forma de Triplet: [x,y,z])
  const vertices: [number, number, number][] = [];
  const pos = convexGeometry.attributes.position.array;
  for (let i = 0; i < pos.length; i += 3) {
    vertices.push([pos[i], pos[i + 1], pos[i + 2]]);
  }

  // Extraer caras (índices de triángulos)
  const faces: number[][] = [];
  if (convexGeometry.index) {
    const index = convexGeometry.index.array;
    for (let i = 0; i < index.length; i += 3) {
      faces.push([index[i], index[i + 1], index[i + 2]]);
    }
  } else {
    // En caso no haya índices, crear un array secuencial (poco común)
    for (let i = 0; i < pos.length / 3; i += 3) {
      faces.push([i, i + 1, i + 2]);
    }
  }

  const colliderPosition: [number, number, number] = [-528.547, -1.587, -519.508];

  const [ref] = useConvexPolyhedron(() => ({
    args: [vertices, faces],
    type: 'Static',
    position: colliderPosition,
  }));

  return (
    <group {...props} dispose={null}>
      {/* Collider invisible */}
      <group ref={ref} />

      {/* Visuales */}
      <group name="curb005" position={colliderPosition}>
        <mesh
          name="Plane049"
          geometry={nodes.Plane049.geometry}
          material={materials['Material.114']}
          position={[0.45, 0, 0]}
        />
        <mesh
          name="Plane049_1"
          geometry={nodes.Plane049_1.geometry}
          material={materials['Material.116']}
        />
        <mesh
          name="Plane049_2"
          geometry={nodes.Plane049_2.geometry}
          material={materials['Material.061']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda.glb');
