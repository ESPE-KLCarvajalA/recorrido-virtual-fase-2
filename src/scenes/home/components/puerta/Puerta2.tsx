import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
import Marcador360 from '../../../lab1/components/ui/Marcador360';


type GLTFResult = GLTF & {
  nodes: {
    DoorFrane009: THREE.Mesh;
    DoorFrane009_1: THREE.Mesh;
    Handle_Front021: THREE.Mesh;
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

export function Puerta2() {
  const { nodes, materials } = useGLTF('models/puerta/puerta2.glb') as unknown as GLTFResult;

  const marcoRef = useRef<THREE.InstancedMesh>(null);
  const vidrioRef = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [167.089, 20, -279.414], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [52.9421, 20, -346.272], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [81.879, 20, -346.272], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [119.846, 20, -346.272], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [147.787, 20, -346.272], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [112.5, 21, -130.267], rotation: [0, -1.57, 0], scale: [1, 1, 1.1] },
    { position: [166.3, 19, -142], rotation: [0, 0, 0], scale: [1, 1, 1.1] },
    { position: [-62.334, 19.5, -221.824], rotation: [0, 3.14, 0], scale: [1, 1, 1] },
    { position: [-32, 20, -370], rotation: [0, 0, 0], scale: [1, 1.04, 1.08] },
    { position: [-99, 19, -506], rotation: [0, 3.14, 0], scale: [1, 1, 1.08] }, 
    { position: [30.324, 20, -71.757], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [30, 20, -48], rotation: [0, 0, 0], scale: [1, 1, 1.05] },
    { position: [-165, 20, -56.541], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { position: [-179, 20, -68.5], rotation: [0, 3.14, 0], scale: [1, 1, 1.05] },


    { position: [-810.413, -7.023, 126.962], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-725.667, -7.47, 126.962], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-586.295, -7.47, 120.231], rotation: [0, 0.914, 0], scale: [1, 1, 1] },
    { position: [-721.177, 4.818, -454.436], rotation: [0, -1.571, 0], scale: [1, 1, 1] },
   
    { position: [-464, 23.24, -930], rotation: [0, 1.57, 0], scale: [1, 1, 1.01] },
    { position: [-713 , 24.132, -835.5], rotation: [0,3.15, 0], scale: [1, 1, 1] },
    { position: [-519, 21.658, -464], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-516, 21.658, -744], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-210.704, 21.658, -716.5], rotation: [0, 0, 0], scale: [1, 1, 1] },
    
  ];

  const relativeHandlePosition = new THREE.Vector3(0.15, -0.3, -7.4);

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

      {instances.map((inst, index) => {
        const basePosition = new THREE.Vector3(...inst.position);
        const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(...inst.rotation));
        const offset = relativeHandlePosition.clone().applyQuaternion(quaternion);
        const finalPosition = basePosition.clone().add(offset);

        // 👇 Calculamos la posición del marcador encima de la puerta
        const isTargetDoor = inst.position[0] === -99 && inst.position[1] === 19 && inst.position[2] === -506;
        const markerPosition: [number, number, number] = [
          inst.position[0] + 9,
          inst.position[1] + 3.5,
          inst.position[2] + 3.5, // Ajusta la altura del marcador
        ];

        return (
          <group key={`handle-${index}`}>
            <mesh
              geometry={nodes.Handle_Front021.geometry}
              material={materials['Material.117']}
              position={finalPosition.toArray()}
              rotation={inst.rotation}
              scale={inst.scale}
            />

            {isTargetDoor && (
              <Marcador360
                position={markerPosition}
                url="#/lab1"
                isEspecial={true}

              />
            )}
          </group>
        );
      })}
    </group>
  );
}

useGLTF.preload('models/puerta/puerta2.glb');
