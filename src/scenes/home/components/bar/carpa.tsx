import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_1: THREE.Mesh
  }
  materials: {
    ['Material.076']: THREE.MeshStandardMaterial
    ['Material.077']: THREE.MeshStandardMaterial
  }
}

export function Carpa(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/carpa.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Display_Tent"
        position={[-456.786, 32.248, -246.683]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.265, 0.417, 0.294]}>
        <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials['Material.076']} />
        <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials['Material.077']} />
      </group>
    </group>
  )
}

useGLTF.preload('/carpa.glb')
