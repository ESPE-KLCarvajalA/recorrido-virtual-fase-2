
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube068: THREE.Mesh
  }
  materials: {
    ['Concrete.001']: THREE.MeshStandardMaterial
  }
}

export function Carretera(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/carretera.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube068"
        geometry={nodes.Cube068.geometry}
        material={materials['Concrete.001']}
        position={[-55.059, -8.903, 751.847]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/carretera.glb')
