// Imports de tus componentes originales
import { ParedE2 } from "../components/entrada2/ParedE2";
import { TechoEntrada } from "../components/entrada2/TechoEntrada";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// MODIFICADO: Función sin parámetros quality (LOD básico)
const BaseSceneArco = () => {
  
  // NUEVO: Configuración LOD para el arco de entrada
  // Posición central del arco - probablemente cerca de la entrada principal
  const centerPosition: [number, number, number] = [0, 10, 0];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias para el arco
  const MAX_DISTANCE = 400;      // Distancia máxima para renderizar
  const DETAIL_DISTANCE = 200;   // Distancia para detalles del techo
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible cuando en rango */}
      {/* Física - Paredes del arco (estructura principal) */}
      <ParedE2 />

      {/* NIVEL 2: DETALLES - Solo cuando está relativamente cerca */}
      {distance < DETAIL_DISTANCE && (
        <>
          {/* Sin física - Techo con detalles */}
          <TechoEntrada />
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

export default BaseSceneArco;