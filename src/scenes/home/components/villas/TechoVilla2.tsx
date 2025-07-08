import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane106: THREE.Mesh
    Plane106_1: THREE.Mesh
  }
  materials: {
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/techoVilla2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="techo011"
        position={[-778.392, 74.388, -797.53]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 29.831]}>
        <mesh
          name="Plane106"
          geometry={nodes.Plane106.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane106_1"
          geometry={nodes.Plane106_1.geometry}
          material={materials['Material.143']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/villas/techoVilla2.glb')
