import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Plano017: THREE.Mesh
      Plano017_1: THREE.Mesh
    }
    materials: {
      ['pared blanca']: THREE.MeshStandardMaterial
      ['blanca externa pisos']: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Piso_base_edificio2() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso_base_2.glb`) as GLTFResult;

    const Plano017 = useRef<THREE.InstancedMesh>(null);
    const Plano017_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [124.694, 19.918, -75.577], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 39.228, -75.577], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 58.538, -75.577], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [124.694, 77.8, -75.577], rotation: [0, 0, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Plano017.current!.setMatrixAt(i, matrix);
            Plano017_1.current!.setMatrixAt(i, matrix);

            Plano017.current!.frustumCulled = false;
            Plano017_1.current!.frustumCulled = false;
        });

        Plano017.current!.instanceMatrix.needsUpdate = true;
        Plano017_1.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Plano017} castShadow receiveShadow args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Plano017.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Plano017_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Plano017_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['blanca externa pisos']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso_base_2.glb`);
