import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        casilleros: THREE.Mesh
    }
    materials: {
        casillero_color: THREE.MeshStandardMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Casillero() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/casillero.glb`) as GLTFResult;

    const casilleros = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-74.3, 6.649, -48.5], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-71.7, 6.7, -60.5], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-70.5, 6.85, -305.52], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [-68.908, 6.85, -314.498], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },

        { position: [-23.072, 6.8, -251.395], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-24.795, 6.8, -244.685], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-26.59, 6.8, -237.685], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [41.05, 7, -506.179], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [43.25, 7, -514.795], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [45.762, 7, -523.291], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [24.93, 6.85, -441.8], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [13.575, 6.9, -396.257], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-69.501, 6.8, -270], rotation: [0, Math.PI / 2.02, 0], scale: [1, 1, 1] },
        { position: [-60.337, 6.8, -268], rotation: [0, Math.PI / 2.02, 0], scale: [1, 1, 1] },
        { position: [-39.338, 6.8, -262.3], rotation: [0, Math.PI / 2.02, 0], scale: [1, 1, 1] },
        { position: [-30.5, 6.8, -260.3], rotation: [0, Math.PI / 2.02, 0], scale: [1, 1, 1] },

        { position: [-73.75, -12.417, -68.75], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-72.2, -12.417, -75.332], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-64.193, -12.627, -110.5], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-62.6, -12.6, -117], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-53.358, -12.417, -132.21], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-46.68, -12.63, -178.51], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-45.13, -12.63, -184.92], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-34.94, -12.45, -226.25], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-27.18, -12.32, -235.43], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-23.45, -12.32, -249.99], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-25.31, -12.32, -242.73], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [-5.847, -12.307, -340.943], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-5, -12.57, -323.27], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-3.23, -12.57, -330.19], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [4.624, -12.293, -381.87], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [6.244, -12.293, -388.4], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [22.081, -12.3, -450.15], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [23.683, -12.3, -456.7], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [24.421, -12.3, -439.196], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [33.957, -12.3, -498.7], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [32.4, -12.3, -492.2], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [55, -12.3, -505], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [56.7, -12.3, -512], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },


    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            casilleros.current!.setMatrixAt(i, matrix);
        });

        casilleros.current!.instanceMatrix.needsUpdate = true;

        casilleros.current!.frustumCulled = false;

        materials.casillero_color.roughness = 0.8;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={casilleros} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.casilleros.geometry} />
                <meshStandardMaterial attach="material" {...materials.casillero_color} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/casillero.glb`);
