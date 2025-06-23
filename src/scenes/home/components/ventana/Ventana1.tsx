import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        WindowFrane005: THREE.Mesh;
        WindowFrane005_1: THREE.Mesh;
    };
    materials: {
        ['Material.072']: THREE.MeshStandardMaterial;
        ['Material.102']: THREE.MeshStandardMaterial;
    };
};

type InstanceData = {
    name: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Ventana1() {
    const { nodes, materials } = useGLTF(
        'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana1.glb'
    ) as unknown as GLTFResult;

    const frameRef = useRef<THREE.InstancedMesh>(null);
    const glassRef = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        {
            name: 'VentanaPrincipal',
            position: [430.901, 32.5174, -351.084], rotation: [0, 0, 0], scale: [1, 1, 1],
        },
        {
            name: 'WindowR001',
            position: [477.353, 32.834, -363.356], rotation: [0, 0, 0], scale: [1, 1, 1],
        },
        {
            name: 'WindowL001',
            position: [539.9, 32.517, -382],
            rotation: [0, -0.07, 0],
            scale: [0.8, 1, 1],
        },
        {
            name: 'WindowFrane001_1',
            position: [556.373, 32.857, -368.78],
            rotation: [0, -1.63, 0],
            scale: [0.8, 1, 1],
        },
        {
            name: 'WindowFrane001_2',
            position: [580.481, 32.715, -278.365],
            rotation: [0, -1.6, 0],
            scale: [1, 1, 1],
        },
        {
            name: 'WindowFrane001_3',
            position: [589, 32.758, -245.441],
            rotation: [0, -1.6, 0],
            scale: [1, 1, 1],
        },
        {
            name: 'WindowFrane001_4',
            position: [605, 32.936, -186.448],
            rotation: [0, -1.6, 0],
            scale: [1, 1, 1],
        },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(...instance.scale);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            frameRef.current!.setMatrixAt(i, matrix);
            glassRef.current!.setMatrixAt(i, matrix);
        });

        frameRef.current!.instanceMatrix.needsUpdate = true;
        glassRef.current!.instanceMatrix.needsUpdate = true;

        frameRef.current!.frustumCulled = false;
        glassRef.current!.frustumCulled = false;
    }, [instances]);

    return (
        <group>
            <instancedMesh
                ref={frameRef}
                args={[null, null, instances.length]}
                geometry={nodes.WindowFrane005.geometry}
                material={materials['Material.072']}
            />
            <instancedMesh
                ref={glassRef}
                args={[null, null, instances.length]}
                geometry={nodes.WindowFrane005_1.geometry}
                material={materials['Material.102']}
            />
        </group>
    );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana1.glb');
