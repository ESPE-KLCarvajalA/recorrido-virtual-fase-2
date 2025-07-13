import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useMemo, useState } from 'react';
import { GLTF } from 'three-stdlib';
import { useThree, useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    rejilla_puerta004: THREE.Mesh;
  };
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

const SharedRejillaMaterial = new THREE.MeshStandardMaterial({
  color: '#444444',
  roughness: 0.8,
  metalness: 0.6,
  side: THREE.DoubleSide,
});

let SharedRejillaGeometry: THREE.BufferGeometry | null = null;

function useCameraDistance() {
  const { camera } = useThree();
  const [distance, setDistance] = useState(camera.position.length());

  useFrame(() => {
    setDistance(camera.position.length());
  });

  return distance;
}

export function Rejilla() {
  const { nodes } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/rejilla/rejilla.glb') as unknown as GLTFResult;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const cameraDistance = useCameraDistance();

  const allInstances: InstanceData[] = [
    // ... tus instancias ...
  ];

  const visibleInstances = useMemo(() => {
    if (cameraDistance < 350) return allInstances;
    if (cameraDistance < 600) return allInstances.slice(0, 20);
    return allInstances.slice(0, 12);
  }, [cameraDistance]);

  useEffect(() => {
    if (!nodes.rejilla_puerta004 || SharedRejillaGeometry) return;

    SharedRejillaGeometry = nodes.rejilla_puerta004.geometry.clone();
    SharedRejillaGeometry.computeBoundingSphere();
    SharedRejillaGeometry.computeVertexNormals();
    if (SharedRejillaGeometry.attributes.uv2) {
      SharedRejillaGeometry.deleteAttribute('uv2');
    }
  }, [nodes]);

  useEffect(() => {
    if (!SharedRejillaGeometry || !meshRef.current) return;

    visibleInstances.forEach((inst, i) => {
      const pos = new THREE.Vector3(...inst.position);
      const rot = new THREE.Euler(...inst.rotation);
      const scl = new THREE.Vector3(...inst.scale);
      const matrix = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);
      meshRef.current.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.frustumCulled = true;
  }, [visibleInstances]);

  if (!SharedRejillaGeometry) return null;

  return (
    <instancedMesh
      ref={meshRef}
      args={[SharedRejillaGeometry, SharedRejillaMaterial, visibleInstances.length]}
      count={visibleInstances.length}
      frustumCulled
    />
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/rejilla/rejilla.glb');
