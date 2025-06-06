import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    columna_1: THREE.Mesh
  }
  materials: {
    ['pared blanca']: THREE.MeshStandardMaterial
  }
}
type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Columna() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/zona_estudiantes/columna.glb`) as GLTFResult;

  const columna_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [-123.627, 9.376, -28], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-133.567, 9.376, -7], rotation: [0, 0, 0], scale: [1, 1, 1] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      columna_1.current!.setMatrixAt(i, matrix);

      columna_1.current!.frustumCulled = false;
    });

    columna_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  return (
    <group>
      <instancedMesh ref={columna_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.columna_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['pared blanca']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/zona_estudiantes/columna.glb`);
