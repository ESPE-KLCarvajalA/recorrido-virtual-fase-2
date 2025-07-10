import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Room027: THREE.Mesh
    Room027_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

// Extrae vértices y caras de una geometría no indexada
function getConvexPolyhedronArgs(geometry: THREE.BufferGeometry) {
  geometry.computeVertexNormals()
  geometry = geometry.toNonIndexed()

  const positions = geometry.attributes.position.array as Float32Array
  const vertices: THREE.Vector3[] = []

  for (let i = 0; i < positions.length; i += 3) {
    vertices.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
  }

  const faces: number[][] = []
  for (let i = 0; i < vertices.length; i += 3) {
    faces.push([i, i + 1, i + 2])
  }

  return [vertices, faces] as [THREE.Vector3[], number[][]]
}

export function ParedesBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/bar/paredesBar.glb') as unknown as GLTFResult

  const position: [number, number, number] = [-854.077, -9.046, -291.626]
  const rotation: [number, number, number] = [0, -Math.PI / 2, 0]
  const scale: [number, number, number] = [1.051, 31.523, 2.999]

  const [ref] = useConvexPolyhedron(() => ({
    args: getConvexPolyhedronArgs(nodes.Room027.geometry),
    position,
    rotation,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group name="Room084" position={position} rotation={rotation} scale={scale} ref={ref}>
        <mesh
          name="Room027"
          geometry={nodes.Room027.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room027_1"
          geometry={nodes.Room027_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/bar/paredesBar.glb')
