import { Canvas, useLoader } from '@react-three/fiber';
import { Loader, OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useEffect, Suspense } from 'react';
import Markers from './components/Markers';

const store = [
  {
    name: '1',
    url: 'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/360/lab1/lab1.webp',
    link: 1,
  },
];

function Dome({ texture }: any) {
  return (
    <group>
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 60, 40]} />
        {/* 🎯 OPCIÓN 1: Material básico con claridad optimizada para laboratorios */}
        <meshBasicMaterial 
          map={texture} 
          side={THREE.BackSide}
          color="#ffffff"        // ← RECOMENDADO: Color neutro sin alterar tonos reales
          transparent={false}
        />
      </mesh>
      <Markers />
    </group>
  );
}

function Portals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url));

  const handleNext = () => {
    if (store[currentIndex].link !== null) {
      setCurrentIndex(store[currentIndex].link);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Dome
      texture={maps[currentIndex]}
      onClickNext={handleNext}
      onClickPrev={handlePrev}
    />
  );
}

const BaseSceneLab1 = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const resetHintTimeout = () => {
      setShowHint(false);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setShowHint(true);
      }, 15000); // Muestra el hint otra vez si no hay interacción
    };

    window.addEventListener('mousedown', resetHintTimeout);
    window.addEventListener('touchstart', resetHintTimeout);

    return () => {
      window.removeEventListener('mousedown', resetHintTimeout);
      window.removeEventListener('touchstart', resetHintTimeout);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
     
     {showHint && (
  <>
    {/* <div className="info-button" onClick={() => alert("Aquí puedes mostrar información adicional.")}>
      ℹ️
    </div> */}

    <div className="rotate-hint">
      <span className="mouse">🖱️</span>
      <span>Arrastra para girar</span>
    </div>

    <div className="arrow-hint left-arrow">⬅️</div>
    <div className="arrow-hint right-arrow">➡️</div>
  </>
)}

      {/* 🌐 Visor 360 */}
      <Canvas 
        frameloop="demand" 
        camera={{ position: [0, 0, 0.1] }}
        // 🎯 OPCIÓN 2: Ajustar la exposición general del renderizado
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2  // ← Aumenta para más brillo (1.0 = normal, 1.5 = muy brillante)
        }}
      >
        {/* 🎯 OPCIÓN 3: Añadir luz ambiental para iluminar toda la escena */}
        <ambientLight intensity={0.7} color="#ffffff" /> {/* ← RECOMENDADO: Intensidad perfecta para laboratorios */}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={-0.4}
          autoRotate={false} // 🔒 Desactivado completamente
        />
        <Suspense fallback={null}>
          <Preload all />
          <Portals />
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
};

export default BaseSceneLab1;