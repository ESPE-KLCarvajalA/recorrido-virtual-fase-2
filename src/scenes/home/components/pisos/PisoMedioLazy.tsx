import * as THREE from 'three';
import { Suspense, lazy, useRef } from 'react';
import { useProximityLoader } from '../../../../hooks/useProximityLoader';

// ⚙️ Lazy load real
const PisoMedio = lazy(() => import('./PisoMedio'));

export function PisoMedioTrigger({ playerRef }: { playerRef: React.RefObject<THREE.Object3D> }) {
  // ⚙️ Usa la posición del piso
  const pisoPosition = new THREE.Vector3(9.373, -4, -247.046);

  // ⚙️ Distancia umbral (ajusta a gusto)
  const show = useProximityLoader(playerRef, pisoPosition, 50);

  return (
    <Suspense fallback={null}>
      {show && <PisoMedio />}
    </Suspense>
  );
}
