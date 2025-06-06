import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo021: THREE.Mesh
    Cubo021_1: THREE.Mesh
    Cubo021_2: THREE.Mesh
  }
  materials: {
    ['barras cuartos']: THREE.MeshStandardMaterial
    ['vidrio sala']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Puerta() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/puerta.glb`) as GLTFResult;

  const Cubo021 = useRef<THREE.InstancedMesh>(null);
  const Cubo021_1 = useRef<THREE.InstancedMesh>(null);
  const Cubo021_2 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [68.9, 9.464, -2.258], rotation: [0,Math.PI,0], scale: [-1,0.99,1] },
    { position: [-72.85, 9.5, -30.96], rotation: [0, 1.588, 0], scale: [1,0.99, -0.87] },
    { position: [-116.058, 9.464, -0.2], rotation: [0, -Math.PI, 0], scale: [-1,0.99, -0.87] },
    // puerta edificio
    { position: [125.036, 9.464, -56], rotation: [0, Math.PI / 2, 0], scale: [-1, 0.99, -0.9] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo021.current!.setMatrixAt(i, matrix);
      Cubo021_1.current!.setMatrixAt(i, matrix);
      Cubo021_2.current!.setMatrixAt(i, matrix);

      Cubo021.current!.frustumCulled = false;
      Cubo021_1.current!.frustumCulled = false;
      Cubo021_2.current!.frustumCulled = false;
    });

    Cubo021.current!.instanceMatrix.needsUpdate = true;
    Cubo021_1.current!.instanceMatrix.needsUpdate = true;
    Cubo021_2.current!.instanceMatrix.needsUpdate = true;

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
      <instancedMesh ref={Cubo021} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo021.geometry} />
        <meshStandardMaterial attach="material" {...materials['barras cuartos']} />
      </instancedMesh>
      <instancedMesh ref={Cubo021_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo021_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['vidrio sala']} />
      </instancedMesh>
      <instancedMesh ref={Cubo021_2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo021_2.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.009']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/a_3.glb`);
