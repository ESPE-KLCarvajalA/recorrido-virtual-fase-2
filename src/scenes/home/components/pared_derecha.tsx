import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import { useRef } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    pared_derecha: THREE.Mesh
  }
  materials: {
    ['pared blanca']: THREE.MeshStandardMaterial
  }
}

export function Pared_derecha(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/pared_derecha.glb`) as GLTFResult

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

  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.pared_derecha.geometry);
  
  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices1, faces1],
    position: [217.359, 10.264, -9.227], // Valor según el modelo
  }));

  // Referencia para el InstancedMesh
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const instanceCount = 1;

  return (
    <group {...props} position={[217.359, 10.264, -9.227]} dispose={null}>
        <instancedMesh ref={instancedMeshRef} args={[null, null, instanceCount]}>
          <bufferGeometry attach="geometry" {...nodes.pared_derecha.geometry} />
          <meshStandardMaterial attach="material" {...materials['pared blanca']} />
        </instancedMesh>
    </group>
  );

}
useGLTF.preload(`${import.meta.env.BASE_URL}models/pared_derecha.glb`)
