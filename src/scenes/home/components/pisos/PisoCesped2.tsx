import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    piso_cesped_cerca_del_lab: THREE.Mesh;
  };
  materials: {
    ['Material.057']: THREE.MeshStandardMaterial;
  };
};

export function PisoCesped2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped2.glb') as unknown as GLTFResult;

  const geometry = nodes.piso_cesped_cerca_del_lab.geometry;
  const vertices = Array.from(geometry.attributes.position.array as Float32Array);
  const indices = geometry.index ? Array.from(geometry.index.array as Uint16Array | Uint32Array) : [];

  const position: [number, number, number] = [364.12, -2, -332.336];

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position,
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref} />
      <mesh
        name="piso_cesped_cerca_del_lab"
        geometry={geometry}
        material={materials['Material.057']}
        position={position}
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoCesped2.glb');
