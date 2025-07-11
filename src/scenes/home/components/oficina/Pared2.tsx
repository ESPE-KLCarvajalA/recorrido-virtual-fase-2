
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane024: THREE.Mesh
    Plane024_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.067']: THREE.MeshStandardMaterial
  }
}
export function Pared2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared2.glb') as unknown as GLTFResult;

  

  return (
    <group {...props} dispose={null}>
      <group name="pared_vertical_1" position={[238.472, 44.083, -65.002]}>
        <mesh
          name="Plane024"
          geometry={nodes.Plane024.geometry}
          material={materials['Material.066']}
        />
        <mesh
          name="Plane024_1"
          geometry={nodes.Plane024_1.geometry}
          material={materials['Material.067']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared2.glb');
