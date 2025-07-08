import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    piso_gris002: THREE.Mesh
  }
  materials: {
    ['Material.049']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda2.glb') as unknown as GLTFResult

  const geometry = nodes.piso_gris002.geometry;

  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index ? (geometry.index.array as Uint16Array | Uint32Array) : new Uint32Array();

  const position: [number, number, number] = [-253.469, -7, 418.937];

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: position,
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="piso_gris002"
        geometry={geometry}
        material={materials['Material.049']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoVereda2.glb')