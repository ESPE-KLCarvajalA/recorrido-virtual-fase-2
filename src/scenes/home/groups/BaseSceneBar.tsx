// Imports de tus componentes originales
import { ParedesBar } from "../components/bar/ParedesBar";
import { SobretechoBar } from "../components/bar/SobretechoBar";
import { TechoBar } from "../components/bar/TechoBar";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneBarProps {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneBar = ({ quality = 1.0 }: BaseSceneBarProps) => {
  
  // NUEVO: Configuración LOD para el área del bar
  // Posición central del bar - ajustar según tu escena específica
  const centerPosition: [number, number, number] = [300, 0, 200];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias para el bar
  const MAX_DISTANCE = 500;      // Distancia máxima para renderizar
  const DETAIL_DISTANCE = 250;   // Distancia para detalles del techo
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;
  
  // NUEVO: Calidad adaptativa basada en distancia y calidad global
  const adaptiveQuality = Math.min(1.0, (MAX_DISTANCE - distance) / MAX_DISTANCE) * quality;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible cuando en rango */}
      {/* Física - Paredes del bar (estructura principal) */}
      <ParedesBar />

      {/* NIVEL 2: DETALLES DEL TECHO - Solo cuando está relativamente cerca */}
      {distance < DETAIL_DISTANCE && (
        <>
          {/* Sin física - Techos con detalles */}
          <TechoBar />
          <SobretechoBar />
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

export default BaseSceneBar;