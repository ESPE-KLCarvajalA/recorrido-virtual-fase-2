import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAfuera from './groups/BaseSceneAfuera';
import BaseSceneArco from './groups/BaseSceneArco';
import BaseSceneLab from './groups/BaseSceneLab';
// import BaseSceneLab2 from './groups/BaseSceneLab2';
import BaseSceneOficina from './groups/BaseSceneOficina';
// import BaseSceneOtros from './groups/BaseSceneOtros';
// import BaseScenePisos2 from './groups/BaseScenePisos2';
// import BaseSceneBar from './groups/BaseSceneBar';
// import BaseSceneBar2 from './groups/BaseSceneBar2';
// import BaseSceneVilla from './groups/BaseSceneVilla';
// import BaseSceneVilla2 from './groups/BaseSceneVilla2';

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
          <BaseSceneOficina />
           {/*<BaseSceneLab2 />
          <BaseSceneOficina />
          <BaseSceneOtros />
          <BaseScenePisos2 />
          <BaseSceneBar />
          <BaseSceneBar2 />
          <BaseSceneVilla />
          <BaseSceneVilla2 /> */}



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