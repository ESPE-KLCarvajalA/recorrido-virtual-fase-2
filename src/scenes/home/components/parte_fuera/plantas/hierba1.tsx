import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      hierba1: THREE.Mesh
    }
    materials: {
      mat10: THREE.MeshStandardMaterial
    }
  }
  
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Hiberba1() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/plantas/hierba1.glb`) as GLTFResult;

    const hierba1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-22.877, -9.917, -57.288], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [68.211, 2, -161.052], rotation: [0, 0, 0], scale: [1, 1.5, 1] },
        { position: [-16.913, -9.917, -82.834], rotation: [0, 1, 0], scale: [1, 1, 1] },
        { position: [-10.091, -9.917, -111.07], rotation: [0, -1.2, 0], scale: [1, 1, 1] },
        { position: [3.724, -9.917, -168.963], rotation: [0, 0.5, 0], scale: [1, 1, 1] },
        { position: [16.399, -9.682, -215.772], rotation: [0, 0.8, 0], scale: [1, 1, 1] },
        
        { position: [97.822, 3.4, -156.804], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },
        { position: [123.549, 3.2, -156.814], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },
        { position: [147.07, 3, -157.093], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },
        
        { position: [200.945, 3, -393.184], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },

        { position: [166.365, 3, -77.743], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },
        { position: [166.527, 3, -103.469], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },
        { position: [166.408, 3, -126.971], rotation: [0, 0, 0], scale: [1.5, 2, 1.5] },
       
        { position: [40.415, -9.738, -312.945], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [49.209, -9.809, -346.808], rotation: [0, 1, 0], scale: [1, 1, 1] },
        { position: [58.112, -9.809, -382.492], rotation: [0, 0.5, 0], scale: [1, 1, 1] },
        { position: [69.839, -8.722, -430.356], rotation: [0, -1, 0], scale: [1, 1, 1] },
        { position: [83.803, -9.574, -478.071], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [92.478, -9.574, -513.092], rotation: [0, 0.4, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            hierba1.current!.setMatrixAt(i, matrix);

            hierba1.current!.frustumCulled = false;
        });

        hierba1.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={hierba1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.hierba1.geometry} />
                <meshStandardMaterial attach="material" {...materials.mat10} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/plantas/hierba1.glb`);
