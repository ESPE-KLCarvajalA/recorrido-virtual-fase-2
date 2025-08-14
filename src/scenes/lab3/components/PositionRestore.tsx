// components/PositionRestore.tsx
import { usePositionRestore } from '../../../hooks/usePositionRestore';

/**
 * Componente invisible que maneja la restauración de posición
 * Se puede agregar fácilmente a cualquier escena sin modificar la lógica existente
 */
export const PositionRestore: React.FC = () => {
  usePositionRestore();
  return null; // Componente invisible
};