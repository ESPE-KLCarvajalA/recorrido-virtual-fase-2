import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    WindowL005: THREE.Mesh;
    WindowL005_1: THREE.Mesh;
  };
  materials: {
    ['Material.099']: THREE.MeshStandardMaterial;
    ['Material.098']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  name?: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Ventanas2() {
  const { nodes, materials } = useGLTF('models/ventana/ventana2.glb') as unknown as GLTFResult;

  const frameRef = useRef<THREE.InstancedMesh>(null);
  const glassRef = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    {
      name: 'WindowL010',
      position: [240.26, 34, -94.596],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowL003',
      position: [240.258, 34, -35.451],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_1',
      position: [309.261, 32, -167.015],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_2',
      position: [309.261, 32, -230.993],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_3',
      position: [309.261, 32, -305.12],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    {
      name: 'WindowFrane003_4',
      position: [309.261, 32, -368.611],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    { name: 'WindowFrane003_5', position: [274.432, 32, -408.267], rotation: [0, 1.63, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_6', position: [201.334, 32, -476.457], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_7', position: [144.435, 34.252, -476.642], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_8', position: [54.775, 32, -476.477], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane003_9', position: [-31.235, 32, -443.202], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { name: 'WindowFrame021', position: [16.355, 37, -345], rotation: [0, 1.57, 0], scale: [0.5, 0.1, 0.32] },
    { name: 'WindowFrame022', position: [167.037, 41, -315.864], rotation: [0, 0, 0], scale: [1, 0.6, 0.69] },
    { name: 'WindowFrame023', position: [167.037, 41.3, -230.96], rotation: [0, 0, 0], scale: [1, 0.56, 1.1] },
    { name: 'WindowFrame002', position: [65.292, 31, -130.052], rotation: [0, 1.57, 0], scale: [1, 1.1, 1] },
    { name: 'WindowFrame024', position: [65.292, 35, -1.18], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { name: 'WindowFrame025', position: [-95.089, 34, -103.401], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { name: 'WindowFrame026', position: [-31.588, 30, -172.574], rotation: [0, 0, 0], scale: [1, 1.5, 1.23] },
    { name: 'WindowFrame027', position: [-100.11, 52, -322.591], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame028', position: [-100.11, 52, -386.439], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame029', position: [-100.11, 52, -452.282], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame030', position: [-239.405, 55, -452.215], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame031', position: [-239.405, 55, -386.8], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame032', position: [-239.405, 55, -322.361], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { name: 'WindowFrame035', position: [-239.565, 33, -87.474], rotation: [0, 0, 0], scale: [1, 1, 0.9] },
    { name: 'WindowFrame036', position: [-199.212, 35, -1.768], rotation: [0, 1.571, 0], scale: [1, 1.2, 1] },
    { name: 'WindowFrame038', position: [-74.673, 35, -1.825], rotation: [0, 1.57, 0], scale: [1, 1.2, 1.04] },





    { name: 'Ventana_001', position: [-445.361, 53, -31.28], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_002', position: [-677.887, 40, -8.14], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_003', position: [-736.969, 40, -8.065], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_004', position: [-824.916, 40, -8.065], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_005', position: [-508.544, 27, -492.769], rotation: [-2.846, 1.545, -1.861], scale: [1, 1, 1] },
    { name: 'Ventana_006', position: [-513.818, 27, -480.943], rotation: [-0.012, 0.908, 1.587], scale: [1, 1, 1] },
    { name: 'Ventana_007', position: [-504.788, 27, -775.368], rotation: [-2.846, 1.545, -1.861], scale: [1, 1, 1] },
    { name: 'Ventana_008', position: [-508.899, 27, -762.588], rotation: [-0.012, 0.908, 1.587], scale: [1, 1, 1] },
    { name: 'Ventana_009', position: [-573.043, 35, -412.854], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_010', position: [-569.879, 35, -690.823], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_011', position: [-701.732, 35, -403.741], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_012', position: [-721.288, 34, -482.914], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_013', position: [-844.582, 36, -409.664], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_014', position: [-824.801, 26, 159.244], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_015', position: [-551.912, 25, 113.974], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_016', position: [-626.035, 25, 134.84], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_017', position: [-698.228, 29, 126.415], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_018', position: [-785.539, 29, 126.415], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_019', position: [-854.965, 45, -183.902], rotation: [-Math.PI, 1.561, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_020', position: [-789.623, 42, -117.321], rotation: [-Math.PI, 1.561, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_021', position: [-796.093, 25, 253.954], rotation: [0,1.57,0], scale: [1, 1, 0.9] },
    { name: 'WindowL092',  position: [-733, 25, 252.989], rotation: [0,1.57,0], scale: [1, 1, 0.9] },
    { name: 'WindowL093', position: [-666.1, 25, 252.997], rotation: [0,1.57,0], scale: [1, 1, 0.9] },
    { name: 'WindowL095', position: [-559, 25, 252.991], rotation: [0,1.57,0], scale: [1, 1, 0.9] },
    { name: 'Ventana_028', position: [-497, 39.775, -367], rotation: [-Math.PI, -0.9, -Math.PI], scale: [1, 0.5, 0.5] },
    { name: 'Ventana_029', position: [-481.194, 39.775, -361.349], rotation: [-Math.PI, 0.782, -Math.PI], scale: [1,0.5,0.5] },
    { name: 'Ventana_030', position: [-490.128, 39.536, -646.427], rotation: [-Math.PI, 0.782, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_031', position: [-476.878, 39.536, -641.029], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_032', position: [-470.509, 42.975, -803.756], rotation: [0, 0.01, 0], scale: [1, 1, 1] },
    { name: 'Ventana_033', position: [-472.194, 42.626, -523.783], rotation: [0, 0.01, 0], scale: [1, 1, 1] },
    // { name: 'Ventana_034', position: [-456.901, 39.915, -360.674], rotation: [Math.PI, -0.002, Math.PI], scale: [1, 1, 1] },
    // { name: 'Ventana_035', position: [-443.518, 39.915, -365.556], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_036', position: [-454.714, 40.135, -641.002], rotation: [Math.PI, -0.002, Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_037', position: [-441.331, 40.135, -645.885], rotation: [Math.PI, -0.751, Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_038', position: [-843.734, 39.847, -473.953], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_039', position: [-713.943, 39.148, -559.961], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_040', position: [-219.983, 40.096, -825.995], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_041', position: [-104.46, 41.233, -753.116], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_042', position: [-445.19, 49.586, -127.051], rotation: [0,0,0], scale: [1, 0.6, 0.5] },
    { name: 'Ventana_043', position: [-509.74, 61, -8.257], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_044', position: [-609.373, 35, 253.288], rotation: [0,1.57,0], scale: [1, 0.3, 0.5] },
    { name: 'Ventana_045', position: [-583.769, 60, -8.257], rotation: [0,1.57,0], scale: [1, 1, 1] },
    { name: 'Ventana_046', position: [-844.582, 37.435, -540.548], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_047', position: [-368.974, 35.048, -691.607], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_048', position: [-230.304, 34.211, -670.539], rotation: [-Math.PI, 1.568, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_049', position: [-211.403, 32.339, -743.754], rotation: [-Math.PI, 1.568, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_050', position: [-104.53, 34.568, -683.326], rotation: [-Math.PI, 1.568, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_051', position: [-104.53, 35.088, -822.501], rotation: [-Math.PI, 1.568, -Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_052', position: [-368.974, 37.404, -764.226], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_053', position: [-374.808, 36.154, -962.932], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_054', position: [-374.808, 36.143, -1027.517], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_055', position: [-405.538, 35.48, -931.418], rotation: [0, 0.01, 0], scale: [1, 1, 1] },
    { name: 'Ventana_056', position: [-520.084, 36.335, -931.418], rotation: [0, 0.01, 0], scale: [1, 1, 1] },
    { name: 'Ventana_057', position: [-372.04, 37.171, -475.487], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_058', position: [-809.429, 38.31, -922.603], rotation: [Math.PI, -0.01, Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_059', position: [-743.933, 39.293, -922.603], rotation: [Math.PI, -0.01, Math.PI], scale: [1, 1, 1] },
    { name: 'Ventana_060', position: [-713.37, 38.105, -888.392], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_061', position: [-713.37, 38.055, -773.904], rotation: [0,0,0], scale: [1, 1, 1] },
    { name: 'Ventana_062', position: [-744.433, 36.624, -661.652], rotation: [0, 0.01, 0], scale: [1, 1, 1] },
    { name: 'Ventana_063', position: [-806.474, 37.601, -661.652], rotation: [0, 0.01, 0], scale: [1, 1, 1] },
    { name: 'Ventana_064', position: [-841.912, 39.026, -760.785], rotation: [0,0,0], scale: [1, 1, 1] }
  ];
  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      frameRef.current!.setMatrixAt(i, matrix);
      glassRef.current!.setMatrixAt(i, matrix);
    });

    frameRef.current!.instanceMatrix.needsUpdate = true;
    glassRef.current!.instanceMatrix.needsUpdate = true;

    frameRef.current!.frustumCulled = false;
    glassRef.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      <instancedMesh
        ref={frameRef}
        args={[null, null, instances.length]}
        geometry={nodes.WindowL005.geometry}
        material={materials['Material.099']}
      />
      <instancedMesh
        ref={glassRef}
        args={[null, null, instances.length]}
        geometry={nodes.WindowL005_1.geometry}
        material={materials['Material.098']}
      />
    </group>
  );
}

useGLTF.preload('models/ventana/ventana2.glb');
