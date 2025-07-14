
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2028: THREE.Mesh
    pared_vertical_2020: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

export function SobretechoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sobretecho.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2028"
        geometry={nodes.pared_vertical_2028.geometry}
        material={materials['Material.066']}
        position={[-708.056, 73.635, -80.187]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[21.389, 1.139, 1.433]}
      />
      <mesh
        name="pared_vertical_2020"
        geometry={nodes.pared_vertical_2020.geometry}
        material={materials['Material.066']}
        position={[-446.76, 72.426, -76.084]}
        scale={[0.581, 1, 1.032]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sobretecho.glb')