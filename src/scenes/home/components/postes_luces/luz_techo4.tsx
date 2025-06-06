import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plano004: THREE.Mesh
    Plano004_1: THREE.Mesh
  }
  materials: {
    ['led techo']: THREE.MeshStandardMaterial
    ['caja led']: THREE.MeshStandardMaterial
  }
}

export function Luz_techo4() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo4.glb`) as GLTFResult;

  const distance = useCameraDistance([33.232, 17.464, -458.938]);
  if (distance > 215) return null;

  return (
    <group dispose={null}>
      <group name="luces0002" position={[33.232, 17.464, -458.938]} scale={[1.004, 1, 1]}>
        <mesh
          name="Plano004"
          castShadow
          receiveShadow
          geometry={nodes.Plano004.geometry}
          material={materials['led techo']}
        />
        <mesh
          name="Plano004_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano004_1.geometry}
          material={materials['caja led']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo4.glb`);
