import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneVilla2F from './groups/BaseSceneVilla2F';
import BaseSceneAfuera from './groups/BaseSceneAfuera';
import BaseSceneArco from './groups/BaseSceneArco';
import BaseSceneLab from './groups/BaseSceneLab';
import BaseSceneLab2 from './groups/BaseSceneLab2';
import BaseSceneOficina from './groups/BaseSceneOficina';
import BaseScenePisos2 from './groups/BaseScenePisos2';
import BaseSceneBar from './groups/BaseSceneBar';
import BaseSceneBar2 from './groups/BaseSceneBar2';
import BaseSceneVilla2SF from './groups/BaseSceneVilla2SF';
import BaseSceneOtros from './groups/BaseSceneOtros';

const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);
  const location = useLocation();
  
  // ✅ Estado para la posición del personaje (con posición por defecto)
  const [characterPosition, setCharacterPosition] = useState<[number, number, number]>([-80, -1, 170]);

  // ✅ Restaurar posición cuando se regresa de una vista 360
  useEffect(() => {
    const state = location.state as { restorePosition?: any };
    
    if (state?.restorePosition) {
      const { x, y, z } = state.restorePosition;
      setCharacterPosition([x, y, z]);
      
      // Limpiar el estado para futuras navegaciones
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Canvas camera={{ position: [-80, 0, 29] }}>
        <ambientLight intensity={Math.PI / 2} />

        <Physics gravity={[0, -100, 0]} iterations={10}>
          <BaseSceneLab />
          <BaseSceneOficina />
          <BaseSceneLab2 />
          <BaseScenePisos2 />
          <BaseSceneBar />
          <BaseSceneBar2 />
          <BaseSceneOtros />
          <BaseSceneAfuera />
          <BaseSceneArco />
          <BaseSceneVilla2F />

          {/* ✅ Usar la posición dinámica del personaje */}
          <BaseCharacter 
            controls 
            positionCharacter={characterPosition} 
            args={[2.2]} 
            altura={20} 
            velocidad={40} 
            salto={20} 
            color="green" 
          />
        </Physics>

        {/* Sin física */}
        <BaseSceneVilla2SF />

        <HDRIEnvironment />
        <PointerLockControls ref={controlsRef} />
      </Canvas>
    </>
  );
};

export default BaseSceneEntrada;