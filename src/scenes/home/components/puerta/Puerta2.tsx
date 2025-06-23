import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber';


type GLTFResult = GLTF & {
  nodes: {
    DoorFrane009: THREE.Mesh
    DoorFrane009_1: THREE.Mesh
    Handle_Front003: THREE.Mesh
  }
  materials: {
    ['Material.091']: THREE.MeshStandardMaterial
    ['glass frosted']: THREE.MeshPhysicalMaterial
    ['Material.117']: THREE.MeshPhysicalMaterial
  }
}


export function Puerta2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="DoorFrame004" position={[167.089, 20, -279.414]}>
        <mesh
          name="DoorFrane009"
          geometry={nodes.DoorFrane009.geometry}
          material={materials['Material.091']}
        />
        <mesh
          name="DoorFrane009_1"
          geometry={nodes.DoorFrane009_1.geometry}
          material={materials['glass frosted']}
        />
      </group>
      <mesh
        name="Handle_Front003"
        geometry={nodes.Handle_Front003.geometry}
        material={materials['Material.117']}
        position={[167.243, 19.756, -286.856]}
      />
    </group>
  )
}


useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta2.glb')
