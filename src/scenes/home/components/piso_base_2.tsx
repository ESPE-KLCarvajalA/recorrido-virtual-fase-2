import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plano008: THREE.Mesh
    Plano008_1: THREE.Mesh
    Plano008_2: THREE.Mesh
  }
  materials: {
    ['piso base']: THREE.MeshStandardMaterial
    barras: THREE.MeshStandardMaterial
    acera: THREE.MeshStandardMaterial
  }
}
export function Piso_base_2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/espe_base2.glb`) as GLTFResult

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

  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.Plano008.geometry);
  const { vertices: vertices3, faces: faces3 } = mapGeometryToCannon(nodes.Plano008_2.geometry);
  
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices1, faces1],
    position: [-39.481, -18.593, -296.244],
  }));
  
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices3, faces3],
    position: [-39.481, -18.593, -296.244],
  }));
  
  materials.acera.roughness = 0.8;

  return (
    <group {...props} dispose={null}>
      <group name="piso_base_abajo" position={[-39.481, -18.593, -296.244]}>
        <mesh
          name="Plano008"
          geometry={nodes.Plano008.geometry}
          material={materials['piso base']}
        />
        <mesh
          name="Plano008_1"
          geometry={nodes.Plano008_1.geometry}
          material={materials.barras}
        />
        <mesh
          name="Plano008_2"
          geometry={nodes.Plano008_2.geometry}
          material={materials.acera}
        />
      </group>
    </group>
  )
}
useGLTF.preload(`${import.meta.env.BASE_URL}models/espe_base2.glb`)
