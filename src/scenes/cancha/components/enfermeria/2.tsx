import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane045: THREE.Mesh
    Plane045_1: THREE.Mesh
  }
  materials: {
    ['MDF Concrete decor Arauco']: THREE.MeshPhysicalMaterial
    ['Dry concrete']: THREE.MeshPhysicalMaterial
  }
}

export function Model2(props: ThreeElements['group']) {   
  const { nodes, materials } = useGLTF('models/enfermeria/2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="curb002" position={[330.138, 0.962, -245.569]}>
        <mesh
          name="Plane045"
          geometry={nodes.Plane045.geometry}
          material={materials['MDF Concrete decor Arauco']}
        />
        <mesh
          name="Plane045_1"
          geometry={nodes.Plane045_1.geometry}
          material={materials['Dry concrete']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/2.glb')