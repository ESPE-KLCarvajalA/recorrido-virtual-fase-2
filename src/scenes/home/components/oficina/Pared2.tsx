import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Plane024: THREE.Mesh;
    Plane024_1: THREE.Mesh;
  };
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial;
    ['Material.067']: THREE.MeshStandardMaterial;
  };
};

export function Pared2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/oficina/pared2.glb') as unknown as GLTFResult;

  const position: [number, number, number] = [238.472, 41.7, -65.002];

  // Guardar ref para colisiones
  const [ref1] = useTrimesh(() => ({
    args: [
      nodes.Plane024.geometry.attributes.position.array as Float32Array,
      nodes.Plane024.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }));

  const [ref2] = useTrimesh(() => ({
    args: [
      nodes.Plane024_1.geometry.attributes.position.array as Float32Array,
      nodes.Plane024_1.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }));

  return (
    <group {...props} dispose={null}>
      <group name="pared_vertical_1" position={position}>
        <mesh
          ref={ref1}
          name="Plane024"
          geometry={nodes.Plane024.geometry}
          material={materials['Material.066']}
        />
        <mesh
          ref={ref2}
          name="Plane024_1"
          geometry={nodes.Plane024_1.geometry}
          material={materials['Material.067']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/oficina/pared2.glb');
