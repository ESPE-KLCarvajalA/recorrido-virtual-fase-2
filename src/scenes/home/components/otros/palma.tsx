import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['2__1_-removebg-preview']: THREE.Mesh
  }
  materials: {
    ['2__1_-removebg-preview']: THREE.MeshStandardMaterial
  }
}

export function Palma(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/palma.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="2__1_-removebg-preview"
        geometry={nodes['2__1_-removebg-preview'].geometry}
        material={materials['2__1_-removebg-preview']}
        position={[-308.249, 18.312, -166.351]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={34.105}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/palma.glb')