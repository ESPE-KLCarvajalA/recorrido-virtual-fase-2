// hooks/useCameraDistance.ts - VERSIÓN CORREGIDA
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const useCameraDistance = (targetPosition: [number, number, number]) => {
  const { camera } = useThree();
  const distanceRef = useRef(Infinity);
  
  // Crear vectores una sola vez para evitar re-creaciones constantes
  const cameraPositionRef = useRef(new THREE.Vector3());
  const targetVectorRef = useRef(new THREE.Vector3(...targetPosition));
  
  useFrame(() => {
    // Obtener posición de cámara sin crear nuevos objetos
    camera.getWorldPosition(cameraPositionRef.current);
    
    // Calcular distancia
    const newDistance = cameraPositionRef.current.distanceTo(targetVectorRef.current);
    
    // Solo actualizar si hay cambio significativo (evita updates innecesarios)
    if (Math.abs(newDistance - distanceRef.current) > 0.5) {
      distanceRef.current = newDistance;
    }
  });
  
  return distanceRef.current;
};

export default useCameraDistance;