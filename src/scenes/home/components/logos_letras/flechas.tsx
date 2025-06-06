import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    flecha: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshBasicMaterial
  }
}

export function Flechas(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(`${import.meta.env.BASE_URL}models/logos_letras/flecha.glb`) as GLTFResult;

  const greenMaterial = new THREE.MeshBasicMaterial({
    color: 'green',
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        name="flecha"
        geometry={nodes.flecha.geometry}
        material={greenMaterial}
        position={[360, 3, 20]}
        scale={[0.8, 0.7, 0.5]}
        rotation={[0, 0.2, 0]}
      />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/logos_letras/flecha.glb`);
