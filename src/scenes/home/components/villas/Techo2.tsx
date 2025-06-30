
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane105: THREE.Mesh
    Plane105_1: THREE.Mesh
    Plane106: THREE.Mesh
    Plane106_1: THREE.Mesh
    Plane108: THREE.Mesh
    Plane108_1: THREE.Mesh
    techo021: THREE.Mesh
  }
  materials: {
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
  }
}

export function Techo2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/techo1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="techo001"
        position={[-165.586, 69.83, -748.706]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[10.902, 3.519, 22.977]}>
        <mesh
          name="Plane105"
          geometry={nodes.Plane105.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane105_1"
          geometry={nodes.Plane105_1.geometry}
          material={materials['Material.143']}
        />
      </group>
      <group
        name="techo011"
        position={[-778.392, 74.388, -797.53]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 29.831]}>
        <mesh
          name="Plane106"
          geometry={nodes.Plane106.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane106_1"
          geometry={nodes.Plane106_1.geometry}
          material={materials['Material.143']}
        />
      </group>
      <group
        name="techo014"
        position={[-505.473, 75.184, -994.907]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 29.306]}>
        <mesh
          name="Plane108"
          geometry={nodes.Plane108.geometry}
          material={materials['Material.140']}
        />
        <mesh
          name="Plane108_1"
          geometry={nodes.Plane108_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <mesh
        name="techo021"
        geometry={nodes.techo021.geometry}
        material={materials['Material.042']}
        position={[-193.589, 49.014, -873.635]}
        rotation={[-0.004, -0.003, -0.092]}
        scale={[14.007, 3.532, 18.255]}
      />
    </group>
  )
}

useGLTF.preload('models/villas/techo1.glb')