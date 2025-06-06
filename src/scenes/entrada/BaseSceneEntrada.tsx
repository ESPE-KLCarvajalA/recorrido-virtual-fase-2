import { Debug, Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';
import { PisoOctagono } from './components/pisos/PisoOctagono';
import { PisoTriangulo } from './components/pisos/PisoTriangulo';
import { PisoCesped1 } from './components/pisos/PisoCesped1';
import { Vereda1 } from './components/pisos/vereda1';




const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (
    
      <Canvas camera={{ position: [-92, 0, 29] }}>

        <ambientLight intensity={Math.PI / 2} />


        <Physics gravity={[0, -100, 0]} iterations={2}>

          <Debug color="black">
                          

            <BaseCharacter controls positionCharacter={[-63.105, -2.023, 133.726]} args={[2.2]} altura={6.5} velocidad={20} salto={20} color="white" />

           <PisoOctagono/>
           <Vereda1 />
           <PisoTriangulo />
           <PisoCesped1/>

          </Debug>

        </Physics>
        
      


        <PointerLockControls ref={controlsRef} />

      </Canvas>
    
  );
};




export default BaseSceneEntrada;



