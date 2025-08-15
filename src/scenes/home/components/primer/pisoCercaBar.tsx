import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    piso_gris001: THREE.Mesh
  }
  materials: {
    ['Material.031']: THREE.MeshStandardMaterial
  }
}

export function PisoCercaBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCercaBar.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="piso_gris001"
        geometry={nodes.piso_gris001.geometry}
        material={materials['Material.031']}
        position={[-455.786, -11.863, -263.412]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCercaBar.glb')
