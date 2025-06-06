import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
      Cubo104: THREE.Mesh
      Cubo104_1: THREE.Mesh
      Cubo104_2: THREE.Mesh
    }
    materials: {
      ['verde.001']: THREE.MeshStandardMaterial
      ['pared blanca']: THREE.MeshStandardMaterial
      barras: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Pared_externa() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_externa.glb`) as GLTFResult;

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [60, 98, 2],
        position: [124.694, 43, -147.9],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [60, 98, 2],
        position: [124.694, 43, -27],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [2, 98, 90],
        position: [93.5, 43, -100.9],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [2, 98, 89],
        position: [156, 43, -100.9],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [2, 75, 40],
        position: [93.5, 53, -40],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [2, 75, 40],
        position: [156, 53, -40],
    }));

    const Cubo104 = useRef<THREE.InstancedMesh>(null);
    const Cubo104_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo104_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [124.694, 9.397, -101.331], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 28.707, -101.331], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 48.017, -101.331], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 67.326, -101.331], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 86.636, -101.331], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo104.current!.setMatrixAt(i, matrix);
            Cubo104_1.current!.setMatrixAt(i, matrix);
            Cubo104_2.current!.setMatrixAt(i, matrix);

            Cubo104.current!.frustumCulled = false;
            Cubo104_1.current!.frustumCulled = false;
            Cubo104_2.current!.frustumCulled = false;
        });

        Cubo104.current!.instanceMatrix.needsUpdate = true;
        Cubo104_1.current!.instanceMatrix.needsUpdate = true;
        Cubo104_2.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo104} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo104.geometry} />
                <meshStandardMaterial attach="material" {...materials['verde.001']} />
            </instancedMesh>
            <instancedMesh ref={Cubo104_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo104_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Cubo104_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo104_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_externa.glb`);
