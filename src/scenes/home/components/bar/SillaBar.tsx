import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Plane041: THREE.Mesh;
    Plane041_1: THREE.Mesh;
  };
  materials: {
    ['Material.078']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function SillaBar() {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sillaBar1.glb') as unknown as GLTFResult;

  const ref1 = useRef<THREE.InstancedMesh>(null);
  const ref2 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [-588.595, 5, -226.82], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-409.935, 3, -209.586], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-409.935, 3, -262.61], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-448.575, 3, -262.61], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // {  position: [-488.381, 3, -262.61], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-448.402, 3, -209.586], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-488.142, 3, -209.586], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-527.578, 3, -209.586], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-527.662, 3, -262.61], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-588.652, 3.573, -265.136], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-636.002, 3.182, -265.032], rotation: [0, 0, 0], scale: [1, 1, 1] },
  // { position: [-635.799, 3.13, -227.498], rotation: [0, 0, 0], scale: [1, 1, 1] },

  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const pos = new THREE.Vector3(...instance.position);
      const rot = new THREE.Euler(...instance.rotation);
      const scl = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);

      ref1.current?.setMatrixAt(i, matrix);
      ref2.current?.setMatrixAt(i, matrix);
    });

    ref1.current!.instanceMatrix.needsUpdate = true;
    ref2.current!.instanceMatrix.needsUpdate = true;

    ref1.current!.frustumCulled = false;
    ref2.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      <instancedMesh ref={ref1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Plane041.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.078']} />
      </instancedMesh>
      <instancedMesh ref={ref2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Plane041_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.010']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sillaBar1.glb');
