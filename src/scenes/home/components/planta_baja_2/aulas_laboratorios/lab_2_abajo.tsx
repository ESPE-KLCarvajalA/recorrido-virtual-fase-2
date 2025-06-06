import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
    nodes: {
      Cubo132: THREE.Mesh
      Cubo132_1: THREE.Mesh
      Cubo132_2: THREE.Mesh
      Cubo132_3: THREE.Mesh
      Cubo132_4: THREE.Mesh
    }
    materials: {
      ['madera paredes']: THREE.MeshStandardMaterial
      vidrio: THREE.MeshStandardMaterial
      ['pared blanca']: THREE.MeshStandardMaterial
      ['barras cuartos']: THREE.MeshStandardMaterial
      ['madera clara 2']: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Lab_2_abajo() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/lab_2_abajo.glb`) as GLTFResult;

    const Cubo132 = useRef<THREE.InstancedMesh>(null);
    const Cubo132_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo132_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo132_3 = useRef<THREE.InstancedMesh>(null);
    const Cubo132_4 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-71.672, -9.123, -195.681], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-30.574, -9.25, -357.654], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-2.75, -9.2, -467.45], rotation: [0, 0, 0], scale: [1, 1, 1] },
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

            Cubo132.current!.setMatrixAt(i, matrix);
            Cubo132_1.current!.setMatrixAt(i, matrix);
            Cubo132_2.current!.setMatrixAt(i, matrix);
            Cubo132_3.current!.setMatrixAt(i, matrix);
            Cubo132_4.current!.setMatrixAt(i, matrix);
        });

        Cubo132.current!.instanceMatrix.needsUpdate = true;
        Cubo132_1.current!.instanceMatrix.needsUpdate = true;
        Cubo132_2.current!.instanceMatrix.needsUpdate = true;
        Cubo132_3.current!.instanceMatrix.needsUpdate = true;
        Cubo132_4.current!.instanceMatrix.needsUpdate = true;

        Cubo132.current!.frustumCulled = false;
        Cubo132_1.current!.frustumCulled = false;
        Cubo132_2.current!.frustumCulled = false;
        Cubo132_3.current!.frustumCulled = false;
        Cubo132_4.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo132} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo132.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo132_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo132_1.geometry} />
                <meshStandardMaterial attach="material" {...materials.vidrio} />
            </instancedMesh>
            <instancedMesh ref={Cubo132_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo132_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Cubo132_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo132_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
            </instancedMesh>
            <instancedMesh ref={Cubo132_4} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo132_4.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/lab_2_abajo.glb`);
