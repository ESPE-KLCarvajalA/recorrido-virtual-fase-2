import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    planta_baja: THREE.Mesh
    Plano039: THREE.Mesh
    Plano039_1: THREE.Mesh
    subtechos: THREE.Mesh
  }
  materials: {
    ['04_-_Default']: THREE.MeshStandardMaterial
    ['techo.001']: THREE.MeshStandardMaterial
    barras: THREE.MeshStandardMaterial
    techo: THREE.MeshStandardMaterial
  }
}

export function Techo_subtecho_plantabaja(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/techo_subtecho_plantabaja.glb`) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="planta_baja"
        geometry={nodes.planta_baja.geometry}
        material={materials['04_-_Default']}
        position={[30.332, 20.831, -263.539]}
      />
      <group name="techo" position={[30.673, 19.94, -263.506]}>
        <mesh
          name="Plano039"
          geometry={nodes.Plano039.geometry}
          material={materials['techo.001']}
        />
        <mesh
          name="Plano039_1"
          geometry={nodes.Plano039_1.geometry}
          material={materials.barras}
        />
      </group>
      <mesh
        name="subtechos"
        geometry={nodes.subtechos.geometry}
        material={materials.techo}
        position={[37.327, 8.507, -267.53]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/techo_subtecho_plantabaja.glb`)