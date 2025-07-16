// Imports de tus componentes originales
import { Estructura } from "../components/estructura/estructura";
import { Estructura1 } from "../components/estructura/estructura1";
import { Cartelera } from "../components/otros/cartelera";
import { Frases } from "../components/otros/frases";
import { Senaleticas } from "../components/otros/senaleticas";
import { Tablero } from "../components/otros/tablero";
import { Parqueadero } from "../components/parqueadero/parqueadero";
import { Borde } from "../components/primer/Borde";
import { PisoArco } from "../components/primer/PisoArco";
import { PisoCesped1 } from "../components/primer/PisoCesped1";
import { PisoCesped3 } from "../components/primer/PisoCesped3";
import { PisoCesped5E } from "../components/primer/PisoCesped5E";
import { PisoLabs } from "../components/primer/PisoLabs";
import { PisoOctagono } from "../components/primer/PisoOctagono";
import { PisoTriangulo } from "../components/primer/PisoTriangulo";
import { PisoVereda } from "../components/primer/pisoVereda";
import { PisoVereda2 } from "../components/primer/pisoVereda2";
import { PisoVereda5 } from "../components/primer/pisoVereda5";
import { Vereda1 } from "../components/primer/vereda1";
import { Vereda2 } from "../components/primer/vereda2";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// NUEVO: Interface para recibir calidad desde BaseSceneEntrada
interface BaseSceneAfueraProps {
  quality?: number;
}

// MODIFICADO: Agregar prop quality con valor por defecto
const BaseSceneAfuera = ({ quality = 1.0 }: BaseSceneAfueraProps) => {
  
  // NUEVO: Configuración LOD para área exterior
  // Posición central cerca del spawn del personaje [-80, -1, 170]
  const centerPosition: [number, number, number] = [-80, 0, 170];
  const distance = useCameraDistance(centerPosition);
  
  // NUEVO: Configuración de distancias para área exterior (más grandes porque es afuera)
  const MAX_DISTANCE = 1000;     // Distancia máxima para renderizar
  const MEDIUM_DISTANCE = 500;   // Distancia para detalles medios
  const CLOSE_DISTANCE = 250;    // Distancia para detalles finos
  
  // NUEVO: LOD - Si está muy lejos, no renderizar nada
  if (distance > MAX_DISTANCE) return null;
  
  // NUEVO: Calidad adaptativa basada en distancia y calidad global
  const adaptiveQuality = Math.min(1.0, (MAX_DISTANCE - distance) / MAX_DISTANCE) * quality;

  return (
    <>
      {/* NIVEL 1: ELEMENTOS ESTRUCTURALES PRINCIPALES - Siempre visibles cuando en rango */}
      {/* Física - Pisos principales y estructuras básicas */}
      <PisoOctagono />
      <PisoTriangulo />
      <PisoArco />
      <PisoLabs />
      <Borde />
      
      {/* Sin física - Estructuras principales */}
      <Estructura />
      <Estructura1 />

      {/* NIVEL 2: DETALLES MEDIOS - Solo cuando está relativamente cerca */}
      {distance < MEDIUM_DISTANCE && (
        <>
          {/* Física - Veredas y elementos del suelo */}
          <Vereda1 />
          <Vereda2 />
          <PisoVereda />
          <PisoVereda2 />
          <PisoVereda5 />
          <PisoCesped1 />
          <PisoCesped3 />
          <PisoCesped5E />
          
          {/* Sin física - Elementos grandes */}
          <Parqueadero />
          <Tablero />
        </>
      )}

      {/* NIVEL 3: DETALLES FINOS - Solo cuando está muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          {/* Sin física - Elementos decorativos y señalética */}
          <Frases />
          <Senaleticas />
          <Cartelera />
        </>
      )}

      {/* Indicador visual opcional para ver el LOD funcionando - Comentar/descomentar según necesites */}
      {/* 
      <mesh position={centerPosition}>
        <sphereGeometry args={[3]} />
        <meshBasicMaterial 
          color={
            distance < CLOSE_DISTANCE ? 'green' : 
            distance < MEDIUM_DISTANCE ? 'yellow' : 
            'red'
          } 
          wireframe 
          transparent
          opacity={0.3}
        />
      </mesh>
      */}
    </>
  );
};

export default BaseSceneAfuera;