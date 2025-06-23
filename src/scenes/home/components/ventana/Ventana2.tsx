import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    WindowL005: THREE.Mesh;
    WindowL005_1: THREE.Mesh;
  };
  materials: {
    ['Material.099']: THREE.MeshStandardMaterial;
    ['Material.098']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  name?: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Ventanas2() {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana2.glb') as unknown as GLTFResult;

  const frameRef = useRef<THREE.InstancedMesh>(null);
  const glassRef = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    {
      name: 'WindowL010',
      position: [240.26, 34, -94.596],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowL003',
      position: [240.258, 34, -35.451],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_1',
      position: [309.261, 32, -167.015],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_2',
      position: [309.261, 32, -230.993],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_3',
      position: [309.261, 32, -305.12],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_4',
      position: [309.261, 32, -368.611],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    { name: 'WindowFrane003_5', position: [274.432, 32, -408.267], rotation: [0, 1.63, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_6', position: [201.334, 32, -476.457], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_7', position: [144.435, 34.252, -476.642], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_8', position: [54.775, 32, -476.477], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_9', position: [-31.235,32, -443.202], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { name: 'WindowFrame021', position: [16.355, 37, -345], rotation: [0,  1.57, 0], scale: [0.5, 0.1, 0.32] },
    { name: 'WindowFrame022', position: [167.037, 41, -315.864], rotation: [0, 0, 0], scale: [1, 0.6, 0.69] },
    { name: 'WindowFrame023', position: [167.037, 41.3, -230.96], rotation: [0, 0, 0], scale: [1, 0.56, 1.1] },
    { name: 'WindowFrame002', position: [65.292, 31, -130.052], rotation: [0, 1.57, 0], scale: [1, 1.1, 1] },
    { name: 'WindowFrame024', position: [65.292, 35, -1.18], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { name: 'WindowFrame025', position: [-95.089, 34, -103.401], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { name: 'WindowFrame026', position: [-31.588, 30, -172.574], rotation: [0, 0, 0], scale: [1, 1.5, 1.23] },
    { name: 'WindowFrame027', position: [-100.11, 52, -322.591], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame028', position: [-100.11, 52, -386.439], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame029', position: [-100.11, 52, -452.282], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame030', position: [-239.405, 52, -452.215], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame031', position: [-239.405, 52, -386.8], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame032', position: [-239.405, 52, -322.361], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame035', position: [-239.565, 34, -87.474], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { name: 'WindowFrame036', position: [-199.212, 35, -1.768], rotation: [0, 1.571, 0], scale: [1, 1.2, 1] },
    { name: 'WindowFrame038', position: [-74.673, 35, -1.825], rotation: [0, 1.57, 0], scale: [1, 1.2, 1.04] },
  ];



  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      frameRef.current!.setMatrixAt(i, matrix);
      glassRef.current!.setMatrixAt(i, matrix);
    });

    frameRef.current!.instanceMatrix.needsUpdate = true;
    glassRef.current!.instanceMatrix.needsUpdate = true;

    frameRef.current!.frustumCulled = false;
    glassRef.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      <instancedMesh
        ref={frameRef}
        args={[null, null, instances.length]}
        geometry={nodes.WindowL005.geometry}
        material={materials['Material.099']}
      />
      <instancedMesh
        ref={glassRef}
        args={[null, null, instances.length]}
        geometry={nodes.WindowL005_1.geometry}
        material={materials['Material.098']}
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana2.glb');
