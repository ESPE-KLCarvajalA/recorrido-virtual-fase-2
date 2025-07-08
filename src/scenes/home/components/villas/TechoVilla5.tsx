import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2016: THREE.Mesh
    pared_vertical_2024: THREE.Mesh
    Plane077: THREE.Mesh
    Plane077_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla5(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoVilla5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2016"
        geometry={nodes.pared_vertical_2016.geometry}
        material={materials['Material.066']}
        position={[-368.843, 53.467, -722.701]}
        scale={[0.581, 0.688, 1.032]}
      />
      <mesh
        name="pared_vertical_2024"
        geometry={nodes.pared_vertical_2024.geometry}
        material={materials['Material.066']}
        position={[-569.73, 53.409, -693.783]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.651, 1.125]}
      />
      <group
        name="techo023"
        position={[-505.7, 36.596, -725.926]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 23.436]}>
        <mesh
          name="Plane077"
          geometry={nodes.Plane077.geometry}
          material={materials['Material.042']}
        />
        <mesh
          name="Plane077_1"
          geometry={nodes.Plane077_1.geometry}
          material={materials['Material.064']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/techoVilla5.glb')