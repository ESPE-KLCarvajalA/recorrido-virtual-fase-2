import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plano002: THREE.Mesh
    Plano002_1: THREE.Mesh
  }
  materials: {
    ['led techo']: THREE.MeshStandardMaterial
    ['caja led']: THREE.MeshStandardMaterial
  }
}

export function Luz_techo2() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo2.glb`) as GLTFResult;

  const distance = useCameraDistance([-110.505, 17.275, -12.332]);
  if (distance > 105) return null;

  return (
    <group dispose={null}>
      <group name="luces0001" position={[-111, 17.275, -12.332]} scale={[1.004, 1, 1]}>
        <mesh
          name="Plano002"
          castShadow
          receiveShadow
          geometry={nodes.Plano002.geometry}
          material={materials['led techo']}
        />
        <mesh
          name="Plano002_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano002_1.geometry}
          material={materials['caja led']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo2.glb`);
