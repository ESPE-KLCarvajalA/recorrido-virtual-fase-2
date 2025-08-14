
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane020: THREE.Mesh
  }
  materials: {
    ['Concrete.001']: THREE.MeshStandardMaterial
  }
}

export function Piso7(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/piso7.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane020"
        geometry={nodes.Plane020.geometry}
        material={materials['Concrete.001']}
        position={[381.996, -8.759, -1107.667]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/piso7.glb')
