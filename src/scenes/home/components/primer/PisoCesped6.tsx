import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane014: THREE.Mesh
    Plane015: THREE.Mesh
    Plane011: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

// Convierte BufferGeometry a los datos para useConvexPolyhedron
function geometryToConvexPolyhedron(geometry: THREE.BufferGeometry) {
  const pos = geometry.attributes.position.array as Float32Array
  const vertices: THREE.Vector3[] = []
  for (let i = 0; i < pos.length; i += 3) {
    vertices.push(new THREE.Vector3(pos[i], pos[i + 1], pos[i + 2]))
  }

  // Obtener las caras del índice (faces) agrupándolos de 3 en 3 (triángulos)
  const index = geometry.index ? geometry.index.array : undefined
  const faces: number[][] = []
  if (index) {
    for (let i = 0; i < index.length; i += 3) {
      faces.push([index[i], index[i + 1], index[i + 2]])
    }
  } else {
    // Si no hay índice, asumir vertices secuenciales triángulos
    for (let i = 0; i < vertices.length; i += 3) {
      faces.push([i, i + 1, i + 2])
    }
  }

  return { vertices, faces }
}

export function PisoCesped6(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped6.glb') as unknown as GLTFResult

  // Configuración de cada mesh con escala, posición y rotación
  const setups = [
    {
      node: nodes.Plane014,
      position: [375.291, -1, -720.258] as [number, number, number],
      rotation: [0, 0.747, 0] as [number, number, number],
      scale: [188.801, 20.77, 111.115] as [number, number, number],
    },
    {
      node: nodes.Plane015,
      position: [-221.88, -1, -968.167] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [131.118, 20.77, 88.088] as [number, number, number],
    },
    {
      node: nodes.Plane011,
      position: [-695.148, -4.216, 63.023] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number],
      scale: [113.115, 38.087, 43.158] as [number, number, number],
    },
  ]

  return (
    <group {...props} dispose={null}>
      {setups.map(({ node, position, rotation, scale }, i) => {
        // Clonar y escalar la geometría para la física
        const geo = node.geometry.clone()
        geo.scale(...scale)

        // Obtener vertices y caras para el convex polyhedron
        const { vertices, faces } = geometryToConvexPolyhedron(geo)

        const [ref] = useConvexPolyhedron(() => ({
          args: [vertices, faces],
          position,
          rotation,
          type: 'Static',
        }))

        return (
          <mesh
            key={i}
            ref={ref}
            geometry={node.geometry}
            material={materials['Material.118']}
            position={position}
            rotation={rotation}
            scale={scale}
            castShadow
            receiveShadow
          />
        )
      })}
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped6.glb')
