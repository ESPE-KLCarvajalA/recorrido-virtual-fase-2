import { Pared1 } from '../components/oficina/Pared1';
import { Pared2 } from '../components/oficina/Pared2';
import { SobretechoOficina } from '../components/oficina/Sobretecho';
import { ParedS1 } from '../components/secretaria/ParedS1';
import { ParedS2 } from '../components/secretaria/ParedS2';

// Componentes sin física
import { TechoOficina } from '../components/oficina/TechoOficina';
import { Ventana1 } from '../components/ventana/Ventana1';
import { Ventana2 } from '../components/ventana/Ventana2';
import { Pared3 } from '../components/oficina/Pared3';

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// MODIFICADO: Función sin parámetros quality (LOD básico)
const BaseSceneOficina = () => {
  
  // NUEVO: Configuración LOD para área de oficinas
  const centerPosition: [number, number, number] = [150, 20, 50];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias
  const MAX_DISTANCE = 400;
  const MEDIUM_DISTANCE = 200;
  const CLOSE_DISTANCE = 100;
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible */}
      {/* Componentes CON física */}
      <Pared1 />
      <Pared2 />
      <Pared3 />

      {/* NIVEL 2: ELEMENTOS MEDIOS - Distancia media */}
      {distance < MEDIUM_DISTANCE && (
        <>
          <ParedS1 />
          <ParedS2 />
          <SobretechoOficina />
          <TechoOficina />
        </>
      )}

      {/* NIVEL 3: DETALLES FINOS - Solo muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          {/* Sin física - Ventanas y detalles */}
          <Ventana1 />
          <Ventana2 />
        </>
      )}
    </>
  );
};

export default BaseSceneOficina;