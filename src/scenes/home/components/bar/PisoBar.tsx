import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane043: THREE.Mesh
    Plane043_1: THREE.Mesh
    Plane038: THREE.Mesh
    Plane038_1: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
    ['Terrazzo Tiles']: THREE.MeshPhysicalMaterial
  }
}

export function PisoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/pisoBar.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="concrete_column001"
        position={[-648.523, -4.063, -288.685]}
        scale={[15.387, 19.73, 12.105]}>
        <mesh
          name="Plane043"
          geometry={nodes.Plane043.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Plane043_1"
          geometry={nodes.Plane043_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="concrete_column003"
        position={[-570.368, -4.063, -287.578]}
        scale={[15.387, 17.894, 13.264]}>
        <mesh
          name="Plane038"
          geometry={nodes.Plane038.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Plane038_1"
          geometry={nodes.Plane038_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials['Terrazzo Tiles']}
        position={[-710.344, -6.479, -210.603]}
        scale={[143.642, 2.5, 80.797]}
      />
    </group>
  )
}

useGLTF.preload('/pisoBar.glb')