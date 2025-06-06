import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Cubo128: THREE.Mesh
        Cubo128_1: THREE.Mesh
        Cubo128_2: THREE.Mesh
    }
    materials: {
        ['madera paredes']: THREE.MeshStandardMaterial
        ['plateado columnas']: THREE.MeshStandardMaterial
        ['pared blanca']: THREE.MeshStandardMaterial
    }
}
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Columnas1() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna1.glb`) as GLTFResult;

    const Cubo128 = useRef<THREE.InstancedMesh>(null);
    const Cubo128_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo128_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-68.858, 9.576, -92.866], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-68.871, -9.807, -92.869], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-41.142, -9.807, -202.724], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-0.505, -9.77, -364.821], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [27.305, -9.823, -474.591], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-41.13, 9.609, -202.721], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-0.505, 9.605, -364.821], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [27.305, 9.551, -474.591], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo128.current!.setMatrixAt(i, matrix);
            Cubo128_1.current!.setMatrixAt(i, matrix);
            Cubo128_2.current!.setMatrixAt(i, matrix);
        });

        Cubo128.current!.instanceMatrix.needsUpdate = true;
        Cubo128_1.current!.instanceMatrix.needsUpdate = true;
        Cubo128_2.current!.instanceMatrix.needsUpdate = true;

        Cubo128.current!.frustumCulled = false;
        Cubo128_1.current!.frustumCulled = false;
        Cubo128_2.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo128} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo128.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo128_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo128_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['plateado columnas']} />
            </instancedMesh>
            <instancedMesh ref={Cubo128_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo128_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna1.glb`);
