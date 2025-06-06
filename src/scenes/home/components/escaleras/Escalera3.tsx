import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Cubo072: THREE.Mesh
    Cubo072_1: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
    ['piso base']: THREE.MeshStandardMaterial
  }
}

export function Escaleras3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_3.glb`) as GLTFResult

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

  const { vertices: vertices, faces: faces } = mapGeometryToCannon(nodes.Cubo072.geometry);

  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices, faces],
    position: [-47.778, -7.808, -145.144], // Ajustar según tu modelo
  }))
  
  const distance = useCameraDistance([-47.778, -7.808, -145.144]);

  if (distance > 195) return null;
  return (
    <group {...props} dispose={null}>
      <group name="escalon006" position={[-47.778, -7.808, -145.144]}>
        <mesh
          name="Cubo072"
          castShadow
          receiveShadow
          geometry={nodes.Cubo072.geometry}
          material={materials.barras}
        />
        <mesh
          name="Cubo072_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo072_1.geometry}
          material={materials['piso base']}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_3.glb`)
