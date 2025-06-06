import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        CouchMesh_PBR_0: THREE.Mesh
    }
    materials: {
        material: THREE.MeshPhysicalMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Asiento1() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento1.glb`) as GLTFResult;

    const CouchMesh_PBR_0 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [114.314, 1.48, -58], rotation: [-Math.PI / 2, 0, -Math.PI], scale: [3.1, 6.8, 6.8] },
        { position: [108, 1.48, -58], rotation: [-Math.PI / 2, 0, -Math.PI], scale: [3.1, 6.8, 6.8] },

        { position: [98.5, 1.48, -72], rotation: [-Math.PI / 2, 0, Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [98.5, 1.48, -66], rotation: [-Math.PI / 2, 0, Math.PI / 2], scale: [3.1, 6.8, 6.8] },

        { position: [109.041, 1.48, -81.896], rotation: [-Math.PI / 2, 0, 0], scale: [3.1, 6.8, 6.8] },
        { position: [115, 1.48, -81.896], rotation: [-Math.PI / 2, 0, 0], scale: [3.1, 6.8, 6.8] },

        // piso 1
        { position: [135.215, 21, -35.215], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.215, 21, -39.903], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.383, 21, -30.826], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },

        // piso 2
        { position: [135.215, 40.1, -35.215], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.215, 40.1, -39.903], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.3, 40.1, -30.826], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },

        // piso 3
        { position: [135.215, 60.1, -35.215], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.215, 60.1, -39.903], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.3, 60.1, -30.826], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },

        { position: [103.215, 60.1, -56.5], rotation: [-Math.PI / 2, 0, -Math.PI ], scale: [3.1, 6.8, 6.8] },
        { position: [108, 60.1, -56.5], rotation: [-Math.PI / 2, 0, -Math.PI ], scale: [3.1, 6.8, 6.8] },
        { position: [113, 60.1, -56.5], rotation: [-Math.PI / 2, 0, -Math.PI ], scale: [3.1, 6.8, 6.8] },

        // Piso 4
        { position: [135.215, 79, -35.215], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.215, 79, -39.903], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },
        { position: [135.3, 79, -30.826], rotation: [-Math.PI / 2, 0, -Math.PI / 2], scale: [3.1, 6.8, 6.8] },


    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            CouchMesh_PBR_0.current!.setMatrixAt(i, matrix);

            CouchMesh_PBR_0.current!.frustumCulled = false;
        });

        CouchMesh_PBR_0.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={CouchMesh_PBR_0} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.CouchMesh_PBR_0.geometry} />
                <meshStandardMaterial attach="material" {...materials['material']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento1.glb`);
