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

// Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

const BaseSceneAfuera = () => {
  
  // 🎯 CENTRO CALCULADO: Punto óptimo entre spawn [-80,-1,170] y distribución de objetos
  const centerPosition: [number, number, number] = [-40, 20, 260];
  const distance = useCameraDistance(centerPosition);
  
  // 🎯 DISTANCIAS CALCULADAS según análisis de posiciones reales:
  const MAX_DISTANCE = 1500;     // Cubre toda la Estructura distribuida [695, 21, -200] hasta [-280, 103, 723]
  const MEDIUM_DISTANCE = 600;   // Cubre PisoTriangulo [-156, -3, 292] y estructuras medias
  const CLOSE_DISTANCE = 300;    // Cubre PisoLabs [-17, -1, -203] y elementos cercanos
  
  // LOD: Si está muy lejos de toda el área, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* 🟢 NIVEL 1: ELEMENTOS SIEMPRE VISIBLES (Estructurales y cercanos al spawn) */}
      
      {/* Pisos principales cerca del spawn [-80,-1,170] */}
      <PisoOctagono />      {/* [-63.105, -5, 133.726] - MUY CERCA del spawn */}
      <PisoArco /> 
               {/* [-2.431, 0.5, 31.138] - CERCA del spawn */}
      <Borde />             {/* Elemento estructural */}
      
      {/* Estructuras principales (críticas para navegación) */}
      <Estructura />        {/* Instancias distribuidas por todo el mapa */}
      <Estructura1 />       {/* [-173.318, 104, 648.364] y [-280.251, 103, 723] */}

      {/* 🟡 NIVEL 2: ELEMENTOS MEDIOS (Solo cuando está relativamente cerca) */}
      {distance < MEDIUM_DISTANCE && (
        <>
          {/* Pisos y elementos a distancia media */}
          <PisoTriangulo />     {/* [-156.001, -3, 292.708] - MEDIO */}
          <PisoLabs />          {/* [-17.977, -1, -203.107] - MEDIO */}
          
          {/* Veredas y elementos del suelo */}
          <Vereda1 />
          <Vereda2 />
          <PisoVereda />
          <PisoVereda2 />
          <PisoVereda5 />
          <PisoCesped1 />
          <PisoCesped3 />
          <PisoCesped5E />
          
          {/* Elementos grandes funcionales */}
          <Parqueadero />
          <Tablero />
        </>
      )}

      {/* 🔴 NIVEL 3: DETALLES FINOS (Solo cuando está muy cerca) */}
      {distance < CLOSE_DISTANCE && (
        <>
          {/* Elementos decorativos y señalética */}
          <Frases />
          <Senaleticas />
          <Cartelera />
        </>
      )}

      
    </>
  );
};

export default BaseSceneAfuera;