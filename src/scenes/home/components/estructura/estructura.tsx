import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    forma050: THREE.Mesh
  }
  materials: {
    ['Material.045']: THREE.MeshStandardMaterial
  }
}

export function Estructura(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="forma050"
        geometry={nodes.forma050.geometry}
        material={materials['Material.045']}
        position={[-144.055, 29.922, 628.158]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura.glb')
