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

// 🔸 Puertas instanciadas
const instances: InstanceData[] = [
  { position: [-100, 1, -315], rotation: [0, -1.571, 0], scale: [18.236, 16.138, 16.138] },
  { position: [-100, 1, -299], rotation: [0, -1.571, 0], scale: [18.236, 16.138, 16.138] },
  
  { position: [-240.671, 3, -201], rotation: [0, -Math.PI / 2, 0], scale: [21.184, 18.747, 18.747] },
  { position: [-240.671, 3, -220], rotation: [0, -Math.PI / 2, 0], scale: [22, 18.747, 18.747] },
  
    { position: [-695.367, 20.703, -171.585], rotation: [0, 0, 0], scale: [22, 18.747, 18.747] },
    { position: [-673.536, 20.703, -171.585], rotation: [0, 0, 0], scale: [22, 18.747, 18.747] }
  
  
];

// 🔸 Manijas individuales
const handlePositions: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}[] = [
  {
    position: [-99.362, 19, -307.025],
    rotation: [Math.PI, 0, Math.PI],
    scale: [1, 1, 1],
  },
  {
    position: [-241, 22, -210],
    rotation: [Math.PI, Math.PI, Math.PI],
    scale: [1.5, 1.5, 1.5],
  }
];


export function Puertas3() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta9.glb'
  ) as unknown as GLTFResult;

  const frameRef = useRef<THREE.InstancedMesh>(null);
  const glassRef = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    const matrix = new THREE.Matrix4();

    instances.forEach((inst, i) => {
      const pos = new THREE.Vector3(...inst.position);
      const rot = new THREE.Euler(...inst.rotation);
      const scl = new THREE.Vector3(...inst.scale);
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);

      frameRef.current?.setMatrixAt(i, matrix);
      glassRef.current?.setMatrixAt(i, matrix);
    });

    frameRef.current!.instanceMatrix.needsUpdate = true;
    glassRef.current!.instanceMatrix.needsUpdate = true;
    frameRef.current!.frustumCulled = false;
    glassRef.current!.frustumCulled = false;
  }, []);

  return (
    <group>
      {/* 🔷 Puerta marco */}
      <instancedMesh
        ref={frameRef}
        args={[nodes.DoorFrane007.geometry, materials['Material.091'], instances.length]}
      />
      {/* 🔷 Puerta vidrio */}
      <instancedMesh
        ref={glassRef}
        args={[nodes.DoorFrane007_1.geometry, materials['glass frosted'], instances.length]}
      />

      {/* 🟠 Manijas */}
      {handlePositions.map(({ position, rotation, scale }, i) => (
        <mesh
          key={`handle-${i}`}
          geometry={nodes.Handle_Front004.geometry}
          material={materials['Material.117']}
          position={position}
          rotation={rotation}
          scale={scale}
        />
      ))}
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta9.glb');
