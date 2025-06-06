import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useEffect, useRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Cubo277: THREE.Mesh
    Cubo277_1: THREE.Mesh
  }
  materials: {
    ['vidrio sala']: THREE.MeshStandardMaterial
    ['techo.002']: THREE.MeshStandardMaterial
  }
}
type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function C_3() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/c_3.glb`) as GLTFResult;

  const Cubo277 = useRef<THREE.InstancedMesh>(null);
  const Cubo277_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [70.621, 9.711, 5.044], rotation: [0, 0, 0], scale: [1, 0.9, 1.107] },
    { position: [70.616, 9.711, 13.28], rotation: [0, 0, 0], scale: [1, 0.9, 1] },
    { position: [70.616, 9.711, 9.276], rotation: [0, 0, 0], scale: [1, 0.9, 1.082] },
    { position: [-114.427, 9.711, 13.28], rotation: [0, 0, 0], scale: [1, 0.9, 1] },
    { position: [-114.427, 9.711, 9.674], rotation: [0, 0, 0], scale: [1, 0.9, 1] },
    { position: [-114.427, 9.711, 6.069], rotation: [0, 0, 0], scale: [1, 0.9, 1] },

    { position: [-114.432, 10.599, 20.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-114.432, 10.599, 16.89], rotation: [0, 0, 0], scale: [1, 1, 0.87] },
    { position: [70.621, 10.599, 20.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [70.621, 10.599, 16.89], rotation: [0, 0, 0], scale: [1, 1, 0.87] },
    

    { position: [-50.341, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-46.735, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-39.525, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-35.92, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-28.709, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-25.104, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-17.894, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-14.289, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-7.078, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-3.473, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [3.738, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [7.343, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [14.553, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [21.764, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [25.369, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [28.974, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [36.184, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [39.79, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [47, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [50.605, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [57.816, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [61.421, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [68.631, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-82.787, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-79.182, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-71.972, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-68.367, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-61.156, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-57.551, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-104.419, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-100.814, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-93.603, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-89.998, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-126.05, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-122.445, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-115.234, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-111.629, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-136.866, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-133.26, 10.599, 22.904], rotation: [0, -Math.PI / 2, 0], scale: [1, 1, 1] },
    
    { position: [67.75, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [0.94, 0.9, 1] },
    { position: [64.153, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [56.943, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [53.338, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [46.127, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [42.522, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [35.312, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [31.707, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [24.496, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [20.891, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [13.681, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [10.075, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [2.865, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-0.74, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-7.951, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-11.556, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-18.766, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-22.372, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-29.582, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-33.187, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-40.398, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-44.003, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-51.851, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-55.7, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-59.5, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-63.3, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    { position: [-67, 9.71, -32.7], rotation: [0, Math.PI / 2, 0], scale: [1, 0.9, 1] },
    
    // Edificio
    { position: [96, 31.321, -42.226], rotation: [0, 0, 0], scale: [1.5, 0.4, 1.7] },
    { position: [96, 50.6, -42.226], rotation: [0, 0, 0], scale: [1.5, 0.4, 1.7] },
    { position: [96, 70, -42.226], rotation: [0, 0, 0], scale: [1.5, 0.4, 1.7] },
    
    { position: [153.5, 31.321, -42], rotation: [0, 0, 0], scale: [1.5, 0.4, 1.7] },
    { position: [153.5, 50.6, -42], rotation: [0, 0, 0], scale: [1.5, 0.4, 1.7] },
    { position: [153.5, 70, -42], rotation: [0, 0, 0], scale: [1.5, 0.4, 1.7] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Cubo277.current!.setMatrixAt(i, matrix);
      Cubo277_1.current!.setMatrixAt(i, matrix);

      Cubo277.current!.frustumCulled = false;
      Cubo277_1.current!.frustumCulled = false;
    });

    Cubo277.current!.instanceMatrix.needsUpdate = true;
    Cubo277_1.current!.instanceMatrix.needsUpdate = true;

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
        <instancedMesh ref={Cubo277} args={[null, null, instances.length]}>
          <bufferGeometry attach="geometry" {...nodes.Cubo277.geometry} />
          <meshStandardMaterial attach="material" {...materials['vidrio sala']} />
        </instancedMesh>
        <instancedMesh ref={Cubo277_1} args={[null, null, instances.length]}>
          <bufferGeometry attach="geometry" {...nodes.Cubo277_1.geometry} />
          <meshStandardMaterial attach="material" {...materials['techo.002']} />
        </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/c_3.glb`);
