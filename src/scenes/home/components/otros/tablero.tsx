
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Distribution_Box: THREE.Mesh
  }
  materials: {
    PX_Distribution_Box_01_LOD0: THREE.MeshStandardMaterial
  }
}

export function Tablero(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/otros/tablero.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Distribution_Box"
        geometry={nodes.Distribution_Box.geometry}
        material={materials.PX_Distribution_Box_01_LOD0}
        position={[-153.933, 16.663, 4.525]}
      />
    </group>
  )
}

useGLTF.preload('models/otros/tablero.glb')
