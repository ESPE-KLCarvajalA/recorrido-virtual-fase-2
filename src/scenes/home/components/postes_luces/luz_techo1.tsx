import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plano114: THREE.Mesh
    Plano114_1: THREE.Mesh
  }
  materials: {
    ['led techo']: THREE.MeshStandardMaterial
    ['caja led']: THREE.MeshStandardMaterial
  }
}

export function Luz_techo1() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo1.glb`) as GLTFResult;

  const distance = useCameraDistance([62.852, 17.275, -14.179]);
  if (distance > 180) return null;

  return (
    <group dispose={null}>
      <group name="luces0" position={[62.852, 17.275, -14.179]} scale={[1.004, 1, 1]}>
        <mesh
          name="Plano114"
          castShadow
          receiveShadow
          geometry={nodes.Plano114.geometry}
          material={materials['led techo']}
        />
        <mesh
          name="Plano114_1"
          castShadow
          receiveShadow
          geometry={nodes.Plano114_1.geometry}
          material={materials['caja led']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/luces_techo1.glb`);
