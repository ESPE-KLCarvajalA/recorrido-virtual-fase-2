// components/LimitesEscenario.tsx
// SOLO límites perimetrales - SIN protección contra caídas

import { useBox } from '@react-three/cannon';
import { Text } from '@react-three/drei';

interface LimitesEscenarioProps {
  mostrarDebug?: boolean;
}

const LimitesEscenario = ({ mostrarDebug = false }: LimitesEscenarioProps) => {
  
  // Configuración SOLO para los límites perimetrales
  const config = {
    altura: 100,
    grosor: 20,
    // Límites exactos que especificaste
    limiteNorte: 1600,   // Norte: hasta z = 1600
    limiteSur: -1200,    // Sur: hasta z = -1200  
    limiteEste: 1200,    // Este: hasta x = 1200
    limiteOeste: -1000,  // Oeste: hasta x = -1000
    anchoCampus: 2200,   // Ancho total (1200 - (-1000) = 2200)
    profundidadCampus: 2800, // Profundidad total (1600 - (-1200) = 2800)
  };

  // LÍMITE NORTE - z = 1600
  const [refNorte] = useBox(() => ({
    position: [0, config.altura / 2, config.limiteNorte],
    args: [config.anchoCampus, config.altura, config.grosor],
    type: 'Static',
  }));

  // LÍMITE SUR - z = -1200
  const [refSur] = useBox(() => ({
    position: [0, config.altura / 2, config.limiteSur],
    args: [config.anchoCampus, config.altura, config.grosor],
    type: 'Static',
  }));

  // LÍMITE ESTE - x = 1200
  const [refEste] = useBox(() => ({
    position: [config.limiteEste, config.altura / 2, 200], // Centro en Z
    args: [config.grosor, config.altura, config.profundidadCampus],
    type: 'Static',
  }));

  // LÍMITE OESTE - x = -1000
  const [refOeste] = useBox(() => ({
    position: [config.limiteOeste, config.altura / 2, 200], // Centro en Z
    args: [config.grosor, config.altura, config.profundidadCampus],
    type: 'Static',
  }));

  // ❌ ELIMINADO: Suelo de seguridad (para permitir caídas)
  // ❌ ELIMINADO: Techo de seguridad (movimiento vertical libre)

  return (
    <group name="limites-escenario-perimetro">
      {/* Muro Norte */}
      <mesh ref={refNorte}>
        <boxGeometry args={[config.anchoCampus, config.altura, config.grosor]} />
        <meshBasicMaterial 
          transparent 
          opacity={mostrarDebug ? 0.3 : 0} 
          color="#ff0000" 
        />
      </mesh>

      {/* Muro Sur */}
      <mesh ref={refSur}>
        <boxGeometry args={[config.anchoCampus, config.altura, config.grosor]} />
        <meshBasicMaterial 
          transparent 
          opacity={mostrarDebug ? 0.3 : 0} 
          color="#ff0000" 
        />
      </mesh>

      {/* Muro Este */}
      <mesh ref={refEste}>
        <boxGeometry args={[config.grosor, config.altura, config.profundidadCampus]} />
        <meshBasicMaterial 
          transparent 
          opacity={mostrarDebug ? 0.3 : 0} 
          color="#ff0000" 
        />
      </mesh>

      {/* Muro Oeste */}
      <mesh ref={refOeste}>
        <boxGeometry args={[config.grosor, config.altura, config.profundidadCampus]} />
        <meshBasicMaterial 
          transparent 
          opacity={mostrarDebug ? 0.3 : 0} 
          color="#ff0000" 
        />
      </mesh>

      {/* Debug: Marcadores de límites cuando mostrarDebug = true */}
      {mostrarDebug && (
        <group name="debug-markers">
          {/* Marcador Norte */}
          <mesh position={[0, 10, config.limiteNorte + 20]}>
            <sphereGeometry args={[8]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
          <Text position={[0, 20, config.limiteNorte + 20]} fontSize={8} color="#ff0000">
            NORTE (Z = {config.limiteNorte})
          </Text>

          {/* Marcador Sur */}
          <mesh position={[0, 10, config.limiteSur - 20]}>
            <sphereGeometry args={[8]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
          <Text position={[0, 20, config.limiteSur - 20]} fontSize={8} color="#ff0000">
            SUR (Z = {config.limiteSur})
          </Text>

          {/* Marcador Este */}
          <mesh position={[config.limiteEste + 20, 10, 200]}>
            <sphereGeometry args={[8]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
          <Text position={[config.limiteEste + 20, 20, 200]} fontSize={8} color="#ff0000">
            ESTE (X = {config.limiteEste})
          </Text>

          {/* Marcador Oeste */}
          <mesh position={[config.limiteOeste - 20, 10, 200]}>
            <sphereGeometry args={[8]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
          <Text position={[config.limiteOeste - 20, 20, 200]} fontSize={8} color="#ff0000">
            OESTE (X = {config.limiteOeste})
          </Text>

          {/* Información general */}
          <Text position={[0, 80, 0]} fontSize={12} color="#ffff00" anchorX="center">
            LÍMITES PERIMETRALES ACTIVOS
          </Text>
          <Text position={[0, 60, 0]} fontSize={6} color="#ffff00" anchorX="center">
            Sin protección contra caídas
          </Text>
        </group>
      )}
    </group>
  );
};

export default LimitesEscenario;

/*
╔══════════════════════════════════════════════════════════════════╗
║                    CONFIGURACIÓN ACTUAL                         ║
╚══════════════════════════════════════════════════════════════════╝

✅ QUÉ INCLUYE:
• Muro Norte: z = 1600 (cubre todas las estructuras)
• Muro Sur: z = -1200 (cubre todos los laboratorios)  
• Muro Este: x = 1200 (cubre área de estructuras)
• Muro Oeste: x = -1000 (cubre posición inicial y más)

❌ QUÉ NO INCLUYE:
• Suelo de seguridad (el personaje PUEDE caer infinitamente)
• Techo límite (movimiento vertical completamente libre)

🎮 COMPORTAMIENTO:
• El personaje choca SOLO con los muros laterales
• Si cae fuera del nivel, caerá infinitamente
• Responsabilidad del diseño del nivel evitar caídas
• Movimiento vertical ilimitado

⚠️ CONSIDERACIONES:
• Asegúrate de que tu nivel tenga suelos sólidos
• El personaje puede volar infinitamente hacia arriba
• Si hay huecos en el nivel, el personaje caerá sin parar

🔧 PARA ACTIVAR DEBUG:
<LimitesEscenario mostrarDebug={true} />
Esto mostrará esferas rojas en cada límite con etiquetas
*/