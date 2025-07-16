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

const BaseSceneAfuera = () => {
  
  // CORREGIDO: Posición central basada en el área real de los objetos
  // Tu spawn está en [-80, -1, 170], centro entre spawn y estructuras principales
  const centerPosition: [number, number, number] = [-80, 50, 400];
  const distance = useCameraDistance(centerPosition);
  
  // CORREGIDO: Distancias ajustadas a tu escena real
  const MAX_DISTANCE = 2000;    // Cubrir toda tu estructura extensa
  const MEDIUM_DISTANCE = 800;  // Objetos medios 
  const CLOSE_DISTANCE = 400;   // Detalles cercanos
  
  // LOD: Si está muy lejos de toda el área, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* NIVEL 1: ELEMENTOS ESTRUCTURALES PRINCIPALES - Siempre visibles */}
      {/* Pisos y estructuras básicas que están cerca del spawn */}
      <PisoOctagono /> {/* [-63.105, -5, 133.726] - CERCA del spawn */}
      <PisoTriangulo />
      <PisoArco />
      <PisoLabs />
      <Borde />
      
      {/* Estructuras principales */}
      <Estructura /> {/* Instancias por todo el mapa */}
      <Estructura1 /> {/* [-173.318, 104, 648.364] y [-280.251, 103, 723] */}

      {/* NIVEL 2: DETALLES MEDIOS - Solo cuando está relativamente cerca */}
      {distance < MEDIUM_DISTANCE && (
        <>
          {/* Veredas y elementos del suelo */}
          <Vereda1 />
          <Vereda2 />
          <PisoVereda />
          <PisoVereda2 />
          <PisoVereda5 />
          <PisoCesped1 />
          <PisoCesped3 />
          <PisoCesped5E />
          
          {/* Elementos grandes */}
          <Parqueadero />
          <Tablero />
        </>
      )}

      {/* NIVEL 3: DETALLES FINOS - Solo cuando está muy cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          {/* Elementos decorativos y señalética */}
          <Frases />
          <Senaleticas />
          <Cartelera />
        </>
      )}

      {/* DEBUG: Indicador visual opcional (descomentar para ver LOD funcionando) */}
      {/* 
      <mesh position={centerPosition}>
        <sphereGeometry args={[10]} />
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