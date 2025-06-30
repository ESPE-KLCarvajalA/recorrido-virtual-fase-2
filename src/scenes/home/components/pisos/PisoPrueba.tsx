import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    road009: THREE.Mesh
    road016: THREE.Mesh
  }
  materials: {
    ['Material.048']: THREE.MeshStandardMaterial
    ['Material.061']: THREE.MeshStandardMaterial
  }
}

export function PisoPrueba(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoprueba.glb') as unknown as GLTFResult

  const [ref1] = useTrimesh(() => ({
    type: 'Static',
    args: [nodes.road009.geometry.attributes.position.array, nodes.road009.geometry.index.array],
    position: [-65.404, -1.118, -457.82],
  }))

  const [ref2] = useTrimesh(() => ({
    type: 'Static',
    args: [nodes.road016.geometry.attributes.position.array, nodes.road016.geometry.index.array],
    position: [-100.871, -0.481, -796.902],
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref1}
        geometry={nodes.road009.geometry}
        material={materials['Material.048']}
        position={[-65.404, -1.118, -457.82]}
      />
      <mesh
        ref={ref2}
        geometry={nodes.road016.geometry}
        material={materials['Material.061']}
        position={[-100.871, -0.481, -796.902]}
      />
    </group>
  )
}

useGLTF.preload('models/pisos/pisoprueba.glb')
