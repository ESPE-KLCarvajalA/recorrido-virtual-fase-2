import { ComponentType } from 'react';
import useCameraDistance from './useCameraDistance';

interface LODProps {
  position: [number, number, number];
  maxDistance?: number;
  children?: React.ReactNode;
}

export function withLOD<T extends object>(
  Component: ComponentType<T>,
  maxDistance: number = 200
) {
  return function LODComponent(props: T & LODProps) {
    const { position, ...componentProps } = props;
    const distance = useCameraDistance(position);
    
    if (distance > maxDistance) {
      return null;
    }
    
    return <Component {...(componentProps as T)} />;
  };
}

// Hook simplificado para usar en componentes
export function useConditionalRender(
  position: [number, number, number], 
  maxDistance: number = 200
): boolean {
  const distance = useCameraDistance(position);
  return distance <= maxDistance;
}
