import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';
import { PisoOctagono } from './components/pisos/PisoOctagono';
import { PisoTriangulo } from './components/pisos/PisoTriangulo';
import { PisoCesped1 } from './components/pisos/PisoCesped1';
import { Vereda1 } from './components/pisos/vereda1';
import { Vereda2 } from './components/pisos/vereda2';
import { PisoCesped2 } from './components/pisos/PisoCesped2';
import { Pared1 } from './components/oficina/Pared1';
import { Pared2 } from './components/oficina/Pared2';
import { PisoLabs } from './components/pisos/PisoLabs';
import { PisoMedio } from './components/pisos/PisoMedio';
import { ParedS1 } from './components/secretaria/ParedS1';
import { ParedS2 } from './components/secretaria/ParesS2';
import { ParedLabCiencias2 } from './components/labCiencias2/ParedLabCiencias2';
import { ParedLabCompu1 } from './components/labCompu1/ParedLabCompu1';
import { ParedLabCiencias1 } from './components/labCiencias2/ParedLabCiencias1';
import { ParedE2 } from './components/entrada2/ParedE2';
import { PisoArco } from './components/pisos/PisoArco';
import { ParedEn } from './components/enfermeria/ParedEnfer';
import { ParedDo } from './components/salaDocent/ParedDo';
import { PisoPrueba } from './components/pisos/PisoPrueba';
import { Ventana1 } from './components/ventana/Ventana1';
import { Ventanas2 } from './components/ventana/Ventana2';
import { Puerta1 } from './components/puerta/Puerta1';
import { InstancedPuerta2 } from './components/puerta/Puerta2';




const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (

    <Canvas camera={{ position: [-92, 0, 29] }}>

      <ambientLight intensity={Math.PI / 2} />


      <Physics gravity={[0, -100, 0]} iterations={10}>

   


          <BaseCharacter controls positionCharacter={[9.373, -4, -247.046]} args={[2.2]} altura={20} velocidad={30} salto={20} color="white" />
          

          <PisoOctagono />
          <Vereda1 />
          <PisoTriangulo />
          <PisoCesped1 />
          <Vereda2 />
          <PisoCesped2 />
          <PisoLabs />
          <Pared1 />
          <Pared2 />
          <PisoMedio />
          <ParedS1 />
          <ParedS2 />
          <ParedLabCiencias2 />
          <ParedLabCompu1 />
          <ParedLabCiencias1 />
          <ParedE2 />
          <PisoArco />
          <ParedEn />
          <ParedDo />
          < PisoPrueba />
          < Ventana1 />
          <Ventanas2 />
          <Puerta1 />
          <InstancedPuerta2 />



      </Physics>




      <PointerLockControls ref={controlsRef} />

    </Canvas>

  );
};




export default BaseSceneEntrada;



