import { Cancha } from "../components/otros/cancha";
import { Palma } from "../components/otros/palma";
import { Puerta1 } from "../components/puerta/Puerta1";
import { Puerta2 } from "../components/puerta/Puerta2";
import { Puertas3 } from "../components/puerta/Puerta3";
import { Rejilla } from "../components/rejilla/rejilla";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// MODIFICADO: Función sin parámetros quality (LOD básico)
const BaseSceneOtros = () => {
  
  // NUEVO: Configuración LOD para elementos varios
  const centerPosition: [number, number, number] = [0, 0, 200];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias
  const MAX_DISTANCE = 600;
  const MEDIUM_DISTANCE = 300;
  const CLOSE_DISTANCE = 150;
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: ELEMENTOS PRINCIPALES - Siempre visible */}
      <Puerta1 />
      <Puerta2 />
      <Puertas3 />

      {/* NIVEL 2: ELEMENTOS MEDIOS - Distancia media */}
      {distance < MEDIUM_DISTANCE && (
        <>
          <Cancha />
          <Rejilla />
        </>
      )}

      {/* NIVEL 3: DETALLES DECORATIVOS - Solo muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          <Palma />
        </>
      )}
    </>
  );
};

export default BaseSceneOtros;