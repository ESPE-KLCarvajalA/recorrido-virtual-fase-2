import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Cubo176: THREE.Mesh
    Cubo176_1: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
    ['piso base']: THREE.MeshStandardMaterial
  }
}

export function Escaleras2_2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_2_2.glb`) as GLTFResult
  const distance = useCameraDistance([20.925, -5.525, -416.178]);

  if (distance > 300) return null;
  return (
    <group {...props} dispose={null}>
      <group name="escalon003" position={[20.925, -5.525, -416.178]}>
        <mesh
          name="Cubo176"
          castShadow
          receiveShadow
          geometry={nodes.Cubo176.geometry}
          material={materials.barras}
        />
        <mesh
          name="Cubo176_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo176_1.geometry}
          material={materials['piso base']}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_2_2.glb`)
