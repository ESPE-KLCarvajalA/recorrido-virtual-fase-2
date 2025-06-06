import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Cubo179: THREE.Mesh
    Cubo179_1: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
    ['piso base']: THREE.MeshStandardMaterial
  }
}

export function Escaleras3_2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_3_2.glb`) as GLTFResult
  const distance = useCameraDistance([-47.778, -5.566, -147.137]);

  if (distance > 195) return null;
  return (
    <group {...props} dispose={null}>
      <group name="escalon004" position={[-47.778, -5.566, -147.137]}>
        <mesh
          name="Cubo179"
          castShadow
          receiveShadow
          geometry={nodes.Cubo179.geometry}
          material={materials.barras}
        />
        <mesh
          name="Cubo179_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo179_1.geometry}
          material={materials['piso base']}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_3_2.glb`)
