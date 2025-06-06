import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Cubo233: THREE.Mesh
      Cubo233_1: THREE.Mesh
    }
    materials: {
      ['plateado columnas']: THREE.MeshStandardMaterial
      ['pared blanca']: THREE.MeshStandardMaterial
    }
  }
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Columnas2() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna2.glb`) as GLTFResult;

    const Cubo233 = useRef<THREE.InstancedMesh>(null);
    const Cubo233_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-121.185, 10.361, -106.549], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-114.181, 10.309, -134.263], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-107.35, 10.316, -161.46], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-93.431, 10.375, -216.369], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-86.427, 10.337, -244.083], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-52.301, 10.459, -378.334], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-45.132, 10.472, -406.577], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-38.241, 10.485, -433.762], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-24.519, 10.512, -488.143], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-100.436, 10.332, -188.651], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-17.435, 10.332, -515.88], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo233.current!.setMatrixAt(i, matrix);
            Cubo233_1.current!.setMatrixAt(i, matrix);
        });

        Cubo233.current!.instanceMatrix.needsUpdate = true;
        Cubo233_1.current!.instanceMatrix.needsUpdate = true;

        Cubo233.current!.frustumCulled = false;
        Cubo233_1.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo233} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo233.geometry} />
                <meshStandardMaterial attach="material" {...materials['plateado columnas']} />
            </instancedMesh>
            <instancedMesh ref={Cubo233_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo233_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna2.glb`);
