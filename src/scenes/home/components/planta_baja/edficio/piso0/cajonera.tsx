import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Locker_1001: THREE.Mesh
      Locker_1001_1: THREE.Mesh
      Locker_1001_2: THREE.Mesh
    }
    materials: {
      ['pared bordes negro']: THREE.MeshStandardMaterial
      ['black_st.001']: THREE.MeshPhysicalMaterial
      barras: THREE.MeshStandardMaterial
    }
  }
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Cajonera() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/cajonera.glb`) as GLTFResult;

    const Locker_1001 = useRef<THREE.InstancedMesh>(null);
    const Locker_1001_1 = useRef<THREE.InstancedMesh>(null);
    const Locker_1001_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [108.965, 5.209, -98.28], rotation: [Math.PI / 2, 0, 0.001], scale: [0.213, 0.213, 0.213] },
        { position: [114.617, 5.209, -98.28], rotation: [Math.PI / 2, 0, 0.001], scale: [0.213, 0.213, 0.213] },
        { position: [102.113, 5.209, -101.738], rotation: [Math.PI / 2, 0, 3.136], scale: [0.213, 0.213, 0.213] },
        { position: [150.154, 5.209, -86.656], rotation: [Math.PI / 2, 0, 3.136], scale: [0.213, 0.213, 0.213] },
        { position: [144.061, 5.209, -86.656], rotation: [Math.PI / 2, 0, 3.136], scale: [0.213, 0.213, 0.213] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Locker_1001.current!.setMatrixAt(i, matrix);
            Locker_1001_1.current!.setMatrixAt(i, matrix);
            Locker_1001_2.current!.setMatrixAt(i, matrix);

            Locker_1001.current!.frustumCulled = false;
            Locker_1001_1.current!.frustumCulled = false;
            Locker_1001_2.current!.frustumCulled = false;
        });

        Locker_1001.current!.instanceMatrix.needsUpdate = true;
        Locker_1001_1.current!.instanceMatrix.needsUpdate = true;
        Locker_1001_2.current!.instanceMatrix.needsUpdate = true;
        //materials.Base_id.roughness = 1;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Locker_1001} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Locker_1001.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared bordes negro']} />
            </instancedMesh>
            <instancedMesh ref={Locker_1001_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Locker_1001_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['black_st.001']} />
            </instancedMesh>
            <instancedMesh ref={Locker_1001_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Locker_1001_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/cajonera.glb`);
