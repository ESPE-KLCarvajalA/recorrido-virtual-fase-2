import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

type CharacterProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
};

export function Personaje1({ position = [400, -3, 30], rotation = [0, 0, 0], scale = 0.055 }: CharacterProps) {
  const characterRef = useRef<THREE.Group>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);
  const idleAction = useRef<THREE.AnimationAction | null>(null);
  const waveAction = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();
    let character: THREE.Group;
    let animationMixer: THREE.AnimationMixer;

    // Cargar el personaje
    loader.load(`${import.meta.env.BASE_URL}models/easter_eggs/Aj/Aj.fbx`, (object) => {
      character = object;
      character.scale.setScalar(scale as number);
      character.position.set(...position);
      character.rotation.set(...rotation);

      if (characterRef.current) {
        characterRef.current.add(character);
      }

      // Inicializar el mezclador de animaciones
      animationMixer = new THREE.AnimationMixer(character);
      setMixer(animationMixer);

      // Cargar animaciones (Idle y Waving)
      const idleFile = `${import.meta.env.BASE_URL}models/easter_eggs/Aj/animations/Idle.fbx`;
      const waveFile = `${import.meta.env.BASE_URL}models/easter_eggs/Aj/animations/Waving Gesture.fbx`;

      Promise.all([
        new Promise((resolve) => loader.load(idleFile, (anim) => resolve(anim.animations[0]))),
        new Promise((resolve) => loader.load(waveFile, (anim) => resolve(anim.animations[0])))
      ]).then(([idleClip, waveClip]) => {
        idleAction.current = animationMixer.clipAction(idleClip as THREE.AnimationClip);
        waveAction.current = animationMixer.clipAction(waveClip as THREE.AnimationClip);

        // Configurar Idle en loop
        if (idleAction.current) {
          idleAction.current.setLoop(THREE.LoopRepeat, Infinity);
          idleAction.current.play();
        }

        // Configurar Wave sin loop
        if (waveAction.current) {
          waveAction.current.setLoop(THREE.LoopOnce, 1);
          waveAction.current.clampWhenFinished = true;
        }
      });
    });

    // Cada 5 segundos reproducir Waving y regresar a Idle
    const interval = setInterval(() => {
      if (waveAction.current && idleAction.current) {
        idleAction.current.fadeOut(0.5); // Desvanece Idle
        waveAction.current.reset().fadeIn(0.5).play(); // Activa Waving

        waveAction.current.getClip().duration; // Obtener duración de la animación
        setTimeout(() => {
          waveAction.current?.fadeOut(0.5);
          idleAction.current?.reset().fadeIn(0.5).play(); // Regresa a Idle
        }, waveAction.current.getClip().duration * 1000);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (mixer) mixer.stopAllAction();
    };
  }, []);

  useFrame((_, delta) => {
    if (mixer) mixer.update(delta);
  });

  return <group ref={characterRef} />;
}
