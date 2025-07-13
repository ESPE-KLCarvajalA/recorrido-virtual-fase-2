import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import { GLTF } from 'three-stdlib';
import { MaterialManager } from '../../../../utils/MaterialManager';

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

const SharedGeometriesV2 = {
  frame: null as THREE.BufferGeometry | null,
  glass: null as THREE.BufferGeometry | null,
};

export function Ventanas2() {
  const { nodes } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana2.glb') as unknown as GLTFResult;

  const frameRef = useRef<THREE.InstancedMesh>(null);
  const glassRef = useRef<THREE.InstancedMesh>(null);

  const frameMaterial = MaterialManager.getMaterial('window-frame-2');
  const glassMaterial = MaterialManager.getBaseMaterial('glass');

  const instances = useMemo<InstanceData[]>(() => [
    // ... tu array de instancias aquí, sin cambios
  ], []);

  useEffect(() => {
    if (nodes.WindowL005 && !SharedGeometriesV2.frame) {
      SharedGeometriesV2.frame = nodes.WindowL005.geometry.clone();
      SharedGeometriesV2.glass = nodes.WindowL005_1.geometry.clone();

      SharedGeometriesV2.frame.computeBoundingSphere();
      SharedGeometriesV2.glass.computeBoundingSphere();
    }
  }, [nodes]);

  useEffect(() => {
    if (!SharedGeometriesV2.frame || !SharedGeometriesV2.glass) return;

    instances.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      if (frameRef.current) frameRef.current.setMatrixAt(i, matrix);
      if (glassRef.current) glassRef.current.setMatrixAt(i, matrix);
    });

    if (frameRef.current) {
      frameRef.current.instanceMatrix.needsUpdate = true;
      frameRef.current.frustumCulled = true;
      frameRef.current.count = instances.length;
    }

    if (glassRef.current) {
      glassRef.current.instanceMatrix.needsUpdate = true;
      glassRef.current.frustumCulled = true;
      glassRef.current.count = instances.length;
    }
  }, [instances, nodes]);

  if (!SharedGeometriesV2.frame || !SharedGeometriesV2.glass) return null;

  return (
    <group>
      <instancedMesh
        ref={frameRef}
        args={[SharedGeometriesV2.frame, frameMaterial, instances.length]}
      />
      <instancedMesh
        ref={glassRef}
        args={[SharedGeometriesV2.glass, glassMaterial, instances.length]}
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana2.glb');
