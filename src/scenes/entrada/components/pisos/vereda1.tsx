import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useTrimesh } from '@react-three/cannon'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane040: THREE.Mesh
    Plane040_1: THREE.Mesh
    Plane040_2: THREE.Mesh
  }
  materials: {
    ['MDF Concrete decor Arauco.001']: THREE.MeshStandardMaterial
    ['Dry concrete.002']: THREE.MeshStandardMaterial
    ['Material.111']: THREE.MeshStandardMaterial
  }
}

export function Vereda1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/vereda1.glb') as unknown as GLTFResult;

  const geometry = nodes.Plane040.geometry;
  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index?.array as Uint16Array | Uint32Array;

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    type: 'Static',
    position: [0, 0, 0],
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref} position={[-89.377, 0.01, 103.015]}>
        <mesh geometry={nodes.Plane040.geometry} material={materials['MDF Concrete decor Arauco.001']} />
        <mesh geometry={nodes.Plane040_1.geometry} material={materials['Dry concrete.002']} />
        <mesh geometry={nodes.Plane040_2.geometry} material={materials['Material.111']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/vereda1.glb')
