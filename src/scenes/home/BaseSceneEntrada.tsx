import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAfuera from './groups/BaseSceneAfuera';
import BaseSceneArco from './groups/BaseSceneArco';
// import BaseSceneBar from './groups/BaseSceneBar';
// import BaseSceneBar2 from './groups/BaseSceneBar2';
import BaseSceneLab from './groups/BaseSceneLab';
import BaseSceneLab2 from './groups/BaseSceneLab2';
import BaseSceneOficina from './groups/BaseSceneOficina';
// import BaseSceneVilla from './groups/BaseSceneVilla';
// import BaseSceneVilla2 from './groups/BaseSceneVilla2';
import BaseSceneOtros from './groups/BaseSceneOtros';

import { PerformanceMonitor } from '../../shared/components/PerformanceMonitor';




const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (
    <>
    <Canvas camera={{ position: [-92, 0, 29] }}>

      <ambientLight intensity={Math.PI / 2} />


      <Physics gravity={[0, -100, 0]} iterations={10}>


        <BaseSceneAfuera />
        <BaseSceneArco />
        {/* <BaseSceneBar />
        <BaseSceneBar2 /> */}
        <BaseSceneLab />
        <BaseSceneLab2 />
        <BaseSceneOficina />
        {/* <BaseSceneVilla />
        <BaseSceneVilla2 /> */}
        <BaseSceneOtros />

        


        <BaseCharacter controls positionCharacter={[-92,-1, 170]} args={[2.2]} altura={20} velocidad={40} salto={20} color="green" />

        
      </Physics>

        

      {/* sin fisicas */}

    
      <HDRIEnvironment />





      <PointerLockControls ref={controlsRef} />

    </Canvas>

      <PerformanceMonitor />
      </>
  );
};




export default BaseSceneEntrada;



