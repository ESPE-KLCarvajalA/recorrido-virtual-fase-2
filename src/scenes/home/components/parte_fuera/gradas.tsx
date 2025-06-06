import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    base_grada: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function Gradas(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/gradas.glb`) as GLTFResult

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
    
  
    const { vertices, faces } = mapGeometryToCannon(nodes.base_grada.geometry)
  
    useConvexPolyhedron(() => ({
      mass: 0,
      args: [vertices, faces],
      position: [220.698, -0.403, 33],
    }))

    materials.Material.roughness = 0.8

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.base_grada.geometry}
        material={materials.Material}
        position={[220.698, -0.403, 33]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/gradas.glb`)