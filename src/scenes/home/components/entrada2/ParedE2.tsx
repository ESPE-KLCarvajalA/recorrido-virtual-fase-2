import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Cube040: THREE.Mesh
    Cube040_1: THREE.Mesh
    Cube040_2: THREE.Mesh
  }
  materials: {
    ['Material.068']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

// Utilidad para extraer vértices únicos y caras
function getConvexPolyhedronArgs(geometry: THREE.BufferGeometry) {
  geometry.computeVertexNormals()
  geometry = geometry.toNonIndexed()

  const positions = geometry.attributes.position.array as Float32Array
  const vertices: THREE.Vector3[] = []

  for (let i = 0; i < positions.length; i += 3) {
    vertices.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
  }

  // Agrupar cada 3 vértices como una cara triangular
  const faces: number[][] = []
  for (let i = 0; i < vertices.length; i += 3) {
    faces.push([i, i + 1, i + 2])
  }

  return [vertices, faces] as [THREE.Vector3[], number[][]]
}

export function ParedE2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/entrada2/paredE2.glb') as unknown as GLTFResult

  const geometry = nodes.Cube040.geometry
  const position: [number, number, number] = [-1.756, 30, 40.526]

  const [ref] = useConvexPolyhedron(() => ({
    args: getConvexPolyhedronArgs(geometry),
    type: 'Static',
    position,
  }))

  return (
    <group {...props} dispose={null}>
      <group name="arco4" position={position} ref={ref}>
        <mesh
          name="Cube040"
          geometry={nodes.Cube040.geometry}
          material={materials['Material.068']}
        />
        <mesh
          name="Cube040_1"
          geometry={nodes.Cube040_1.geometry}
          material={materials['Material.047']}
        />
        <mesh
          name="Cube040_2"
          geometry={nodes.Cube040_2.geometry}
          material={materials['Material.066']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/entrada2/paredE2.glb')
