import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cubo205: THREE.Mesh
    Cubo205_1: THREE.Mesh
  }
  materials: {
    ['barras cuartos.002']: THREE.MeshStandardMaterial
    ['madera clara 2.001']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Cubiculo_1() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_1.glb`) as GLTFResult;

  const Cubo205 = useRef<THREE.InstancedMesh>(null);
  const Cubo205_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [66.635, 5.975, -8.058], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [66.635, 5.975, -24.758], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },

    { position: [49.449, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.56] },
    
    { position: [43.65, 5.975, -19.044], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.685] },
    { position: [43.65, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.685] },
    { position: [41.227, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [41.227, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    
    { position: [25.55, 5.975, -8.226], rotation: [0, 1.571, 0], scale: [0.6, 0.896, 0.56] },
    
    { position: [20.943, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [20.943, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    
    { position: [19, 5.975, -8.221], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },

    { position: [0.737, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.685] },
    { position: [0.659, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [0.659, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    
    { position: [-5.51, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.685] },

    { position: [-22.48, 5.975, -8.226], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    
    { position: [-19.624, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-19.624, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    
    { position: [-29.4, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.685] },
    { position: [-28.7, 5.975, -18.909], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.685] },
    
    { position: [-39.908, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-39.908, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
   
    { position: [-46.37, 5.975, -8.226], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
   
    { position: [-54.96, 5.975, -18.909], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 1.21] },
    { position: [-54.96, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 1.21] },

    { position: [-60.192, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-60, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    
    { position: [-62.51, 5.975, -8.153], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 1.1] },
    { position: [-61.51, 5.975, -18.909], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 1.1] },

    { position: [-79.181, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-79.181, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-98.171, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-98.171, 5.975, 14.42], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
    { position: [-111.085, 5.975, 4.598], rotation: [0, 1.571, 0], scale: [0.638, 0.896, 0.896] },
 
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo205.current!.setMatrixAt(i, matrix);
      Cubo205_1.current!.setMatrixAt(i, matrix);

      Cubo205.current!.frustumCulled = false;
      Cubo205_1.current!.frustumCulled = false;
    });

    Cubo205.current!.instanceMatrix.needsUpdate = true;
    Cubo205_1.current!.instanceMatrix.needsUpdate = true;

  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Cubo205} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo205.geometry} />
        <meshStandardMaterial attach="material" {...materials['barras cuartos.002']} />
      </instancedMesh>
      <instancedMesh ref={Cubo205_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Cubo205_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['madera clara 2.001']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_1.glb`);
