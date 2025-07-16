import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef, useState } from 'react';

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

// NUEVA IMPORTACIÓN: Monitor de rendimiento
import { PerformanceMonitor } from '../../shared/components/PerformanceMonitor';

const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);
  
  // NUEVO: Estado para calidad global que se ajusta automáticamente
  const [globalQuality, setGlobalQuality] = useState(1.0);

  return (
    <>
      <Canvas 
        camera={{ position: [-80, 0, 29] }}
        // OPTIMIZACIÓN: Configuración mejorada para rendimiento
        gl={{ 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={Math.PI / 2} />

        {/* NUEVO: Monitor de rendimiento - Presiona 'P' para ver */}
        <PerformanceMonitor onQualityChange={setGlobalQuality} />

        <Physics gravity={[0, -100, 0]} iterations={10}>
          {/* OPTIMIZADO: Ahora todos los grupos reciben calidad global */}
          <BaseSceneAfuera quality={globalQuality} />
          <BaseSceneArco quality={globalQuality} />
          <BaseSceneLab quality={globalQuality} />
          <BaseSceneLab2 quality={globalQuality} />
          <BaseSceneOficina quality={globalQuality} />
          <BaseSceneOtros quality={globalQuality} />
          <BaseScenePisos2 quality={globalQuality} />
          <BaseSceneBar quality={globalQuality} />
          <BaseSceneBar2 quality={globalQuality} />
          <BaseSceneVilla quality={globalQuality} />
          <BaseSceneVilla2 quality={globalQuality} />

          {/* Tu personaje - mantengo exactamente tus configuraciones */}
          <BaseCharacter 
            controls 
            positionCharacter={[-80,-1, 170]} 
            args={[2.2]} 
            altura={20} 
            velocidad={40} 
            salto={20} 
            color="green" 
          />
        </Physics>

        {/* Tus componentes existentes - sin cambios */}
        <HDRIEnvironment />
        <PointerLockControls ref={controlsRef} />
      </Canvas>
    </>
  );
};

export default BaseSceneEntrada;