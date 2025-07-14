import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

// Preload crítico al inicio
const CRITICAL_ASSETS = [
  'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoLabs.glb',
  'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoMedio.glb',
  // ... otros assets críticos
];

// Preload por grupos/escenas
const SCENE_ASSETS = {
  lab: [
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lab1.glb',
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lab2.glb',
  ],
  oficina: [
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina1.glb',
  ]
};

export function preloadCriticalAssets() {
  CRITICAL_ASSETS.forEach(url => {
    useGLTF.preload(url);
  });
}

export function preloadSceneAssets(scene: keyof typeof SCENE_ASSETS) {
  const assets = SCENE_ASSETS[scene];
  if (assets) {
    assets.forEach(url => {
      useGLTF.preload(url);
    });
  }
}

// Hook con caché inteligente
export function useOptimizedGLTF<T extends GLTF>(url: string) {
  return useGLTF(url) as unknown as T;
}