import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube053: THREE.Mesh
    Cube053_1: THREE.Mesh
  }
  materials: {
    ['Material.216']: THREE.MeshStandardMaterial
    ['Material.217']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function SillasLab() {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/sillas/sillalab1.glb') as unknown as GLTFResult;

  const ref1 = useRef<THREE.InstancedMesh>(null);
  const ref2 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [19.402, 3, -335.884], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [158, 3, -307], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    
    { position: [-19, 3, -160], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-19, 3, -195], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    
    { position: [83.6181 , 3, -139.896], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
    { position: [47.9587 , 3, -139.896], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },


    // Puedes agregar más aquí...
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
        <bufferGeometry attach="geometry" {...nodes.Cube053.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.216']} />
      </instancedMesh>
      <instancedMesh ref={ref2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cube053_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.217']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/sillas/sillalab1.glb');





position: [83.618, 5.343, -139.896]
position: [47.959, 5.343, -139.896]
position: [-21.135, 5.343, -155.442]
position: [-21.135, 5.343, -191.403]
position: [155.947, 5.343, -311.672]
