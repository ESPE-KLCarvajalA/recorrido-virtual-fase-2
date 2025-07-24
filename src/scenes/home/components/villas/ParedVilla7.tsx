import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'


type GLTFResult = GLTF & {
  nodes: {
    Room080: THREE.Mesh
    Room080_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function ParedVilla7(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredVilla7.glb'
  ) as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        name="Room076"
        position={[-650.779, 14.37, 143.702]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.918, 20.125, 1.968]}>
        <mesh
          name="Room080"
          geometry={nodes.Room080.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room080_1"
          geometry={nodes.Room080_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredVilla7.glb')
