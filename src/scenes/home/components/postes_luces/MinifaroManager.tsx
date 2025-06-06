import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo113: THREE.Mesh;
    Cubo113_1: THREE.Mesh;
    Cubo113_2: THREE.Mesh;
    Cubo113_3: THREE.Mesh;
  };
  materials: {
    ['pared negro']: THREE.MeshStandardMaterial;
    ['vidrio sala']: THREE.MeshStandardMaterial;
    ['led techo']: THREE.MeshStandardMaterial;
    acera: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
};

export function MinifaroManager() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/postes_luces/minifaro.glb`) as GLTFResult;

  const refCubo113 = useRef<THREE.InstancedMesh>(null);
  const refCubo113_1 = useRef<THREE.InstancedMesh>(null);
  const refCubo113_2 = useRef<THREE.InstancedMesh>(null);
  const refCubo113_3 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [59.552, 3, -84.132], rotation: [0, 0, 0] },
    { position: [59.815, 3, -128.621], rotation: [0, 0, 0] },
    { position: [67.48, 3, -171.628], rotation: [Math.PI, -1.3, Math.PI] },
    { position: [78.8, 3, -213.527], rotation: [Math.PI, -1.3, Math.PI] },
    { position: [90.484, 3, -257.376], rotation: [Math.PI, -1.3, Math.PI] },
    { position: [67.842, 3.1, -260.876], rotation: [Math.PI, -1.3, Math.PI] },
    { position: [7.096, -16.3, -273.849], rotation: [Math.PI, -1.3, Math.PI] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
        const position = new THREE.Vector3(...instance.position);
        const rotation = new THREE.Euler(...instance.rotation);
        const scale = new THREE.Vector3(0.71, 0.81, 0.71);
  
        const matrix = new THREE.Matrix4();
        matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);
  
        refCubo113.current!.setMatrixAt(i, matrix);
        refCubo113_1.current!.setMatrixAt(i, matrix);
        refCubo113_2.current!.setMatrixAt(i, matrix);
        refCubo113_3.current!.setMatrixAt(i, matrix);

        refCubo113.current!.frustumCulled = false;
        refCubo113_1.current!.frustumCulled = false;
        refCubo113_2.current!.frustumCulled = false;
        refCubo113_3.current!.frustumCulled = false;
    });

    // Nos aseguramos de que las instancias se actualicen en la GPU
    refCubo113.current!.instanceMatrix.needsUpdate = true;
    refCubo113_1.current!.instanceMatrix.needsUpdate = true;
    refCubo113_2.current!.instanceMatrix.needsUpdate = true;
    refCubo113_3.current!.instanceMatrix.needsUpdate = true;
  }, [instances]);

  return (
    <group>
      <instancedMesh ref={refCubo113} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo113.geometry} />
        <meshStandardMaterial attach="material" {...materials['pared negro']} />
      </instancedMesh>
      <instancedMesh ref={refCubo113_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo113_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['vidrio sala'] = new THREE.MeshStandardMaterial({
          color: 'white',
          opacity: 0.15,
          transparent: true,
          roughness: 0.7,
          metalness: 0.1,
        })} />
      </instancedMesh>
      <instancedMesh ref={refCubo113_2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo113_2.geometry} />
        <meshStandardMaterial attach="material" {...materials['led techo']} />
      </instancedMesh>
      <instancedMesh ref={refCubo113_3} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo113_3.geometry} />
        <meshStandardMaterial attach="material" {...materials['acera']} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/postes_luces/minifaro.glb`);
