// Imports de tus componentes originales

// import { Carpa } from "../components/bar/carpa";
import { ParedesInternasBar } from "../components/bar/ParedesInternasBar";
import { PisoBar } from "../components/bar/PisoBar";
// import { SillaBar } from "../components/bar/SillaBar";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// MODIFICADO: Función sin parámetros quality (LOD básico)
const BaseSceneBar2 = () => {
  
  // NUEVO: Configuración LOD para el segundo área del bar
  // Posición central del segundo bar - diferente al Bar1
  const centerPosition: [number, number, number] = [350, 0, 250];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias para el segundo bar
  const MAX_DISTANCE = 500;      // Distancia máxima para renderizar
  const DETAIL_DISTANCE = 250;   // Distancia para detalles
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible cuando en rango */}
      {/* Física - Estructura básica del bar */}
      <PisoBar />
      <ParedesInternasBar />

      {/* NIVEL 2: DETALLES - Solo cuando está cerca (actualmente comentados) */}
      {distance < DETAIL_DISTANCE && (
        <>
          {/* Sin física - Elementos decorativos (actualmente comentados) */}
          {/* <Carpa /> */}
          {/* <SillaBar /> */}
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

export default BaseSceneBar2;