import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Cubo123: THREE.Mesh
        Cubo123_1: THREE.Mesh
        Cubo123_2: THREE.Mesh
        Cubo123_3: THREE.Mesh
        Cubo123_4: THREE.Mesh
    }
    materials: {
        ['pared blanca']: THREE.MeshStandardMaterial
        ['madera paredes']: THREE.MeshStandardMaterial
        ['madera clara 2']: THREE.MeshStandardMaterial
        ['barras cuartos']: THREE.MeshStandardMaterial
        ['piso aulas']: THREE.MeshStandardMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Aula_3_arriba() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_3_arriba.glb`) as GLTFResult;

    const Cubo123 = useRef<THREE.InstancedMesh>(null);
    const Cubo123_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo123_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo123_3 = useRef<THREE.InstancedMesh>(null);
    const Cubo123_4 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-83.729, 10.186, -140.592], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-76.885, 10.186, -167.815], rotation: [0, -0.0004, 0], scale: [1, 1, 0.999] },
        { position: [-55.884, 10.186, -250.419], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-35.77, 10.186, -329.7], rotation: [0, -0.00065, 0], scale: [1, 1, 1] },
        { position: [-14.831, 10.186, -412.37], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-7.89, 10.186, -439.556], rotation: [0, 0, 0], scale: [1, 1, 0.999] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo123.current!.setMatrixAt(i, matrix);
            Cubo123_1.current!.setMatrixAt(i, matrix);
            Cubo123_2.current!.setMatrixAt(i, matrix);
            Cubo123_3.current!.setMatrixAt(i, matrix);
            Cubo123_4.current!.setMatrixAt(i, matrix);
        });

        Cubo123.current!.instanceMatrix.needsUpdate = true;
        Cubo123_1.current!.instanceMatrix.needsUpdate = true;
        Cubo123_2.current!.instanceMatrix.needsUpdate = true;
        Cubo123_3.current!.instanceMatrix.needsUpdate = true;
        Cubo123_4.current!.instanceMatrix.needsUpdate = true;

        Cubo123.current!.frustumCulled = false;
        Cubo123_1.current!.frustumCulled = false;
        Cubo123_2.current!.frustumCulled = false;
        Cubo123_3.current!.frustumCulled = false;
        Cubo123_4.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo123} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo123.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Cubo123_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo123_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo123_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo123_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2']} />
            </instancedMesh>
            <instancedMesh ref={Cubo123_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo123_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
            </instancedMesh>
            <instancedMesh ref={Cubo123_4} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo123_4.geometry} />
                <meshStandardMaterial attach="material" {...materials['piso aulas']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_3_arriba.glb`);
