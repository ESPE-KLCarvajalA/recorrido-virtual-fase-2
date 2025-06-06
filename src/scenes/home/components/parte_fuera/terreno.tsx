import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plano023: THREE.Mesh
    Plano023_1: THREE.Mesh
    Plano023_2: THREE.Mesh
  }
  materials: {
    ['terreno.001']: THREE.MeshStandardMaterial
    ['terreno2.001']: THREE.MeshStandardMaterial
    ['terreno3.001']: THREE.MeshStandardMaterial
  }
}

export function Terreno(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/terreno.glb`) as GLTFResult

  // Cambiar solo el roughness de los materiales 
  materials['terreno.001'].roughness = 0.8
  materials['terreno2.001'].roughness = 0.8
  materials['terreno3.001'].roughness = 0.8
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

  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.Plano023.geometry);
  const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.Plano023_1.geometry);
  const { vertices: vertices3, faces: faces3 } = mapGeometryToCannon(nodes.Plano023_2.geometry);

  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices1, faces1],
    position: [123.966, -8.423, -231.8], // Ajustar según tu modelo
  }))

  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices2, faces2],
    position: [123.966, -8.423, -231.8], // Ajustar según tu modelo
  }))

  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices3, faces3],
    position: [123.966, -8.423, -231.8], // Ajustar según tu modelo
  }))

  return (
    <group {...props} dispose={null}>
      <group name="Plano003" position={[123.966, -8.423, -231.8]}>
        <mesh
          name="Plano023"
          geometry={nodes.Plano023.geometry}
          material={materials['terreno.001']}
        />
        <mesh
          name="Plano023_1"
          geometry={nodes.Plano023_1.geometry}
          material={materials['terreno2.001']}
        />
        <mesh
          name="Plano023_2"
          geometry={nodes.Plano023_2.geometry}
          material={materials['terreno3.001']}
        />
      </group>
    </group>
  )
}



useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/terreno.glb`)