import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cubo134: THREE.Mesh
    Cubo134_1: THREE.Mesh
    Cubo134_2: THREE.Mesh
  }
  materials: {
    ['piso base']: THREE.MeshStandardMaterial
    ['pared blanca']: THREE.MeshStandardMaterial
    acera: THREE.MeshStandardMaterial
  }
}


export function Pasillo_entrada_media(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/pasillo_entrada_media.glb`) as GLTFResult

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

  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.Cubo134.geometry);
  const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.Cubo134_1.geometry);
  const { vertices: vertices3, faces: faces3 } = mapGeometryToCannon(nodes.Cubo134_2.geometry);
  
  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices1, faces1],
    position: [46.977, -9.07, -175.008],
  }));
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices2, faces2],
    position: [46.977, -9.07, -175.008],
  }));
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices3, faces3],
    position: [46.977, -9.07, -175.008],
  }));
  

  return (
    <group {...props} dispose={null}>
      <group
        name="pasillo_entrada_media"
        position={[46.977, -9.07, -175.008]}>
        <mesh
          name="Cubo134"
          castShadow
          receiveShadow
          geometry={nodes.Cubo134.geometry}
          material={materials['piso base']}
        />
        <mesh
          name="Cubo134_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo134_1.geometry}
          material={materials['pared blanca']}
        />
        <mesh
          name="Cubo134_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo134_2.geometry}
          material={materials.acera}
        />
      </group>
    </group>
  )
}
useGLTF.preload(`${import.meta.env.BASE_URL}models/pasillo_entrada_media.glb`)
