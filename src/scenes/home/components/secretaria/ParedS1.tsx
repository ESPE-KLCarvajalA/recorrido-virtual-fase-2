import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Room019: THREE.Mesh
    Room019_1: THREE.Mesh
    Room019_2: THREE.Mesh
    Room019_3: THREE.Mesh
  }
  materials: {
    ['Material.094']: THREE.MeshStandardMaterial
    ['Material.095']: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.050']: THREE.MeshStandardMaterial
  }
}

export function ParedS1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/secretaria/paredS1.glb') as unknown as GLTFResult

  const position: [number, number, number] = [-155.823, 26, -39.883]

  // Colisiones
  useTrimesh(() => ({
    args: [
      nodes.Room019.geometry.attributes.position.array as Float32Array,
      nodes.Room019.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }))

  useTrimesh(() => ({
    args: [
      nodes.Room019_1.geometry.attributes.position.array as Float32Array,
      nodes.Room019_1.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }))

  useTrimesh(() => ({
    args: [
      nodes.Room019_2.geometry.attributes.position.array as Float32Array,
      nodes.Room019_2.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }))

  useTrimesh(() => ({
    args: [
      nodes.Room019_3.geometry.attributes.position.array as Float32Array,
      nodes.Room019_3.geometry.index!.array as Uint16Array,
    ],
    position,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group name="Room018" position={position}>
        <mesh name="Room019" geometry={nodes.Room019.geometry} material={materials['Material.094']} />
        <mesh name="Room019_1" geometry={nodes.Room019_1.geometry} material={materials['Material.095']} />
        <mesh name="Room019_2" geometry={nodes.Room019_2.geometry} material={materials['Material.035']} />
        <mesh name="Room019_3" geometry={nodes.Room019_3.geometry} material={materials['Material.050']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/secretaria/paredS1.glb')
