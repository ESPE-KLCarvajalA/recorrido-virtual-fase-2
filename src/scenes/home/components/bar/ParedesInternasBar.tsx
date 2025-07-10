import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Room067: THREE.Mesh
    Room067_1: THREE.Mesh
    Room073: THREE.Mesh
    Room073_1: THREE.Mesh
    Room088: THREE.Mesh
    Room088_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

// Convierte geometría a vértices y caras
function getConvexPolyhedronArgs(geometry: THREE.BufferGeometry) {
  geometry.computeVertexNormals()
  geometry = geometry.toNonIndexed()

  const pos = geometry.attributes.position.array as Float32Array
  const vertices: THREE.Vector3[] = []

  for (let i = 0; i < pos.length; i += 3) {
    vertices.push(new THREE.Vector3(pos[i], pos[i + 1], pos[i + 2]))
  }

  const faces: number[][] = []
  for (let i = 0; i < vertices.length; i += 3) {
    faces.push([i, i + 1, i + 2])
  }

  return [vertices, faces] as [THREE.Vector3[], number[][]]
}

export function ParedesInternasBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/bar/paredesInternasBar.glb') as unknown as GLTFResult

  // Colisión para Room085
  const [ref1] = useConvexPolyhedron(() => ({
    args: getConvexPolyhedronArgs(nodes.Room067.geometry),
    position: [-658.334, -8.962, -170.751],
    scale: [14.781, 59.38, 14.781],
    type: 'Static',
  }))

  // Colisión para Room086
  const [ref2] = useConvexPolyhedron(() => ({
    args: getConvexPolyhedronArgs(nodes.Room073.geometry),
    position: [-539.055, -8.952, -150.963],
    rotation: [0, -1.571, 0],
    scale: [14.781, 59.38, 14.781],
    type: 'Static',
  }))

  // Colisión para Room087
  const [ref3] = useConvexPolyhedron(() => ({
    args: getConvexPolyhedronArgs(nodes.Room088.geometry),
    position: [-790.393, -8.862, -90.465],
    rotation: [0, -1.571, 0],
    scale: [14.781, 59.38, 14.781],
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group
        name="Room085"
        position={[-658.334, -8.962, -170.751]}
        scale={[14.781, 59.38, 14.781]}
        ref={ref1}>
        <mesh geometry={nodes.Room067.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room067_1.geometry} material={materials['Material.097']} />
      </group>

      <group
        name="Room086"
        position={[-539.055, -8.952, -150.963]}
        rotation={[0, -1.571, 0]}
        scale={[14.781, 59.38, 14.781]}
        ref={ref2}>
        <mesh geometry={nodes.Room073.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room073_1.geometry} material={materials['Material.097']} />
      </group>

      <group
        name="Room087"
        position={[-790.393, -8.862, -90.465]}
        rotation={[0, -1.571, 0]}
        scale={[14.781, 59.38, 14.781]}
        ref={ref3}>
        <mesh geometry={nodes.Room088.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room088_1.geometry} material={materials['Material.097']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/bar/paredesInternasBar.glb')
