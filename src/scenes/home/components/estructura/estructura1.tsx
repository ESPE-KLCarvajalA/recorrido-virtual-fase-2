import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Cube070: THREE.Mesh;
  };
  materials: {
    ['Material.051']: THREE.MeshStandardMaterial;
  };
};

type Instance = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

// Lista de instancias para Estructura1
const instances: Instance[] = [
  { position: [-173.318, 144.23, 648.364], rotation: [0, -0.018, 0], scale: [1, 1, 1] },
  { position: [-280.251, 144.23, 723], rotation: [0, -0.018, 0], scale: [1, 1, 1] },

];

export function Estructura1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura1.glb'
  ) as unknown as GLTFResult;

  const ref = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    if (!ref.current) return;

    const dummyMatrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();

    instances.forEach((inst, i) => {
      const position = new THREE.Vector3(...inst.position);
      const rotation = new THREE.Euler(...inst.rotation);
      const scale = new THREE.Vector3(...inst.scale);

      quaternion.setFromEuler(rotation);
      dummyMatrix.compose(position, quaternion, scale);

      ref.current!.setMatrixAt(i, dummyMatrix);
    });

    ref.current.instanceMatrix.needsUpdate = true;
    ref.current.frustumCulled = false;
  }, []);

  return (
    <group {...props} dispose={null}>
      <instancedMesh ref={ref} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cube070.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.051']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload(
  'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura1.glb'
);
