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

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneVilla2Props {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneVilla2 = ({ quality = 1.0 }: BaseSceneVilla2Props) => {
  
  // NUEVO: Configuración LOD para segunda villa (posición diferente)
  const centerPosition: [number, number, number] = [600, 0, 600];
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