

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Plane056: THREE.Mesh;
        Plane056_1: THREE.Mesh;
        Plane056_2: THREE.Mesh;
    };
    materials: {
        ['verde.002']: THREE.MeshStandardMaterial;
        ['Material.045']: THREE.MeshStandardMaterial;
        ['White Glazed Bricks.001']: THREE.MeshStandardMaterial;
    };
};

type Instance = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

// 👇 Reemplaza este array por el tuyo completo
const instances: Instance[] = [
    { position: [-58.822, 23, 553.073], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-18.424, 23, 517.935], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [22.378, 23, 482.444], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [63.249, 23, 446.895], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [102.23, 23, 412.212], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [142.14, 23, 375.582], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [182.007, 23, 338.991], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [221.898, 22.212, 302.378], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [261.773, 20.403, 265.78], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [299.982, 21.011, 228.489], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [337.772, 21.028, 189.72], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [375.478, 21.028, 151.037], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [413.248, 21.028, 112.143], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [451.042, 21.028, 72.884], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [488.901, 21.028, 33.568], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [527.31, 21.094, -4.754], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [564.132, 21.177, -44.198], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [600.397, 21.177, -82.993], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [640.04, 21.177, -120.383], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [679.872, 21.177, -157.263], rotation: [0, 0.1, 0], scale: [1, 1, 1] },

    { position: [695, 21.177, -200], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [539.998, 21.177, -714.755], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [555.212, 21.177, -662.757], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [570.822, 21.177, -611.763], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [586.06, 21.177, -560.212], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [601.67, 21.177, -508.739], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [676.352, 21.177, -252.144], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [661.147, 21.177, -303.374], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [645.538, 21.177, -354.848], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [630.123, 21.177, -406.094], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [616.395, 21.32, -456.814], rotation: [0, 1.2, 0], scale: [1, 1, 1] },



    { position: [-322.682, 15.372, 785.385], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-364.275, 15.372, 820.301], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-405.855, 15.372, 855.401], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-446.252, 15.372, 890.929], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-486.129, 15.372, 927.492], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-526.064, 15.372, 963.641], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-566.031, 15.372, 1000.092], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-605.773, 15.372, 1036.352], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-645.571, 15.372, 1072.611], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-685.388, 15.372, 1108.973], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-724.951, 15.372, 1145.265], rotation: [0,3.1, 0], scale: [1, 1, 1] },
    { position: [-764.7, 15.372, 1181.781], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-804.214, 15.372, 1217.98], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-844.095, 15.372, 1254.766], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-883.7, 15.372, 1290.906], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-923.58, 15.372, 1327.348], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-963.321, 15.372, 1363.789], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-1003.192, 15.372, 1400.079], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    {
        position: [-100, 23, 590],
        rotation: [0, 0, 0],
        scale: [1, 1, 1]
      },
      {
        position: [-140, 23, 627],
        rotation: [0, 0, 0],
        scale: [1, 1, 1]
      }




];



export function Estructura() {
    const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura.glb') as unknown as GLTFResult;

    const ref1 = useRef<THREE.InstancedMesh>(null);
    const ref2 = useRef<THREE.InstancedMesh>(null);
    const ref3 = useRef<THREE.InstancedMesh>(null);

    useEffect(() => {
        instances.forEach((inst, i) => {
            const matrix = new THREE.Matrix4();
            const position = new THREE.Vector3(...inst.position);
            const rotation = new THREE.Euler(...inst.rotation);
            const scale = new THREE.Vector3(...inst.scale);
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            ref1.current?.setMatrixAt(i, matrix);
            ref2.current?.setMatrixAt(i, matrix);
            ref3.current?.setMatrixAt(i, matrix);
        });

        if (ref1.current) {
            ref1.current.frustumCulled = false;
            ref1.current.instanceMatrix.needsUpdate = true;
        }
        if (ref2.current) {
            ref2.current.frustumCulled = false;
            ref2.current.instanceMatrix.needsUpdate = true;
        }
        if (ref3.current) {
            ref3.current.frustumCulled = false;
            ref3.current.instanceMatrix.needsUpdate = true;
        }
    }, []);

    return (
        <group>
            <instancedMesh
                ref={ref1}
                args={[undefined, undefined, instances.length]}
                geometry={nodes.Plane056.geometry}
                material={materials['verde.002']}
            />
            <instancedMesh
                ref={ref2}
                args={[undefined, undefined, instances.length]}
                geometry={nodes.Plane056_1.geometry}
                material={materials['Material.045']}
            />
            <instancedMesh
                ref={ref3}
                args={[undefined, undefined, instances.length]}
                geometry={nodes.Plane056_2.geometry}
                material={materials['White Glazed Bricks.001']}
            />
        </group>
    );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura.glb');
