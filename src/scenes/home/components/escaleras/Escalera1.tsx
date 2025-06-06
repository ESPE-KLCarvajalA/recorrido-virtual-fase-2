import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
    nodes: {
      Cubo189: THREE.Mesh
      Cubo189_1: THREE.Mesh
    }
    materials: {
      acera: THREE.MeshStandardMaterial
      escaleras: THREE.MeshStandardMaterial
    }
  }

export function Escaleras1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_1.glb`) as GLTFResult

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
      
      const { vertices: vertices, faces: faces } = mapGeometryToCannon(nodes.Cubo189_1.geometry);
      const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.Cubo189.geometry);
    
      // Usar useConvexPolyhedron para agregar el collider
      useConvexPolyhedron(() => ({
        mass: 0, // Hacer estático
        args: [vertices, faces],
        position: [30.181, -9.002, -274.785], // Ajustar según tu modelo
      }))

      useConvexPolyhedron(() => ({
        mass: 0, // Hacer estático
        args: [vertices2, faces2],
        position: [30.181, -9.002, -274.785], // Ajustar según tu modelo
      }))

      materials.escaleras.roughness = 0.8;

  return (
    <group {...props} dispose={null}>
      <group
        name="escalon002"
        position={[30.181, -9.002, -274.785]}>
        <mesh
          name="Cubo189"
          castShadow
          receiveShadow
          geometry={nodes.Cubo189.geometry}
          material={materials.acera}
        />
        <mesh
          name="Cubo189_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo189_1.geometry}
          material={materials.escaleras}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_1.glb`)
