import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo030: THREE.Mesh
    Cubo030_1: THREE.Mesh
  }
  materials: {
    ['madera paredes']: THREE.MeshStandardMaterial
    ['Metal_Rough.002']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Banca1() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/zona_estudiantes/banca1.glb`) as GLTFResult;

  materials['madera paredes'].roughness = 0.8
  
  const Cubo030 = useRef<THREE.InstancedMesh>(null);
  const Cubo030_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [-151, 2.918, -11.303], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-140.443, 2.92, -7.382], rotation: [0, 0, 0], scale: [1, 1, 1] },
    // Banca de taller
    { position: [190.44, 3.14, -29.8], rotation: [0, Math.PI / 1.53, 0], scale: [1, 1, 0.6] },
    // banca edificio
    { position: [140.44, 3.14, -52], rotation: [0, Math.PI / 1.47, 0], scale: [1, 1, 0.5] },
    // Banca baños abajo
    { position: [-71.639, -16.228, -37.9], rotation: [0, Math.PI / 1.34, 0], scale: [1, 1, 0.2] },
    // Banca entrada
    { position: [145, 3.14, -2.4], rotation: [0, Math.PI / 1.41, 0], scale: [1, 1, 0.4] },
    { position: [105, 3.14, -2.4], rotation: [0, Math.PI / 1.41, 0], scale: [1, 1, 0.4] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo030.current!.setMatrixAt(i, matrix);
      Cubo030_1.current!.setMatrixAt(i, matrix);

      Cubo030.current!.frustumCulled = false;
      Cubo030_1.current!.frustumCulled = false;
    });

    Cubo030.current!.instanceMatrix.needsUpdate = true;
    Cubo030_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Cubo030} castShadow receiveShadow args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo030.geometry} />
        <meshStandardMaterial attach="material" {...materials['madera paredes']} />
      </instancedMesh>
      <instancedMesh ref={Cubo030_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo030_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['Metal_Rough.002']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/zona_estudiantes/banca1.glb`);
