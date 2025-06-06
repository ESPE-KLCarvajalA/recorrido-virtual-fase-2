import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    postes: THREE.Mesh
    postes001: THREE.Mesh
    postes002: THREE.Mesh
    postes003: THREE.Mesh
    postes004: THREE.Mesh
    postes005: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
  }
}

export function Postes(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/postes.glb`) as GLTFResult

  materials.barras.roughness = 0.9

  return (
    <group {...props} dispose={null}>
      <mesh
        name="postes"
        castShadow
        receiveShadow
        geometry={nodes.postes.geometry}
        material={materials.barras}
        scale={[1,1.5,1]}
        position={[183.953, 14.055, 74.74]}
      />
      <mesh
        name="postes001"
        castShadow
        receiveShadow
        geometry={nodes.postes001.geometry}
        material={materials.barras}
        position={[351.263, 12, 48.825]}
        rotation={[0, 0.222, 0]}
        scale={[1,1.5,1]}
      />
      <mesh
        name="postes002"
        castShadow
        receiveShadow
        geometry={nodes.postes002.geometry}
        material={materials.barras}
        position={[-70.649, 14.055, 74.74]}
        scale={[1,1.5,1]}
      />
      <mesh
        name="postes003"
        castShadow
        receiveShadow
        geometry={nodes.postes003.geometry}
        material={materials.barras}
        position={[-4.028, 14.055, 74.74]}
        scale={[1,1.5,1]}
      />
      <mesh
        name="postes004"
        castShadow
        receiveShadow
        geometry={nodes.postes004.geometry}
        material={materials.barras}
        position={[85.673, 14.055, 74.74]}
        scale={[1,1.5,1]}
      />
      <mesh
        name="postes005"
        castShadow
        receiveShadow
        geometry={nodes.postes005.geometry}
        material={materials.barras}
        position={[263.754, 13.512, 68.533]}
        rotation={[0, 0.222, 0]}
        scale={[1,1.5,1]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/postes.glb`)