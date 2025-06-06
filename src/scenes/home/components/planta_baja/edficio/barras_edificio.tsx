import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      barras_edificio002: THREE.Mesh
    }
    materials: {
      ['madera clara 1']: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Barras_edificio() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/barras_edificio.glb`) as GLTFResult;

    const barras_edificio002 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [91.814, 10.264, -101.393], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [157.554, 10.264, -101.34], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [91.814, 48.883, -101.393], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [91.814, 29.595, -101.393], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [157.554, 48.883, -101.34], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [157.554, 29.595, -101.34], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [157.554, 68.192, -101.34], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [91.814, 68.192, -101.34], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [91.814, 87.5, -93], rotation: [0, 0, 0], scale: [1, 1, 0.77] },
        { position: [157.554, 87.5, -93], rotation: [0, 0, 0], scale: [1, 1, 0.79] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            barras_edificio002.current!.setMatrixAt(i, matrix);

            barras_edificio002.current!.frustumCulled = false;
        });

        barras_edificio002.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={barras_edificio002} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.barras_edificio002.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 1']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/barras_edificio.glb`);
