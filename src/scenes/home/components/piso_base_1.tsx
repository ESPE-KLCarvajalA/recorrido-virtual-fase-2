import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plano041: THREE.Mesh
    Plano041_1: THREE.Mesh
    Plano041_2: THREE.Mesh
    Plano041_3: THREE.Mesh
  }
  materials: {
    ['piso base']: THREE.MeshStandardMaterial
    barras: THREE.MeshStandardMaterial
    ['pared blanca']: THREE.MeshStandardMaterial
    ['madera paredes']: THREE.MeshStandardMaterial
  }
}

export function Piso_base_1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/espe_base1.glb`) as GLTFResult

  // Mapear vértices y caras para Cannon.js
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
  

  const { vertices, faces } = mapGeometryToCannon(nodes.Plano041.geometry)

  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices, faces],
    position: [30.397, 0.752, -263.781], // Ajustar según tu modelo
  }))

  materials['piso base'].roughness = 0.8;

  return (
    <group {...props} dispose={null}>
      <group name="piso_base" position={[30.397, 0.752, -263.781]}>
        <mesh
          name="Plano041"
          geometry={nodes.Plano041.geometry}
          material={materials['piso base']}
        />
        <mesh
          name="Plano041_1"
          geometry={nodes.Plano041_1.geometry}
          material={materials.barras}
        />
        <mesh
          name="Plano041_2"
          geometry={nodes.Plano041_2.geometry}
          material={materials['pared blanca']}
        />
        <mesh
          name="Plano041_3"
          geometry={nodes.Plano041_3.geometry}
          material={materials['madera paredes']}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/espe_base1.glb`)
