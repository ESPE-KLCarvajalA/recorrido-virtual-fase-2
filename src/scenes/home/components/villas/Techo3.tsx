
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane107: THREE.Mesh
    Plane107_1: THREE.Mesh
    Plane109: THREE.Mesh
    Plane109_1: THREE.Mesh
    Plane077: THREE.Mesh
    Plane077_1: THREE.Mesh
    Plane114: THREE.Mesh
    Plane114_1: THREE.Mesh
  }
  materials: {
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
    ['Material.156']: THREE.MeshStandardMaterial
    ['Material.157']: THREE.MeshStandardMaterial
  }
}

export function Techo3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/techo2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="techo013"
        position={[-768.999, 74.927, -514.194]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh
          name="Plane107"
          geometry={nodes.Plane107.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane107_1"
          geometry={nodes.Plane107_1.geometry}
          material={materials['Material.143']}
        />
      </group>
      <group
        name="techo016"
        position={[-674.604, 62.276, 182.714]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 34.842]}>
        <mesh
          name="Plane109"
          geometry={nodes.Plane109.geometry}
          material={materials['Material.140']}
        />
        <mesh
          name="Plane109_1"
          geometry={nodes.Plane109_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <group
        name="techo023"
        position={[-505.7, 36.596, -725.926]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 23.436]}>
        <mesh
          name="Plane077"
          geometry={nodes.Plane077.geometry}
          material={materials['Material.042']}
        />
        <mesh
          name="Plane077_1"
          geometry={nodes.Plane077_1.geometry}
          material={materials['Material.064']}
        />
      </group>
      <group
        name="techo025"
        position={[-509.625, 36.268, -446.305]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 23.436]}>
        <mesh
          name="Plane114"
          geometry={nodes.Plane114.geometry}
          material={materials['Material.156']}
        />
        <mesh
          name="Plane114_1"
          geometry={nodes.Plane114_1.geometry}
          material={materials['Material.157']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/villas/techo2.glb')
