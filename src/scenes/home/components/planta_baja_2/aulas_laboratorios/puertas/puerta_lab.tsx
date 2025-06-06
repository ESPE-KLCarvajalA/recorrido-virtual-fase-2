import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      ID5001: THREE.Mesh
      ID5001_1: THREE.Mesh
      ID5001_2: THREE.Mesh
    }
    materials: {
      ['barras cuartos']: THREE.MeshStandardMaterial
      ['vidrio sala']: THREE.MeshStandardMaterial
      ['plateado columnas']: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Puerta_lab() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/puertas/puerta_lab.glb`) as GLTFResult;

    const ID5001 = useRef<THREE.InstancedMesh>(null);
    const ID5001_1 = useRef<THREE.InstancedMesh>(null);
    const ID5001_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [30.5, -10.977, -481.6], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [2.765, -10.977, -371.781], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-0.679, -10.977, -358.234], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [27.091, -10.977, -468.048], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-38.375, -10.976, -209.775], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-41.765, -10.976, -196.326], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-66.11, -10.976, -100], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-69.556, -10.976, -86.452], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    materials['vidrio sala'] = new THREE.MeshStandardMaterial({
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

            ID5001.current!.setMatrixAt(i, matrix);
            ID5001_1.current!.setMatrixAt(i, matrix);
            ID5001_2.current!.setMatrixAt(i, matrix);
        });

        ID5001.current!.instanceMatrix.needsUpdate = true;
        ID5001_1.current!.instanceMatrix.needsUpdate = true;
        ID5001_2.current!.instanceMatrix.needsUpdate = true;

        ID5001.current!.frustumCulled = false;
        ID5001_1.current!.frustumCulled = false;
        ID5001_2.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={ID5001} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.ID5001.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
            </instancedMesh>
            
            <instancedMesh ref={ID5001_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.ID5001_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['vidrio sala']} />
            </instancedMesh>
            <instancedMesh ref={ID5001_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.ID5001_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['plateado columnas']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/puertas/puerta_lab.glb`);
