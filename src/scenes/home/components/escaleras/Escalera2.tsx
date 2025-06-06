import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Cubo105: THREE.Mesh
    Cubo105_1: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
    ['piso base']: THREE.MeshStandardMaterial
  }
}

export function Escaleras2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_2.glb`) as GLTFResult

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

  const { vertices: vertices, faces: faces } = mapGeometryToCannon(nodes.Cubo105_1.geometry);

  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices, faces],
    position: [21.226, -7.792, -417.263],
  }))

  const distance = useCameraDistance([21.226, -7.792, -417.263]);

  if (distance > 200) return null;

  return (
    <group {...props} dispose={null}>
      <group name="escalon005" position={[21.226, -7.792, -417.263]}>
        <mesh
          name="Cubo105"
          castShadow
          receiveShadow
          geometry={nodes.Cubo105.geometry}
          material={materials.barras}
        />
        <mesh
          name="Cubo105_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo105_1.geometry}
          material={materials['piso base']}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_2.glb`)
