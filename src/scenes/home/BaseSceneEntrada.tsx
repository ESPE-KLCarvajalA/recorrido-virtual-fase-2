import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';

import HDRIEnvironment from './components/ui/HDRIEnvironment';
import PisosFuera from './components/groups/BaseSceneAfuera';
import BaseSceneAfuera from './components/groups/BaseSceneAfuera';




const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (

    <Canvas camera={{ position: [-92, 0, 29] }}>

      <ambientLight intensity={Math.PI / 2} />


      <Physics gravity={[0, -100, 0]} iterations={10}>


        <BaseSceneAfuera />

        <BaseCharacter controls positionCharacter={[-92,-1, 170]} args={[2.2]} altura={20} velocidad={40} salto={20} color="green" />

        
      <PisosFuera />
       
        









      </Physics>


      {/* sin fisicas */}

    
      <HDRIEnvironment />





      <PointerLockControls ref={controlsRef} />

    </Canvas>

  );
};




export default BaseSceneEntrada;



