import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    b_0_verticales_export: THREE.Mesh
  }
  materials: {
    ['barras cuartos']: THREE.MeshStandardMaterial
  }
}

export function B_0_verticales(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/b_0_verticales.glb`) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        name="b_0_verticales_export"
        castShadow
        receiveShadow
        geometry={nodes.b_0_verticales_export.geometry}
        material={materials['barras cuartos']}
        position={[-114.437, 9.376, 3.904]}
        scale={[0.631, 5.699, 0.631]}
      />
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/b_0_verticales.glb`);
