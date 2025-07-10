import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
  nodes: {
    Cube048: THREE.Mesh
    Cube048_1: THREE.Mesh
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
    { position: [160.7, 11.791, -240.95], rotation: [0, 0, 0], scale: [1, 1, 1] },
    {
        position: [160.7, 11.791, -208.048],
        rotation: [0, 0, 0],
        scale: [1,1,1]
      },
      {
        position: [160.768, 11.791, -175.045],
        rotation: [0,0, 0],
        scale: [1, 1, 1]
      }
  ];

  useEffect(() => {
    instances.forEach((inst, i) => {
      const pos = new THREE.Vector3(...inst.position);
      const rot = new THREE.Euler(...inst.rotation);
      const scl = new THREE.Vector3(...inst.scale);
      const matrix = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);
      ref1.current!.setMatrixAt(i, matrix);
      ref2.current!.setMatrixAt(i, matrix);
    });
    ref1.current!.instanceMatrix.needsUpdate = true;
    ref2.current!.instanceMatrix.needsUpdate = true;
    ref1.current!.frustumCulled = false;
    ref2.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      <instancedMesh
        ref={ref1}
        args={[null, null, instances.length]}
        geometry={nodes.Cube048.geometry}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        material={materials['Material.055']}
      />
      <instancedMesh
        ref={ref2}
        args={[null, null, instances.length]}
        geometry={nodes.Cube048_1.geometry}
        material={materials['Material.056']}
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/locker-m.glb');
