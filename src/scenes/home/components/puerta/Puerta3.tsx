import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    DoorFrane007: THREE.Mesh;
    DoorFrane007_1: THREE.Mesh;
    Handle_Front004: THREE.Mesh;
  };
  materials: {
    ['Material.091']: THREE.MeshStandardMaterial;
    ['glass frosted']: THREE.MeshPhysicalMaterial;
    ['Material.117']: THREE.MeshPhysicalMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Puertas3() {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta9.glb') as unknown as GLTFResult;

  const frameRef = useRef<THREE.InstancedMesh>(null);
  const glassRef = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [-100, 1, -315], rotation: [0, -1.571, 0], scale: [18.236, 16.138, 16.138] },
    { position: [-100, 1, -299], rotation: [0, -1.571, 0], scale: [18.236, 16.138, 16.138] },
    { position: [-240.671, 3, -201], rotation: [0, -Math.PI / 2, 0], scale: [21.184, 18.747, 18.747] },
    { position: [-240.671, 3, -220], rotation: [0, -Math.PI / 2, 0], scale: [22, 18.747, 18.747] }
  ];

  useEffect(() => {
    instances.forEach((inst, i) => {
      const pos = new THREE.Vector3(...inst.position);
      const rot = new THREE.Euler(...inst.rotation);
      const scl = new THREE.Vector3(...inst.scale);
      const mat = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);

      frameRef.current!.setMatrixAt(i, mat);
      glassRef.current!.setMatrixAt(i, mat);
    });

    frameRef.current!.instanceMatrix.needsUpdate = true;
    glassRef.current!.instanceMatrix.needsUpdate = true;
    frameRef.current!.frustumCulled = false;
    glassRef.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      {/* Marcos y vidrio */}
      <instancedMesh
        ref={frameRef}
        args={[null, null, instances.length]}
        geometry={nodes.DoorFrane007.geometry}
        material={materials['Material.091']}
      />
      <instancedMesh
        ref={glassRef}
        args={[null, null, instances.length]}
        geometry={nodes.DoorFrane007_1.geometry}
        material={materials['glass frosted']}
      />

      {/* Manija 1 (ya estaba) */}
      <mesh
        geometry={nodes.Handle_Front004.geometry}
        material={materials['Material.117']}
        position={[-99.362, 19, -307.025]}
        rotation={[Math.PI, 0, Math.PI]}
      />

      {/* Manija 2 (nueva para la puerta grande en -240.671) */}
      <mesh
        geometry={nodes.Handle_Front004.geometry}
        material={materials['Material.117']}
        position={[-241, 22, -210]} // ← posición ajustada a mano
        rotation={[Math.PI, Math.PI, Math.PI]}
        scale={[1.5, 1.5, 1.5]} // ajusta el tamaño si lo ves necesario
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta9.glb');
