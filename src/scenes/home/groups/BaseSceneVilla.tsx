// Imports de tus componentes originales
import { ParedVilla5 } from "../components/villas/ParedVilla5";
import { ParedVilla6 } from "../components/villas/ParedVilla6";
import { ParedVilla7 } from "../components/villas/ParedVilla7";
import { SobretechoVilla7 } from "../components/villas/sobretechoVilla7";
import { TechoVilla5 } from "../components/villas/TechoVilla5";
import { TechoVilla6 } from "../components/villas/TechoVilla6";
import { TechoVilla7 } from "../components/villas/TechoVilla7";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneVillaProps {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneVilla = ({ quality = 1.0 }: BaseSceneVillaProps) => {
  
  // NUEVO: Configuración LOD para villas (están lejos, distancias mayores)
  const centerPosition: [number, number, number] = [500, 0, 500];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias (mayores porque las villas están lejos)
  const MAX_DISTANCE = 800;
  const MEDIUM_DISTANCE = 400;
  const CLOSE_DISTANCE = 200;
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;
  
  // NUEVO: Calidad adaptativa
  const adaptiveQuality = Math.min(1.0, (MAX_DISTANCE - distance) / MAX_DISTANCE) * quality;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible */}
      {/* Física - Paredes principales */}
      <ParedVilla5 />
      <ParedVilla6 />
      <ParedVilla7 />

      {/* NIVEL 2: TECHOS BÁSICOS - Distancia media */}
      {distance < MEDIUM_DISTANCE && (
        <>
          {/* Sin física - Techos principales */}
          <TechoVilla5 />
          <TechoVilla6 />
          <TechoVilla7 />
        </>
      )}

      {/* NIVEL 3: DETALLES FINOS - Solo muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          <SobretechoVilla7 />
        </>
      )}
    </>
  );
};

export default BaseSceneVilla;