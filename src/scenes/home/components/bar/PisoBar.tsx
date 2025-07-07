import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane027: THREE.Mesh
    Plane027_1: THREE.Mesh
    Plane028: THREE.Mesh
    Plane028_1: THREE.Mesh
    Plane029: THREE.Mesh
    Plane029_1: THREE.Mesh
    Plane101: THREE.Mesh
    Plane101_1: THREE.Mesh
    Plane102: THREE.Mesh
    Plane102_1: THREE.Mesh
  }
  materials: {
    ['Material.132']: THREE.MeshStandardMaterial
    ['Material.133']: THREE.MeshStandardMaterial
    ['Material.134']: THREE.MeshStandardMaterial
    ['Material.135']: THREE.MeshStandardMaterial
    ['Material.148']: THREE.MeshStandardMaterial
    ['Material.149']: THREE.MeshStandardMaterial
    ['Material.150']: THREE.MeshStandardMaterial
    ['Material.151']: THREE.MeshStandardMaterial
    ['Material.152']: THREE.MeshStandardMaterial
    ['Material.153']: THREE.MeshStandardMaterial
  }
}

export function PisoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoBar.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="road001"
        position={[-872.397, -10.804, -241.381]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.337, 11.258, 22.208]}>
        <mesh
          name="Plane027"
          geometry={nodes.Plane027.geometry}
          material={materials['Material.132']}
        />
        <mesh
          name="Plane027_1"
          geometry={nodes.Plane027_1.geometry}
          material={materials['Material.133']}
        />
      </group>
      <group
        name="road003"
        position={[-917.575, -10.441, -49.504]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[6.96, 11.258, 38.979]}>
        <mesh
          name="Plane028"
          geometry={nodes.Plane028.geometry}
          material={materials['Material.134']}
        />
        <mesh
          name="Plane028_1"
          geometry={nodes.Plane028_1.geometry}
          material={materials['Material.135']}
        />
      </group>
      <group
        name="road005"
        position={[-854.43, -10.761, -105.094]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[6.96, 11.258, 38.979]}>
        <mesh
          name="Plane029"
          geometry={nodes.Plane029.geometry}
          material={materials['Material.148']}
        />
        <mesh
          name="Plane029_1"
          geometry={nodes.Plane029_1.geometry}
          material={materials['Material.149']}
        />
      </group>
      <group
        name="road011"
        position={[-789.612, -10.139, -195.368]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.337, 11.258, 22.208]}>
        <mesh
          name="Plane101"
          geometry={nodes.Plane101.geometry}
          material={materials['Material.150']}
        />
        <mesh
          name="Plane101_1"
          geometry={nodes.Plane101_1.geometry}
          material={materials['Material.151']}
        />
      </group>
      <group
        name="road010"
        position={[-551.284, -8.874, -229.643]}
        rotation={[Math.PI, -0.002, Math.PI]}
        scale={[5.09, 11.258, 8.755]}>
        <mesh
          name="Plane102"
          geometry={nodes.Plane102.geometry}
          material={materials['Material.152']}
        />
        <mesh
          name="Plane102_1"
          geometry={nodes.Plane102_1.geometry}
          material={materials['Material.153']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoBar.glb')