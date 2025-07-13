import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

// Configuración general de distancias
export const RENDER_DISTANCES = {
  CLOSE: 150,   // Objetos muy cercanos (ej. personaje, interiores)
  MEDIUM: 300,  // Objetos de importancia media (ej. laboratorios, entradas)
  FAR: 500,     // Objetos lejanos o decorativos (ej. villas)
};

// Hook para calcular la distancia desde la cámara a una posición objetivo
function useCameraDistance(targetPosition: [number, number, number]) {
  const camera = useThree((state) => state.camera);

  return useMemo(() => {
    const target = new THREE.Vector3(...targetPosition);
    return camera.position.distanceTo(target);
  }, [
    Math.floor(camera.position.x / 25), // Mejora la reactividad
    Math.floor(camera.position.z / 25),
    targetPosition,
  ]);
}

type ConditionalRenderProps = {
  children: React.ReactNode;
  position: [number, number, number]; // Posición del centro del objeto
  distance?: number;                 // Distancia máxima de renderizado
  debug?: boolean;                   // Imprimir logs en consola si es true
};

// Componente que renderiza children si están dentro de la distancia definida
export default function ConditionalRender({
  children,
  position,
  distance = RENDER_DISTANCES.MEDIUM,
  debug = false,
}: ConditionalRenderProps) {
  const cameraDistance = useCameraDistance(position);

  const isVisible = cameraDistance <= distance;

  if (debug && import.meta.env.DEV) {
    console.log(
      `%c[ConditionalRender]`,
      'color: lightgreen',
      `Object at [${position.join(', ')}]: distance=${Math.round(cameraDistance)}, visible=${isVisible}`
    );
  }

  return isVisible ? <>{children}</> : null;
}
