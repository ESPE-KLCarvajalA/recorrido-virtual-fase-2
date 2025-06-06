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

export function Asiento3() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/asiento3.glb`) as GLTFResult;

    const Chair_Minotti_Mills_N040519013 = useRef<THREE.InstancedMesh>(null);
    const Chair_Minotti_Mills_N040519013_1 = useRef<THREE.InstancedMesh>(null);
    const Chair_Minotti_Mills_N040519013_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [98.655, 3.6, -91.228], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [105.768, 3.6, -91.228], rotation: [Math.PI, -0.167, Math.PI], scale: [1, 1, 1] },
        
        { position: [110.875, 3.6, -111.062], rotation: [Math.PI, -0.402, Math.PI], scale: [1, 1, 1] },
        { position: [110.875, 3.6, -107.167], rotation: [Math.PI, -0.048, Math.PI], scale: [1, 1, 1] },
        { position: [101.511, 3.6, -109.239], rotation: [0, 0, 0], scale: [1, 1, 1] },
        
        { position: [137.899, 3.593, -67.474], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [147.872, 3.593, -67.781], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [152.102, 3.593, -67.781], rotation: [0, -1.7, 0], scale: [1, 1, 1] },
        { position: [151.847, 3.593, -80.803], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [137.273, 3.593, -60.24], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [147.915, 3.593, -60.24], rotation: [0, 1.6, 0], scale: [1, 1, 1] },
        { position: [143.361, 3.593, -78.52], rotation: [0, 0, 0], scale: [1, 1, 1] },

        { position: [100.92, 3.6, -143.259], rotation: [0, -1.278, 0], scale: [1, 1, 1] },
        { position: [102.448, 3.6, -118.886], rotation: [0, 1.196, 0], scale: [1, 1, 1] },
        { position: [103.642, 3.6, -127.68], rotation: [Math.PI, -1.502, Math.PI], scale: [1, 1, 1] },
        { position: [100.168, 3.6, -127.68], rotation: [0, -1.375, 0], scale: [1, 1, 1] },
        
        { position: [139.728, 3.593, -124.319], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [147.872, 3.593, -124.625], rotation: [0, -1.6, 0], scale: [1, 1, 1] },
        { position: [152.102, 3.593, -124.625], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [139.514, 3.593, -117.19], rotation: [0, 1.8, 0], scale: [1, 1, 1] },
        { position: [147.915, 3.593, -117.084], rotation: [0, 1.4, -0], scale: [1, 1, 1] },

        { position: [149.161, 3.6, -140.335], rotation: [Math.PI, 0, Math.PI], scale: [1, 1, 1] },
        { position: [141.137, 3.6, -140.335], rotation: [0, -0.16, 0], scale: [1, 1, 1] },

        { position: [147.678, 3.593, -101.713], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [137.705, 3.593, -101.407], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [133.474, 3.593, -101.407], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148.303, 3.593, -108.947], rotation: [0, -1.8, 0], scale: [1, 1, 1] },
        { position: [137.661, 3.593, -108.947], rotation: [0, -1.7, 0], scale: [1, 1, 1] },

        // Piso 1
        { position: [147.714, 22.8, -29.301], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [147.577, 22.8, -36.84], rotation: [0, -1, 0], scale: [1, 1, 1] },
        
        { position: [147.915, 22.8, -59], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [137.273, 22.8, -60.24], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [142.864, 22.8, -71.653], rotation: [0, -1.7, 0], scale: [1, 1, 1] },
        
        { position: [143.361, 22.8, -78.52], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [151.847, 22.8, -79.312], rotation: [0, 3, 0], scale: [1, 1, 1] },
        
        { position: [110.09, 22.8, -108.551], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [100.92, 22.8, -143.259], rotation: [0, -1.278, 0], scale: [1, 1, 1] },
        { position: [102.448, 22.8, -118.886], rotation: [0, 1.196, 0], scale: [1, 1, 1] },
        { position: [103.642, 22.8, -127.68], rotation: [Math.PI, -1.502, Math.PI], scale: [1, 1, 1] },
        
        { position: [147.872, 22.8, -122.5], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [149, 22.8, -130.388], rotation: [0, -1.7, 0], scale: [1, 1, 1] },
        
        { position: [138, 22.8, -101.874], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [137.702, 22.8, -94.639], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [148.344, 22.8, -94.639], rotation: [0, 1.5, 0], scale: [1, 1, 1] },   
        { position: [148.3, 22.8, -102.18], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        
        { position: [114.921, 22.8, -93.027], rotation: [Math.PI, -1.191, Math.PI], scale: [1, 1, 1] },
        
        { position: [108.355, 22.8, -79.083], rotation: [0, -1, 0], scale: [1, 1, 1] },
        { position: [103.727, 22.8, -74.239], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [103.727, 22.8, -70.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [103.727, 22.8, -66.378], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [113.293, 22.8, -66.627], rotation: [Math.PI, 0, Math.PI], scale: [1, 1, 1] },
        { position: [113.293, 22.8, -72.048], rotation: [Math.PI, 0, Math.PI], scale: [1, 1, 1] },
        { position: [134.154, 22.8, -136.55], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [134.154, 22.8, -132.807], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [134.154, 22.8, -128.689], rotation: [0, 0, 0], scale: [1, 1, 1] },

        // Piso 2
        { position: [147.712, 42.212, -29], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [151.719, 42.212, -60.899], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [143, 42.212, -60.899], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [151.719, 42.212, -79], rotation: [0, 3, 0], scale: [1, 1, 1] },

        { position: [148.341, 42.212, -92.976], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [137, 42.212, -92.976], rotation: [0, 1.5, 0], scale: [1, 1, 1] },

        { position: [151.716, 42.212, -108.519], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [143, 42.212, -108.519], rotation: [0, 3, 0], scale: [1, 1, 1] },

        { position: [151.716, 42.212, -123.946], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [143, 42.212, -123.946], rotation: [0, 3, 0], scale: [1, 1, 1] },
        
        { position: [151.716, 42.212, -138.646], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [143, 42.212, -138.646], rotation: [0, 3, 0], scale: [1, 1, 1] },
        
        { position: [101.007, 42.219, -143.134], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [102.575, 42.219, -119.037], rotation: [0, 1.5, 0], scale: [1, 1, 1] },
        { position: [114.846, 42.219, -127.676], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.846, 42.219, -120], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.846, 42.219, -124], rotation: [0, 3, 0], scale: [1, 1, 1] },

        { position: [114.905, 42.219, -106.947], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.905, 42.219, -103], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [102.5, 42.219, -106.947], rotation: [0, -1.5, 0], scale: [1, 1, 1] },

        { position: [113.304, 42.219, -96.591], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [110, 42.219, -96.591], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [114.905, 42.219, -90], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.905, 42.219, -87], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.905, 42.219, -72], rotation: [0, 3, 0], scale: [1, 1, 1] },
        { position: [114.905, 42.219, -58], rotation: [0, 3, 0], scale: [1, 1, 1] },

        { position: [103, 42.219, -61], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        { position: [103, 42.219, -77], rotation: [0, -1.5, 0], scale: [1, 1, 1] },
        

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
