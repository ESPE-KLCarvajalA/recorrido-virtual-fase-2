import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      a_viga2export: THREE.Mesh
    }
    materials: {
      barras: THREE.MeshStandardMaterial
    }
  }
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Viga_metal() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/viga_metal.glb`) as GLTFResult;

    const a_viga2export = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [197.46, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [169.461, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [141.462, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [113.463, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [85.465, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [57.465, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [29.467, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [1.468, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-26.531, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-54.53, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-82.529, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-110.528, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-138.527, 18.044, 30.723], rotation: [0, 0, 0], scale: [1, 1, 1] },
        
        { position: [-158.426, 18.029, 28.49], rotation: [0, -0.4, 0], scale: [0.5, 1, 1] },
        { position: [-161.373, 18.029, 13.23], rotation: [0, 1.317, 0], scale: [0.864, 1, 1] },
        { position: [-155.393, 18.014, -10.392], rotation: [0, 1.317, 0], scale: [0.864, 1, 1] },
        { position: [-149.395, 18.014, -34.009], rotation: [0, 1.317, 0], scale: [0.864, 1, 1] },
        { position: [-143.4, 18.014, -57.627], rotation: [0, 1.317, 0], scale: [0.864, 1, 1] },
        
        { position: [-53.029, 18.044, -74.18], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-46.201, 18.044, -101.334], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-39.374, 18.044, -128.488], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-32.546, 18.044, -155.641], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-25.718, 18.044, -182.795], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-18.89, 18.044, -209.948], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-12.063, 18.044, -237.102], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-5.235, 18.044, -264.256], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [1.593, 18.044, -291.409], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [8.42, 18.044, -318.563], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [15.248, 18.044, -345.717], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [22.076, 18.043, -372.87], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [28.903, 18.043, -400.024], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [36.096, 18.047, -428.879], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [42.837, 18.047, -456.055], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [49.577, 18.047, -483.23], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [56.318, 18.047, -510.405], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        
        //{ position: [-53.288, -1.285, -74.337], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-53.029, -1.285, -74.18], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-46.201, -1.285, -101.334], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-39.374, -1.285, -128.488], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-32.546, -1.285, -155.641], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-25.718, -1.285, -182.795], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-18.89, -1.285, -209.948], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-12.063, -1.285, -237.102], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [-5.235, -1.285, -264.256], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [1.593, -1.285, -291.409], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [8.42, -1.285, -318.563], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [15.248, -1.285, -345.717], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [22.076, -1.285, -372.87], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [28.903, -1.285, -400.024], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [36.096, -1.285, -428.879], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [42.837, -1.285, -456.055], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [49.577, -1.285, -483.23], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        { position: [56.318, -1.285, -510.405], rotation: [0, 1.317, 0], scale: [1, 1, 1] },
        
    ];

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            a_viga2export.current!.setMatrixAt(i, matrix);
            a_viga2export.current!.frustumCulled = false;
        });

        a_viga2export.current!.instanceMatrix.needsUpdate = true;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={a_viga2export} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.a_viga2export.geometry} />
                <meshStandardMaterial attach="material" {...materials.barras} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/viga_metal.glb`);
