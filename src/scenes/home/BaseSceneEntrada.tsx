import { Physics } from '@react-three/cannon';
import { Canvas, useThree } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Perf } from 'r3f-perf'
import * as THREE from 'three';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAfuera from './components/groups/BaseSceneAfuera';
import BaseSceneArco from './components/groups/BaseSceneArco';
import BaseSceneBar from './components/groups/BaseSceneBar';
import BaseSceneBar2 from './components/groups/BaseSceneBar2';
import BaseSceneLab from './components/groups/BaseSceneLab';
import BaseSceneLab2 from './components/groups/BaseSceneLab2';
import BaseSceneOficina from './components/groups/BaseSceneOficina';
import BaseSceneVilla from './components/groups/BaseSceneVilla';
import BaseSceneVilla2 from './components/groups/BaseSceneVilla2';

// 🎯 BALANCED: Mantener performance pero mostrar contenido completo
const RENDER_DISTANCES = {
  CLOSE: 150,   // Aumentado para ver objetos cercanos
  MEDIUM: 300,  // Aumentado para edificios importantes  
  FAR: 500,     // Aumentado para villas y estructuras lejanas
}

// 🎯 Hook mejorado para calcular distancia desde el PERSONAJE, no la cámara
function useCameraDistance(targetPosition: [number, number, number]) {
  const camera = useThree(state => state.camera);
  
  return useMemo(() => {
    const target = new THREE.Vector3(...targetPosition);
    // ✅ Usar posición de cámara que sigue al personaje
    return camera.position.distanceTo(target);
  }, [
    Math.floor(camera.position.x / 25), // ✅ MÁS frecuente para mejor respuesta
    Math.floor(camera.position.z / 25), // ✅ Detectar movimiento más rápido
    targetPosition
  ]);
}

// 🎯 Componente de renderizado condicional MEJORADO
function ConditionalRender({ 
  children, 
  position, 
  distance = RENDER_DISTANCES.MEDIUM,
  debug = false 
}: {
  children: React.ReactNode;
  position: [number, number, number];
  distance?: number;
  debug?: boolean;
}) {
  const cameraDistance = useCameraDistance(position);
  
  // ✅ DEBUG: Mostrar distancias en consola (solo en desarrollo)
  if (debug && import.meta.env.DEV) {
    console.log(`Object at ${position}: distance=${Math.round(cameraDistance)}, limit=${distance}, visible=${cameraDistance <= distance}`);
  }
  
  // ✅ Renderizar si está dentro de la distancia
  if (cameraDistance > distance) {
    return null;
  }
  
  return <>{children}</>;
}

function SceneContent() {
  // 🎯 Posiciones centrales VERIFICADAS de cada grupo
  const scenePositions = {
    afuera: [0, 0, 0] as [number, number, number],           // ✅ Área central
    arco: [-2, 30, 40] as [number, number, number],          // ✅ Entrada
    bar: [-710, -6, -210] as [number, number, number],       // ✅ CORREGIDO: Centro del bar
    bar2: [-710, -6, -210] as [number, number, number],      // ✅ Mismo sector
    lab: [200, 36, -300] as [number, number, number],        // ✅ CORREGIDO: Labs
    lab2: [-50, 44, -410] as [number, number, number],       // ✅ CORREGIDO: Lab ciencias
    oficina: [100, 30, -100] as [number, number, number],    // ✅ CORREGIDO: Oficinas
    villa: [-485, 25, -500] as [number, number, number],     // ✅ CORREGIDO: Villas
    villa2: [-500, 30, -750] as [number, number, number],    // ✅ Villas lejanas
  };

  return (
    <>
      <BaseCharacter 
        controls 
        positionCharacter={[-92, -1, 170]} 
        args={[2.2]} 
        altura={20} 
        velocidad={40} 
        salto={20} 
        color="green" 
      />

      {/* 🎯 SIEMPRE RENDERIZAR - Escena base y estructuras críticas */}
      <BaseSceneAfuera />
      <BaseSceneArco />
      
      
      {/* 🎯 ESTRUCTURAS PRINCIPALES - SIEMPRE VISIBLES */}
      <BaseSceneBar />        {/* ✅ Paredes del bar */}
      <BaseSceneOficina />    {/* ✅ Paredes de oficinas */}
      <BaseSceneVilla />      {/* ✅ Villas 5, 6, 7 */}

      {/* 🎯 RENDERIZADO CONDICIONAL - Solo para objetos decorativos/secundarios */}
      <ConditionalRender position={scenePositions.lab} distance={RENDER_DISTANCES.MEDIUM}>
      <BaseSceneBar2 />       {/* ✅ Estructuras internas del bar */}
        <BaseSceneLab />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.lab2} distance={RENDER_DISTANCES.MEDIUM}>
      <BaseSceneVilla2 />     {/* ✅ Villas adicionales */}
        <BaseSceneLab2 />
      </ConditionalRender>
    </>
  );
}

const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (
    <Canvas camera={{ position: [-92, 0, 29] }}>
      <Perf position="top-left" />

      {/* 🎯 ILUMINACIÓN OPTIMIZADA */}
      <ambientLight intensity={0.3} /> {/* Reducido de 0.45 */}

      <Physics 
        gravity={[0, -100, 0]} 
        iterations={10}       // ✅ RESTAURADO: Necesario para movimiento fluido
        tolerance={0.001}     // ✅ RESTAURADO: Precisión necesaria para personaje
        allowSleep={false}    // ✅ CRÍTICO: Evitar que personaje se "duerma"
      >
        <SceneContent />
      </Physics>

      <HDRIEnvironment />
      <PointerLockControls ref={controlsRef} />
    </Canvas>
  );
};

export default BaseSceneEntrada;