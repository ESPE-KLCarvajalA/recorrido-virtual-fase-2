import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      columna1007: THREE.Mesh
    }
    materials: {
      ['pared blanca externa']: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Pared_externa_2() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_externa_2.glb`) as GLTFResult;


    const columna1007 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [124.694, 29.573, -29.145], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 48.883, -29.145], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 68.192, -29.145], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 87.5, -29.145], rotation: [0, 0, 0], scale: [1, 1, 1] },

    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            columna1007.current!.setMatrixAt(i, matrix);

            columna1007.current!.frustumCulled = false;
        });

        columna1007.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={columna1007} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.columna1007.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca externa']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/pared_externa_2.glb`);
