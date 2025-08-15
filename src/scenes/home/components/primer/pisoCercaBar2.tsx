
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane101: THREE.Mesh
    Plane101_1: THREE.Mesh
  }
  materials: {
    ['Material.150']: THREE.MeshStandardMaterial
    ['Material.151']: THREE.MeshStandardMaterial
  }
}

export function PisoCercaBar2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCercaBar2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="road011" position={[-850.849, -10.492, -153.118]}>
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
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCercaBar2.glb')