import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane016: THREE.Mesh
  }
  materials: {
    ['Concrete.001']: THREE.MeshStandardMaterial
  }
}

export function PisoCamino(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCamino.glb') as unknown as GLTFResult

  const geometry = nodes.Plane016.geometry

  // Extrae vértices únicos y caras
  const vertices: THREE.Vector3[] = []
  const faces: number[][] = []

  const posArray = geometry.attributes.position.array as Float32Array
  const idxArray = geometry.index?.array as Uint16Array | Uint32Array

  for (let i = 0; i < posArray.length; i += 3) {
    vertices.push(new THREE.Vector3(posArray[i], posArray[i + 1], posArray[i + 2]))
  }

  if (idxArray) {
    for (let i = 0; i < idxArray.length; i += 3) {
      faces.push([idxArray[i], idxArray[i + 1], idxArray[i + 2]])
    }
  } else {
    console.warn('El modelo debería tener índices para usar ConvexPolyhedron')
  }

  const position: [number, number, number] = [-721.556, -4, 665.493]

  useConvexPolyhedron(() => ({
    type: 'Static',
    args: [vertices, faces],
    position,
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane016"
        geometry={geometry}
        material={materials['Concrete.001']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCamino.glb')
