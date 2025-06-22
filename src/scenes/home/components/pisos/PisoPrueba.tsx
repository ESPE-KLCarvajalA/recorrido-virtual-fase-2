import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    road009: THREE.Mesh
  }
  materials: {
    ['Material.048']: THREE.MeshStandardMaterial
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

export function PisoPrueba(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoprueba.glb') as unknown as GLTFResult
  const position: [number, number, number] = [-66.014, -2, -458]

  return (
    <group {...props} dispose={null}>
      {/* Visual */}
      <mesh
        name="road009"
        geometry={nodes.road009.geometry}
        material={materials['Material.048']}
        position={position}
      />

      {/* Colisión física */}
      <CollisionMesh geometry={nodes.road009.geometry} position={position} />
    </group>
  )
}

useGLTF.preload('models/pisos/pisoprueba.glb')
