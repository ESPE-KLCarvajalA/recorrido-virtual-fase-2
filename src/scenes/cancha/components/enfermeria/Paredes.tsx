import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Room028: THREE.Mesh
    Room028_1: THREE.Mesh
  }
  materials: {
    'Material.081': THREE.Material
    'Material.082': THREE.Material
  }
}

import { JSX } from 'react'

export function Paredes(props: Readonly<JSX.IntrinsicElements['group']>) {
  const { nodes, materials } = useGLTF('models/enfermeria/paredEnfermeria.glb') as unknown as GLTFResult
  return (
    <group {...props}>
      <group
        name="Room089"
        position={[613.187, 0.308, -165.839]}
        rotation={[-Math.PI, 1.306, -Math.PI]}
        scale={[2.406, 6.098, 3.279]}>
        <mesh
          name="Room028"
          geometry={nodes.Room028.geometry}
          material={materials['Material.081']}
        />
        <mesh
          name="Room028_1"
          geometry={nodes.Room028_1.geometry}
          material={materials['Material.082']}
        />
      </group>
    </group>
  )
}
