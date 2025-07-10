import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { Triplet, useConvexPolyhedron } from '@react-three/cannon'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'

type GLTFResult = GLTF & {
  nodes: {
    Cube079: THREE.Mesh
    Cube079_1: THREE.Mesh
  }
  materials: {
    ['Material.105']: THREE.MeshStandardMaterial
    ['Material.101']: THREE.MeshStandardMaterial
  }
}

export function PisoTriangulo(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoTriangulo.glb') as unknown as GLTFResult

  // Extraer vértices de ambas geometrías (si quieres combinar para colisión)
  const positions1 = nodes.Cube079.geometry.attributes.position.array as Float32Array

  // Si quieres incluir Cube079_1, descomenta lo siguiente:
  // const positions2 = nodes.Cube079_1.geometry.attributes.position.array as Float32Array

  const points: THREE.Vector3[] = []

  for (let i = 0; i < positions1.length; i += 3) {
    points.push(new THREE.Vector3(positions1[i], positions1[i + 1], positions1[i + 2]))
  }

  // Si agregas Cube079_1 también:
  // for (let i = 0; i < positions2.length; i += 3) {
  //   points.push(new THREE.Vector3(positions2[i], positions2[i + 1], positions2[i + 2]))
  // }

  // Crear hull convexo
  const convexGeometry = new ConvexGeometry(points)

  // Extraer vértices y caras
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

  const groupPosition: [number, number, number] = [-156.001, -3, 292.708]

  const [ref] = useConvexPolyhedron(() => ({
    args: [vertices, faces],
    position: groupPosition,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group name="triangulo" position={groupPosition} ref={ref}>
        <mesh geometry={nodes.Cube079.geometry} material={materials['Material.105']} castShadow receiveShadow />
        <mesh geometry={nodes.Cube079_1.geometry} material={materials['Material.101']} castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoTriangulo.glb')
