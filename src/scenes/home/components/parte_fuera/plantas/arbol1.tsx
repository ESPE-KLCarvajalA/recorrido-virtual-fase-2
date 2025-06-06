import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      tree01_1001: THREE.Mesh
      tree01_1001_1: THREE.Mesh
    }
    materials: {
      Mat: THREE.MeshStandardMaterial
      tronco: THREE.MeshStandardMaterial
    }
  }
  
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Arbol1() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/plantas/arbol1.glb`) as GLTFResult;

    const tree01_1001 = useRef<THREE.InstancedMesh>(null);
    const tree01_1001_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [31.95, 8.224, -57.601], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [17.108, 3.235, -57.337], rotation: [0, 0, 0], scale: [0.5, 0.5, 0.5]},
        { position: [10.299, 4.622, -58.043], rotation: [0, 0.8, 0], scale: [0.7, 0.7, 0.7]},
        { position: [63.347, 8.224, -56.394], rotation: [0, 0, 0], scale: [1, 1, 1]},
        { position: [62.604, 8.224, -65.806], rotation: [0, 2.3, 0], scale: [1, 1, 1]},
        { position: [62.205, 6, -120.074], rotation: [0, 2.3, 0], scale: [0.7, 0.7, 0.7]},
        { position: [56.3, 7, -229.77], rotation: [0, 2.3, 0], scale: [0.9, 0.9, 0.9]},
        { position: [54.3, 7, -222.77], rotation: [0, -2, 0], scale: [0.9, 0.9, 0.9]},
        { position: [-1.684, -6.146, -137.036], rotation: [0, -2, 0], scale: [0.5, 0.5, 0.5]},
        { position: [32.264, 5.2, -76.453], rotation: [0, -2, 0], scale: [0.6, 0.7, 0.8]},
        { position: [32.264, 5, -70], rotation: [0, 1, 0], scale: [0.6, 0.6, 0.6]},
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            tree01_1001.current!.setMatrixAt(i, matrix);
            tree01_1001_1.current!.setMatrixAt(i, matrix);

            tree01_1001.current!.frustumCulled = false;
            tree01_1001_1.current!.frustumCulled = false;

        });

        tree01_1001.current!.instanceMatrix.needsUpdate = true;
        tree01_1001_1.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={tree01_1001} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.tree01_1001.geometry} />
                <meshStandardMaterial attach="material" {...materials.Mat} />
            </instancedMesh>
            <instancedMesh ref={tree01_1001_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.tree01_1001_1.geometry} />
                <meshStandardMaterial attach="material" {...materials.tronco} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/plantas/arbol1.glb`);
