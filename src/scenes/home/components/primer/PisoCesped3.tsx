import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane012: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped3.glb') as unknown as GLTFResult

  const geometry = nodes.Plane012.geometry;

  // Extraer vértices como Vector3[]
  const positionAttr = geometry.attributes.position;
  const vertices: THREE.Vector3[] = [];
  for (let i = 0; i < positionAttr.count; i++) {
    vertices.push(new THREE.Vector3(
      positionAttr.getX(i),
      positionAttr.getY(i),
      positionAttr.getZ(i)
    ));
  }

  // Extraer caras como listas de tres índices [[a,b,c], ...]
  const indexAttr = geometry.index;
  const faces: number[][] = [];
  if (indexAttr) {
    const indices = indexAttr.array;
    for (let i = 0; i < indices.length; i += 3) {
      faces.push([
        indices[i],
        indices[i + 1],
        indices[i + 2]
      ]);
    }
  }

  const position: [number, number, number] = [-798.342, -4.216, -169.25];

  const [ref] = useConvexPolyhedron(() => ({
    type: 'Static',
    args: [vertices, faces],
    position: position,
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="Plane012"
        geometry={geometry}
        material={materials['Material.118']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped3.glb')
