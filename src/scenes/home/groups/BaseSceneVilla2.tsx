// Imports de tus componentes originales
import { Paredes1 } from "../components/villas/Paredes1";
import { TechoVilla1 } from "../components/villas/TechoVilla1";
import { TechoVilla11 } from "../components/villas/TechoVilla11";
import { TechoVilla2 } from "../components/villas/TechoVilla2";
import { TechoVilla21 } from "../components/villas/TechoVilla21";
import { TechoVilla3 } from "../components/villas/TechoVilla3";
import { TechoVilla4 } from "../components/villas/TechoVilla4";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// MODIFICADO: Función sin parámetros quality (LOD básico)
const BaseSceneVilla2 = () => {
  
  // CORREGIDO: Configuración LOD para segunda villa (posición diferente)
  const centerPosition: [number, number, number] = [700, 0, 1000]; // Segunda área de villas
  const distance = useCameraDistance(centerPosition);
  
  // CORREGIDO: Distancias mayores porque las villas están lejos
  const MAX_DISTANCE = 2000;     // Distancia máxima para renderizar
  const MEDIUM_DISTANCE = 1000;  // Distancia media
  const CLOSE_DISTANCE = 500;    // Distancia para detalles
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible */}
      {/* Física - Paredes principales */}
      <Paredes1 />

      {/* NIVEL 2: TECHOS BÁSICOS - Distancia media */}
      {distance < MEDIUM_DISTANCE && (
        <>
          {/* Sin física - Techos principales */}
          <TechoVilla1 />
          <TechoVilla2 />
          <TechoVilla3 />
          <TechoVilla4 />
        </>
      )}

      {/* NIVEL 3: DETALLES FINOS - Solo muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          <TechoVilla11 />
          <TechoVilla21 />
        </>
      )}
    </>
  );
};

export default BaseSceneVilla2;