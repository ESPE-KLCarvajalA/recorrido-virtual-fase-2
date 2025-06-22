import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';

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

  // Extraer vértices e índices
  const vertices = Array.from(geometry.attributes.position.array as Float32Array);
  const indices = geometry.index ? Array.from(geometry.index.array as Uint16Array | Uint32Array) : [];

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: [380.466, -2, -78.814],
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref} /> {/* Colisión física */}
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
