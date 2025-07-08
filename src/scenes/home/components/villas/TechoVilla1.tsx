import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane107: THREE.Mesh
    Plane107_1: THREE.Mesh
  }
  materials: {
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/techoVilla1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="techo013"
        position={[-768.999, 74.927, -514.194]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh
          name="Plane107"
          geometry={nodes.Plane107.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane107_1"
          geometry={nodes.Plane107_1.geometry}
          material={materials['Material.143']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/villas/techoVilla1.glb')