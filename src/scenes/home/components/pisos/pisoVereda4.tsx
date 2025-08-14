import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane098: THREE.Mesh
    Plane098_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda4(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda4.glb'
  ) as unknown as GLTFResult

  const applyTransform = (
    geometry: THREE.BufferGeometry,
    position: [number, number, number],
    rotation: [number, number, number],
    scale: [number, number, number]
  ) => {
    const geom = geometry.clone()
    const matrix = new THREE.Matrix4()
    matrix.compose(
      new THREE.Vector3(...position),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),
      new THREE.Vector3(...scale)
    )
    geom.applyMatrix4(matrix)
    return geom
  }

  const mapGeometryToCannon = (geometry: THREE.BufferGeometry) => {
    const vertices: THREE.Vector3[] = []
    const faces: number[][] = []

    const positionArray = geometry.attributes.position.array as Float32Array
    const indexArray = geometry.index?.array as Uint16Array

    for (let i = 0; i < positionArray.length; i += 3) {
      vertices.push(
        new THREE.Vector3(positionArray[i], positionArray[i + 1], positionArray[i + 2])
      )
    }

    if (indexArray) {
      for (let i = 0; i < indexArray.length; i += 3) {
        faces.push([indexArray[i], indexArray[i + 1], indexArray[i + 2]])
      }
    }

    return { vertices, faces }
  }

  const pos: [number, number, number] = [319.134, 0.459, -734.451]
  const rot: [number, number, number] = [0, Math.PI / 3, -Math.PI]
  const scl: [number, number, number] = [-13.438, -11.258, -7.68]

  // Aplicamos transformaciones reales a la geometría para el collider
  const geom1 = applyTransform(nodes.Plane098.geometry, pos, rot, scl)
  const geom2 = applyTransform(nodes.Plane098_1.geometry, pos, rot, scl)

  const { vertices: v1, faces: f1 } = mapGeometryToCannon(geom1)
  const { vertices: v2, faces: f2 } = mapGeometryToCannon(geom2)

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [v1, f1],
  }))

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [v2, f2],
  }))

  return (
    <group {...props} dispose={null}>
      <group name="curb009" position={pos} rotation={rot} scale={scl}>
        <mesh geometry={nodes.Plane098.geometry} material={materials['Material.114']} />
        <mesh geometry={nodes.Plane098_1.geometry} material={materials['Material.116']} />
      </group>
    </group>
  )
}

useGLTF.preload(
  'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda4.glb'
)
