import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo069: THREE.Mesh
    Cubo069_1: THREE.Mesh
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

export function A_3() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/a_3.glb`) as GLTFResult;

  const Cubo069 = useRef<THREE.InstancedMesh>(null);
  const Cubo069_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [60.548, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [54.3, 11.4, 23.31], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },

    { position: [49.733, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [38.917, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [17.286, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [6.47, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [-15.161, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [-25.977, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [-36.792, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1] },
    { position: [-48.05, 10.3, -33.09], rotation: [0, Math.PI / 2, 0], scale: [1, 0.93, 1.12] },


    { position: [-43.13, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-32.315, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-21.499, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [0.132, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [10.948, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [32.579, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-75.577, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-108.024, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-97.208, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-86.393, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-64.761, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
    { position: [-53.946, 11.4, 23.284], rotation: [0, -Math.PI / 2, 0], scale: [1, 1.04, 1] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo069.current!.setMatrixAt(i, matrix);
      Cubo069_1.current!.setMatrixAt(i, matrix);

      Cubo069.current!.frustumCulled = false;
      Cubo069_1.current!.frustumCulled = false;
    });

    Cubo069.current!.instanceMatrix.needsUpdate = true;
    Cubo069_1.current!.instanceMatrix.needsUpdate = true;

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
      <instancedMesh ref={Cubo069} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo069.geometry} />
        <meshStandardMaterial attach="material" {...materials['techo']} />
      </instancedMesh>
      <instancedMesh ref={Cubo069_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo069_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['vidrio sala']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/a_3.glb`);
