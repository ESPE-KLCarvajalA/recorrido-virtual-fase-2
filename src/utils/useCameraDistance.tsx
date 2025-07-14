import { useFrame, useThree } from '@react-three/fiber';
import { useState } from 'react';
import * as THREE from 'three'

const useCameraDistance = (targetPosition: any) => {
  const { camera } = useThree();
  const [distance, setDistance] = useState(Infinity);

  useFrame(() => {
    const cameraPosition = new THREE.Vector3();
    camera.getWorldPosition(cameraPosition);

    const targetVector = new THREE.Vector3(...targetPosition);
    const dist = cameraPosition.distanceTo(targetVector);

    setDistance(dist);
  });

  return distance;
};

export default useCameraDistance;