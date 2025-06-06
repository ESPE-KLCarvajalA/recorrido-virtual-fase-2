import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Cubo011: THREE.Mesh
      Cubo011_1: THREE.Mesh
    }
    materials: {
      ['madera paredes']: THREE.MeshStandardMaterial
      ['Material.009']: THREE.MeshStandardMaterial
    }
  }
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Puerta_aula1() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/puertas/puerta_aula1.glb`) as GLTFResult;

    const Cubo011 = useRef<THREE.InstancedMesh>(null);
    const Cubo011_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-72.241, 8.454, -86.5], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-69.237, 8.357, -100.17], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-41.152, 8.419, -209.927], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [0.08, 8.438, -371.908], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [27.912, 8.434, -481.683], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-44.346, 8.454, -196.25], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-3.335, 8.45, -358.231], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [24.489, 8.446, -468.048], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    materials['Material.009'] = new THREE.MeshStandardMaterial({
        color: 0x808080, // Gris
        metalness: 0.8,  // Similar a metal
        roughness: 0.2,  // Brillo moderado
    });

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo011.current!.setMatrixAt(i, matrix);
            Cubo011_1.current!.setMatrixAt(i, matrix);
        });

        Cubo011.current!.instanceMatrix.needsUpdate = true;
        Cubo011_1.current!.instanceMatrix.needsUpdate = true;

        Cubo011.current!.frustumCulled = false;
        Cubo011_1.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo011} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo011.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo011_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo011_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['Material.009']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/puertas/puerta_aula1.glb`);
