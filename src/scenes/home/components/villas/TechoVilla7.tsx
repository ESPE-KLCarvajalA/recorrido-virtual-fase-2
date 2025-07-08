import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2019: THREE.Mesh
    Plane109: THREE.Mesh
    Plane109_1: THREE.Mesh
    sobretecho012: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
    pared_vertical_2018: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla7(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoVilla7.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2019"
        geometry={nodes.pared_vertical_2019.geometry}
        material={materials['Material.066']}
        position={[-823.992, 45.13, 185.864]}
        scale={[0.581, 1, 1.048]}
      />
      <group
        name="techo016"
        position={[-674.604, 62.276, 182.714]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 34.842]}>
        <mesh
          name="Plane109"
          geometry={nodes.Plane109.geometry}
          material={materials['Material.140']}
        />
        <mesh
          name="Plane109_1"
          geometry={nodes.Plane109_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <mesh
        name="sobretecho012"
        geometry={nodes.sobretecho012.geometry}
        material={materials['Material.059']}
        position={[-618.374, 42.139, 191.523]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-95.851, -4.05, -64.836]}
      />
      <group
        name="sobretecho013"
        position={[-769.006, 42.808, 189.901]}
        rotation={[0, 1.571, 0]}
        scale={[-65.21, -4.55, -55.024]}>
        <mesh
          name="Cube050"
          geometry={nodes.Cube050.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube050_1"
          geometry={nodes.Cube050_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <mesh
        name="pared_vertical_2018"
        geometry={nodes.pared_vertical_2018.geometry}
        material={materials['Material.066']}
        position={[-523.401, 44.974, 185.48]}
        scale={[0.581, 1, 1.032]}
      />
    </group>
  )
}

useGLTF.preload('/techoVilla7.glb')
