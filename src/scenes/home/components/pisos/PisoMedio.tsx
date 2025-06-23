import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    piso_oficinas: THREE.Mesh;
  };
  materials: {
    ['Granite Tiles.001']: THREE.MeshPhysicalMaterial;
  };
};

export function PisoMedio(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoMedio.glb') as unknown as GLTFResult;

  const position: [number, number, number] = [9.373, -4, -247.046];

  // Colisión precisa con useTrimesh
  useTrimesh(() => ({
    args: [
      nodes.piso_oficinas.geometry.attributes.position.array as Float32Array,
      nodes.piso_oficinas.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        name="piso_oficinas"
        geometry={nodes.piso_oficinas.geometry}
        material={materials['Granite Tiles.001']}
        position={position}
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoMedio.glb');
