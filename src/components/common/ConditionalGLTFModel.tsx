import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import type { ThreeElements } from '@react-three/fiber'

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

// Props del grupo que quieras pasar
type GroupProps = Omit<React.ComponentPropsWithoutRef<'group'>, 'children'>

export function ConditionalGLTFModel<T extends GLTFResult>({
  url,
  maxDistance = Infinity,
  children,
  position,
  ...props
}: ConditionalGLTFModelProps<T> & GroupProps) {
  const { nodes, materials } = useGLTF(url) as unknown as T

  // ✅ Validación para evitar el error "children is not a function"
  if (typeof children !== 'function') {
    console.error('ConditionalGLTFModel: children debe ser una función que reciba (nodes, materials)')
    console.error('URL del modelo:', url)
    console.error('Tipo de children recibido:', typeof children)
    console.error('Children recibido:', children)
    console.trace('Stack trace para identificar el componente problemático')
    return null
  }

  return (
    <group position={position} {...props}>
      {children(nodes, materials)}
    </group>
  )
}

// ✅ Versión alternativa más robusta con validación de carga
export function ConditionalGLTFModelRobust<T extends GLTFResult>({
  url,
  maxDistance = Infinity,
  children,
  position,
  ...props
}: ConditionalGLTFModelProps<T> & GroupProps) {
  const gltf = useGLTF(url)
  
  // ✅ Validación de children
  if (typeof children !== 'function') {
    console.error('ConditionalGLTFModel: children debe ser una función que reciba (nodes, materials)')
    return null
  }

  // ✅ Validación de carga del modelo
  if (!gltf?.nodes || !gltf?.materials) {
    console.warn(`ConditionalGLTFModel: Modelo no cargado correctamente desde ${url}`)
    return null
  }

  const { nodes, materials } = gltf as unknown as T

  return (
    <group position={position} {...props}>
      {children(nodes, materials)}
    </group>
  )
}

// ✅ Hook personalizado para uso más sencillo
export function useConditionalGLTF<T extends GLTFResult>(url: string) {
  const gltf = useGLTF(url)
  
  return React.useMemo(() => {
    if (!gltf?.nodes || !gltf?.materials) {
      return null
    }
    return gltf as unknown as T
  }, [gltf])


  
}