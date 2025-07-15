import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    road009: THREE.Mesh
    road016: THREE.Mesh
  }
  materials: {
    ['Material.048']: THREE.MeshStandardMaterial
    ['Material.061']: THREE.MeshStandardMaterial
  }
}

// Función para mapear geometría a Cannon.js (vértices y caras)
const mapGeometryToCannon = (geometry: THREE.BufferGeometry) => {
  const vertices: THREE.Vector3[] = []
  const faces: number[][] = []

  const positionArray = geometry.attributes.position.array as Float32Array
  const indexArray = geometry.index?.array as Uint16Array

  for (let i = 0; i < positionArray.length; i += 3) {
    vertices.push(new THREE.Vector3(positionArray[i], positionArray[i + 1], positionArray[i + 2]))
  }

  if (indexArray) {
    for (let i = 0; i < indexArray.length; i += 3) {
      faces.push([indexArray[i], indexArray[i + 1], indexArray[i + 2]])
    }
  }

  return { vertices, faces }
}

export function PisoPrueba(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoprueba.glb') as unknown as GLTFResult

  // Extraer vértices y caras para cada parte del piso
  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.road009.geometry)
  const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.road016.geometry)

  // Colisión para road009
  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices1, faces1],
    position: [-65.404, -1.118, -457.82],
  }))

  // Colisión para road016
  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices2, faces2],
    position: [-100.871, -0.481, -796.902],
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        name="road009"
        geometry={nodes.road009.geometry}
        material={materials['Material.048']}
        position={[-65.404, -1.118, -457.82]}
      />
      <mesh
        name="road016"
        geometry={nodes.road016.geometry}
        material={materials['Material.061']}
        position={[-100.871, -0.481, -796.902]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoprueba.glb')
