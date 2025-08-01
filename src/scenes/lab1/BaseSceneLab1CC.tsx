import { Canvas, useLoader } from '@react-three/fiber';
import { Loader, OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useEffect, Suspense } from 'react';
import Markers from './components/Markers';

// Imagen 360°
const store = [
  { name: '1', url: 'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/360/lab1/lab1.webp', link: 1 },
];

// Malla esférica invertida para simular entorno 360°
function Dome({ texture }: any) {
  return (
    <group>
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <Markers />
    </group>
  );
}

// Componente que maneja cambio de escenas (si hubiera más de una)
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

// 🎯 Componente principal
const BaseSceneLab1 = () => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const resetHintTimeout = () => {
      setShowHint(false);
      setAutoRotate(false);
      clearTimeout(timeout);

      // Si no hay interacción por 15s, vuelve a mostrar el hint y girar
      timeout = setTimeout(() => {
        setShowHint(true);
        setAutoRotate(true);
      }, 15000);
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
      {/* 🖱️ Hint visual */}
      {showHint && (
        <div className="rotate-hint">
          <span className="hand">🤚</span> Arrastra para girar
        </div>
      )}

      {/* 🌐 Visor 360° */}
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          rotateSpeed={-0.4}
          autoRotate={autoRotate}
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
