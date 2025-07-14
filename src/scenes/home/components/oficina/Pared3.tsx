
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Room020: THREE.Mesh
    Room020_1: THREE.Mesh
  }
  materials: {
    ['Material.094']: THREE.MeshStandardMaterial
    ['Material.095']: THREE.MeshStandardMaterial
  }
}

export function Pared3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Room019"
        position={[-94.274, 25.631, -35.79]}
        rotation={[0, 1.571, 0]}
        scale={[14.781, 37.442, 20.807]}>
        <mesh
          name="Room020"
          geometry={nodes.Room020.geometry}
          material={materials['Material.094']}
        />
        <mesh
          name="Room020_1"
          geometry={nodes.Room020_1.geometry}
          material={materials['Material.095']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared3.glb')
