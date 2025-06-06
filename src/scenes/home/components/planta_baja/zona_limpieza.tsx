import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
    nodes: {
      Cubo124: THREE.Mesh
      Cubo124_1: THREE.Mesh
      Cubo124_2: THREE.Mesh
      Cubo124_3: THREE.Mesh
      Cubo124_4: THREE.Mesh
    }
    materials: {
      ['madera paredes']: THREE.MeshStandardMaterial
      ['madera clara 2']: THREE.MeshStandardMaterial
      ['madera clara 2.004']: THREE.MeshStandardMaterial
      ['barras cuartos']: THREE.MeshStandardMaterial
      ['pared blanca']: THREE.MeshStandardMaterial
    }
  }

export function Zona_limpieza(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/zona_limpieza.glb`) as GLTFResult

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

  const { vertices: vertices1, faces: faces1 } = mapGeometryToCannon(nodes.Cubo124.geometry);
  const { vertices: vertices2, faces: faces2 } = mapGeometryToCannon(nodes.Cubo124_3.geometry);
  const { vertices: vertices3, faces: faces3 } = mapGeometryToCannon(nodes.Cubo124_4.geometry);

  // Usar useConvexPolyhedron para agregar el collider
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices1, faces1],
    position: [-104.776, 10.264, -61.923], // Ajustar según tu modelo
  }));
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices2, faces2],
    position: [-104.776, 10.264, -61.923], // Ajustar según tu modelo
  }));
  useConvexPolyhedron(() => ({
    mass: 0, // Hacer estático
    args: [vertices3, faces3],
    position: [-104.776, 10.264, -61.923], // Ajustar según tu modelo
  }));
  
  const distance = useCameraDistance([-104.776, 10.264, -61.923]);
  if (distance > 300) return null;

  return (
    <group {...props} dispose={null}>
      <group
        name="zona_limpieza"
        position={[-104.776, 10.264, -61.923]}>
        <mesh
          name="Cubo124"
          castShadow
          receiveShadow
          geometry={nodes.Cubo124.geometry}
          material={materials['madera paredes']}
        />
        <mesh
          name="Cubo124_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo124_1.geometry}
          material={materials['madera clara 2']}
        />
        <mesh
          name="Cubo124_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo124_2.geometry}
          material={materials['madera clara 2.004']}
        />
        <mesh
          name="Cubo124_3"
          castShadow
          receiveShadow
          geometry={nodes.Cubo124_3.geometry}
          material={materials['barras cuartos']}
        />
        <mesh
          name="Cubo124_4"
          castShadow
          receiveShadow
          geometry={nodes.Cubo124_4.geometry}
          material={materials['pared blanca']}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/zona_limpieza.glb`)
