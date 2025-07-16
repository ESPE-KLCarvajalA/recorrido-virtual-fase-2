import { Compus } from "../components/labCompu1/compus";
import { Pizarron } from "../components/labCompu1/Pizarron";
import { Escritorio } from "../components/oficina/Escritorio";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneOtros2Props {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneOtros2 = ({ quality = 1.0 }: BaseSceneOtros2Props) => {
  
  // NUEVO: Configuración LOD para elementos de oficina/lab
  const centerPosition: [number, number, number] = [180, 10, 120];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias
  const MAX_DISTANCE = 300;
  const DETAIL_DISTANCE = 150;
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;
  
  // NUEVO: Calidad adaptativa
  const adaptiveQuality = Math.min(1.0, (MAX_DISTANCE - distance) / MAX_DISTANCE) * quality;

  return (
    <>
      {/* NIVEL 1: ELEMENTOS PRINCIPALES - Siempre visible */}
      <Escritorio />
      <Pizarron />

      {/* NIVEL 2: DETALLES - Solo cuando está cerca */}
      {distance < DETAIL_DISTANCE && (
        <>
          <Compus />
        </>
      )}
    </>
  );
};

export default BaseSceneOtros2;