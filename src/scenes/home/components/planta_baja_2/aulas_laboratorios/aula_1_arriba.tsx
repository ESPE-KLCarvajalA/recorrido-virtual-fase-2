import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Cubo012: THREE.Mesh
        Cubo012_1: THREE.Mesh
        Cubo012_2: THREE.Mesh
        Cubo012_3: THREE.Mesh
        Cubo012_4: THREE.Mesh
        Cubo012_5: THREE.Mesh
    }
    materials: {
        ['madera paredes']: THREE.MeshStandardMaterial
        vidrio: THREE.MeshStandardMaterial
        ['madera clara 2']: THREE.MeshStandardMaterial
        ['barras cuartos']: THREE.MeshStandardMaterial
        ['pared blanca']: THREE.MeshStandardMaterial
        ['piso aulas']: THREE.MeshStandardMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Aula_1_arriba() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_1_arriba.glb`) as GLTFResult;

    const Cubo012 = useRef<THREE.InstancedMesh>(null);
    const Cubo012_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo012_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo012_3 = useRef<THREE.InstancedMesh>(null);
    const Cubo012_4 = useRef<THREE.InstancedMesh>(null);
    const Cubo012_5 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-100.123, 10.284, -86.037], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-72.38, 10.295, -195.9], rotation: [0, 0.00, 0], scale: [1, 1, 0.998] },
        { position: [-31.24, 10.3, -357.825], rotation: [0, 0, 0], scale: [1, 1, 0.998] },
        { position: [-3.4, 10.484, -467.654], rotation: [0, 0.0004, 0], scale: [1, 1, 1] },
    ];

    materials.vidrio = new THREE.MeshStandardMaterial({
        color: 'white',
        opacity: 0.15,
        transparent: true,
        roughness: 0.7,
        metalness: 0.1,
    });

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo012.current!.setMatrixAt(i, matrix);
            Cubo012_1.current!.setMatrixAt(i, matrix);
            Cubo012_2.current!.setMatrixAt(i, matrix);
            Cubo012_3.current!.setMatrixAt(i, matrix);
            Cubo012_4.current!.setMatrixAt(i, matrix);
            Cubo012_5.current!.setMatrixAt(i, matrix);


        });

        Cubo012.current!.instanceMatrix.needsUpdate = true;
        Cubo012_1.current!.instanceMatrix.needsUpdate = true;
        Cubo012_2.current!.instanceMatrix.needsUpdate = true;
        Cubo012_3.current!.instanceMatrix.needsUpdate = true;
        Cubo012_4.current!.instanceMatrix.needsUpdate = true;
        Cubo012_5.current!.instanceMatrix.needsUpdate = true;

        Cubo012.current!.frustumCulled = false;
        Cubo012_1.current!.frustumCulled = false;
        Cubo012_2.current!.frustumCulled = false;
        Cubo012_3.current!.frustumCulled = false;
        Cubo012_4.current!.frustumCulled = false;
        Cubo012_5.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo012} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo012.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo012_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo012_1.geometry} />
                <meshStandardMaterial attach="material" {...materials.vidrio} />
            </instancedMesh>
            <instancedMesh ref={Cubo012_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo012_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2']} />
            </instancedMesh>
            <instancedMesh ref={Cubo012_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo012_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
            </instancedMesh>
            <instancedMesh ref={Cubo012_4} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo012_4.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Cubo012_5} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo012_5.geometry} />
                <meshStandardMaterial attach="material" {...materials['piso aulas']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_1_arriba.glb`);
