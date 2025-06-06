import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Plano014: THREE.Mesh
    Plano014_1: THREE.Mesh
  }
  materials: {
    ['blanca externa pisos']: THREE.MeshStandardMaterial
    ['04_-_Default']: THREE.MeshStandardMaterial
  }
}

export function Techo_edificio(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/techo_edificio.glb`) as GLTFResult;

  return (
    <group {...props} dispose={null}>
    <group name="techo_edificio" position={[124.694, 97.157, -76.475]}>
      <mesh
        name="Plano014"
        receiveShadow
        geometry={nodes.Plano014.geometry}
        material={materials['blanca externa pisos']}
      />
      <mesh
        name="Plano014_1"
        geometry={nodes.Plano014_1.geometry}
        material={materials['04_-_Default']}
      />
    </group>
  </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/techo_edificio.glb`);
