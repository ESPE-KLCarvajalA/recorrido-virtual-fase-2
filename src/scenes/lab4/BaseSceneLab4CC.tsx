import { Canvas, useLoader } from '@react-three/fiber';
import { Loader, OrbitControls, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useEffect, Suspense } from 'react';
import Markers from './components/Markers';

const store = [
  { name: '4', url: 'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/360/lab1/lab4.webp', link: 1 },
];

function Dome({ texture }: any) {
  return (
    <group>
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial 
          map={texture} 
          side={THREE.BackSide}
          color="#ffffff"
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

// Componente Modal
const InfoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Laboratorio de Biología Molecular</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          <div className="info-section">
            <h3>🧬 Información General</h3>
            <p>Este es el Laboratorio de Biología Molecular, especializado en técnicas avanzadas de análisis genético y molecular. Equipado con tecnología de vanguardia para investigación en biotecnología, genómica y diagnóstico molecular.</p>
          </div>
          
          <div className="info-section">
            <h3>🔬 Equipamiento</h3>
            <ul>
              <li>Termocicladores para PCR en tiempo real (qPCR)</li>
              <li>Secuenciador de ADN de nueva generación</li>
              <li>Electroforesis en gel de agarosa y poliacrilamida</li>
              <li>Centrífugas refrigeradas de alta velocidad</li>
              <li>Cabinas de PCR con flujo laminar</li>
              <li>Congeladores de -80°C para muestras biológicas</li>
              <li>Espectrofotómetros UV-Vis para cuantificación de ácidos nucleicos</li>
              <li>Sistemas de purificación de ADN/ARN automatizados</li>
            </ul>
          </div>
          
          <div className="info-section">
            <h3>🔬 Actividades</h3>
            <ul>
              <li>Extracción y purificación de ADN/ARN</li>
              <li>PCR convencional y en tiempo real</li>
              <li>Secuenciación y análisis filogenético</li>
              <li>Clonación molecular y transformación</li>
              <li>Expresión de proteínas recombinantes</li>
              <li>Análisis de polimorfismos genéticos</li>
              <li>Diagnóstico molecular de enfermedades</li>
              <li>Marcadores moleculares en mejoramiento genético</li>
            </ul>
          </div>
          
          <div className="info-section">
            <h3>⏰ Horarios</h3>
            <p>Lunes a Viernes: 7:00 AM - 6:00 PM<br/>
               Sábados: 8:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BaseSceneLab4CC = () => {
  const [showHint, setShowHint] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const resetHintTimeout = () => {
      setShowHint(false);
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setShowHint(true);
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Botón de información */}
      <div className="info-button" onClick={openModal}>
        <span className="info-icon">ℹ️</span>
        <span className="info-text">Info</span>
      </div>

      {/* Modal de información */}
      <InfoModal isOpen={isModalOpen} onClose={closeModal} />

      {showHint && (
        <>
          {/* <div className="rotate-hint">
            <span className="mouse">🖱️</span>
            <span>Arrastra para girar</span>
          </div> */}
          <div className="arrow-hint left-arrow">⬅️</div>
          <div className="arrow-hint right-arrow">➡️</div>
        </>
      )}

      <Canvas 
        frameloop="demand" 
        camera={{ position: [0, 0, 0.1] }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
        <ambientLight intensity={0.7} color="#ffffff" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.4}
        />

        <Suspense fallback={null}>
          <Preload all />
          <Portals />
        </Suspense>
      </Canvas>

      <Loader />

      <style >{`
        .info-button {
          position: fixed;
         top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #007bff;
          border-radius: 50px;
          padding: 12px 20px;
          cursor: pointer;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
        }
        .info-button:hover {
          background: rgba(0, 123, 255, 0.1);
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 123, 255, 0.3);
        }

        .info-icon {
          font-size: 18px;
        }

        .info-text {
          font-size: 14px;
          font-weight: 600;
          color: #007bff;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          background: white;
          border-radius: 15px;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          border-bottom: 1px solid #eee;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          border-radius: 15px 15px 0 0;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .modal-body {
          padding: 25px;
        }

        .info-section {
          margin-bottom: 25px;
        }

        .info-section:last-child {
          margin-bottom: 0;
        }

        .info-section h3 {
          color: #007bff;
          font-size: 18px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .info-section p {
          line-height: 1.6;
          color: #333;
          margin-bottom: 12px;
        }

        .info-section ul {
          list-style: none;
          padding: 0;
        }

        .info-section li {
          padding: 8px 0;
          color: #555;
          position: relative;
          padding-left: 20px;
        }

        .info-section li:before {
          content: "▶";
          color: #007bff;
          position: absolute;
          left: 0;
          font-size: 12px;
        }

        .rotate-hint {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          z-index: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .arrow-hint {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 15px;
          border-radius: 50%;
          font-size: 24px;
          z-index: 500;
        }

        .left-arrow {
          left: 20px;
        }

        .right-arrow {
          right: 20px;
        }

        @media (max-width: 768px) {
          .modal-content {
            margin: 20px;
            max-width: calc(100% - 40px);
          }
          
          .info-button {
            top: 15px;
            right: 15px;
            padding: 10px 15px;
          }
          
          .info-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default BaseSceneLab4CC;