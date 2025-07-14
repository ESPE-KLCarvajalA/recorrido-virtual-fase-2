import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    DoorFrane002: THREE.Mesh;
    DoorFrane002_1: THREE.Mesh;
    DoorFrane002_2: THREE.Mesh;
    Handle_Front019: THREE.Mesh;
  };
  materials: {
    ['Material.091']: THREE.MeshStandardMaterial;
    ['glass frosted']: THREE.MeshStandardMaterial;
    ['Material.120']: THREE.MeshStandardMaterial;
    ['Material.117']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

// 🔸 Todas las instancias de puertas
const allInstances: InstanceData[] = [
  { position: [511.5, 20.322, -374], rotation: [0, 1.85, 0], scale: [1, 1, 1] },
  { position: [567, 22.027, -338], rotation: [0, 0.27, 0], scale: [1, 1, 1.05] },
  { position: [574, 21, -313], rotation: [0, 0.26, 0], scale: [1, 1, 1.05] },
  { position: [599, 22, -215], rotation: [0, 0.25, 0], scale: [1, 1, 1] },
  { position: [374, 20, -450], rotation: [0, 0.66, 0], scale: [1, 1, 1] }, // puerta marrón oscura
  { position: [359.4, 20, -469.9], rotation: [0, 0.66, 0], scale: [1, 1, 1] }, // puerta marrón clara
];

const normalInstances = allInstances.slice(0, 4);
const brownDoor1 = allInstances[4];
const brownDoor2 = allInstances[5];

const relativeHandlePosition = new THREE.Vector3(-1, -0.2, -8);

const brownMatDark = new THREE.MeshStandardMaterial({ color: '#584346' });
const brownMatLight = new THREE.MeshStandardMaterial({ color: '#C58532' });

export function Puerta1() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta1.glb'
  ) as unknown as GLTFResult;

  const marcoRef = useRef<THREE.InstancedMesh>(null);
  const vidrioRef = useRef<THREE.InstancedMesh>(null);
  const extraRef = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    const matrix = new THREE.Matrix4();

    normalInstances.forEach((inst, i) => {
      const pos = new THREE.Vector3(...inst.position);
      const rot = new THREE.Euler(...inst.rotation);
      const scale = new THREE.Vector3(...inst.scale);
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scale);

      marcoRef.current?.setMatrixAt(i, matrix);
      vidrioRef.current?.setMatrixAt(i, matrix);
      extraRef.current?.setMatrixAt(i, matrix);
    });

    marcoRef.current!.instanceMatrix.needsUpdate = true;
    vidrioRef.current!.instanceMatrix.needsUpdate = true;
    extraRef.current!.instanceMatrix.needsUpdate = true;

    marcoRef.current!.frustumCulled = false;
    vidrioRef.current!.frustumCulled = false;
    extraRef.current!.frustumCulled = false;
  }, []);

  return (
    <group>
      {/* 🔷 Instancias normales */}
      <instancedMesh
        ref={marcoRef}
        args={[nodes.DoorFrane002.geometry, materials['Material.091'], normalInstances.length]}
      />
      <instancedMesh
        ref={vidrioRef}
        args={[nodes.DoorFrane002_1.geometry, materials['glass frosted'], normalInstances.length]}
      />
      <instancedMesh
        ref={extraRef}
        args={[nodes.DoorFrane002_2.geometry, materials['Material.120'], normalInstances.length]}
      />

      {/* 🔶 Puertas marrones individualmente renderizadas */}
      {[brownDoor1, brownDoor2].map((door, i) => (
        <group key={`brown-${i}`} position={door.position} rotation={door.rotation} scale={door.scale}>
          <mesh geometry={nodes.DoorFrane002.geometry} material={i === 0 ? brownMatDark : brownMatLight} />
          <mesh geometry={nodes.DoorFrane002_1.geometry} material={i === 0 ? brownMatDark : brownMatLight} />
          <mesh geometry={nodes.DoorFrane002_2.geometry} material={i === 0 ? brownMatDark : brownMatLight} />
        </group>
      ))}

      {/* 🟠 Manijas individuales */}
      {allInstances.map((inst, index) => {
        const base = new THREE.Vector3(...inst.position);
        const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(...inst.rotation));
        const offset = relativeHandlePosition.clone().applyQuaternion(quat);
        const finalPos = base.clone().add(offset);

        return (
          <mesh
            key={`handle-${index}`}
            geometry={nodes.Handle_Front019.geometry}
            material={materials['Material.117']}
            position={finalPos.toArray()}
            rotation={inst.rotation}
            scale={inst.scale}
          />
        );
      })}
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta1.glb');
