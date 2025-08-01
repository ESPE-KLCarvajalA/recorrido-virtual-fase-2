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
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
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
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
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
