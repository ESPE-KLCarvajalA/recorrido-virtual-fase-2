import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
// import useCameraDistance from '../../../../utils/useCameraDistance';

type GLTFResult = GLTF & {
  nodes: {
    Plane013: THREE.Mesh
    Plane013_1: THREE.Mesh
  }
  materials: {
    ['Material.055']: THREE.MeshStandardMaterial
    ['Material.056']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function LockerM() {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/locker-m.glb') as unknown as GLTFResult;

  const ref1 = useRef<THREE.InstancedMesh>(null);
  const ref2 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [155.354, 13.603, -245], rotation: [0, Math.PI / 2, 0], scale: [0.905, 0.88, 1] },
    { position: [155.354, 13.603, -212], rotation: [0,  Math.PI / 2, 0], scale: [0.905, 0.88, 1] },
    { position: [155.354, 13.603, -180], rotation: [0,  Math.PI / 2, 0], scale: [0.905, 0.88, 1] },

  ];

  // const distance = useCameraDistance([155.354, 13.603, -237.843]);
  // if (distance > 600) return null;

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

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
        <bufferGeometry attach="geometry" {...nodes.Plane013.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.055']} />
      </instancedMesh>
      <instancedMesh ref={ref2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Plane013_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.056']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/locker-m.glb');
