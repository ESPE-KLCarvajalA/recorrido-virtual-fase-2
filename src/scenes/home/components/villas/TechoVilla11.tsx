
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2003: THREE.Mesh
    pared_vertical_2004: THREE.Mesh
    sobretecho010: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla11(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/techoVilla11.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2003"
        geometry={nodes.pared_vertical_2003.geometry}
        material={materials['Material.066']}
        position={[-771.598, 54.961, -378.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2004"
        geometry={nodes.pared_vertical_2004.geometry}
        material={materials['Material.066']}
        position={[-777.733, 55.68, -572.335]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="sobretecho010"
        geometry={nodes.sobretecho010.geometry}
        material={materials['Material.059']}
        position={[-779.91, 52.851, -472.582]}
        rotation={[0, 1.571, 0]}
        scale={[-92.242, -6.4, -64.836]}
      />
    </group>
  )
}

useGLTF.preload('models/villas/techoVilla11.glb')