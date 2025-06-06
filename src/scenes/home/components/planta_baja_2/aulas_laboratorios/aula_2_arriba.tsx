import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Cubo206: THREE.Mesh
      Cubo206_1: THREE.Mesh
      Cubo206_2: THREE.Mesh
      Cubo206_3: THREE.Mesh
      Cubo206_4: THREE.Mesh
      Cubo206_5: THREE.Mesh
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

export function Aula_2_arriba() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_2_arriba.glb`) as GLTFResult;

    const Cubo206 = useRef<THREE.InstancedMesh>(null);
    const Cubo206_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo206_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo206_3 = useRef<THREE.InstancedMesh>(null);
    const Cubo206_4 = useRef<THREE.InstancedMesh>(null);
    const Cubo206_5 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-93.171, 10.294, -113.749], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-65.38, 10.294, -223.56], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-24.288, 10.294, -385.535], rotation: [0, 0, 0], scale: [1, 1, 1] },
        //{ position: [3.526, 10.294, -495.336], rotation: [0, 0, 0], scale: [1, 1, 1] },
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

            Cubo206.current!.setMatrixAt(i, matrix);
            Cubo206_1.current!.setMatrixAt(i, matrix);
            Cubo206_2.current!.setMatrixAt(i, matrix);
            Cubo206_3.current!.setMatrixAt(i, matrix);
            Cubo206_4.current!.setMatrixAt(i, matrix);
            Cubo206_5.current!.setMatrixAt(i, matrix);

        });

        Cubo206.current!.instanceMatrix.needsUpdate = true;
        Cubo206_1.current!.instanceMatrix.needsUpdate = true;
        Cubo206_2.current!.instanceMatrix.needsUpdate = true;
        Cubo206_3.current!.instanceMatrix.needsUpdate = true;
        Cubo206_4.current!.instanceMatrix.needsUpdate = true;
        Cubo206_5.current!.instanceMatrix.needsUpdate = true;

        Cubo206.current!.frustumCulled = false;
        Cubo206_1.current!.frustumCulled = false;
        Cubo206_2.current!.frustumCulled = false;
        Cubo206_3.current!.frustumCulled = false;
        Cubo206_4.current!.frustumCulled = false;
        Cubo206_5.current!.frustumCulled = false;
    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo206} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo206.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo206_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo206_1.geometry} />
                <meshStandardMaterial attach="material" {...materials.vidrio} />
            </instancedMesh>
            <instancedMesh ref={Cubo206_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo206_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2']} />
            </instancedMesh>
            <instancedMesh ref={Cubo206_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo206_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
            </instancedMesh>
            <instancedMesh ref={Cubo206_4} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo206_4.geometry} />
                <meshStandardMaterial attach="material" {...materials['pared blanca']} />
            </instancedMesh>
            <instancedMesh ref={Cubo206_5} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo206_5.geometry} />
                <meshStandardMaterial attach="material" {...materials['piso aulas']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_2_arriba.glb`);
