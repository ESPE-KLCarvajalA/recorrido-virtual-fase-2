import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo163: THREE.Mesh
    Cubo163_1: THREE.Mesh
  }
  materials: {
    ['madera clara 2.001']: THREE.MeshStandardMaterial
    ['barras cuartos.002']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Cubiculo_3() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_3.glb`) as GLTFResult;

  const Cubo163 = useRef<THREE.InstancedMesh>(null);
  const Cubo163_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [56.517, 5.975, -20.241], rotation: [0, 0, 0], scale: [0.896, 0.896, 0.896] },
    { position: [32.566, 5.975, -20.205], rotation: [0, 0, 0], scale: [0.896, 0.896, 0.896] },
    { position: [9.369, 5.975, -20.247], rotation: [0, 0, 0], scale: [0.896, 0.896, 0.896] },
    { position: [-15.521, 5.975, -20.085], rotation: [0, 0, 0], scale: [0.896, 0.896, 0.896] },
    { position: [-39.406, 5.975, -20.202], rotation: [0, 0, 0], scale: [0.896, 0.896, 0.896] },
 
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo163.current!.setMatrixAt(i, matrix);
      Cubo163_1.current!.setMatrixAt(i, matrix);

      Cubo163.current!.frustumCulled = false;
      Cubo163_1.current!.frustumCulled = false;
    });

    Cubo163.current!.instanceMatrix.needsUpdate = true;
    Cubo163_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Cubo163} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo163.geometry} />
        <meshStandardMaterial attach="material" {...materials['madera clara 2.001']} />
      </instancedMesh>
      <instancedMesh ref={Cubo163_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo163_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['barras cuartos.002']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_3.glb`);
