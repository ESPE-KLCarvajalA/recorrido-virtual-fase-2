
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane082: THREE.Mesh
    Plane082_1: THREE.Mesh
  }
  materials: {
    ['Material.144']: THREE.MeshStandardMaterial
    ['Material.145']: THREE.MeshStandardMaterial
  }
}

export function TechoEntrada(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoEntrada.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="techo005"
        position={[-6.237, 65.572, 16.351]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[8.556, 2.388, 10.642]}>
        <mesh
          name="Plane082"
          geometry={nodes.Plane082.geometry}
          material={materials['Material.144']}
        />
        <mesh
          name="Plane082_1"
          geometry={nodes.Plane082_1.geometry}
          material={materials['Material.145']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/techoEntrada.glb')
