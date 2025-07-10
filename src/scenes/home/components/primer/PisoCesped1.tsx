import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useConvexPolyhedron } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    piso_cesped_cerca_del_lab001: THREE.Mesh;
  };
  materials: {
    ['Material.112']: THREE.MeshStandardMaterial;
  };
};

export function PisoCesped1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped.glb') as unknown as GLTFResult;

  const geometry = nodes.piso_cesped_cerca_del_lab001.geometry as THREE.BufferGeometry;

  // 👉 1) Extraer vértices como Vector3[]
  const position = geometry.attributes.position;
  const vertices: THREE.Vector3[] = [];
  for (let i = 0; i < position.count; i++) {
    vertices.push(
      new THREE.Vector3(position.getX(i), position.getY(i), position.getZ(i))
    );
  }

  // 👉 2) Extraer caras como índices triples: [[a,b,c], [d,e,f], ...]
  const indices: string | any[] | THREE.TypedArray = geometry.index ? geometry.index.array : [];
  const faces: number[][] = [];
  for (let i = 0; i < indices.length; i += 3) {
    faces.push([
      indices[i],
      indices[i + 1],
      indices[i + 2]
    ]);
  }

  const [ref] = useConvexPolyhedron(() => ({
    type: 'Static',
    args: [vertices, faces],
    position: [380.466, -2, -78.814],
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref} />
      <mesh
        name="piso_cesped_cerca_del_lab001"
        geometry={geometry}
        material={materials['Material.112']}
        position={[380.466, -2, -78.814]}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoCesped.glb');
