import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { GLTF } from 'three-stdlib';
type GLTFResult = GLTF & {
    nodes: {
      Cubo285: THREE.Mesh
      Cubo285_1: THREE.Mesh
      Cubo285_2: THREE.Mesh
      Cubo285_3: THREE.Mesh
    }
    materials: {
      ['madera paredes']: THREE.MeshStandardMaterial
      ['barras cuartos.002']: THREE.MeshStandardMaterial
      ['madera clara 2.001']: THREE.MeshStandardMaterial
      ['plateado columnas']: THREE.MeshStandardMaterial
    }
  }
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};
export function Pared_internaManager() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/pared_interna.glb`) as GLTFResult;

    const Cubo285 = useRef<THREE.InstancedMesh>(null);
    const Cubo285_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo285_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo285_3 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [47.524, 9.376, -28.313], rotation: [0, Math.PI / 2, 0], scale: [0.938, 5.699, 0.631] },
        { position: [-1.589, 9.376, -28.313], rotation: [0, Math.PI / 2, 0], scale: [0.938, 5.699, 0.631] },
        { position: [-49.391, 9.376, -28.313], rotation: [0, Math.PI / 2, 0], scale: [0.938, 5.699, 0.631] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo285.current!.setMatrixAt(i, matrix);
            Cubo285_1.current!.setMatrixAt(i, matrix);
            Cubo285_2.current!.setMatrixAt(i, matrix);
            Cubo285_3.current!.setMatrixAt(i, matrix);

            Cubo285.current!.frustumCulled = false;
            Cubo285_1.current!.frustumCulled = false;
            Cubo285_2.current!.frustumCulled = false;
            Cubo285_3.current!.frustumCulled = false;
        });

        Cubo285.current!.instanceMatrix.needsUpdate = true;
        Cubo285_1.current!.instanceMatrix.needsUpdate = true;
        Cubo285_2.current!.instanceMatrix.needsUpdate = true;
        Cubo285_3.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo285} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo285.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo285_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo285_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos.002']} />
            </instancedMesh>
            <instancedMesh ref={Cubo285_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo285_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2.001']} />
            </instancedMesh>
            <instancedMesh ref={Cubo285_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo285_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['plateado columnas']} />
            </instancedMesh>
        </group>
    );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/pared_interna.glb`);
