import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useTrimesh } from '@react-three/cannon';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Plane040: THREE.Mesh;
    Plane040_1: THREE.Mesh;
  };
  materials: {
    ['Material.104']: THREE.MeshStandardMaterial;
    ['Material.115']: THREE.MeshStandardMaterial;
  };
};

export function Vereda1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/vereda1.glb') as unknown as GLTFResult;

  const geom1 = nodes.Plane040.geometry as THREE.BufferGeometry;
  const geom2 = nodes.Plane040_1.geometry as THREE.BufferGeometry;

  const vertices1 = Array.from(geom1.attributes.position.array as Float32Array);
  const indices1 = geom1.index ? Array.from(geom1.index.array as Uint16Array | Uint32Array) : [];

  const vertices2 = Array.from(geom2.attributes.position.array as Float32Array);
  const indices2 = geom2.index ? Array.from(geom2.index.array as Uint16Array | Uint32Array) : [];

  const position: [number, number, number] = [-89.377, -1, 103];

  const [ref1] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices1, indices1],
    position,
  }));

  const [ref2] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices2, indices2],
    position,
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref1} />
      <group ref={ref2} />

      <group name="curb018" position={position}>
        <mesh
          name="Plane040"
          geometry={geom1}
          material={materials['Material.104']}
        />
        <mesh
          name="Plane040_1"
          geometry={geom2}
          material={materials['Material.115']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/pisos/vereda1.glb');
