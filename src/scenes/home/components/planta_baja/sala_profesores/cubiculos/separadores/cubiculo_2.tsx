import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo061: THREE.Mesh
    Cubo061_1: THREE.Mesh
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

export function Cubiculo_2() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_2.glb`) as GLTFResult;

  const Cubo061 = useRef<THREE.InstancedMesh>(null);
  const Cubo061_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [66.412, 5.975, 13.525], rotation: [Math.PI, 0, Math.PI], scale: [0.896, 0.896, 0.896] },
 
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo061.current!.setMatrixAt(i, matrix);
      Cubo061_1.current!.setMatrixAt(i, matrix);

      Cubo061.current!.frustumCulled = false;
      Cubo061_1.current!.frustumCulled = false;
    });

    Cubo061.current!.instanceMatrix.needsUpdate = true;
    Cubo061_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Cubo061} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo061.geometry} />
        <meshStandardMaterial attach="material" {...materials['madera clara 2.001']} />
      </instancedMesh>
      <instancedMesh ref={Cubo061_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo061_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['barras cuartos.002']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_2.glb`);
