import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      mesh1573540807001: THREE.Mesh
      mesh1573540807001_1: THREE.Mesh
    }
    materials: {
      mat10: THREE.MeshStandardMaterial
      mat20: THREE.MeshStandardMaterial
    }
  }
  
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Arbol2() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/parte_fuera/plantas/arbol2.glb`) as GLTFResult;

    const mesh1573540807001 = useRef<THREE.InstancedMesh>(null);
    const mesh1573540807001_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [1.015, -1.968, -134.568], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [205.945, 15, -399], rotation: [0, 0.3, 0], scale: [1, 2, 1.2] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            mesh1573540807001.current!.setMatrixAt(i, matrix);
            mesh1573540807001_1.current!.setMatrixAt(i, matrix);

            mesh1573540807001.current!.frustumCulled = false;
            mesh1573540807001_1.current!.frustumCulled = false;
        });

        mesh1573540807001.current!.instanceMatrix.needsUpdate = true;
        mesh1573540807001_1.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={mesh1573540807001} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.mesh1573540807001.geometry} />
                <meshStandardMaterial attach="material" {...materials.mat10} />
            </instancedMesh>
            <instancedMesh ref={mesh1573540807001_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.mesh1573540807001_1.geometry} />
                <meshStandardMaterial attach="material" {...materials.mat20} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/parte_fuera/plantas/arbol2.glb`);
