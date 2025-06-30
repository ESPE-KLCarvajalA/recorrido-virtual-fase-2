
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    gente: THREE.Mesh
    ['2']: THREE.Mesh
    ['3']: THREE.Mesh
    ['4']: THREE.Mesh
    ['5']: THREE.Mesh
  }
  materials: {
    gente: THREE.MeshStandardMaterial
    ['2']: THREE.MeshStandardMaterial
    ['3']: THREE.MeshStandardMaterial
    ['4']: THREE.MeshStandardMaterial
    ['5']: THREE.MeshStandardMaterial
  }
}

export function Frases(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/otros/frases1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="gente"
        geometry={nodes.gente.geometry}
        material={materials.gente}
        position={[-243.068, 24.849, -158.56]}
      />
      <mesh
        name="2"
        geometry={nodes['2'].geometry}
        material={materials['2']}
        position={[-242.383, 28.692, -34.27]}
      />
      <mesh
        name="3"
        geometry={nodes['3'].geometry}
        material={materials['3']}
        position={[-243.179, 28.98, -321.901]}
      />
      <mesh
        name="4"
        geometry={nodes['4'].geometry}
        material={materials['4']}
        position={[-243.059, 31.259, -459.275]}
      />
      <mesh
        name="5"
        geometry={nodes['5'].geometry}
        material={materials['5']}
        position={[139.626, 32.652, 1.224]}
      />
    </group>
  )
}

useGLTF.preload('models/otros/frases1.glb')