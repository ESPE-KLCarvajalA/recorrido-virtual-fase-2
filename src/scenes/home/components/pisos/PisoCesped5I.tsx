import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Circle017: THREE.Mesh
    Circle017_1: THREE.Mesh
    Circle007_1: THREE.Mesh
    Circle007_2: THREE.Mesh
    Circle010: THREE.Mesh
    Circle010_1: THREE.Mesh
    Circle009: THREE.Mesh
    Circle009_1: THREE.Mesh
    Circle008_1: THREE.Mesh
    Circle008_2: THREE.Mesh
  }
  materials: {
    ['Material.124']: THREE.MeshStandardMaterial
    ['Material.125']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped5I(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped5I.glb') as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group
        name="Circle008"
        position={[-167.883, 0.002, -594.487]}
        rotation={[-0.293, 1.57, 0.293]}
        scale={[11.073, 74.023, 14.024]}>
        <mesh
          name="Circle017"
          geometry={nodes.Circle017.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle017_1"
          geometry={nodes.Circle017_1.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group
        name="Circle006"
        position={[-472.68, 1.631, -580.637]}
        rotation={[-0.293, 1.57, 0.293]}
        scale={21.579}>
        <mesh
          name="Circle007_1"
          geometry={nodes.Circle007_1.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle007_2"
          geometry={nodes.Circle007_2.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group
        name="Circle007"
        position={[-476.987, -0.101, -863.554]}
        rotation={[-0.293, 1.57, 0.293]}
        scale={21.579}>
        <mesh
          name="Circle010"
          geometry={nodes.Circle010.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle010_1"
          geometry={nodes.Circle010_1.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group
        name="Circle001"
        position={[-637.544, 0.266, -833.311]}
        rotation={[-3.13, 0, 0.001]}
        scale={[21.284, 21.284, 23.827]}>
        <mesh
          name="Circle009"
          geometry={nodes.Circle009.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle009_1"
          geometry={nodes.Circle009_1.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group
        name="Circle004"
        position={[-640.444, 0.46, -442.052]}
        rotation={[-0.011, 0, -3.141]}
        scale={[21.284, 21.284, 25.123]}>
        <mesh
          name="Circle008_1"
          geometry={nodes.Circle008_1.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle008_2"
          geometry={nodes.Circle008_2.geometry}
          material={materials['Material.125']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped5I.glb')
