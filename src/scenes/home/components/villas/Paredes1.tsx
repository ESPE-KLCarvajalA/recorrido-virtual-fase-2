import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Room071: THREE.Mesh
    Room071_1: THREE.Mesh
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
        name="Room068"
        position={[-751.424, 24.12, -597.53]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1, 19.25, 1]}>
        <mesh
          name="Room071"
          geometry={nodes.Room071.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room071_1"
          geometry={nodes.Room071_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room069"
        position={[-749.521, 26.481, -443.352]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1.296, 20.125, 1]}>
        <mesh
          name="Room072"
          geometry={nodes.Room072.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room072_1"
          geometry={nodes.Room072_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group name="Room032" position={[-777.626, 26.819, -770.363]} scale={[0.923, 20.125, 1.714]}>
        <mesh
          name="Room034"
          geometry={nodes.Room034.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room034_1"
          geometry={nodes.Room034_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room044"
        position={[-540.276, 26.108, -1001.207]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.923, 20.125, 1.714]}>
        <mesh
          name="Room046"
          geometry={nodes.Room046.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room046_1"
          geometry={nodes.Room046_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room057"
        position={[-192.168, 23.565, -748.912]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.369, 20.125, 0.879]}>
        <mesh
          name="Room059"
          geometry={nodes.Room059.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room059_1"
          geometry={nodes.Room059_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room066"
        position={[-194.797, 24.323, -871.367]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.879, 20.125, 0.879]}>
        <mesh
          name="Room069_1"
          geometry={nodes.Room069_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room069_2"
          geometry={nodes.Room069_2.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredes1.glb')
