import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.Material>
}

type ConditionalGLTFModelProps<T extends GLTFResult> = {
  url: string
  maxDistance?: number
  children: (nodes: T['nodes'], materials: T['materials']) => React.ReactNode
  position?: [number, number, number]
}

type GroupProps = Omit<React.ComponentPropsWithoutRef<'group'>, 'children'>

export function ConditionalGLTFModel<T extends GLTFResult>({
  url,
  maxDistance = 400,
  children,
  position = [0, 0, 0],
  ...props
}: ConditionalGLTFModelProps<T> & GroupProps) {
  const { camera } = useThree()
  const gltf = useGLTF(url) as unknown as T

  const isVisible = React.useMemo(() => {
    const targetPos = new THREE.Vector3(...position)
    const distance = targetPos.distanceTo(camera.position)
    return distance <= maxDistance
  }, [
    Math.floor(camera.position.x / 20),
    Math.floor(camera.position.z / 20),
    position,
    maxDistance,
    camera.position
  ])

  if (!isVisible) return <group position={position} {...props} />

  if (!gltf?.nodes || !gltf?.materials || typeof children !== 'function') {
    return null
  }

  React.useLayoutEffect(() => {
    Object.values(gltf.nodes).forEach((node) => {
      if (node.isMesh) {
        node.frustumCulled = true
        node.matrixAutoUpdate = false
        node.updateMatrix()
      }
    })
  }, [gltf.nodes])

  return (
    <group position={position} {...props}>
      {children(gltf.nodes, gltf.materials)}
    </group>
  )
}


