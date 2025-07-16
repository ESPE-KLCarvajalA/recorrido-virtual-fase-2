// Imports de tus componentes originales
import { ParedLabCiencias1 } from "../components/labCiencias2/ParedLabCiencias1";
import { ParedLabCiencias2 } from "../components/labCiencias2/ParedLabCiencias2";
import { TechoLabCC } from "../components/labCiencias2/TechoLabCC";
import { TechoLabCC2 } from "../components/labCiencias2/TechoLabCC2";
import PisoMedio from "../components/pisos/PisoMedio";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneLab2Props {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneLab2 = ({ quality = 1.0 }: BaseSceneLab2Props) => {
  
  // NUEVO: Configuración LOD para el segundo laboratorio
  const centerPosition: [number, number, number] = [250, 0, 150];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias
  const MAX_DISTANCE = 500;
  const DETAIL_DISTANCE = 250;
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;
  
  // NUEVO: Calidad adaptativa
  const adaptiveQuality = Math.min(1.0, (MAX_DISTANCE - distance) / MAX_DISTANCE) * quality;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible */}
      <ParedLabCiencias1 />
      <ParedLabCiencias2 />
      <PisoMedio />

      {/* NIVEL 2: DETALLES - Solo cuando está cerca */}
      {distance < DETAIL_DISTANCE && (
        <>
          <TechoLabCC />
          <TechoLabCC2 />
        </>
      )}
    </>
  );
};

export default BaseSceneLab2;