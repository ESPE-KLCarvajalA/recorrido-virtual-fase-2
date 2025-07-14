import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Room072: THREE.Mesh
    Room072_1: THREE.Mesh
    Room034: THREE.Mesh
    Room034_1: THREE.Mesh
    Room046: THREE.Mesh
    Room046_1: THREE.Mesh
    Room059: THREE.Mesh
    Room059_1: THREE.Mesh
    Room069_1: THREE.Mesh
    Room069_2: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function Paredes1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredes1.glb') as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        name="Room069"
        position={[-746.54, 25.649, -448.642]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1.296, 20.125, 1]}>
        <mesh geometry={nodes.Room072.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room072_1.geometry} material={materials['Material.097']} />
      </group>

      <group
        name="Room032"
        position={[-790.295, 26.819, -766.079]}
        scale={[0.923, 20.125, 1.714]}>
        <mesh geometry={nodes.Room034.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room034_1.geometry} material={materials['Material.097']} />
      </group>

      <group
        name="Room044"
        position={[-530.929, 26.108, -1008.118]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.923, 20.125, 1.714]}>
        <mesh geometry={nodes.Room046.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room046_1.geometry} material={materials['Material.097']} />
      </group>

      <group
        name="Room057"
        position={[-193.617, 23.565, -752.193]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.369, 20.125, 0.879]}>
        <mesh geometry={nodes.Room059.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room059_1.geometry} material={materials['Material.097']} />
      </group>

      <group
        name="Room066"
        position={[-219.047, 48.473, -853.547]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.879, 20.125, 0.879]}>
        <mesh geometry={nodes.Room069_1.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room069_2.geometry} material={materials['Material.097']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredes1.glb')
