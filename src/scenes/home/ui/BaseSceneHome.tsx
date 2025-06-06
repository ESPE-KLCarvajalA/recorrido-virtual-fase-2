

 


 
  

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect, useRef } from 'react';
import { PerformanceMonitor, PointerLockControls, Stats } from '@react-three/drei';
import { ACESFilmicToneMapping } from 'three';
import Experience from './Experience';
import '../styles/controls.css';
import { LoadingScreen } from './html/LoadingScreen';
import Cajas from './cajas/Cajas';

const BaseSceneHome = () => {
  const [dpr, setDpr] = useState(0.8);
  const [start, setStart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pointerLockEnabled, setPointerLockEnabled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const controlsRef = useRef(null);
  const [positionCharacter, setPositionCharacter] = useState<[number, number, number]>([431.413, 5, 50]);

  const clickSound = `${import.meta.env.BASE_URL}audios/click2.mp3`;
  const hoverSound = `${import.meta.env.BASE_URL}audios/hover1.mp3`;
  const backgroundAudio = new Audio(`${import.meta.env.BASE_URL}audios/fondo1.mp3`);
 

  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleStart = () => {
    playSound(clickSound);
    backgroundAudio.play();
    backgroundAudio.volume = 0.2; // Volumen inicial bajo
    backgroundAudio.loop = true;
    setStart(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    playSound(clickSound);
    setIsModalOpen(false);
    if (isDrawerOpen) {
      setIsDrawerOpen(false); // Cierra el Drawer si está abierto
    }
    setPointerLockEnabled(true);
  };

  const handleKeyDown = (event: any) => {
    if (event.code === 'Space') {
      if (isDrawerOpen) {
        setIsDrawerOpen(false);
        setPointerLockEnabled(true);
      } else {
        setIsDrawerOpen(true);
        setPointerLockEnabled(false);
        document.exitPointerLock();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  return (
    <>
      <LoadingScreen started={start} onStarted={handleStart} onHover={() => playSound(hoverSound)} />
      <Canvas 
        dpr={dpr} 
        performance={{ min: 0.36, max: 0.8 }} 
        camera={{ fov: 45, near: 0.1, far: 1000 }} 
        gl={{ antialias: true, toneMapping: ACESFilmicToneMapping }} 
      > 
        {start && <Stats />} 
        <PerformanceMonitor onIncline={() => setDpr(0.8)} onDecline={() => setDpr(0.36)} /> 
        <Suspense fallback={null}> 
          <Experience positionCharacter={positionCharacter} /> 
          {/* Cuadros interactivos y de mensajes */} 
          <Cajas setPositionCharacter={(pos) => setPositionCharacter(pos)} /> 
        </Suspense> 
        {pointerLockEnabled && start && !isModalOpen && !isDrawerOpen && (
          <PointerLockControls ref={controlsRef} />
        )}
      </Canvas>

      
     
    </>
  );
};

export default BaseSceneHome;
