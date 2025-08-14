import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import '../styles/pointers.css';

function Markers() {
  const ref1 = useRef<THREE.Group>(null!);
  const navigate = useNavigate();

  useFrame(({ camera }) => {
    if (ref1.current) {
      ref1.current.lookAt(camera.position);
    }
  });

  const handleExitClick = () => {
    // ✅ RESTAURAR la posición de la puerta y regresar al mundo 3D
    const savedDoorPositionStr = sessionStorage.getItem('doorPosition');
    
    if (savedDoorPositionStr) {
      const doorPosition = JSON.parse(savedDoorPositionStr);
      
      // Navegar con parámetros de query para posicionar en la puerta
      navigate(`/entrada?x=${doorPosition.x}&y=${doorPosition.y}&z=${doorPosition.z}`);
    } else {
      // Si no hay posición guardada, ir a la entrada normal
      navigate('/entrada');
    }
    
    // Limpiar la posición guardada
    sessionStorage.removeItem('doorPosition');
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