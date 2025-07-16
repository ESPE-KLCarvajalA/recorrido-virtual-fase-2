import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';

// Tus imports existentes
import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAfuera from './groups/BaseSceneAfuera';
import BaseSceneArco from './groups/BaseSceneArco';
import BaseSceneLab from './groups/BaseSceneLab';
import BaseSceneLab2 from './groups/BaseSceneLab2';
import BaseSceneOficina from './groups/BaseSceneOficina';
import BaseSceneOtros from './groups/BaseSceneOtros';
import BaseScenePisos2 from './groups/BaseScenePisos2';
import BaseSceneBar from './groups/BaseSceneBar';
import BaseSceneBar2 from './groups/BaseSceneBar2';
import BaseSceneVilla from './groups/BaseSceneVilla';
import BaseSceneVilla2 from './groups/BaseSceneVilla2';
import BaseSceneOtros2 from './groups/BaseSceneOtros2';

// Monitor de rendimiento
import { PerformanceMonitor } from '../../shared/components/PerformanceMonitor';

const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (
    <Canvas 
      camera={{ position: [-80, 0, 29] }}
      gl={{ 
        antialias: true,
        powerPreference: "high-performance"
      }}
    >
      <ambientLight intensity={Math.PI / 2} />

      {/* Monitor de rendimiento - Presiona 'P' para ver */}
      <PerformanceMonitor />

      <Physics gravity={[0, -100, 0]} iterations={10}>
        {/* 🎉 TODOS LOS GRUPOS OPTIMIZADOS CON LOD BÁSICO */}
        <BaseSceneAfuera />
        <BaseSceneArco />
        <BaseSceneLab />
        <BaseSceneLab2 />
        <BaseSceneOficina />
        <BaseSceneOtros />
        <BaseSceneOtros2 />
        <BaseScenePisos2 />
        <BaseSceneBar />
        <BaseSceneBar2 />
        <BaseSceneVilla />
        <BaseSceneVilla2 />

        {/* Tu personaje - configuración original */}
        <BaseCharacter 
          controls 
          positionCharacter={[-92, 0, 170]} 
          args={[2.2]} 
          altura={20} 
          velocidad={40} 
          salto={20} 
          color="green" 
        />
      </Physics>

      {/* Tus componentes existentes */}
      <HDRIEnvironment />
      <PointerLockControls ref={controlsRef} />
    </Canvas>
  );
};

export default BaseSceneEntrada;