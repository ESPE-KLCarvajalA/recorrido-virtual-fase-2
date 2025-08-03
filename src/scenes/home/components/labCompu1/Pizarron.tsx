import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Plane126: THREE.Mesh;
    Plane126_1: THREE.Mesh;
    Plane126_2: THREE.Mesh;
  };
  materials: {
    WB_Metal: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Pizarron() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/pizarron1.glb'
  ) as unknown as GLTFResult;

  const ref1 = useRef<THREE.InstancedMesh>(null);
  const ref2 = useRef<THREE.InstancedMesh>(null);
  const ref3 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [234.566, 46.906, -133.209], rotation: [Math.PI, 0, Math.PI], scale: [1,1,1] },
    { position: [103.759, 24.852, -77.841], rotation: [0, 1.571, 0], scale: [1,1,1] },
   
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const pos = new THREE.Vector3(...instance.position);
      const rot = new THREE.Euler(...instance.rotation);
      const scl = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);

      ref1.current!.setMatrixAt(i, matrix);
      ref2.current!.setMatrixAt(i, matrix);
      ref3.current!.setMatrixAt(i, matrix);

      ref1.current!.frustumCulled = false;
      ref2.current!.frustumCulled = false;
      ref3.current!.frustumCulled = false;
    });

    ref1.current!.instanceMatrix.needsUpdate = true;
    ref2.current!.instanceMatrix.needsUpdate = true;
    ref3.current!.instanceMatrix.needsUpdate = true;
  }, [instances]);

  return (
    <group>
      <instancedMesh ref={ref1} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes.Plane126.geometry} />
        <meshStandardMaterial {...materials.WB_Metal} />
      </instancedMesh>
      <instancedMesh ref={ref2} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes.Plane126_1.geometry} />
        <meshStandardMaterial {...materials['Material.007']} />
      </instancedMesh>
      <instancedMesh ref={ref3} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes.Plane126_2.geometry} />
        <meshStandardMaterial {...materials['Material.008']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/pizarron1.glb');
