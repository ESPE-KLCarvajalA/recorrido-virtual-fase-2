
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo016: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla7(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla7.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo016"
        geometry={nodes.techo016.geometry}
        material={materials['Material.212']}
        position={[-674.604, 62.276, 182.714]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 34.842]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla7.glb')
