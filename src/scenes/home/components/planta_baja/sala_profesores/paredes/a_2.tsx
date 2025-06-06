import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo051: THREE.Mesh
    Cubo051_1: THREE.Mesh
  }
  materials: {
    techo: THREE.MeshStandardMaterial
    ['vidrio sala']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function A_2() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/a_2.glb`) as GLTFResult;

  const Cubo051 = useRef<THREE.InstancedMesh>(null);
  const Cubo051_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [65.18, 10.598, 23.126], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [43.5, 10.598, 23.126], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [18.4, 10.598, 23.126], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-10.683, 10.598, 23.126], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-129.655, 10.598, 23.126], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-118.84, 10.598, 23.126], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    
    { position: [-4.345,  9.71, -32.9], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [28.101, 9.71, -32.9], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo051.current!.setMatrixAt(i, matrix);
      Cubo051_1.current!.setMatrixAt(i, matrix);

      Cubo051.current!.frustumCulled = false;
      Cubo051_1.current!.frustumCulled = false;
    });

    Cubo051.current!.instanceMatrix.needsUpdate = true;
    Cubo051_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  materials['vidrio sala'] = new THREE.MeshStandardMaterial({
    color: 'white',
    opacity: 0.15,
    transparent: true,
    roughness: 0.7,
    metalness: 0.1,
  });

  return (
    <group>
      <instancedMesh ref={Cubo051} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo051.geometry} />
        <meshStandardMaterial attach="material" {...materials['techo']} />
      </instancedMesh>
      <instancedMesh ref={Cubo051_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo051_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['vidrio sala']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/a_2.glb`);
