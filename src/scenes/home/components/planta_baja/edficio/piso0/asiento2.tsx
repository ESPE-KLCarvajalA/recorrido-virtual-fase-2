import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Back_Seat_low_Base_id_0: THREE.Mesh
    }
    materials: {
      Base_id: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Asiento2() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento2.glb`) as GLTFResult;

    const Back_Seat_low_Base_id_0 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [132.949, 3.8, -75.146], rotation: [0, Math.PI / 2, 0], scale: [0.03, 0.03, 0.03] },
        { position: [132.949, 3.8, -70], rotation: [0, Math.PI / 2, 0], scale: [0.03, 0.03, 0.03] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Back_Seat_low_Base_id_0.current!.setMatrixAt(i, matrix);

            Back_Seat_low_Base_id_0.current!.frustumCulled = false;
        });

        Back_Seat_low_Base_id_0.current!.instanceMatrix.needsUpdate = true;
        //materials.Base_id.roughness = 1;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Back_Seat_low_Base_id_0} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Back_Seat_low_Base_id_0.geometry} />
                <meshStandardMaterial attach="material" {...materials['Base_id']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento2.glb`);
