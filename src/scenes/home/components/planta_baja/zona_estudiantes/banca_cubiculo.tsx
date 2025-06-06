import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Plano005: THREE.Mesh
    Plano005_1: THREE.Mesh
    Plano005_2: THREE.Mesh
  }
  materials: {
    ['madera paredes']: THREE.MeshStandardMaterial
    ['Metal_Rough.002']: THREE.MeshStandardMaterial
    ['madera clara 2']: THREE.MeshStandardMaterial
  }
}

export function Banca_Cubiculo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/zona_estudiantes/banca_cubiculo.glb`) as GLTFResult

  const distance = useCameraDistance([-145.959, 7.485, -9.366]);

  if (distance > 200) return null;

  return (
    <group {...props} dispose={null}>
    <group
      name="mesa_principal"
      position={[-145.959, 7.485, -9.366]}
      rotation={[Math.PI / 2, 0, 0.213]}>
      <mesh
        name="Plano005"
        geometry={nodes.Plano005.geometry}
        material={materials['madera paredes']}
      />
      <mesh
        name="Plano005_1"
        geometry={nodes.Plano005_1.geometry}
        material={materials['Metal_Rough.002']}
      />
      <mesh
        name="Plano005_2"
        geometry={nodes.Plano005_2.geometry}
        material={materials['madera clara 2']}
      />
    </group>
  </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/zona_estudiantes/banca_cubiculo.glb`)
