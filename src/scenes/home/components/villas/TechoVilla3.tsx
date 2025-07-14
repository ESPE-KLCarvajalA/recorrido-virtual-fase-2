import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo014: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo014"
        geometry={nodes.techo014.geometry}
        material={materials['Material.212']}
        position={[-505.473, 75.184, -994.907]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 29.306]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla3.glb')
