
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube062: THREE.Mesh
    Cube062_1: THREE.Mesh
    Cube064: THREE.Mesh
    Cube064_1: THREE.Mesh
    Cube061: THREE.Mesh
    Cube061_1: THREE.Mesh
  }
  materials: {
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function Model(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/sobretecho.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="sobretecho005" position={[-117.496, 54.868, -104.043]}>
        <mesh
          name="Cube062"
          geometry={nodes.Cube062.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube062_1"
          geometry={nodes.Cube062_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group name="sobretecho003" position={[155.165, 56.729, -79.396]}>
        <mesh
          name="Cube064"
          geometry={nodes.Cube064.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube064_1"
          geometry={nodes.Cube064_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group name="sobretecho015" position={[6.657, 60.64, -79.396]}>
        <mesh
          name="Cube061"
          geometry={nodes.Cube061.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube061_1"
          geometry={nodes.Cube061_1.geometry}
          material={materials['Material.059']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/sobretecho.glb')
