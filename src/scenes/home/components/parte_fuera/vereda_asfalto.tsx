import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plano001: THREE.Mesh
    Plano001_1: THREE.Mesh
    Plano001_2: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    terreno: THREE.MeshStandardMaterial
  }
}

export function Vereda_asfalto(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/vereda_asfalto.glb`) as GLTFResult

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
  

    const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.Plano001.geometry);
    const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.Plano001_1.geometry);
    const { vertices: vertices3, faces: faces3 } = mapGeometryToCannon(nodes.Plano001_2.geometry);
  
    // Usar useConvexPolyhedron para agregar el collider
    useConvexPolyhedron(() => ({
      mass: 0, // Hacer estático
      args: [vertices1, faces1],
      position: [208.235, -2.817, 83.5], // Ajustar según tu modelo
    }))

    useConvexPolyhedron(() => ({
      mass: 0, // Hacer estático
      args: [vertices2, faces2],
      position: [208.235, -2.817, 83.5], // Ajustar según tu modelo
    }))

    useConvexPolyhedron(() => ({
      mass: 0, // Hacer estático
      args: [vertices3, faces3],
      position: [208.235, -2.817, 83.5], // Ajustar según tu modelo
    }))

    return (
      <group {...props} dispose={null}>
      <group name="base_cisterna" position={[208.235, -2.817, 83.5]}>
        <mesh
          name="Plano001"
          castShadow
          receiveShadow
          geometry={nodes.Plano001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          name="Plano001_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano001_1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          name="Plano001_2"
          castShadow
          receiveShadow
          geometry={nodes.Plano001_2.geometry}
          material={materials.terreno}
        />
      </group>
    </group>
    )
  }

useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/vereda_asfalto.glb`)