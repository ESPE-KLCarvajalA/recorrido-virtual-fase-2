import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    escalon001: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
  }
}

export function Escaleras1_2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_1_2.glb`) as GLTFResult
  
  const distance = useCameraDistance([26.081, -6.108, -269.709]);
  
  if (distance > 235) return null;

  return (
    <group {...props} dispose={null}>
    <mesh
      name="escalon001"
      castShadow
      receiveShadow
      geometry={nodes.escalon001.geometry}
      material={materials.barras}
      position={[26.081, -6.108, -269.709]}
    />
  </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/escaleras/escaleras_pasillo_1_2.glb`)
