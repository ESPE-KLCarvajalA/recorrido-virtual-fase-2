// components/LimitesEscenario.tsx
// Límites ajustados específicamente para TU campus virtual

import { useBox } from '@react-three/cannon';

interface LimitesEscenarioProps {
  mostrarDebug?: boolean;
}

const LimitesEscenario = ({ mostrarDebug = false }: LimitesEscenarioProps) => {
  
  // Configuración basada en TUS coordenadas del campus
  // Posición inicial del personaje: [-80, -1, 170]
  // Coordenadas de laboratorios: [-165, 20, -56], [-179, 20, -68], [167, 20, -279]
  // Estructura más lejana: aproximadamente [1000, 20, -1000]

  const config = {
    altura: 100,
    grosor: 20,
    // Expandido para cubrir todo tu campus
    limiteNorte: 1600,   // Más al norte de tus estructuras
    limiteSur: -1200,    // Más al sur de tus laboratorios  
    limiteEste: 1200,    // Más al este de tus estructuras
    limiteOeste: -1000,  // Más al oeste de tu posición inicial
    anchoCampus: 2200,   // Ancho total
    profundidadCampus: 2800, // Profundidad total
  };

  // Límite Norte
  const [refNorte] = useBox(() => ({
    position: [0, config.altura / 2, config.limiteNorte],
    args: [config.anchoCampus, config.altura, config.grosor],
    type: 'Static',
  }));

  // Límite Sur
  const [refSur] = useBox(() => ({
    position: [0, config.altura / 2, config.limiteSur],
    args: [config.anchoCampus, config.altura, config.grosor],
    type: 'Static',
  }));

  // Límite Este
  const [refEste] = useBox(() => ({
    position: [config.limiteEste, config.altura / 2, 200],
    args: [config.grosor, config.altura, config.profundidadCampus],
    type: 'Static',
  }));

  // Límite Oeste
  const [refOeste] = useBox(() => ({
    position: [config.limiteOeste, config.altura / 2, 200],
    args: [config.grosor, config.altura, config.profundidadCampus],
    type: 'Static',
  }));

  // Suelo de seguridad (evita caídas infinitas)
  const [refSuelo] = useBox(() => ({
    position: [0, -30, 200], // Bien debajo del nivel del suelo
    args: [config.anchoCampus, 10, config.profundidadCampus],
    type: 'Static',
  }));

  // Techo de seguridad (evita que el personaje vuele demasiado alto)
  const [refTecho] = useBox(() => ({
    position: [0, 200, 200], // Muy arriba
    args: [config.anchoCampus, 10, config.profundidadCampus],
    type: 'Static',
  }));

  return (
    <group name="limites-escenario">
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

      {/* Suelo de seguridad */}
      <mesh ref={refSuelo}>
        <boxGeometry args={[config.anchoCampus, 10, config.profundidadCampus]} />
        <meshBasicMaterial 
          transparent 
          opacity={mostrarDebug ? 0.2 : 0} 
          color="#00ff00" 
        />
      </mesh>

      {/* Techo de seguridad */}
      <mesh ref={refTecho}>
        <boxGeometry args={[config.anchoCampus, 10, config.profundidadCampus]} />
        <meshBasicMaterial 
          transparent 
          opacity={mostrarDebug ? 0.1 : 0} 
          color="#0000ff" 
        />
      </mesh>

      {/* Debug: Información visual cuando mostrarDebug = true */}
      {mostrarDebug && (
        <group>
          {/* Marcadores de esquinas */}
          <mesh position={[config.limiteOeste + 10, 10, config.limiteNorte - 10]}>
            <sphereGeometry args={[5]} />
            <meshBasicMaterial color="#ffff00" />
          </mesh>
          <mesh position={[config.limiteEste - 10, 10, config.limiteNorte - 10]}>
            <sphereGeometry args={[5]} />
            <meshBasicMaterial color="#ffff00" />
          </mesh>
          <mesh position={[config.limiteOeste + 10, 10, config.limiteSur + 10]}>
            <sphereGeometry args={[5]} />
            <meshBasicMaterial color="#ffff00" />
          </mesh>
          <mesh position={[config.limiteEste - 10, 10, config.limiteSur + 10]}>
            <sphereGeometry args={[5]} />
            <meshBasicMaterial color="#ffff00" />
          </mesh>
        </group>
      )}
    </group>
  );
};

export default LimitesEscenario;


// COORDENADAS CONFIGURADAS:
// - Norte: hasta z = 1600 (cubre todas tus estructuras)
// - Sur: hasta z = -1200 (cubre todos tus laboratorios)  
// - Este: hasta x = 1200 (cubre área de estructuras)
// - Oeste: hasta x = -1000 (cubre tu posición inicial y más)
// - Suelo: y = -50 (evita caídas infinitas)
// - Techo: y = 200 (evita vuelos excesivos)