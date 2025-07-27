import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';

import HDRIEnvironment from './components/ui/HDRIEnvironment';


import BaseSceneAfuera from './groups/BaseSceneAfuera';
import BaseScenePisos2 from './groups/BaseScenePisos2';
// import BaseSceneArco from './groups/BaseSceneArco';

import BaseSceneLab from './groups/BaseSceneLab';
import BaseSceneLab2 from './groups/BaseSceneLab2';

import BaseSceneOficina from './groups/BaseSceneOficina';
import BaseSceneOficina2 from './groups/BaseSceneOficina2';


import BaseSceneBar from './groups/BaseSceneBar';
import BaseSceneBar2 from './groups/BaseSceneBar2';

import BaseSceneVilla2F from './groups/BaseSceneVilla2F';
import BaseSceneVilla2SF from './groups/BaseSceneVilla2SF';

import BaseSceneOtros from './groups/BaseSceneOtros';
import BaseSceneOtros2 from './groups/BaseSceneOtros2';


const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (
    <>
      <Canvas camera={{ position: [-80, 0, 29] }}>
        <ambientLight intensity={Math.PI / 2} />

        <Physics gravity={[0, -100, 0]} iterations={10}>
         {/* 
          */}
          <BaseSceneAfuera />
          <BaseScenePisos2 />
          {/* <BaseSceneArco /> */}

          <BaseSceneBar />
          <BaseSceneBar2 />

           <BaseSceneLab />
          <BaseSceneLab2 /> 

          <BaseSceneOficina />

          <BaseSceneOtros />

          <BaseSceneVilla2F /> 
          

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

          {/* sinfisica */}

          <BaseSceneOficina2 />

          <BaseSceneOtros2 />

          <BaseSceneVilla2SF />

        
        <HDRIEnvironment />
        <PointerLockControls ref={controlsRef} />
      </Canvas>

      
    </>
  );
};

export default BaseSceneEntrada;