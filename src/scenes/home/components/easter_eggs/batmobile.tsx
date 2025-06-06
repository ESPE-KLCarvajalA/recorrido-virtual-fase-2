import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['final_02_-_Default_0']: THREE.Mesh
    ['final_02_-_Default_0001']: THREE.Mesh
    ['final_07_-_Default_0']: THREE.Mesh
  }
  materials: {
    ['02_-_Default']: THREE.MeshStandardMaterial
    ['02_-_Default_0']: THREE.MeshStandardMaterial
    ['07_-_Default']: THREE.MeshStandardMaterial
  }
}


export function Batmobile() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/easter_eggs/low_poly_batmobile.glb`) as GLTFResult;

  return (
    <group dispose={null} position={[230, 0, 150]} scale={[0.35, 0.35, 0.35]} rotation={[0, -1.57, 0]}>
      <mesh
        name="final_02_-_Default_0"
        geometry={nodes['final_02_-_Default_0'].geometry}
        material={materials['02_-_Default']}
        position={[0, 9.244, 0]}
      />
      <mesh
        name="final_02_-_Default_0001"
        geometry={nodes['final_02_-_Default_0001'].geometry}
        material={materials['02_-_Default_0']}
        position={[0, 9.244, 0]}
      />
      <mesh
        name="final_07_-_Default_0"
        geometry={nodes['final_07_-_Default_0'].geometry}
        material={materials['07_-_Default']}
        position={[0, 9.244, 0]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/easter_eggs/low_poly_batmobile.glb`);
