import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Plano016: THREE.Mesh
        Plano016_1: THREE.Mesh
        Plano016_2: THREE.Mesh
    }
    materials: {
        ['pisos edificio']: THREE.MeshStandardMaterial
        ['piso base']: THREE.MeshStandardMaterial
        ['entrada piso edificio']: THREE.MeshStandardMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Piso_base_edificio() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso_base.glb`) as GLTFResult;

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [61, 1.7, 96.5],
        position: [124.694, 0.4, -98.354],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [61, 1.7, 140],
        position: [124.694, 20, -74],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [61, 1.7, 140],
        position: [124.694, 40, -74],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [61, 1.7, 140],
        position: [124.694, 59, -74],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [61, 1.7, 140],
        position: [124.694, 78, -74],
    }));

    const Plano016 = useRef<THREE.InstancedMesh>(null);
    const Plano016_1 = useRef<THREE.InstancedMesh>(null);
    const Plano016_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [124.694, 0.609, -98.354], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Plano016.current!.setMatrixAt(i, matrix);
            Plano016_1.current!.setMatrixAt(i, matrix);
            Plano016_2.current!.setMatrixAt(i, matrix);

            Plano016.current!.frustumCulled = false;
            Plano016_1.current!.frustumCulled = false;
            Plano016_2.current!.frustumCulled = false;
        });

        Plano016.current!.instanceMatrix.needsUpdate = true;
        Plano016_1.current!.instanceMatrix.needsUpdate = true;
        Plano016_2.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Plano016} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Plano016.geometry} />
                <meshStandardMaterial attach="material" {...materials['pisos edificio']} />
            </instancedMesh>
            <instancedMesh ref={Plano016_1} castShadow receiveShadow args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Plano016_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['piso base']} />
            </instancedMesh>
            <instancedMesh ref={Plano016_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Plano016_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['entrada piso edificio']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso_base.glb`);
