import React, { useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { PointerLockControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import * as THREE from 'three';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseCharacter from '../../shared/components/BaseCharacter';

import {
  renderGroups,
} from './components/renderScenes';

import BaseSceneAfuera from './components/groups/BaseSceneAfuera';
import BaseSceneArco from './components/groups/BaseSceneArco';
import BaseSceneBar from './components/groups/BaseSceneBar';
import BaseSceneOficina from './components/groups/BaseSceneOficina';
import BaseSceneVilla from './components/groups/BaseSceneVilla';

import ConditionalRender from '../../utils/ConditionalRender';

// 🎯 Hook optimizado para calcular distancia desde el personaje
function useCameraDistance(targetPosition: [number, number, number]) {
  const camera = useThree((state) => state.camera);

  return React.useMemo(() => {
    const target = new THREE.Vector3(...targetPosition);
    return camera.position.distanceTo(target);
  }, [
    Math.floor(camera.position.x / 25),
    Math.floor(camera.position.z / 25),
    targetPosition,
  ]);
}

function SceneContent() {
  return (
    <>
      {/* 🟢 Personaje principal */}
      <BaseCharacter
        controls
        positionCharacter={[-92, -1, 170]}
        args={[2.2]}
        altura={20}
        velocidad={40}
        salto={20}
        color="green"
      />

      {/* 🧱 Elementos siempre visibles */}
      <BaseSceneAfuera />
      <BaseSceneArco />
      <BaseSceneBar />
      <BaseSceneOficina />
      <BaseSceneVilla />

      {/* 🌀 Render dinámico: todos los objetos externos optimizados */}
      {renderGroups.map((group, i) => (
        <ConditionalRender
          key={i}
          position={
            group.position.length === 3
              ? (group.position as [number, number, number])
              : [0, 0, 0]
          }
          distance={group.distance}
        >
          {group.children}
        </ConditionalRender>
      ))}
    </>
  );
}

const BaseSceneEntrada: React.FC = () => {
  const controlsRef = useRef(null);

  return (
    <Canvas camera={{ position: [-92, 0, 29], fov: 60, near: 0.1, far: 1000 }}>
      {/* 🧪 Rendimiento */}
      <Perf position="top-left" />

      {/* ☀️ Iluminación */}
      <ambientLight intensity={0.3} />

      {/* 🧱 Física general */}
      <Physics
        gravity={[0, -100, 0]}
        iterations={10}
        tolerance={0.001}
        allowSleep={false}
      >
        <SceneContent />
      </Physics>

      {/* 🌄 Entorno HDRI */}
      <HDRIEnvironment />

      {/* 🎮 Control tipo FPS */}
      <PointerLockControls ref={controlsRef} />
    </Canvas>
  );
};

export default BaseSceneEntrada;
