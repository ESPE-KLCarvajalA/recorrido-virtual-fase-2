import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Cubo142: THREE.Mesh
        Cubo142_1: THREE.Mesh
    }
    materials: {
        ['madera paredes']: THREE.MeshStandardMaterial
        ['Material.021']: THREE.MeshPhysicalMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Banca_aula() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/banca_aula.glb`) as GLTFResult;

    const Cubo142 = useRef<THREE.InstancedMesh>(null);
    const Cubo142_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-73.048, 2.776, -72.509], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-62.794, 2.783, -112.863], rotation: [0, Math.PI/1.19, 0], scale: [-1, 1, 1] },
        { position: [-45.312, 2.776, -182.258], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-35.008, 2.783, -222.695], rotation: [0, Math.PI/1.19, 0], scale: [-1, 1, 1] },
        { position: [-4.252, 2.776, -344.225], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [23.572, 2.776, -454.042], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [6.068, 2.783, -384.601], rotation: [0, Math.PI/1.182, 0], scale: [-1, 1, 1] },
        { position: [33.904, 2.783, -494.461], rotation: [0, Math.PI/1.184, 0], scale: [-1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo142.current!.setMatrixAt(i, matrix);
            Cubo142_1.current!.setMatrixAt(i, matrix);
        });

        Cubo142.current!.instanceMatrix.needsUpdate = true;
        Cubo142_1.current!.instanceMatrix.needsUpdate = true;

        Cubo142.current!.frustumCulled = false;
        Cubo142_1.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo142} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo142.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo142_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo142_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['Material.021']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/banca_aula.glb`);
