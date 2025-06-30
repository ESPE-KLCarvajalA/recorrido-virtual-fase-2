import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cube046: THREE.Mesh
    Cube046_1: THREE.Mesh
  }
  materials: {
    ['Material.065']: THREE.MeshStandardMaterial
    ['Material.113']: THREE.MeshStandardMaterial
  }
}

// Función para extraer índices y posiciones de una geometría y ajustarlos para concatenar múltiples geometrías
function extractTrimeshData(geometry: THREE.BufferGeometry, vertexOffset: number) {
  const position = geometry.attributes.position.array as Float32Array
  const index = geometry.index?.array as Uint16Array | Uint32Array | undefined

  // Copiamos posiciones tal cual (vértices)
  const vertices = Array.from(position)

  // Índices ajustados para el offset de vértices
  const indices: number[] = []
  if (index) {
    for (let i = 0; i < index.length; i++) {
      indices.push(index[i] + vertexOffset)
    }
  } else {
    // Si no hay índices, asume secuencia de vértices
    for (let i = 0; i < position.length / 3; i++) {
      indices.push(vertexOffset + i)
    }
  }

  return { vertices, indices }
}

export function PisoTriangulo2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoTriangulo2.glb') as unknown as GLTFResult

  // Extraemos datos de la primera geometría
  const geom1 = nodes.Cube046.geometry
  const geom2 = nodes.Cube046_1.geometry

  // Extraemos datos para colisión
  const { vertices: vertices1, indices: indices1 } = extractTrimeshData(geom1, 0)
  const { vertices: vertices2, indices: indices2 } = extractTrimeshData(geom2, geom1.attributes.position.count)

  // Concatenamos vértices e índices de ambas geometrías
  const vertices = [...vertices1, ...vertices2]
  const indices = [...indices1, ...indices2]

  const groupPosition: [number, number, number] = [-8.408, -2.195, -553.492]

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    position: groupPosition,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group name="triangulo001" position={groupPosition} ref={ref}>
        <mesh geometry={geom1} material={materials['Material.065']} />
        <mesh geometry={geom2} material={materials['Material.113']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoTriangulo2.glb')
