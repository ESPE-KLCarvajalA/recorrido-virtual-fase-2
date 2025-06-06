import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plano009: THREE.Mesh
    Plano009_1: THREE.Mesh
  }
  materials: {
    ['led techo']: THREE.MeshStandardMaterial
    ['caja led']: THREE.MeshStandardMaterial
  }
}

export function Luz_techo5() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo5.glb`) as GLTFResult;

  const distance = useCameraDistance([-44, -2.102, -157.927]);
  if (distance > 205) return null;

  return (
    <group dispose={null}>
      <group name="luces0004" position={[-44, -2.102, -157.927]} scale={[1.004, 1, 1]}>
        <mesh
          name="Plano009"
          castShadow
          receiveShadow
          geometry={nodes.Plano009.geometry}
          material={materials['led techo']}
        />
        <mesh
          name="Plano009_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano009_1.geometry}
          material={materials['caja led']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo5.glb`);
