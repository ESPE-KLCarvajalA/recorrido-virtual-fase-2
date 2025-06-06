import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Mustang_CarPaint_0_1: THREE.Mesh;
    Mustang_CarPaint_0_2: THREE.Mesh;
    Mustang_CarPaint_0_3: THREE.Mesh;
    Mustang_CarPaint_0_4: THREE.Mesh;
    Mustang_CarPaint_0_5: THREE.Mesh;
    FR_Wheel_Rims_0: THREE.Mesh;
    FR_Wheel_Rims_0_1: THREE.Mesh;
    FL_Wheel_Rims_0: THREE.Mesh;
    FL_Wheel_Rims_0_1: THREE.Mesh;
    BR_Wheel_Rims_0: THREE.Mesh;
    BR_Wheel_Rims_0_1: THREE.Mesh;
    BL_Wheel_Rims_0: THREE.Mesh;
    BL_Wheel_Rims_0_1: THREE.Mesh;
  };
  materials: {
    CarPaint: THREE.MeshPhysicalMaterial;
    FrontLights: THREE.MeshStandardMaterial;
    Plastic: THREE.MeshStandardMaterial;
    RearLights: THREE.MeshStandardMaterial;
    Window: THREE.MeshStandardMaterial;
    Rims: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

export function Autos() {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}models/easter_eggs/low_poly_ford_mustang_1.glb`
  ) as GLTFResult;

  const Mustang_CarPaint_0_1 = useRef<THREE.InstancedMesh>(null);
  const Mustang_CarPaint_0_2 = useRef<THREE.InstancedMesh>(null);
  const Mustang_CarPaint_0_3 = useRef<THREE.InstancedMesh>(null);
  const Mustang_CarPaint_0_4 = useRef<THREE.InstancedMesh>(null);
  const Mustang_CarPaint_0_5 = useRef<THREE.InstancedMesh>(null);
  const FR_Wheel_Rims_0 = useRef<THREE.InstancedMesh>(null);
  const FR_Wheel_Rims_0_1 = useRef<THREE.InstancedMesh>(null);
  const FL_Wheel_Rims_0 = useRef<THREE.InstancedMesh>(null);
  const FL_Wheel_Rims_0_1 = useRef<THREE.InstancedMesh>(null);
  const BR_Wheel_Rims_0 = useRef<THREE.InstancedMesh>(null);
  const BR_Wheel_Rims_0_1 = useRef<THREE.InstancedMesh>(null);
  const BL_Wheel_Rims_0 = useRef<THREE.InstancedMesh>(null);
  const BL_Wheel_Rims_0_1 = useRef<THREE.InstancedMesh>(null);

  const instances: InstanceData[] = [
    { position: [305, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [290, 1, 149.1], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [275, 1, 150.4], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [260, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [245, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [140, 1, 150.6], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [215, 1, 150.2], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [200, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [185, 1, 149.5], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [170, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [155, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [125, 1, 150], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [110, 1, 151], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
    { position: [95, 1, 151], rotation: [0, Math.PI, 0], scale: [5.5, 5.5, 5.5] },
  ];

  useEffect(() => {
    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(instance.scale[0], instance.scale[1], instance.scale[2]);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      Mustang_CarPaint_0_1.current!.setMatrixAt(i, matrix);
      Mustang_CarPaint_0_2.current!.setMatrixAt(i, matrix);
      Mustang_CarPaint_0_3.current!.setMatrixAt(i, matrix);
      Mustang_CarPaint_0_4.current!.setMatrixAt(i, matrix);
      Mustang_CarPaint_0_5.current!.setMatrixAt(i, matrix);
      FR_Wheel_Rims_0.current!.setMatrixAt(i, matrix);
      FR_Wheel_Rims_0_1.current!.setMatrixAt(i, matrix);
      FL_Wheel_Rims_0.current!.setMatrixAt(i, matrix);
      FL_Wheel_Rims_0_1.current!.setMatrixAt(i, matrix);
      BR_Wheel_Rims_0.current!.setMatrixAt(i, matrix);
      BR_Wheel_Rims_0_1.current!.setMatrixAt(i, matrix);
      BL_Wheel_Rims_0.current!.setMatrixAt(i, matrix);
      BL_Wheel_Rims_0_1.current!.setMatrixAt(i, matrix);
    });

    Mustang_CarPaint_0_1.current!.instanceMatrix.needsUpdate = true;
    Mustang_CarPaint_0_2.current!.instanceMatrix.needsUpdate = true;
    Mustang_CarPaint_0_3.current!.instanceMatrix.needsUpdate = true;
    Mustang_CarPaint_0_4.current!.instanceMatrix.needsUpdate = true;
    Mustang_CarPaint_0_5.current!.instanceMatrix.needsUpdate = true;
    FR_Wheel_Rims_0.current!.instanceMatrix.needsUpdate = true;
    FR_Wheel_Rims_0_1.current!.instanceMatrix.needsUpdate = true;
    FL_Wheel_Rims_0.current!.instanceMatrix.needsUpdate = true;
    FL_Wheel_Rims_0_1.current!.instanceMatrix.needsUpdate = true;
    BR_Wheel_Rims_0.current!.instanceMatrix.needsUpdate = true;
    BR_Wheel_Rims_0_1.current!.instanceMatrix.needsUpdate = true;
    BL_Wheel_Rims_0.current!.instanceMatrix.needsUpdate = true;
    BL_Wheel_Rims_0_1.current!.instanceMatrix.needsUpdate = true;

    Mustang_CarPaint_0_1.current!.frustumCulled = false;
    Mustang_CarPaint_0_2.current!.frustumCulled = false;
    Mustang_CarPaint_0_3.current!.frustumCulled = false;
    Mustang_CarPaint_0_4.current!.frustumCulled = false;
    Mustang_CarPaint_0_5.current!.frustumCulled = false;
    FR_Wheel_Rims_0.current!.frustumCulled = false;
    FR_Wheel_Rims_0_1.current!.frustumCulled = false;
    FL_Wheel_Rims_0.current!.frustumCulled = false;
    FL_Wheel_Rims_0_1.current!.frustumCulled = false;
    BR_Wheel_Rims_0.current!.frustumCulled = false;
    BR_Wheel_Rims_0_1.current!.frustumCulled = false;
    BL_Wheel_Rims_0.current!.frustumCulled = false;
    BL_Wheel_Rims_0_1.current!.frustumCulled = false;
  }, [instances]);

  return (
    <group>
      <instancedMesh ref={Mustang_CarPaint_0_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Mustang_CarPaint_0_1.geometry} />
        <meshStandardMaterial attach="material" {...materials.CarPaint} />
      </instancedMesh>
      <instancedMesh ref={Mustang_CarPaint_0_2} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Mustang_CarPaint_0_2.geometry} />
        <meshStandardMaterial attach="material" {...materials.FrontLights} />
      </instancedMesh>
      <instancedMesh ref={Mustang_CarPaint_0_3} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Mustang_CarPaint_0_3.geometry} />
        <meshStandardMaterial attach="material" {...materials.Plastic} />
      </instancedMesh>
      <instancedMesh ref={Mustang_CarPaint_0_4} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Mustang_CarPaint_0_4.geometry} />
        <meshStandardMaterial attach="material" {...materials.RearLights} />
      </instancedMesh>
      <instancedMesh ref={Mustang_CarPaint_0_5} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.Mustang_CarPaint_0_5.geometry} />
        <meshStandardMaterial attach="material" {...materials.Window} />
      </instancedMesh>
      <instancedMesh ref={FR_Wheel_Rims_0} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.FR_Wheel_Rims_0.geometry} />
        <meshStandardMaterial attach="material" {...materials.Rims} />
      </instancedMesh>
      <instancedMesh ref={FR_Wheel_Rims_0_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.FR_Wheel_Rims_0_1.geometry} />
        <meshStandardMaterial attach="material" {...materials.Plastic} />
      </instancedMesh>
      <instancedMesh ref={FL_Wheel_Rims_0} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.FL_Wheel_Rims_0.geometry} />
        <meshStandardMaterial attach="material" {...materials.Rims} />
      </instancedMesh>
      <instancedMesh ref={FL_Wheel_Rims_0_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.FL_Wheel_Rims_0_1.geometry} />
        <meshStandardMaterial attach="material" {...materials.Plastic} />
      </instancedMesh>
      <instancedMesh ref={BR_Wheel_Rims_0} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.BR_Wheel_Rims_0.geometry} />
        <meshStandardMaterial attach="material" {...materials.Rims} />
      </instancedMesh>
      <instancedMesh ref={BR_Wheel_Rims_0_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.BR_Wheel_Rims_0_1.geometry} />
        <meshStandardMaterial attach="material" {...materials.Plastic} />
      </instancedMesh>
      <instancedMesh ref={BL_Wheel_Rims_0} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.BL_Wheel_Rims_0.geometry} />
        <meshStandardMaterial attach="material" {...materials.Rims} />
      </instancedMesh>
      <instancedMesh ref={BL_Wheel_Rims_0_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.BL_Wheel_Rims_0_1.geometry} />
        <meshStandardMaterial attach="material" {...materials.Plastic} />
      </instancedMesh>
    </group>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/easter_eggs/low_poly_ford_mustang_1.glb`);
