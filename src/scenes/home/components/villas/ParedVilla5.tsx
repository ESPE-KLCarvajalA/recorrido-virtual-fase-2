
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Room016: THREE.Mesh
    Room016_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function ParedVilla5(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/paredVilla5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Room025"
        position={[-485.492, 25.797, -729.139]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[56.293, 20.125, 56.293]}>
        <mesh
          name="Room016"
          geometry={nodes.Room016.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room016_1"
          geometry={nodes.Room016_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/paredVilla5.glb')
