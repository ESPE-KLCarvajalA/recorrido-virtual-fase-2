import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';


type GLTFResult = GLTF & {
  nodes: {
    Plane045: THREE.Mesh
    Plane045_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

export function Vereda2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/vereda2.glb') as unknown as GLTFResult;

  const geom1 = nodes.Plane045.geometry as THREE.BufferGeometry;
  const geom2 = nodes.Plane045_1.geometry as THREE.BufferGeometry;

  const vertices1 = Array.from(geom1.attributes.position.array as Float32Array);
  const indices1 = geom1.index ? Array.from(geom1.index.array as Uint16Array | Uint32Array) : [];

  const vertices2 = Array.from(geom2.attributes.position.array as Float32Array);
  const indices2 = geom2.index ? Array.from(geom2.index.array as Uint16Array | Uint32Array) : [];

  const [ref1] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices1, indices1],
    position: [311.258, -1, -224.822],
  }));

  const [ref2] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices2, indices2],
    position: [311.258, -1, -224.822],
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref1} />
      <group ref={ref2} />

      <group name="curb002" position={[311.258, -1.3, -224.822]}>
        <mesh
          name="Plane045"
          geometry={nodes.Plane045.geometry}
          material={materials['Material.114']}
        />
        <mesh
          name="Plane045_1"
          geometry={nodes.Plane045_1.geometry}
          material={materials['Material.116']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/pisos/vereda2.glb');
