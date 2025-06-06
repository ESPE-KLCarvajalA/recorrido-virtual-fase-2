import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    piso_base_abajo001: THREE.Mesh
  }
  materials: {
    ['pared blanca']: THREE.MeshStandardMaterial
  }
}
export function Piso_base_pared(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/espe_base_pared.glb`) as GLTFResult

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

  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.piso_base_abajo001.geometry);
  
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices1, faces1],
    position: [-83.748, -9.947, -45.97],
  }));
  

  return (
    <group {...props} dispose={null}>
      <group name="piso_base_abajo001" position={[-83.748, -9.947, -45.97]}>
        <mesh
          name="Plano008"
          castShadow
          receiveShadow
          geometry={nodes.piso_base_abajo001.geometry}
          material={materials['pared blanca']}
        />
      </group>
    </group>
  )
}
useGLTF.preload(`${import.meta.env.BASE_URL}models/espe_base_pared.glb`)
