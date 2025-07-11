import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';
import { Perf } from 'r3f-perf'


import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAfuera from './components/groups/BaseSceneAfuera';
import BaseSceneArco from './components/groups/BaseSceneArco';
// import BaseSceneBar from './components/groups/BaseSceneBar';
// import BaseSceneBar2 from './components/groups/BaseSceneBar2';
// import BaseSceneLab from './components/groups/BaseSceneLab';
// import BaseSceneLab2 from './components/groups/BaseSceneLab2';
// import BaseSceneOficina from './components/groups/BaseSceneOficina';
// import BaseSceneVilla from './components/groups/BaseSceneVilla';
// import BaseSceneVilla2 from './components/groups/BaseSceneVilla2';



const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (

    <Canvas camera={{ position: [-92, 0, 29] }}>
      
       <Perf position="top-left" />

      <ambientLight intensity={Math.PI / 2} />

      <Physics gravity={[0, -100, 0]} iterations={10}>

        <BaseCharacter controls positionCharacter={[-92,-1, 170]} args={[2.2]} altura={20} velocidad={40} salto={20} color="green" />

            <BaseSceneAfuera/>
          
         
           
             <BaseSceneArco/>
           {/* <BaseSceneBar/>
            <BaseSceneBar2/>
            <BaseSceneLab/>
            <BaseSceneLab2/>
            <BaseSceneOficina/>
            <BaseSceneVilla/>
            <BaseSceneVilla2/> */}

      </Physics>

      <HDRIEnvironment />

      <PointerLockControls ref={controlsRef} />

    </Canvas>

  );
};

export default BaseSceneEntrada;



