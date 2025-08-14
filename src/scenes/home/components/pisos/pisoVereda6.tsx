import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane101: THREE.Mesh
    Plane101_1: THREE.Mesh
  }
  materials: {
    ['Material.150']: THREE.MeshStandardMaterial
    ['Material.151']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda6(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda6.glb') as unknown as GLTFResult

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

  // Crear colisiones para el primer mesh (Plane101)
  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.Plane101.geometry)
  
  useConvexPolyhedron(() => ({
    mass: 0, // Masa 0 = cuerpo estático
    args: [vertices1, faces1],
    position: [-850.849, -3, -153.118], // Posición del grupo padre
  }))

  // Crear colisiones para el segundo mesh (Plane101_1)
  const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.Plane101_1.geometry)
  
  useConvexPolyhedron(() => ({
    mass: 0, // Masa 0 = cuerpo estático
    args: [vertices2, faces2],
    position: [-850.849, -3, -153.118], // Posición del grupo padre
  }))

  return (
    <group {...props} dispose={null}>
      <group name="road011" position={[-850.849, -3, -153.118]}>
        <mesh
          name="Plane101"
          geometry={nodes.Plane101.geometry}
          material={materials['Material.150']}
        />
        <mesh
          name="Plane101_1"
          geometry={nodes.Plane101_1.geometry}
          material={materials['Material.151']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda6.glb')