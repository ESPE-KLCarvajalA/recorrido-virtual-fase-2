import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    pared_frente: THREE.Mesh
  }
  materials: {
    ['pared blanca']: THREE.MeshStandardMaterial
  }
}

export function Pared_frente(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_frente.glb`) as GLTFResult;

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [23, 9, 2],
    position: [108.5, 6, -55.354],
  }));
  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [23, 9, 2],
    position: [141.7, 6, -55.354],
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_frente"
        castShadow
        receiveShadow
        geometry={nodes.pared_frente.geometry}
        material={materials['pared blanca']}
        position={[124.694, 9.376, -54.898]}
      />
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_frente.glb`);
