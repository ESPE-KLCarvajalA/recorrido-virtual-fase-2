import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAfuera from './groups/BaseSceneAfuera';
import BaseSceneArco from './groups/BaseSceneArco';
import BaseSceneLab from './groups/BaseSceneLab';
import BaseSceneLab2 from './groups/BaseSceneLab2';
import BaseSceneOficina from './groups/BaseSceneOficina';
import BaseSceneOtros from './groups/BaseSceneOtros';

const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (
    <>
      <Canvas camera={{ position: [-80, 0, 29] }}>
        <ambientLight intensity={Math.PI / 2} />

        <Physics gravity={[0, -100, 0]} iterations={10}>
          <BaseSceneAfuera />
          <BaseSceneArco />
          <BaseSceneLab />
          <BaseSceneLab2 />
          <BaseSceneOficina />
          <BaseSceneOtros />

          <BaseCharacter 
            controls 
            positionCharacter={[-80,-1, 170]} 
            args={[2.2]} 
            altura={20} 
            velocidad={40} 
            salto={20} 
            color="green" 
          />
        </Physics>

        <HDRIEnvironment />
        <PointerLockControls ref={controlsRef} />
      </Canvas>

      
    </>
  );
};

export default BaseSceneEntrada;