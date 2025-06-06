import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { GLTF } from 'three-stdlib';
type GLTFResult = GLTF & {
    nodes: {
      Cubo287: THREE.Mesh
      Cubo287_1: THREE.Mesh
      Cubo287_2: THREE.Mesh
      Cubo287_3: THREE.Mesh
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
export function Pared_interna_2Manager() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/pared_interna_2.glb`) as GLTFResult;

    const Cubo287 = useRef<THREE.InstancedMesh>(null);
    const Cubo287_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo287_2 = useRef<THREE.InstancedMesh>(null);
    const Cubo287_3 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [22.816, 9.376, -20.268], rotation: [0, Math.PI / 2, 0], scale: [0.938, 5.699, 0.631] },
        { position: [-26.298, 9.376, -20.268], rotation: [0, Math.PI / 2, 0], scale: [0.938, 5.699, 0.631] },
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo287.current!.setMatrixAt(i, matrix);
            Cubo287_1.current!.setMatrixAt(i, matrix);
            Cubo287_2.current!.setMatrixAt(i, matrix);
            Cubo287_3.current!.setMatrixAt(i, matrix);

            Cubo287.current!.frustumCulled = false;
            Cubo287_1.current!.frustumCulled = false;
            Cubo287_2.current!.frustumCulled = false;
            Cubo287_3.current!.frustumCulled = false;
        });

        Cubo287.current!.instanceMatrix.needsUpdate = true;
        Cubo287_1.current!.instanceMatrix.needsUpdate = true;
        Cubo287_2.current!.instanceMatrix.needsUpdate = true;
        Cubo287_3.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo287} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo287.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
            <instancedMesh ref={Cubo287_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo287_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['barras cuartos.002']} />
            </instancedMesh>
            <instancedMesh ref={Cubo287_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo287_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera clara 2.001']} />
            </instancedMesh>
            <instancedMesh ref={Cubo287_3} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo287_3.geometry} />
                <meshStandardMaterial attach="material" {...materials['plateado columnas']} />
            </instancedMesh>
        </group>
    );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/pared_interna_2.glb`);
