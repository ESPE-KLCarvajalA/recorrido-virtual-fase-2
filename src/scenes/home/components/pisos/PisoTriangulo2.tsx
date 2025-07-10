import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { Triplet, useConvexPolyhedron } from '@react-three/cannon'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'

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

export function PisoTriangulo2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoTriangulo2.glb') as unknown as GLTFResult

  // Extraer vértices de ambas geometrías
  const positions1 = nodes.Cube046.geometry.attributes.position.array as Float32Array
  const positions2 = nodes.Cube046_1.geometry.attributes.position.array as Float32Array

  // Combinar todos los puntos en un array de THREE.Vector3
  const points: THREE.Vector3[] = []

  for (let i = 0; i < positions1.length; i += 3) {
    points.push(new THREE.Vector3(positions1[i], positions1[i + 1], positions1[i + 2]))
  }
  for (let i = 0; i < positions2.length; i += 3) {
    points.push(new THREE.Vector3(positions2[i], positions2[i + 1], positions2[i + 2]))
  }

  // Crear Convex Hull
  const convexGeometry = new ConvexGeometry(points)

  // Extraer vértices y caras (índices) del convex hull
  const vertices: (THREE.Vector3 | Triplet)[] = []
  const convexPositions = convexGeometry.attributes.position.array
  const convexIndex = convexGeometry.index
    ? convexGeometry.index.array
    : (() => {
      const count = convexGeometry.attributes.position.count
      const arr = new Uint32Array(count)
      for (let i = 0; i < count; i++) arr[i] = i
      return arr
    })()

  const faces: number[][] = []

  for (let i = 0; i < convexPositions.length; i += 3) {
    vertices.push(new THREE.Vector3(convexPositions[i], convexPositions[i + 1], convexPositions[i + 2]))
  }

  for (let i = 0; i < convexIndex.length; i += 3) {
    faces.push([convexIndex[i], convexIndex[i + 1], convexIndex[i + 2]])
  }

  const groupPosition: [number, number, number] = [-8.408, -2.195, -553.492]

  const [ref] = useConvexPolyhedron(() => ({
    args: [vertices, faces],
    position: groupPosition,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group name="triangulo001" position={groupPosition} ref={ref}>
        <mesh geometry={nodes.Cube046.geometry} material={materials['Material.065']} />
        <mesh geometry={nodes.Cube046_1.geometry} material={materials['Material.113']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoTriangulo2.glb')
