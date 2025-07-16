// Imports de tus componentes originales
import { ParedesBar } from "../components/bar/ParedesBar";
import { SobretechoBar } from "../components/bar/SobretechoBar";
import { TechoBar } from "../components/bar/TechoBar";

// Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

const BaseSceneBar = () => {
  
  // 🎯 CENTRO CALCULADO: Centro geométrico real del área del bar
  // Basado en promedio de todas las posiciones: ParedesBar, TechoBar (3 meshes), SobretechoBar (2 meshes)
  const centerPosition: [number, number, number] = [-682, 60, -112];
  const distance = useCameraDistance(centerPosition);
  
  // 🎯 DISTANCIAS CALCULADAS según análisis de posiciones reales:
  // ParedesBar: ~901 unidades del spawn (más lejano pero crítico)
  // TechoBar y SobretechoBar: 448-795 unidades del spawn
  const MAX_DISTANCE = 1200;     // Cubre toda el área del bar incluyendo ParedesBar
  const MEDIUM_DISTANCE = 700;   // Cubre la mayoría de techos
  const CLOSE_DISTANCE = 500;    // Para detalles más cercanos
  
  // LOD: Si está muy lejos del área del bar, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* 🟢 NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible */}
      {/* Física - Paredes del bar (críticas para colisiones) */}
      <ParedesBar />            {/* [-854.077, -9.046, -291.626] - ESTRUCTURA PRINCIPAL con física */}

      {/* 🟡 NIVEL 2: TECHOS PRINCIPALES - Solo cuando está relativamente cerca */}
      {distance < MEDIUM_DISTANCE && (
        <>
          {/* Sin física - Techos principales del bar */}
          <TechoBar />          {/* 3 meshes: techo022, techo024, techo004 - TECHOS PRINCIPALES */}
        </>
      )}

      {/* 🔴 NIVEL 3: DETALLES FINOS - Solo cuando está cerca */}
      {distance < CLOSE_DISTANCE && (
        <>
          {/* Sin física - Sobretechos decorativos */}
          <SobretechoBar />     {/* 2 meshes: pared_vertical_2028, pared_vertical_2020 - DETALLES */}
        </>
      )}

      {/* 🔧 DEBUG: Indicador visual (descomentar para ver LOD funcionando) */}
      {/* 
      <mesh position={centerPosition}>
        <sphereGeometry args={[20]} />
        <meshBasicMaterial 
          color={
            distance < CLOSE_DISTANCE ? 'green' : 
            distance < MEDIUM_DISTANCE ? 'yellow' : 
            'red'
          } 
          wireframe 
          transparent
          opacity={0.4}
        />
      </mesh>
      */}
    </>
  );
};

export default BaseSceneBar;