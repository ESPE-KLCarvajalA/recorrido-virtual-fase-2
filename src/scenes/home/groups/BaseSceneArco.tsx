// Imports de tus componentes originales
import { ParedE2 } from "../components/entrada2/ParedE2";
import { TechoEntrada } from "../components/entrada2/TechoEntrada";

// Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

const BaseSceneArco = () => {
  
  // 🎯 CENTRO CALCULADO: Centro geométrico real del arco
  // ParedE2: [-1.756, 30, 40.526] + TechoEntrada: [-6.237, 64, 16.351]
  const centerPosition: [number, number, number] = [-4, 47, 28];
  const distance = useCameraDistance(centerPosition);
  
  // 🎯 DISTANCIAS CALCULADAS:
  // Arco está a ~155-182 unidades del spawn [-80,-1,170]
  const MAX_DISTANCE = 500;      // Cubre bien el área del arco
  const DETAIL_DISTANCE = 300;   // Para detalles del techo
  
  // LOD: Si está muy lejos del arco, no renderizar nada
  if (distance > MAX_DISTANCE) return null;

  return (
    <>
      {/* 🟢 NIVEL 1: ESTRUCTURA PRINCIPAL - Siempre visible */}
      {/* Física - Paredes del arco (críticas para colisiones) */}
      <ParedE2 />               {/* [-1.756, 30, 40.526] - ESTRUCTURA PRINCIPAL */}

      {/* 🟡 NIVEL 2: DETALLES - Solo cuando está cerca */}
      {distance < DETAIL_DISTANCE && (
        <>
          {/* Sin física - Techo decorativo */}
          <TechoEntrada />      {/* [-6.237, 64, 16.351] - DETALLE VISUAL */}
        </>
      )}

    
    </>
  );
};

export default BaseSceneArco;