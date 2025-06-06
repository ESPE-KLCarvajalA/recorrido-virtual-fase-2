import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Cubo169: THREE.Mesh
        Cubo169_1: THREE.Mesh
        Cubo169_2: THREE.Mesh
    }
    materials: {
        ['barras cuartos.001']: THREE.MeshStandardMaterial
        techo: THREE.MeshStandardMaterial
        ['vidrio sala']: THREE.MeshStandardMaterial
    }
}

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Pared_vidrio_edificio() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_vidrio.glb`) as GLTFResult;

    const Cubo169 = useRef<THREE.InstancedMesh>(null);
    const Cubo169_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo169_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [94.326, 10.264, -101.328], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [94.36, 29.573, -101.328], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [94.36, 48.883, -101.328], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [94.36, 68.192, -101.328], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [94.36, 87.5, -101.328], rotation: [0, 0, 0], scale: [1, 1, 1] },
        
        { position: [155.021, 87.5, -101.333], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [155.021, 68.192, -101.333], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [155.021, 48.883, -101.333], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [155.021, 29.573, -101.333], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
        { position: [155.021, 10.264, -101.333], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo169.current!.setMatrixAt(i, matrix);
            Cubo169_1.current!.setMatrixAt(i, matrix);
            Cubo169_2.current!.setMatrixAt(i, matrix);

            Cubo169.current!.frustumCulled = false;
            Cubo169_1.current!.frustumCulled = false;
            Cubo169_2.current!.frustumCulled = false;
        });

        Cubo169.current!.instanceMatrix.needsUpdate = true;
        Cubo169_1.current!.instanceMatrix.needsUpdate = true;
        Cubo169_2.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    materials['vidrio sala'] = new THREE.MeshStandardMaterial({
        color: 'white',
        opacity: 0.35,
        transparent: true,
        roughness: 0.8,
        metalness: 0.1,
    });

    return (
        <group>
            <instancedMesh ref={Cubo169} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo169.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos.001']} />
            </instancedMesh>
            <instancedMesh ref={Cubo169_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo169_1.geometry} />
                <meshStandardMaterial attach="material" {...materials.techo} />
            </instancedMesh>
            <instancedMesh ref={Cubo169_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo169_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['vidrio sala']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_vidrio.glb`);
