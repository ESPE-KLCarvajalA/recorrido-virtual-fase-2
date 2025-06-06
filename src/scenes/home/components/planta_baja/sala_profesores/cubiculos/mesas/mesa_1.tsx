import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    mesa_1_export: THREE.Mesh
  }
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Mesa_1() {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/mesas/mesa1.glb`) as GLTFResult;

  const mesa_1_export = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [65.341, 3.475, -28.349], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [65.341, 3.475, -11.721], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [64.428, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [64.41, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [57.127, 3.475, 20.804], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1.4] },
    { position: [49.387, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [49.387, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },

    { position: [50.982, 3.475, -20.518], rotation: [0, 1.571, 0], scale: [1, 1, 1] },
    { position: [52.8, 3.475, -15.5], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },
    { position: [52.8, 3.475, -25.5], rotation: [0, Math.PI, 0], scale: [1, 1, 1] },

    { position: [41.51, 3.475, -23.308], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [41.636, 3.475, -11.735], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [39.294, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [39.276, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    
    { position: [26, 3.475, -19.988], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [28, 3.475, -25.195], rotation: [0, 0, 0], scale: [0.8, 1, 1] },
    { position: [28, 3.475, -15.381], rotation: [0, 0, 0], scale: [0.8, 1, 1] },
    
    { position: [28.936, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [28.936, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [19.01, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    
    { position: [20, 3.475, -19.988], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 0.8] },
    { position: [18.815, 3.475, -25.195], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [18.6, 3.475, -15.381], rotation: [0, 0, 0], scale: [0.8, 1, 1] },
    
    { position: [18.992, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },

    { position: [2, 3.475, -19.988], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [4, 3.475, -25.195], rotation: [0, 0, 0], scale: [0.8, 1, 1] },
    { position: [4, 3.475, -15.381], rotation: [0, 0, 0], scale: [0.8, 1, 1] },

    { position: [8.652, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [8.652, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-1.274, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-1.292, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },

    { position: [-23, 3.475, -19.988], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-21, 3.475, -25.195], rotation: [0, 0, 0], scale: [0.8, 1, 1] },
    { position: [-21, 3.475, -15.381], rotation: [0, 0, 0], scale: [0.8, 1, 1] },

    { position: [-46, 3.475, -19.988], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-44, 3.475, -25.195], rotation: [0, 0, 0], scale: [0.8, 1, 1] },
    { position: [-44, 3.475, -15.381], rotation: [0, 0, 0], scale: [0.8, 1, 1] },


    { position: [-6.459, 3.475, -19.988], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
    { position: [-8.164, 3.475, -25.195], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-8.149, 3.475, -15.381], rotation: [0, 0, 0], scale: [1, 1, 1] },

    { position: [-11.631, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-11.631, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-21.558, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-21.576, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    
    { position: [-74.235, 3.475, -8.249], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-56.235, 3.475, -12.249], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-64.235, 3.475, -12.249], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-56.235, 3.475, -23], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-64.235, 3.475, -23], rotation: [0, 0, 0], scale: [1, 1, 1] },

    { position: [-31.461, 3.475, -23.308], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-31.336, 3.475, -11.735], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-31.915, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-31.915, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-41.841, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-41.859, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-52.199, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-52.199, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-62.125, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-62.143, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-71.188, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-71.188, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },

    { position: [-81.115, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-81.133, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-90.178, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-90.178, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-100.104, 3.475, 8.495], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-100.122, 3.475, 19.245], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-109.624, 3.475, 19.531], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-109.624, 3.475, 8.162], rotation: [0, 0, 0], scale: [1, 1, 1] },

    // aulas
    { position: [-81.346, 3.843, -77.334], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-92.984, 3.867, -80.197], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-104.721, 3.853, -83.057], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-116.156, 3.868, -86.077], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-122.719, 3.841, -81.511], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-79.646, 3.846, -84.663], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-91.284, 3.869, -87.525], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-103.021, 3.856, -90.386], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-114.455, 3.871, -93.406], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-77.742, 3.834, -91.611], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-89.38, 3.857, -94.474], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-101.117, 3.844, -97.334], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-112.551, 3.858, -100.354], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-74.11, 3.865, -104.103], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-84.939, 3.908, -106.961], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-97.568, 3.921, -109.882], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-108.039, 3.962, -112.709], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-115.483, 3.862, -108.28], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-72.409, 3.868, -111.432], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-83.238, 3.911, -114.29], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-95.867, 3.924, -117.211], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-106.339, 3.965, -120.038], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-70.506, 3.855, -118.38], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-81.335, 3.899, -121.238], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-93.964, 3.912, -124.159], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-104.435, 3.953, -126.986], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-66.055, 3.833, -131.081], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-76.885, 3.877, -133.939], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-89.513, 3.89, -136.861], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-99.985, 3.93, -139.688], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-107.428, 3.831, -135.259], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-64.355, 3.836, -138.41], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-75.184, 3.88, -141.268], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-87.813, 3.893, -144.19], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-98.284, 3.933, -147.016], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-62.451, 3.824, -145.358], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-73.28, 3.867, -148.217], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-85.909, 3.88, -151.138], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-96.381, 3.921, -153.965], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-58.903, 3.72, -158.781], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-69.733, 3.763, -161.639], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-82.361, 3.776, -164.56], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-92.833, 3.817, -167.387], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-100.276, 3.717, -162.958], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-57.203, 3.723, -166.109], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-68.032, 3.766, -168.968], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-80.661, 3.779, -171.889], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-91.132, 3.82, -174.716], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-55.299, 3.71, -173.058], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-66.128, 3.754, -175.916], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-78.757, 3.767, -178.837], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-89.229, 3.808, -181.664], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-53.594, 3.847, -186.691], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-64.423, 3.89, -189.549], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-77.052, 3.903, -192.47], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-87.523, 3.944, -195.297], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-94.967, 3.844, -190.868], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-51.893, 3.849, -194.02], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-62.722, 3.893, -196.878], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-75.351, 3.906, -199.799], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-85.823, 3.947, -202.626], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-49.989, 3.837, -200.968], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-60.819, 3.881, -203.826], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-73.448, 3.893, -206.747], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-83.919, 3.934, -209.574], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-47.213, 3.843, -214.083], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-58.042, 3.886, -216.941], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-70.671, 3.899, -219.863], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-81.143, 3.94, -222.689], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-88.586, 3.84, -218.261], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-45.512, 3.845, -221.412], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-56.342, 3.889, -224.27], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-68.97, 3.902, -227.191], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-79.442, 3.943, -230.018], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-43.609, 3.833, -228.36], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-54.438, 3.877, -231.218], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-67.067, 3.889, -234.14], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-77.539, 3.93, -236.967], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-38.386, 3.774, -241.312], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-49.215, 3.817, -244.171], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-61.844, 3.83, -247.092], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-72.315, 3.871, -249.919], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-79.758, 3.771, -245.49], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-36.685, 3.777, -248.641], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-47.514, 3.82, -251.499], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-60.143, 3.833, -254.421], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-70.615, 3.874, -257.248], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-34.781, 3.764, -255.589], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-45.611, 3.808, -258.448], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-58.239, 3.821, -261.369], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-68.711, 3.861, -264.196], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-18.755, 3.867, -321.285], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-29.584, 3.911, -324.144], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-42.213, 3.924, -327.065], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-52.685, 3.964, -329.892], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-60.128, 3.865, -325.463], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-17.054, 3.87, -328.614], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-27.884, 3.914, -331.472], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-40.512, 3.927, -334.394], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-50.984, 3.967, -337.221], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-15.151, 3.858, -335.562], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-25.98, 3.901, -338.421], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-38.609, 3.914, -341.342], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-49.08, 3.955, -344.169], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-12.092, 3.814, -348.911], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-22.921, 3.857, -351.769], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-35.55, 3.87, -354.69], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-46.021, 3.911, -357.517], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-53.465, 3.811, -353.088], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-10.391, 3.817, -356.239], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-21.22, 3.86, -359.098], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-33.849, 3.873, -362.019], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-44.321, 3.914, -364.846], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-8.488, 3.804, -363.188], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-19.317, 3.848, -366.046], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-31.946, 3.861, -368.967], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-42.417, 3.901, -371.794], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-6.037, 3.829, -376.896], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-16.866, 3.873, -379.755], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-29.495, 3.886, -382.676], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-39.966, 3.926, -385.503], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-47.409, 3.827, -381.074], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-4.336, 3.832, -384.225], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-15.165, 3.876, -387.084], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-27.794, 3.888, -390.005], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-38.266, 3.929, -392.832], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-2.432, 3.82, -391.174], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-13.262, 3.863, -394.032], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-25.89, 3.876, -396.953], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-36.362, 3.917, -399.78], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [1.8, 3.878, -404.437], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-9.029, 3.921, -407.295], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-21.658, 3.934, -410.217], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-32.13, 3.975, -413.043], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-39.573, 3.875, -408.615], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [3.501, 3.881, -411.766], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-7.328, 3.924, -414.624], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-19.957, 3.937, -417.545], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-30.429, 3.978, -420.372], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [5.404, 3.868, -418.714], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-5.425, 3.912, -421.572], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-18.054, 3.924, -424.494], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-28.525, 3.965, -427.321], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [9.861, 3.886, -430.858], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-0.968, 3.93, -433.716], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-13.597, 3.943, -436.638], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-24.069, 3.983, -439.464], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-31.512, 3.884, -435.036], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [11.562, 3.889, -438.187], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [0.732, 3.933, -441.045], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-11.897, 3.945, -443.966], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-22.368, 3.986, -446.793], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [13.465, 3.877, -445.135], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [2.636, 3.92, -447.993], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-9.993, 3.933, -450.915], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-20.465, 3.974, -453.742], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [15.235, 3.805, -458.623], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [4.405, 3.848, -461.481], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-8.223, 3.861, -464.402], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-18.695, 3.902, -467.229], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-26.138, 3.802, -462.8], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [16.935, 3.808, -465.952], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [6.106, 3.851, -468.81], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-6.523, 3.864, -471.731], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-16.994, 3.905, -474.558], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [18.839, 3.795, -472.9], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [8.01, 3.839, -475.758], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-4.619, 3.852, -478.679], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-15.091, 3.892, -481.506], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [19.362, 3.989, -488.046], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [8.532, 4.033, -490.904], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-4.096, 4.046, -493.826], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-14.568, 4.087, -496.652], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [21.062, 3.992, -495.375], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [10.233, 4.036, -498.233], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-2.396, 4.049, -501.154], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-12.867, 4.089, -503.981], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [22.966, 3.98, -502.323], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [12.137, 4.024, -505.181], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-0.492, 4.036, -508.103], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-10.964, 4.077, -510.929], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [24.322, 3.939, -508.687], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [13.493, 3.983, -511.545], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [0.864, 3.996, -514.466], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-9.607, 4.036, -517.293], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [26.023, 3.942, -516.016], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [15.194, 3.986, -518.874], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [2.565, 3.999, -521.795], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-7.907, 4.039, -524.622], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
    { position: [-4.249, 4.071, -537.839], rotation: [-Math.PI, 1.8, -Math.PI], scale: [1, 1, 1] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      mesa_1_export.current!.setMatrixAt(i, matrix);

      mesa_1_export.current!.frustumCulled = false;
    });

    mesa_1_export.current!.instanceMatrix.needsUpdate = true;

    materials.DefaultMaterial.roughness = 0.8;

  }, [instances]);
  
  return (
    <group>
      <instancedMesh ref={mesa_1_export} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.mesa_1_export.geometry} />
        <meshStandardMaterial attach="material" {...materials['DefaultMaterial']} />
      </instancedMesh>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/cubiculos/mesas/mesa1.glb`);
