
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane064: THREE.Mesh
    Plane064_1: THREE.Mesh
    Cube063: THREE.Mesh
    Cube063_1: THREE.Mesh
  }
  materials: {
    ['Material.138']: THREE.MeshStandardMaterial
    ['Material.139']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function TechoLabCom1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/techoLabCom1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        position={[238.931, 78.398, -268.552]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh geometry={nodes.Plane064.geometry} material={materials['Material.138']} />
        <mesh geometry={nodes.Plane064_1.geometry} material={materials['Material.139']} />
      </group>
      <group position={[251.785, 54.765, -242.042]} scale={[1, 8.099, 1.08]}>
        <mesh geometry={nodes.Cube063.geometry} material={materials['Material.058']} />
        <mesh geometry={nodes.Cube063_1.geometry} material={materials['Material.059']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/techoLabCom1.glb')