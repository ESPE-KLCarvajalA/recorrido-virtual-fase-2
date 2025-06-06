import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plano045: THREE.Mesh
    Plano045_1: THREE.Mesh
  }
  materials: {
    ['led techo']: THREE.MeshStandardMaterial
    ['caja led']: THREE.MeshStandardMaterial
  }
}

export function Luz_techo3() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo3.glb`) as GLTFResult;

  const distance = useCameraDistance([-23.201, 17.275, -238.706]);
  if (distance > 215) return null;

  return (
    <group dispose={null}>
      <group name="luces0018" position={[-23.201, 17.275, -238.706]} scale={[1.004, 1, 1]}>
        <mesh
          name="Plano045"
          castShadow
          receiveShadow
          geometry={nodes.Plano045.geometry}
          material={materials['led techo']}
        />
        <mesh
          name="Plano045_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano045_1.geometry}
          material={materials['caja led']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo3.glb`);
