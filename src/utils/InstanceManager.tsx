import * as THREE from 'three';
import { useEffect, useRef } from 'react';

interface InstanceData {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}

interface InstanceManagerProps {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  instances: InstanceData[];
  maxDistance?: number;
  viewerPosition?: THREE.Vector3; // ← posición del observador (ej. cámara o jugador)
}

export function InstanceManager({
  geometry,
  material,
  instances,
  maxDistance = 200,
  viewerPosition = new THREE.Vector3(0, 0, 0), // posición por defecto
}: InstanceManagerProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const matrix = new THREE.Matrix4();
    let visibleCount = 0;

    instances.forEach((instance) => {
      const position = new THREE.Vector3(...instance.position);
      const distance = position.distanceTo(viewerPosition);

      if (distance > maxDistance) return;

      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);

      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      meshRef.current!.setMatrixAt(visibleCount, matrix);
      visibleCount++;
    });

    meshRef.current.count = visibleCount;
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.frustumCulled = false;
  }, [instances, viewerPosition, maxDistance]);

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, instances.length]}
      castShadow
      receiveShadow
    />
  );
}
