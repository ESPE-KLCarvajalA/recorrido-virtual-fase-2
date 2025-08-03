import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

// Tipo del modelo GLB
type GLTFResult = GLTF & {
  nodes: {
    Cube078: THREE.Mesh;
    Cube078_1: THREE.Mesh;
    Cube078_2: THREE.Mesh;
    Cube078_3: THREE.Mesh;
  };
  materials: {
    ['black.005']: THREE.MeshStandardMaterial;
    ['Material.200']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Compus() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/computadora.glb'
  ) as unknown as GLTFResult;

  const Cube078 = useRef<THREE.InstancedMesh>(null);
  const Cube078_1 = useRef<THREE.InstancedMesh>(null);
  const Cube078_2 = useRef<THREE.InstancedMesh>(null);
  const Cube078_3 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [163.33, 5, -23.434], rotation: [0, 0, 0], scale: [1, 1, 1] },
   
{ position: [160.675, 8, -52.474], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [160.675, 8, -81.409], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [160.675, 8, -111.033], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [189.58,  8, -111.033], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [189.58,  8, -81.409], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [189.58,  8, -52.474], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [189.58,  8, -23.539], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [218.572, 8, -23.539], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [218.572, 8, -52.474], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [218.572, 8, -81.409], rotation: [0, 0, 0], scale: [1, 1, 1] },
{ position: [218.572, 8, -111.033], rotation: [0, 0, 0], scale: [1, 1, 1] },

/* lab de computacion */

    { position: [285.081, 8, -185.711], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [253.041, 8, -185.712], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [221.002, 8, -185.712], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [188.203, 8, -185.712], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [188.203, 8, -217.717], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [221.002, 8, -217.717], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [253.041, 8, -217.717], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [285.081, 8, -217.717], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [285.081, 8, -249.82], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [253.041, 8, -249.82], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [221.002, 8, -249.82], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [188.203, 8, -249.82], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] }
  




  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cube078.current!.setMatrixAt(i, matrix);
      Cube078_1.current!.setMatrixAt(i, matrix);
      Cube078_2.current!.setMatrixAt(i, matrix);
      Cube078_3.current!.setMatrixAt(i, matrix);

      Cube078.current!.frustumCulled = false;
      Cube078_1.current!.frustumCulled = false;
      Cube078_2.current!.frustumCulled = false;
      Cube078_3.current!.frustumCulled = false;
    });

    Cube078.current!.instanceMatrix.needsUpdate = true;
    Cube078_1.current!.instanceMatrix.needsUpdate = true;
    Cube078_2.current!.instanceMatrix.needsUpdate = true;
    Cube078_3.current!.instanceMatrix.needsUpdate = true;
  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Cube078} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cube078.geometry} />
        <meshStandardMaterial attach="material" {...materials['black.005']} />
      </instancedMesh>
      <instancedMesh ref={Cube078_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cube078_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.200']} />
      </instancedMesh>
      <instancedMesh ref={Cube078_2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cube078_2.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.011']} />
      </instancedMesh>
      <instancedMesh ref={Cube078_3} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cube078_3.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.012']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/computadora.glb');
