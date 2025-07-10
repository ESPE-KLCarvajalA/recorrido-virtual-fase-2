import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'

type GLTFResult = GLTF & {
  nodes: {
    piso_gris002: THREE.Mesh
  }
  materials: {
    ['Material.049']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda2.glb') as unknown as GLTFResult

  const geometry = nodes.piso_gris002.geometry

  // Extraer todos los puntos (Vector3) de la geometría
  const positions = geometry.attributes.position
  const points: THREE.Vector3[] = []
  for (let i = 0; i < positions.count; i++) {
    points.push(new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i)))
  }

  // Crear hull convexo
  const convexGeometry = new ConvexGeometry(points)

  // Extraer vértices para el collider
  const vertices: [number, number, number][] = []
  const posArray = convexGeometry.attributes.position.array
  for (let i = 0; i < posArray.length; i += 3) {
    vertices.push([posArray[i], posArray[i + 1], posArray[i + 2]])
  }

  // Extraer caras (índices) para el collider
  const faces: number[][] = []
  if (convexGeometry.index) {
    const indexArray = convexGeometry.index.array
    for (let i = 0; i < indexArray.length; i += 3) {
      faces.push([indexArray[i], indexArray[i + 1], indexArray[i + 2]])
    }
  } else {
    // fallback: triangulamos secuencialmente (raro que pase)
    for (let i = 0; i < posArray.length / 3; i += 3) {
      faces.push([i, i + 1, i + 2])
    }
  }

  const position: [number, number, number] = [-253.469, -7, 418.937]

  const [ref] = useConvexPolyhedron(() => ({
    args: [vertices, faces],
    type: 'Static',
    position,
  }))

  return (
    <group {...props} dispose={null}>
      {/* Collider invisible */}
      <group ref={ref} />

      {/* Modelo visible */}
      <mesh
        name="piso_gris002"
        geometry={geometry}
        material={materials['Material.049']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('models/pisos/pisoVereda2.glb')
