import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Room094_1: THREE.Mesh
    Room094_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.069']: THREE.MeshStandardMaterial
  }
}

function CollisionMesh({
  geometry,
  position,
}: {
  geometry: THREE.BufferGeometry
  position: [number, number, number]
}) {
  const vertices = geometry.attributes.position.array as Float32Array
  const indices = geometry.index?.array as Uint16Array | Uint32Array

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    type: 'Static',
    position,
  }))

  return <mesh ref={ref} geometry={geometry} visible={false} />
}

export function ParedDo(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/salaDocent/paredDo.glb') as unknown as GLTFResult
  const position: [number, number, number] = [376.43, 24, -459.10]

  return (
    <group {...props} dispose={null}>
      <group name="Room094" position={position}>
        {/* Visual */}
        <mesh geometry={nodes.Room094_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Room094_2.geometry} material={materials['Material.069']} />

        {/* Colisiones físicas */}
        <CollisionMesh geometry={nodes.Room094_1.geometry} position={position} />
        <CollisionMesh geometry={nodes.Room094_2.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('models/salaDocent/paredDo.glb')
