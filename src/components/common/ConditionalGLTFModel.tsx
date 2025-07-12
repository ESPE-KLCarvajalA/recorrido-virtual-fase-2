import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.Material>
}

interface ConditionalGLTFModelProps<T extends GLTFResult> {
  url: string
  maxDistance?: number
  children: (nodes: T['nodes'], materials: T['materials']) => React.ReactNode
  position?: [number, number, number]
}

type GroupProps = Omit<React.ComponentPropsWithoutRef<'group'>, 'children'>

export function ConditionalGLTFModel<T extends GLTFResult>({
  url,
  maxDistance = 400, // 🎯 Balanceado: Ver contenido pero optimizado
  children,
  position = [0, 0, 0],
  ...props
}: ConditionalGLTFModelProps<T> & GroupProps) {
  
  const { camera } = useThree()
  
  // 🎯 Calcular distancia optimizada (solo cuando cambia posición significativamente)
  const isVisible = useMemo(() => {
    const targetPos = new THREE.Vector3(...position)
    const cameraPos = camera.position
    const distance = targetPos.distanceTo(cameraPos)
    return distance <= maxDistance
  }, [
    Math.floor(camera.position.x / 75), // Balance: Updates más frecuentes pero optimizados
    Math.floor(camera.position.z / 75), // Mejor respuesta a movimiento del usuario
    position,
    maxDistance
  ])

  // 🎯 Solo cargar modelo si es visible
  const { nodes, materials } = useGLTF(url, isVisible) as unknown as T

  // 🎯 Validación optimizada
  if (!isVisible) {
    return null // No renderizar nada si está lejos
  }

  if (typeof children !== 'function') {
    console.error('ConditionalGLTFModel: children debe ser una función')
    return null
  }

  if (!nodes || !materials) {
    return null // Modelo no cargado
  }

  // 🎯 Aplicar optimizaciones a todos los meshes
  React.useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        node.frustumCulled = true      // Forzar frustum culling
        node.matrixAutoUpdate = false  // Evitar updates innecesarios si es estático
        node.updateMatrix()            // Update manual una vez
      }
    })
  }, [nodes])

  return (
    <group position={position} {...props}>
      {children(nodes, materials)}
    </group>
  )
}

// 🎯 Versión para objetos muy lejanos (LOD básico)
export function ConditionalGLTFModelLOD<T extends GLTFResult>({
  url,
  maxDistance = 300,
  children,
  position = [0, 0, 0],
  ...props
}: ConditionalGLTFModelProps<T> & GroupProps) {
  
  const { camera } = useThree()
  
  const lodLevel = useMemo(() => {
    const targetPos = new THREE.Vector3(...position)
    const distance = targetPos.distanceTo(camera.position)
    
    if (distance > maxDistance) return 'hidden'
    if (distance > maxDistance * 0.7) return 'low'
    return 'high'
  }, [
    Math.floor(camera.position.x / 30),
    Math.floor(camera.position.z / 30),
    position,
    maxDistance
  ])

  const shouldRender = lodLevel !== 'hidden'
  const { nodes, materials } = useGLTF(url, shouldRender) as unknown as T

  if (!shouldRender || !nodes || !materials || typeof children !== 'function') {
    return null
  }

  // 🎯 Aplicar calidad según LOD
  React.useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material instanceof THREE.MeshStandardMaterial) {
        if (lodLevel === 'low') {
          // Reducir calidad para objetos lejanos
          material.roughness = 0.8
          material.metalness = 0.1
          if (material.map) {
            material.map.minFilter = THREE.LinearFilter // Filtro más simple
          }
        }
      }
    })
  }, [materials, lodLevel])

  return (
    <group position={position} {...props}>
      {children(nodes, materials)}
    </group>
  )
}

// 🎯 Hook para LOD manual
export function useConditionalGLTF<T extends GLTFResult>(url: string, maxDistance = 200) {
  const { camera } = useThree()
  const [shouldLoad, setShouldLoad] = React.useState(false)
  
  useFrame(() => {
    // Verificar cada 30 frames para performance
    const { clock } = useThree()
    if (clock.elapsedTime % 0.5 < 0.016) {
      const distance = camera.position.length() // Distancia desde origen
      setShouldLoad(distance < maxDistance)
    }
  })

  const gltf = useGLTF(url, shouldLoad)
  
  return React.useMemo(() => {
    if (!shouldLoad || !gltf?.nodes || !gltf?.materials) {
      return null
    }
    return gltf as unknown as T
  }, [gltf, shouldLoad])
}