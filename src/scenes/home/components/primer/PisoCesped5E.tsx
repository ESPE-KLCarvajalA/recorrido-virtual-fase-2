
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Circle012: THREE.Mesh
    Circle012_1: THREE.Mesh
    Circle013: THREE.Mesh
    Circle013_1: THREE.Mesh
    Circle006: THREE.Mesh
    Circle006_1: THREE.Mesh
  }
  materials: {
    ['Material.124']: THREE.MeshStandardMaterial
    ['Material.125']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped5E(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped5E.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Circle005"
        position={[-305.776, 0.318, -325.881]}
        rotation={[-0.011, -0.005, -3.141]}
        scale={20.419}>
        <mesh
          name="Circle012"
          geometry={nodes.Circle012.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle012_1"
          geometry={nodes.Circle012_1.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group
        name="Circle003"
        position={[-299.624, 1.422, -770.625]}
        rotation={[3.13, -0.005, -3.141]}
        scale={20.419}>
        <mesh
          name="Circle013"
          geometry={nodes.Circle013.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle013_1"
          geometry={nodes.Circle013_1.geometry}
          material={materials['Material.125']}
        />
      </group>
      <group
        name="Circle009"
        position={[-303.026, 0.25, -167.475]}
        rotation={[-3.13, 0, 0.001]}
        scale={20.419}>
        <mesh
          name="Circle006"
          geometry={nodes.Circle006.geometry}
          material={materials['Material.124']}
        />
        <mesh
          name="Circle006_1"
          geometry={nodes.Circle006_1.geometry}
          material={materials['Material.125']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped5E.glb')