import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plano006: THREE.Mesh
    Plano006_1: THREE.Mesh
  }
  materials: {
    ['led techo']: THREE.MeshStandardMaterial
    ['caja led']: THREE.MeshStandardMaterial
  }
}

export function Luz_techo6() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo6.glb`) as GLTFResult;

  const distance = useCameraDistance([18.443, -2.104, -402.873]);
  if (distance > 205) return null;

  return (
    <group dispose={null}>
      <group name="luces0003" position={[18.443, -2.104, -402.873]} scale={[1.004, 1, 1]}>
        <mesh
          name="Plano006"
          castShadow
          receiveShadow
          geometry={nodes.Plano006.geometry}
          material={materials['led techo']}
        />
        <mesh
          name="Plano006_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano006_1.geometry}
          material={materials['caja led']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo6.glb`);
