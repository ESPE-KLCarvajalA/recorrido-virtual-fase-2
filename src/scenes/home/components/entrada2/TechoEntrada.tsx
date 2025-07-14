
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo005: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoEntrada(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/entrada2/techoEntrada.glb') as unknown as GLTFResult
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo005"
        geometry={nodes.techo005.geometry}
        material={materials['Material.212']}
        position={[-6.237, 65.572, 16.351]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[8.556, 2.388, 10.642]}
      />
    </group>
  )
}
useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/entrada2/techoEntrada.glb')
