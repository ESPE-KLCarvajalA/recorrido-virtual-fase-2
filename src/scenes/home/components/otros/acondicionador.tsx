import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['a-c_chigo-removebg-preview002']: THREE.Mesh
    ['a-c_chigo-removebg-preview002_1']: THREE.Mesh
  }
  materials: {
    ['a-c_chigo-removebg-preview.002']: THREE.MeshStandardMaterial
    ['Material.100']: THREE.MeshStandardMaterial
  }
}

export function Acondicionador(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/ac.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="a-c_chigo-removebg-preview"
        position={[-2.157, 49.189, -343.718]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-19.893}>
        <mesh
          name="a-c_chigo-removebg-preview002"
          geometry={nodes['a-c_chigo-removebg-preview002'].geometry}
          material={materials['a-c_chigo-removebg-preview.002']}
        />
        <mesh
          name="a-c_chigo-removebg-preview002_1"
          geometry={nodes['a-c_chigo-removebg-preview002_1'].geometry}
          material={materials['Material.100']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/ac.glb')
