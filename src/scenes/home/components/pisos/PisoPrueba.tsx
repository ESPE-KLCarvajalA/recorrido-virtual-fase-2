import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    road009: THREE.Mesh
    road016: THREE.Mesh
  }
  materials: {
    ['Material.048']: THREE.MeshStandardMaterial
    ['Material.061']: THREE.MeshStandardMaterial
  }
}
export function PisoPrueba(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoprueba.glb') as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        name="road009"
        geometry={nodes.road009.geometry}
        material={materials['Material.048']}
        position={[-65.404, -1.118, -457.82]}
      />
      <mesh
        name="road016"
        geometry={nodes.road016.geometry}
        material={materials['Material.061']}
        position={[-100.871, -0.481, -796.902]}
      />
    </group>
  )
}
  

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoprueba.glb')
