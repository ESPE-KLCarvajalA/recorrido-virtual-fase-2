import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane015: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

export function CespedCercaCancha(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/cespedCercaCancha.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane015"
        geometry={nodes.Plane015.geometry}
        material={materials['Material.118']}
        position={[-232.392, -1, -928.095]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/cespedCercaCancha.glb')
