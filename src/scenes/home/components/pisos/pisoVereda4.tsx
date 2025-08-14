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
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda4.glb') as unknown as GLTFResult

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

  // Colisiones para los dos meshes del modelo
  const { vertices: vertices098, faces: faces098 } = mapGeometryToCannon(nodes.Plane098.geometry)
  const { vertices: vertices098_1, faces: faces098_1 } = mapGeometryToCannon(nodes.Plane098_1.geometry)

  // Crear colisión para Plane098
  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices098, faces098],
    position: [319.134, 0.459, -734.451],
    rotation: [0, Math.PI / 3, -Math.PI],
    // Cannon.js no maneja bien escalas negativas, usamos valores absolutos
    scale: [13.438, 11.258, 7.68],
  }))

  // Crear colisión para Plane098_1
  useConvexPolyhedron(() => ({
    mass: 0,
    args: [vertices098_1, faces098_1],
    position: [319.134, 0.459, -734.451],
    rotation: [0, Math.PI / 3, -Math.PI],
    scale: [13.438, 11.258, 7.68],
  }))

  return (
    <group {...props} dispose={null}>
      <group
        name="curb009"
        position={[319.134, 0.459, -734.451]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[-13.438, -11.258, -7.68]}
      >
        <mesh
          name="Plane098"
          geometry={nodes.Plane098.geometry}
          material={materials['Material.114']}
        />
        <mesh
          name="Plane098_1"
          geometry={nodes.Plane098_1.geometry}
          material={materials['Material.116']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda4.glb')