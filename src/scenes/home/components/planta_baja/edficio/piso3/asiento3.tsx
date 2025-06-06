import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Chair_Minotti_Mills_N040519013: THREE.Mesh
      Chair_Minotti_Mills_N040519013_1: THREE.Mesh
      Chair_Minotti_Mills_N040519013_2: THREE.Mesh
    }
    materials: {
      st_gold: THREE.MeshPhysicalMaterial
      black_st: THREE.MeshPhysicalMaterial
      st_leather: THREE.MeshPhysicalMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Asiento3_p3() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento3.glb`) as GLTFResult;

    const Chair_Minotti_Mills_N040519013 = useRef<THREE.InstancedMesh>(null);
    const Chair_Minotti_Mills_N040519013_1 = useRef<THREE.InstancedMesh>(null);
    const Chair_Minotti_Mills_N040519013_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [

        // Piso 2
        { position: [147.712, 62.212, -29], rotation: [0, 1.5, 0], scale: [1, 1, 1] },

        { position: [151.719, 62.212, -70], rotation: [0, 3, 0], scale: [1, 1, 1] },
        
        { position: [147, 62.212, -85], rotation: [0, 3, 0], scale: [1, 1, 1] },

        { position: [148.341, 62.212, -92.976], rotation: [0, 1.5, 0], scale: [1, 1, 1] },

        { position: [151.716, 62.212, -108.519], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [143, 62.212, -108.519], rotation: [0, -1.5, 0], scale: [1, 1, 1] },

        { position: [137, 62.212, -129], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [137, 62.212, -133], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [137, 62.212, -137], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [148, 62.212, -129], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [148, 62.212, -133], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [148, 62.212, -137], rotation: [0, 3, 0], scale: [1, 1, 1] },
        
        { position: [101.007, 62.212, -143.134], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [114.846, 62.212, -127.676], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.846, 62.212, -120], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.846, 62.212, -124], rotation: [0, 3, 0], scale: [1, 1, 1] },

        { position: [114.905, 62.212, -106.947], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.905, 62.212, -103], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [102.5, 62.212, -106.947], rotation: [0, -1.5, 0], scale: [1, 1, 1] },

        { position: [113.304, 62.212, -96.591], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [110, 62.212, -96.591], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [114.905, 62.212, -90], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.905, 62.212, -87], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [112, 62.212, -72.7], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [103, 62.212, -77], rotation: [0, -1.5, 0], scale: [1, 1, 1] },

        // Piso 4
        { position: [103, 80.5, -57], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [107, 80.5, -57], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [111, 80.5, -57], rotation: [0, 1.5, 0], scale: [1, 1, 1] },

        { position: [100, 80.5, -65], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [100, 80.5, -69], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [100, 80.5, -73], rotation: [0, 0, 0], scale: [1, 1, 1] },


        { position: [148, 80.5, -77], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [152, 80.5, -48], rotation: [0, 3, 0], scale: [1, 1, 1] },
        
        { position: [102, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [105, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [108, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [111, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [102, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [105, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [108, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [111, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [102, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [105, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [108, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [111, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [102, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [105, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [108, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [111, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [102, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [105, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [108, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [111, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },

        { position: [142, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [145, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [151, 80.5, -90], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [142, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [145, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [151, 80.5, -95], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [142, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [145, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [151, 80.5, -100], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [142, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [145, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [151, 80.5, -105], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [142, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [145, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [151, 80.5, -110], rotation: [0, 1.5, 0], scale: [1, 1, 1] },

    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Chair_Minotti_Mills_N040519013.current!.setMatrixAt(i, matrix);
            Chair_Minotti_Mills_N040519013_1.current!.setMatrixAt(i, matrix);
            Chair_Minotti_Mills_N040519013_2.current!.setMatrixAt(i, matrix);

            Chair_Minotti_Mills_N040519013.current!.frustumCulled = false;
            Chair_Minotti_Mills_N040519013_1.current!.frustumCulled = false;
            Chair_Minotti_Mills_N040519013_2.current!.frustumCulled = false;
        });

        Chair_Minotti_Mills_N040519013.current!.instanceMatrix.needsUpdate = true;
        Chair_Minotti_Mills_N040519013_1.current!.instanceMatrix.needsUpdate = true;
        Chair_Minotti_Mills_N040519013_2.current!.instanceMatrix.needsUpdate = true;
        //materials.Base_id.roughness = 1;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Chair_Minotti_Mills_N040519013} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Chair_Minotti_Mills_N040519013.geometry} />
                <meshStandardMaterial attach="material" {...materials['st_gold']} />
            </instancedMesh>
            <instancedMesh ref={Chair_Minotti_Mills_N040519013_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Chair_Minotti_Mills_N040519013_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['black_st']} />
            </instancedMesh>
            <instancedMesh ref={Chair_Minotti_Mills_N040519013_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Chair_Minotti_Mills_N040519013_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['st_leather']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento3.glb`);
