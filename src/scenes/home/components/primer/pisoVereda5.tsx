import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane100: THREE.Mesh
    Plane100_1: THREE.Mesh
    Plane085: THREE.Mesh
    Plane085_1: THREE.Mesh
    Plane089: THREE.Mesh
    Plane089_1: THREE.Mesh
  }
  materials: {
    ['Material.128']: THREE.MeshStandardMaterial
    ['Material.129']: THREE.MeshStandardMaterial
    ['Material.130']: THREE.MeshStandardMaterial
    ['Material.131']: THREE.MeshStandardMaterial
    ['Material.152']: THREE.MeshStandardMaterial
    ['Material.153']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda5(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda5Modificado.glb') as unknown as GLTFResult

  // Función para convertir geometría de Three.js a formato Cannon.js
  const mapGeometryToCannon = (geometry: THREE.BufferGeometry) => {
    const vertices: THREE.Vector3[] = []
    const faces = []

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

  // Colisiones para grupo curb003 (Plane100 y Plane100_1)
  const { vertices: vertices100, faces: faces100 } = mapGeometryToCannon(nodes.Plane100.geometry)
  const { vertices: vertices100_1, faces: faces100_1 } = mapGeometryToCannon(nodes.Plane100_1.geometry)

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices100, faces100],
    position: [-575.581, -10.175, 60.901],
    rotation: [-Math.PI, 0.664, 0],
    // Nota: Cannon.js no maneja escalas negativas bien, usaremos valores absolutos
    scale: [13.438, 11.258, 7.68],
  }))

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices100_1, faces100_1],
    position: [-575.581, -10.175, 60.901],
    rotation: [-Math.PI, 0.664, 0],
    scale: [13.438, 11.258, 7.68],
  }))

  // Colisiones para grupo curb007 (Plane085 y Plane085_1)
  const { vertices: vertices085, faces: faces085 } = mapGeometryToCannon(nodes.Plane085.geometry)
  const { vertices: vertices085_1, faces: faces085_1 } = mapGeometryToCannon(nodes.Plane085_1.geometry)

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices085, faces085],
    position: [-732.487, -10.693, 145.569],
    rotation: [-Math.PI, 0.664, 0],
    scale: [13.438, 11.258, 7.68],
  }))

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices085_1, faces085_1],
    position: [-732.487, -10.693, 145.569],
    rotation: [-Math.PI, 0.664, 0],
    scale: [13.438, 11.258, 7.68],
  }))

  // Colisiones para grupo road004 (Plane089 y Plane089_1)
  const { vertices: vertices089, faces: faces089 } = mapGeometryToCannon(nodes.Plane089.geometry)
  const { vertices: vertices089_1, faces: faces089_1 } = mapGeometryToCannon(nodes.Plane089_1.geometry)

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices089, faces089],
    position: [-406.536, -10.479, -85.252],
    scale: [17.387, 11.258, 10.745],
  }))

  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices089_1, faces089_1],
    position: [-406.536, -10.479, -85.252],
    scale: [17.387, 11.258, 10.745],
  }))

  return (
    <group {...props} dispose={null}>
      <group
        name="curb003"
        position={[-575.581, -10.175, 60.901]}
        rotation={[-Math.PI, 0.664, 0]}
        scale={[-13.438, -11.258, -7.68]}>
        <mesh
          name="Plane100"
          geometry={nodes.Plane100.geometry}
          material={materials['Material.128']}
        />
        <mesh
          name="Plane100_1"
          geometry={nodes.Plane100_1.geometry}
          material={materials['Material.129']}
        />
      </group>
      <group
        name="curb007"
        position={[-732.487, -10.693, 145.569]}
        rotation={[-Math.PI, 0.664, 0]}
        scale={[-13.438, -11.258, -7.68]}>
        <mesh
          name="Plane085"
          geometry={nodes.Plane085.geometry}
          material={materials['Material.130']}
        />
        <mesh
          name="Plane085_1"
          geometry={nodes.Plane085_1.geometry}
          material={materials['Material.131']}
        />
      </group>
      <group
        name="road004"
        position={[-406.536, -10.479, -85.252]}
        scale={[17.387, 11.258, 10.745]}>
        <mesh
          name="Plane089"
          geometry={nodes.Plane089.geometry}
          material={materials['Material.152']}
        />
        <mesh
          name="Plane089_1"
          geometry={nodes.Plane089_1.geometry}
          material={materials['Material.153']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda5Modificado.glb')