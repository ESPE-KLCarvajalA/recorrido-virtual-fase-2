import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    tacho: THREE.Mesh;
  };
  materials: {
    techo: THREE.MeshStandardMaterial;
  };
};

type TachosProps = JSX.IntrinsicElements['group'] & {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  color?: string;
};

export function Tachos({...props }: TachosProps) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/easter_eggs/tacho.glb`) as GLTFResult;

  return (
    <group {...props} position={props.position} rotation={props.rotation} scale={props.scale} dispose={null}>
      <mesh
        name="tacho"
        geometry={nodes.tacho.geometry}
        material={materials.techo.clone()}
        material-color={props.color || materials.techo.color}
      />
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/easter_eggs/tacho.glb`);
