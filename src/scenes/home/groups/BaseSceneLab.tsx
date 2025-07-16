// Imports de tus componentes originales
import { ParedLabCompu1 } from "../components/labCompu1/ParedLabCompu1";
import { TechoLabCom1 } from "../components/labCompu1/TechoLabCom1";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneLabProps {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneLab = ({ quality = 1.0 }: BaseSceneLabProps) => {
  
  // NUEVO: Configuración LOD para el laboratorio de computación
  // Posición central del laboratorio - ajustar según tu escena específica
  const centerPosition: [number, number, number] = [200, 0, 100];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias para el laboratorio
  const MAX_DISTANCE = 500;      // Distancia máxima para renderizar
  const DETAIL_DISTANCE = 250;   // Distancia para detalles del techo
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;
  
  // NUEVO: Calidad adaptativa basada en distancia y calidad global
  const adaptiveQuality = Math.min(1.0, (MAX_DISTANCE - distance) / MAX_DISTANCE) * quality;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible cuando en rango */}
      {/* Paredes del laboratorio (estructura principal) */}
      <ParedLabCompu1 />

      {/* NIVEL 2: DETALLES - Solo cuando está relativamente cerca */}
      {distance < DETAIL_DISTANCE && (
        <>
          {/* Techo con detalles */}
          <TechoLabCom1 />
        </>
      )}

      {/* Indicador visual opcional - Descomentar para ver el LOD funcionando */}
      {/* 
      <mesh position={centerPosition}>
        <sphereGeometry args={[2]} />
        <meshBasicMaterial 
          color={distance < DETAIL_DISTANCE ? 'green' : 'yellow'} 
          wireframe 
          transparent
          opacity={0.3}
        />
      </mesh>
      */}
    </>
  );
};

export default BaseSceneLab;