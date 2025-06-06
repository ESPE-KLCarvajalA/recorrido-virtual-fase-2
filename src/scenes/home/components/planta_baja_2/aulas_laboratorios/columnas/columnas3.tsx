import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        columna025: THREE.Mesh
    }
    materials: {
        ['pared blanca']: THREE.MeshStandardMaterial
    }
}
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Columnas3() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna3.glb`) as GLTFResult;

    const columna025 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-128.526, -9.021, -77.552], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-121.197, -9.021, -106.552], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-114.193, -9.072, -134.266], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-107.32, -9.066, -161.463], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-100.448, -9.047, -188.654], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-93.443, -8.999, -216.372], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-86.439, -9.034, -244.086], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-66.506, -9.006, -322.96], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-59.5, -9.006, -350.685], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-17.52, -8.823, -515.891], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-52.314, -8.901, -378.337], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-45.145, -8.884, -406.58], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-38.254, -8.871, -433.765], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-31.709, -8.871, -459.663], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-24.531, -8.836, -488.146], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-10.998, -8.823, -541.695], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-73.11, -9, -296.887], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            columna025.current!.setMatrixAt(i, matrix);
        });

        columna025.current!.instanceMatrix.needsUpdate = true;

        columna025.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={columna025} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.columna025.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna3.glb`);
