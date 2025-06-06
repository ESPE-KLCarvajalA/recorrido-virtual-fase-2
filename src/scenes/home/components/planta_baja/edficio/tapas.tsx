import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    tapas_entrada: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
  }
}
export function Tapas(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/tapas.glb`) as GLTFResult;

  return (
    <group {...props} dispose={null}>
    <mesh
      name="tapas_entrada"
      geometry={nodes.tapas_entrada.geometry}
      material={materials.barras}
      position={[124.694, 0, -52.258]}
    />
  </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/tapas.glb`);
