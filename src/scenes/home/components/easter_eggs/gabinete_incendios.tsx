import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Cubo437: THREE.Mesh
      Cubo437_1: THREE.Mesh
    }
    materials: {
      ['R_2.003']: THREE.MeshStandardMaterial
      ['01_-_Default']: THREE.MeshStandardMaterial
    }
  }

  type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
  };

export function Gabinete_incendios() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/easter_eggs/gabinete_incendios.glb`) as GLTFResult;

    const Cubo437 = useRef<THREE.InstancedMesh>(null);
    const Cubo437_1 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [119.479, 11.188, -27.528], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-7, 11, -320], rotation: [0, -1.8, 0], scale: [1, 1, 1] },
        { position: [-9.75, -7, -310], rotation: [0, -1.8, 0], scale: [1, 1, 1] },
        { position: [-74.5, 13, -53.5], rotation: [0, -1.8, 0], scale: [1, 1, 1] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo437.current!.setMatrixAt(i, matrix);
            Cubo437_1.current!.setMatrixAt(i, matrix);


        });

        Cubo437.current!.instanceMatrix.needsUpdate = true;
        Cubo437_1.current!.instanceMatrix.needsUpdate = true;

        Cubo437.current!.frustumCulled = false;
        Cubo437_1.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo437} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo437.geometry} />
                <meshStandardMaterial attach="material" {...materials['R_2.003']} />
            </instancedMesh>
            <instancedMesh ref={Cubo437_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo437_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['01_-_Default']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/easter_eggs/gabinete_incendios.glb`);
