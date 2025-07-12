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
import { TechoNuevo } from './components/oficina/prueba';

// 🎯 BALANCED: Mantener performance pero mostrar contenido completo
const RENDER_DISTANCES = {
  CLOSE: 150,   // Aumentado para ver objetos cercanos
  MEDIUM: 300,  // Aumentado para edificios importantes  
  FAR: 500,     // Aumentado para villas y estructuras lejanas
}

// 🎯 Hook para calcular distancia de cámara
function useCameraDistance(targetPosition: [number, number, number]) {
  const camera = useThree(state => state.camera);
  
  return useMemo(() => {
    const target = new THREE.Vector3(...targetPosition);
    return camera.position.distanceTo(target);
  }, [camera.position.x, camera.position.z, targetPosition]); // Solo X y Z para performance
}

// 🎯 Componente de renderizado condicional
function ConditionalRender({ 
  children, 
  position, 
  distance = RENDER_DISTANCES.MEDIUM 
}: {
  children: React.ReactNode;
  position: [number, number, number];
  distance?: number;
}) {
  const cameraDistance = useCameraDistance(position);
  
  if (cameraDistance > distance) {
    return null; // No renderizar si está lejos
  }
  
  return <>{children}</>;
}

function SceneContent() {
  // 🎯 Posiciones centrales de cada grupo
  const scenePositions = {
    afuera: [0, 0, 0] as [number, number, number],
    arco: [-2, 30, 40] as [number, number, number],
    bar: [-854, -9, -291] as [number, number, number],
    bar2: [-710, -6, -210] as [number, number, number],
    lab: [256, 36, -249] as [number, number, number],
    lab2: [-17, 44, -410] as [number, number, number],
    oficina: [72, 30, -71] as [number, number, number],
    villa: [-485, 25, -729] as [number, number, number],
    villa2: [-500, 30, -750] as [number, number, number],
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

      {/* 🎯 SIEMPRE RENDERIZAR (escena base) */}
      <BaseSceneAfuera />

      {/* 🎯 RENDERIZADO CONDICIONAL POR DISTANCIA */}
      <ConditionalRender position={scenePositions.arco} distance={RENDER_DISTANCES.CLOSE}>
        <BaseSceneArco />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.bar} distance={RENDER_DISTANCES.MEDIUM}>
        <BaseSceneBar />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.bar2} distance={RENDER_DISTANCES.MEDIUM}>
        <BaseSceneBar2 />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.lab} distance={RENDER_DISTANCES.MEDIUM}>
        <BaseSceneLab />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.lab2} distance={RENDER_DISTANCES.MEDIUM}>
        <BaseSceneLab2 />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.oficina} distance={RENDER_DISTANCES.CLOSE}>
        <BaseSceneOficina />
        <TechoNuevo />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.villa} distance={RENDER_DISTANCES.FAR}>
        <BaseSceneVilla />
      </ConditionalRender>

      <ConditionalRender position={scenePositions.villa2} distance={RENDER_DISTANCES.FAR}>
        <BaseSceneVilla2 />
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
        broadphase="Naive"    // ✅ RESTAURADO: Mejor para personajes dinámicos
      >
        <SceneContent />
      </Physics>

      <HDRIEnvironment />
      <PointerLockControls ref={controlsRef} />
    </Canvas>
  );
};

export default BaseSceneEntrada;