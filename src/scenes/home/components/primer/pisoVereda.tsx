import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { GLTF } from 'three-stdlib';
import { BufferGeometry } from 'three';

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
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda.glb') as unknown as GLTFResult;

  // Extraer geometría combinada de los 3 meshes
  const geometries: BufferGeometry[] = [
    nodes.Plane049.geometry,
    nodes.Plane049_1.geometry,
    nodes.Plane049_2.geometry
  ];

  // Unir los vértices y las caras de los tres meshes
  const vertices: number[] = [];
  const indices: number[] = [];
  let indexOffset = 0;

  geometries.forEach((geo) => {
    const posAttr = geo.attributes.position;
    const idxAttr = geo.index;

    for (let i = 0; i < posAttr.count; i++) {
      vertices.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
    }

    for (let i = 0; i < idxAttr!.count; i++) {
      indices.push(idxAttr!.getX(i) + indexOffset);
    }

    indexOffset += posAttr.count;
  });

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    type: 'Static',
    position: [-528.547, -1.587, -519.508], // misma posición que el grupo
  }));

  return (
    <group {...props} dispose={null}>
      {/* Collider invisible */}
      <mesh ref={ref} visible={false} />

      {/* Visuales */}
      <group name="curb005" position={[-528.7, -1.587, -519.508]}>
        <mesh
          name="Plane049"
          geometry={nodes.Plane049.geometry}
          material={materials['Material.114']}
          position={[0.45, 0,0]}
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

useGLTF.preload('models/pisos/pisoVereda.glb');
