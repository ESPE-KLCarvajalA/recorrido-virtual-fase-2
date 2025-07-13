
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo015: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoNuevo(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/bloqueb.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo015"
        geometry={nodes.techo015.geometry}
        material={materials['Material.212']}
        position={[72.124, 72, -68.044]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 52.569]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/bloqueb.glb')