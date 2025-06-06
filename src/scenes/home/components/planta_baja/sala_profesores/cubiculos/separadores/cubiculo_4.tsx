import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo164: THREE.Mesh
    Cubo164_1: THREE.Mesh
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

export function Cubiculo_4() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_4.glb`) as GLTFResult;

  const Cubo164 = useRef<THREE.InstancedMesh>(null);
  const Cubo164_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [47.079, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [26.795, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [6.511, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [-13.773, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [-34.056, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [-54.34, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [-73.33, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
    { position: [-92.319, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo164.current!.setMatrixAt(i, matrix);
      Cubo164_1.current!.setMatrixAt(i, matrix);

      Cubo164.current!.frustumCulled = false;
      Cubo164_1.current!.frustumCulled = false;
    });

    Cubo164.current!.instanceMatrix.needsUpdate = true;
    Cubo164_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Cubo164} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo164.geometry} />
        <meshStandardMaterial attach="material" {...materials['madera clara 2.001']} />
      </instancedMesh>
      <instancedMesh ref={Cubo164_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo164_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['barras cuartos.002']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_4.glb`);
