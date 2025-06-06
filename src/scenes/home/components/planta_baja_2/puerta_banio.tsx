import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
      Cubo234: THREE.Mesh
      Cubo234_1: THREE.Mesh
      Cubo234_2: THREE.Mesh
    }
    materials: {
      ['cafe oscuro']: THREE.MeshStandardMaterial
      ['Material.021']: THREE.MeshStandardMaterial
      ['madera paredes']: THREE.MeshStandardMaterial
    }
  }
type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

export function Puerta_banio() {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/puerta_banio.glb`) as GLTFResult;

    const Cubo234 = useRef<THREE.InstancedMesh>(null);
    const Cubo234_1 = useRef<THREE.InstancedMesh>(null);
    const Cubo234_2 = useRef<THREE.InstancedMesh>(null);

    const instances: InstanceData[] = [
        { position: [-41.162, 7.826, -288.517], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-47.422, 7.83, -290.106], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-62.354, 7.84, -293.878], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-45.109, -11.418, -289.514], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-51.369, -11.418, -291.104], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [-73.766, -11.637, -59.426], rotation: [0, 1.55, 0], scale: [1, 1, 1] },
        { position: [-76.55, -11.637, -48.915], rotation: [0, 1.55, 0], scale: [1, 1, 1] },
    ];

    materials['Material.021'] = new THREE.MeshStandardMaterial({
        color: 0x808080, // Gris
        metalness: 0.8,  // Similar a metal
        roughness: 0.2,  // Brillo moderado
    });

    useEffect(() => {
        instances.forEach((instance, i) => {
            const position = new THREE.Vector3(...instance.position);
            const rotation = new THREE.Euler(...instance.rotation);
            const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
            const matrix = new THREE.Matrix4();
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            Cubo234.current!.setMatrixAt(i, matrix);
            Cubo234_1.current!.setMatrixAt(i, matrix);
            Cubo234_2.current!.setMatrixAt(i, matrix);
            
        });

        Cubo234.current!.instanceMatrix.needsUpdate = true;
        Cubo234_1.current!.instanceMatrix.needsUpdate = true;
        Cubo234_2.current!.instanceMatrix.needsUpdate = true;

        Cubo234.current!.frustumCulled = false;
        Cubo234_1.current!.frustumCulled = false;
        Cubo234_2.current!.frustumCulled = false;

    }, [instances]);

    return (
        <group>
            <instancedMesh ref={Cubo234} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo234.geometry} />
                <meshStandardMaterial attach="material" {...materials['cafe oscuro']} />
            </instancedMesh>
            <instancedMesh ref={Cubo234_1} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo234_1.geometry} />
                <meshStandardMaterial attach="material" {...materials['Material.021']} />
            </instancedMesh>
            <instancedMesh ref={Cubo234_2} args={[null, null, instances.length]}>
                <bufferGeometry attach="geometry" {...nodes.Cubo234_2.geometry} />
                <meshStandardMaterial attach="material" {...materials['madera paredes']} />
            </instancedMesh>
        </group>
    )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/puerta_banio.glb`);
