import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    entrada: THREE.Mesh
    pasillos_arriba_2: THREE.Mesh
    pasillos_atras: THREE.Mesh
    pasillos_arriba_1: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
  }
}

export function Barras(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/barras.glb`) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        name="entrada"
        castShadow
        receiveShadow
        geometry={nodes.entrada.geometry}
        material={materials.barras}
        position={[2.14, 10.278, 32.758]}
        scale={[5.458, 5.558, 0.773]}
      />
      <mesh
        name="pasillos_arriba_2"
        castShadow
        receiveShadow
        geometry={nodes.pasillos_arriba_2.geometry}
        material={materials.barras}
        position={[-51.605, 10.307, -254.717]}
        rotation={[0, 1.327, 0]}
        scale={[5.458, 5.558, 0.773]}
      />
      <mesh
        name="pasillos_atras"
        castShadow
        receiveShadow
        geometry={nodes.pasillos_atras.geometry}
        material={materials.barras}
        position={[72.099, 10.285, -70.155]}
      />
      <mesh
        name="pasillos_arriba_1"
        castShadow
        receiveShadow
        geometry={nodes.pasillos_arriba_1.geometry}
        material={materials.barras}
        position={[72.325, 10.285, -70.155]}
        rotation={[0, -0.003, 0]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/barras.glb`)
