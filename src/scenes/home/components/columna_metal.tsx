import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      a_viga_export: THREE.Mesh
    }
    materials: {
      barras: THREE.MeshStandardMaterial
    }
  }  
  
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Columna_metal() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/columna_metal.glb`) as GLTFResult;

    const a_viga_export = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [211.46, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-152.526, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [183.461, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [155.462, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [127.463, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [99.464, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [71.465, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [43.466, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [15.467, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-12.532, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-40.53, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-68.529, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-96.528, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-124.527, 10.248, 30.644], rotation: [0, 0, 0], scale: [1, 1, 1] },
        
        { position: [-164.371, 10.233, 25.047], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-140.415, 10.218, -69.43], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-158.388, 10.233, 1.426], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-152.408, 10.218, -22.195], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-146.411, 10.218, -45.813], rotation: [0, 1.37, 0], scale: [1, 1, 1] },

        { position: [32.31, 10.247, -413.594], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [59.681, 10.251, -523.986], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-56.449, 10.248, -60.596], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-49.622, 10.248, -87.75], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-42.794, 10.248, -114.904], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-35.966, 10.248, -142.057], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-29.139, 10.247, -169.211], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-22.311, 10.247, -196.365], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-15.483, 10.247, -223.518], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-8.656, 10.247, -250.672], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-1.828, 10.247, -277.826], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [5, 10.247, -304.979], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [11.827, 10.247, -332.133], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [18.655, 10.247, -359.287], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [25.483, 10.247, -386.44], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [32.719, 10.251, -415.285], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [39.459, 10.251, -442.46], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [46.2, 10.251, -469.635], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [52.94, 10.251, -496.811], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        
        { position: [32.31, -9.072, -413.594], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [59.681, -9.072, -523.986], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-56.449, -9.072, -60.596], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-49.622, -9.072, -87.75], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-42.794, -9.072, -114.904], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-35.966, -9.072, -142.057], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-29.139, -9.072, -169.211], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-22.311, -9.072, -196.365], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-15.483, -9.072, -223.518], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-8.656, -9.072, -250.672], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [-1.828, -9.072, -277.826], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [5, -9.072, -304.979], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [11.827, -9.072, -332.133], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [18.655, -9.072, -359.287], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [25.483, -9.072, -386.44], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [32.719, -9.072, -415.285], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [39.459, -9.072, -442.46], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [46.2, -9.072, -469.635], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        { position: [52.94, -9.072, -496.811], rotation: [0, 1.37, 0], scale: [1, 1, 1] },
        
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            a_viga_export.current!.setMatrixAt(i, matrix);
            a_viga_export.current!.frustumCulled = false;
        });

        a_viga_export.current!.instanceMatrix.needsUpdate = true;


        materials.barras.roughness = 0.8;
    }, [instances]);

    return (
        <group>
            <instancedMesh ref={a_viga_export} castShadow receiveShadow args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.a_viga_export.geometry} />
                <meshStandardMaterial attach="material" {...materials.barras} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/columna_metal.glb`);
