import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Room004_1: THREE.Mesh;
    Room004_2: THREE.Mesh;
    Room004_3: THREE.Mesh;
  };
  materials: {
    ['Material.094']: THREE.MeshStandardMaterial;
    ['Material.095']: THREE.MeshStandardMaterial;
    ['Material.066']: THREE.MeshStandardMaterial;
  };
};

export function Pared1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared1.glb') as unknown as GLTFResult;

  const position: [number, number, number] = [72.942, 29.5, -71.785];

  // Guardamos las referencias para cada colisión
  const [ref1] = useTrimesh(() => ({
    args: [
      nodes.Room004_1.geometry.attributes.position.array as Float32Array,
      nodes.Room004_1.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }));

  const [ref2] = useTrimesh(() => ({
    args: [
      nodes.Room004_2.geometry.attributes.position.array as Float32Array,
      nodes.Room004_2.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }));

  const [ref3] = useTrimesh(() => ({
    args: [
      nodes.Room004_3.geometry.attributes.position.array as Float32Array,
      nodes.Room004_3.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }));

  return (
    <group {...props} dispose={null}>
      <group name="Room004" position={position}>
        <mesh
          ref={ref1}
          name="Room004_1"
          geometry={nodes.Room004_1.geometry}
          material={materials['Material.094']}
        />
        <mesh
          ref={ref2}
          name="Room004_2"
          geometry={nodes.Room004_2.geometry}
          material={materials['Material.095']}
        />
        <mesh
          ref={ref3}
          name="Room004_3"
          geometry={nodes.Room004_3.geometry}
          material={materials['Material.066']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared1.glb');
