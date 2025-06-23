import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    piso_labs: THREE.Mesh;
  };
  materials: {
    ['Granite Tiles']: THREE.MeshStandardMaterial;
  };
};

export function PisoLabs(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoLabs.glb') as unknown as GLTFResult;

  const geometry = nodes.piso_labs.geometry;
  const position = [-17.977, -1, -203.107] as [number, number, number];

  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index!.array as Uint16Array;

  useTrimesh(() => ({
    args: [vertices, indices],
    position,
    type: 'Static',
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        name="piso_labs"
        geometry={geometry}
        material={materials['Granite Tiles']}
        position={position}
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoLabs.glb');
