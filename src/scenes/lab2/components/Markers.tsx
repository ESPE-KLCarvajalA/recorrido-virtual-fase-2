import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import '../styles/pointers.css';

function Markers() {
  const ref1 = useRef<THREE.Group>(null!);

  useFrame(({ camera }) => {
    if (ref1.current) {
      ref1.current.lookAt(camera.position);
    }
  });

  const handleExitClick = () => {
    window.close();
  };

  return (
    <>
      <group ref={ref1} position={[-11.5, 0, -10]}>
        <Html transform>
          <div className='floatPoint floatPoint-0' onClick={handleExitClick}>
            <div className='floatLabelExit' style={{ fontSize: '3.5rem' }}>↩️</div>
            <div className='floatText'>Salir</div>
          </div>
        </Html>
      </group>
    </>
  );
}

export default Markers;
