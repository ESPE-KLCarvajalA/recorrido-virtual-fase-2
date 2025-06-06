import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    b_0_export: THREE.Mesh;
  };
  materials: {
    ['madera paredes']: THREE.MeshStandardMaterial;
  };
};

export function B_0(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/b_0.glb`) as GLTFResult;

  const [ref] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [2, 7, 25], // Tamaño de la caja del collider
    position: [70.368, 6, -19.761], // Posición inicial del collider
  }));

  return (
    <group {...props} dispose={null}>
      {/* Collider, no visible */}
      <mesh ref={ref as React.Ref<THREE.Mesh>} visible={false} />

      {/* Modelo 3D */}
      <mesh
        name="b_0_export"
        castShadow
        receiveShadow
        geometry={nodes.b_0_export.geometry}
        material={materials['madera paredes']}
        position={[70.368, 9.376, -19.761]} // Posición del modelo original
      />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/b_0.glb`);
