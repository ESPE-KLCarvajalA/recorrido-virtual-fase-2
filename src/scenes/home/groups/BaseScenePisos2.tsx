// Imports de tus componentes originales
import { PisoAula } from "../components/pisos/pisoAula";
import { PisoCamino } from "../components/pisos/PisoCamino";
import { PisoCesped2 } from "../components/pisos/PisoCesped2";
import { PisoCesped4 } from "../components/pisos/PisoCesped4";
import { PisoCesped5I } from "../components/pisos/PisoCesped5I";
import { PisoPrueba } from "../components/pisos/PisoPrueba";
import { PisoTriangulo2 } from "../components/pisos/PisoTriangulo2";
import { PisoVereda3 } from "../components/pisos/pisoVereda3";
import { PisoVereda4 } from "../components/pisos/pisoVereda4";
import { PisoVereda41 } from "../components/pisos/pisoVereda41";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// MODIFICADO: Función sin parámetros quality (LOD básico)
const BaseScenePisos2 = () => {
  
  // NUEVO: Configuración LOD para pisos del segundo nivel
  const centerPosition: [number, number, number] = [100, 40, 100];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias
  const MAX_DISTANCE = 600;
  const MEDIUM_DISTANCE = 300;
  const CLOSE_DISTANCE = 150;
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: PISOS PRINCIPALES - Siempre visible */}
      {/* Física - Pisos estructurales */}
      <PisoAula />
      <PisoCamino />
      <PisoPrueba />

      {/* NIVEL 2: PISOS MEDIOS - Distancia media */}
      {distance < MEDIUM_DISTANCE && (
        <>
          <PisoTriangulo2 />
          <PisoVereda3 />
          <PisoVereda4 />
          <PisoVereda41 />
        </>
      )}

      {/* NIVEL 3: DETALLES DE CÉSPED - Solo muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          <PisoCesped2 />
          <PisoCesped4 />
          <PisoCesped5I />
        </>
      )}
    </>
  );
};

export default BaseScenePisos2;