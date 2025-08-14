import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane012: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped31.glb') as unknown as GLTFResult

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

  // Obtener vertices y faces de la geometría del mesh
  const { vertices, faces } = mapGeometryToCannon(nodes.Plane012.geometry)

  // Crear cuerpo de colisión estático
  useConvexPolyhedron(() => ({
    mass: 0, // Masa 0 = cuerpo estático
    args: [vertices, faces],
    position: [-758.157, -11.381, -181.578], // Misma posición que el mesh visual
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane012"
        geometry={nodes.Plane012.geometry}
        material={materials['Material.118']}
        position={[-758.157, -10, -181.578]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped31.glb')