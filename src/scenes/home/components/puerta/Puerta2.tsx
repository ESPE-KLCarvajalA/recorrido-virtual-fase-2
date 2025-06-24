import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    DoorFrane009: THREE.Mesh;
    DoorFrane009_1: THREE.Mesh;
    Handle_Front003: THREE.Mesh;
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

export function InstancedPuerta2() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta2.glb'
  ) as unknown as GLTFResult;

  const marcoRef = useRef<THREE.InstancedMesh>(null);
  const vidrioRef = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [167.089, 20, -279.414], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [52.9421, 20, -346.272], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
    // Agrega más si necesitas
  ];

  const relativeHandlePosition = new THREE.Vector3(0.15, -0.3, -7.4); // ← Posición relativa fija

  useEffect(() => {
    instances.forEach((inst, i) => {
      const pos = new THREE.Vector3(...inst.position);
      const rot = new THREE.Euler(...inst.rotation);
      const scale = new THREE.Vector3(...inst.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scale);

      marcoRef.current!.setMatrixAt(i, matrix);
      vidrioRef.current!.setMatrixAt(i, matrix);
    });

    marcoRef.current!.instanceMatrix.needsUpdate = true;
    vidrioRef.current!.instanceMatrix.needsUpdate = true;
    marcoRef.current!.frustumCulled = false;
    vidrioRef.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      {/* Marcos instanciados */}
      <instancedMesh
        ref={marcoRef}
        args={[null, null, instances.length]}
        geometry={nodes.DoorFrane009.geometry}
        material={materials['Material.091']}
      />
      <instancedMesh
        ref={vidrioRef}
        args={[null, null, instances.length]}
        geometry={nodes.DoorFrane009_1.geometry}
        material={materials['glass frosted']}
      />

      {/* Manijas individuales */}
      {instances.map((inst, index) => {
        const basePosition = new THREE.Vector3(...inst.position);
        const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(...inst.rotation));
        const offset = relativeHandlePosition.clone().applyQuaternion(quaternion);
        const finalPosition = basePosition.clone().add(offset);

        return (
          <mesh
            key={`handle-${index}`}
            geometry={nodes.Handle_Front003.geometry}
            material={materials['Material.117']}
            position={finalPosition.toArray()}
            rotation={inst.rotation}
            scale={inst.scale}
          />
        );
      })}
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta2.glb');
