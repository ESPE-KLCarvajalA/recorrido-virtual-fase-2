import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        rejilla_puerta004: THREE.Mesh;
    };
    materials: {
        ['Material.006']: THREE.MeshStandardMaterial;
    };
};

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Rejilla() {
    const { nodes, materials } = useGLTF('models/rejilla/rejilla.glb') as unknown as GLTFResult;

    const meshRef = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [431.91, 32.253, -349.326], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [477.383, 32.218, -361.549], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [539.536, 32, -378], rotation: [0, 0, 0], scale: [0.8, 0.95, 1] },
        { position: [578.679, 32, -278.097], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [587.731, 32, -245.404], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [603.677, 32, -186.33], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [397.316, 32, -373.437], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [389.123, 30, -426], rotation: [0, -1.2, 0], scale: [0.9, 0.8, 1] },
        { position: [342, 30, -487], rotation: [0, -1.2, 0], scale: [0.85, 0.8, 1] },

        { position: [239, 36.024, -94], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [237, 36.024, -35], rotation: [0, -1.8, 0], scale: [1.6, 1, 1] },
        { position: [307.456, 35, -167.029], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [307.456, 35, -231.007], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [307.456, 35, -305.134], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [307.456, 35, -368.625], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },

        { position: [274, 32, -407.077], rotation: [0, -0.1, 0], scale: [1.5, 0.9, 1] },
        { position: [201.321, 33, -475.267], rotation: [0, -0.2, 0], scale: [1.5, 0.9, 1] },
        { position: [54.762, 33, -475.287], rotation: [0, -0.2, 0], scale: [1.5, 0.9, 1] },
        { position: [-29, 33, -443], rotation: [0, -1.7, 0], scale: [1.6, 0.9, 1] },

        { position: [169.422, 42, -316], rotation: [0, -1.8, 0], scale: [1, 0.5, 1] },
        { position: [169.422, 42, -230.945], rotation: [0, -1.8, 0], scale: [1.7, 0.5, 1] },
        { position: [65.279, 31, -131], rotation: [0, -0.2, 0], scale: [1.5, 0.9, 1] },

        { position: [65.279, 35, -3.785], rotation: [0, 0, 0], scale: [1.5, 1, 1] },

        { position: [-95.102, 35, -104], rotation: [0, -0.2, 0], scale: [1.5, 1, 1] },

        { position: [-28.35, 29, -174], rotation: [0, -1.7, 0], scale: [1.7, 1.2, 1] },
        { position: [-101.709, 53, -322.604], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [-101.709, 53, -386.452], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [-101.709, 53, -452.295], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },

        { position: [-238, 55, -453], rotation: [0, -1.8, 0], scale: [1.6, 1, 1] },
        { position: [-239, 55, -387], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [-238, 57, -322.348], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },

        { position: [-237, 35, -87.462], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [-199.214, 35, -3.131], rotation: [0, -0.2, 0], scale: [1.5, 1, 1] },
        { position: [-74.674, 35, -3.269], rotation: [0, -0.2, 0], scale: [1.5, 1, 1] },

        { position: [164, 19, -279], rotation: [0,-1.94,0], scale: [0.7, 1.7, 1] },
        { position: [112.5, 20, -133], rotation: [0, -0.4, 0], scale: [0.7, 1.7, 1] },
        { position: [164, 19, -143], rotation: [0,-1.94,0], scale: [0.7, 1.7, 1] },
        { position: [596, 22, -214], rotation: [0,-1.7,0], scale: [0.7, 1.7, 1] },
        { position: [-34.06, 20, -369.5], rotation: [0,-1.94,0], scale: [0.7, 1.8, 1] },
        { position: [148, 20, -344], rotation: [0, -0.35, 0], scale: [0.7, 1.7, 1] },
        { position: [-60, 19, -223], rotation: [0,-1.94,0], scale: [0.7, 1.7, 1] },
        {
            position: [-241, 26, -257.5],
            rotation: [0,-1.75,0], // equivale a [1.571, 0, 1.571] en radianes
            scale: [1.56,2,1]
          }
          


    ];




    useEffect(() => {
        instances.forEach((inst, i) => {
            const pos = new THREE.Vector3(...inst.position);
            const rot = new THREE.Euler(...inst.rotation);
            const scl = new THREE.Vector3(...inst.scale);
            const matrix = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);
            meshRef.current!.setMatrixAt(i, matrix);
        });
        meshRef.current!.instanceMatrix.needsUpdate = true;
        meshRef.current!.frustumCulled = false;
    }, [instances]);

    return (
        <instancedMesh
            ref={meshRef}
            args={[null, null, instances.length]}
            geometry={nodes.rejilla_puerta004.geometry}
            material={materials['Material.006']}
        />
    );
}

useGLTF.preload('models/rejilla/rejilla.glb');
