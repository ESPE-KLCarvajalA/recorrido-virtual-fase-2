import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Cubo268: THREE.Mesh
      Cubo268_1: THREE.Mesh
      Cubo268_2: THREE.Mesh
      Cubo268_3: THREE.Mesh
      Cubo268_4: THREE.Mesh
    }
    materials: {
      ['pared blanca']: THREE.MeshStandardMaterial
      ['madera paredes']: THREE.MeshStandardMaterial
      vidrio: THREE.MeshStandardMaterial
      ['madera clara 2']: THREE.MeshStandardMaterial
      ['barras cuartos']: THREE.MeshStandardMaterial
    }
  }

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Lab_1_abajo() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/lab_1_abajo.glb`) as GLTFResult;

    const Cubo268 = useRef<THREE.InstancedMesh>(null);
    const Cubo268_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo268_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo268_3 = useRef<THREE.InstancedMesh>(null);
    const Cubo268_4 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-82.897, -9.039, -140.407], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-82.897, -9.039, -140.407], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-55.054, -9.126, -250.237], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-13.987, -9.1, -412.182], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [13.858, -9.126, -522.011], rotation: [0, 0, 0], scale: [1, 1, 1] },
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

            Cubo268.current!.setMatrixAt(i, matrix);
            Cubo268_1.current!.setMatrixAt(i, matrix);
            Cubo268_2.current!.setMatrixAt(i, matrix);
            Cubo268_3.current!.setMatrixAt(i, matrix);
            Cubo268_4.current!.setMatrixAt(i, matrix);
        });

        Cubo268.current!.instanceMatrix.needsUpdate = true;
        Cubo268_1.current!.instanceMatrix.needsUpdate = true;
        Cubo268_2.current!.instanceMatrix.needsUpdate = true;
        Cubo268_3.current!.instanceMatrix.needsUpdate = true;
        Cubo268_4.current!.instanceMatrix.needsUpdate = true;

        Cubo268.current!.frustumCulled = false;
        Cubo268_1.current!.frustumCulled = false;
        Cubo268_2.current!.frustumCulled = false;
        Cubo268_3.current!.frustumCulled = false;
        Cubo268_4.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo268} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo268.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Cubo268_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo268_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo268_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo268_2.geometry} />
                <meshStandardMaterial attach="material" {...materials.vidrio} />
            </instancedMesh>
            <instancedMesh ref={Cubo268_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo268_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2']} />
            </instancedMesh>
            <instancedMesh ref={Cubo268_4} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo268_4.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/lab_1_abajo.glb`);
