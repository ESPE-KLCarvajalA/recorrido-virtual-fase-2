import {  Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls } from '@react-three/drei';
import { useRef } from 'react';
// import { PisoOctagono } from './components/pisos/PisoOctagono';
// import { PisoTriangulo } from './components/pisos/PisoTriangulo';
// import { PisoCesped1 } from './components/pisos/PisoCesped1';
// import { Vereda1 } from './components/pisos/vereda1';
// import { Vereda2 } from './components/pisos/vereda2';
// import { PisoCesped2 } from './components/pisos/PisoCesped2';
// import { Pared1 } from './components/oficina/Pared1';
// import { Pared2 } from './components/oficina/Pared2';
// import { PisoLabs } from './components/pisos/PisoLabs';
// import { PisoMedio } from './components/pisos/PisoMedio';
// import { ParedS1 } from './components/secretaria/ParedS1';
// import { ParedS2 } from './components/secretaria/ParedS2';
// import { ParedLabCiencias2 } from './components/labCiencias2/ParedLabCiencias2';
// import { ParedLabCompu1 } from './components/labCompu1/ParedLabCompu1';
// import { ParedLabCiencias1 } from './components/labCiencias2/ParedLabCiencias1';
// import { ParedE2 } from './components/entrada2/ParedE2';
// import { PisoArco } from './components/pisos/PisoArco';
// import { ParedEn } from './components/enfermeria/ParedEnfer';
// import { ParedDo } from './components/salaDocent/ParedDo';
// import { PisoPrueba } from './components/pisos/PisoPrueba';
// import { Ventana1 } from './components/ventana/Ventana1';
// import { Ventanas2 } from './components/ventana/Ventana2';
// import { Puerta1 } from './components/puerta/Puerta1';
// import { Puerta2 } from './components/puerta/Puerta2';
// import { Puertas3 } from './components/puerta/Puerta3';
// import { PisoVereda } from './components/pisos/pisoVereda';
// import { Rejilla } from './components/rejilla/rejilla';
// import { LockerM } from './components/lockers/locker-m';
// import { SillasLab } from './components/sillas/sillasLab';
// import { Casilleros } from './components/lockers/casilleros';
// import { PisoVereda2 } from './components/pisos/pisoVereda2';
// import { PisoCesped3 } from './components/pisos/PisoCesped3';
// import { Borde } from './components/pisos/Borde';
// import { PisoCamino } from './components/pisos/PisoCamino';
// import { PisoCesped4 } from './components/pisos/PisoCesped4';
// import { Estructura } from './components/estructura/estructura';
// import { Estructura1 } from './components/estructura/estructura1';
// import { Parqueadero } from './components/parqueadero/parqueadero';
// import { Frases } from './components/otros/frases';
// import { Senaleticas } from './components/otros/senaleticas';
// import { Tablero } from './components/otros/tablero';
// import { Cartelera } from './components/otros/cartelera';
// import { Techo } from './components/techo/techo';
// import { Techo1 } from './components/techo/techo2';
// import { PisoTriangulo2 } from './components/pisos/PisoTriangulo2';
// import { Cancha } from './components/otros/cancha';
// import { PisoVereda3 } from './components/pisos/pisoVereda3';
// import { PisoCesped5 } from './components/pisos/PisoCesped5';
// import { PisoCesped6 } from './components/pisos/PisoCesped6';
// import { PisoVereda4 } from './components/pisos/pisoVereda4';
// import { PisoAula } from './components/pisos/pisoAula';
// import { ParedVi } from './components/villas/Paredes';
// import { PisoBar } from './components/bar/PisoBar';
// import { Bar } from './components/bar/bar';
// import { ParedVertical } from './components/villas/ParedVertical';
// import { Sobretecho } from './components/villas/Sobretecho';
// import { Techo2 } from './components/villas/Techo2';
// import { Techo3 } from './components/villas/Techo3';
// import { PisoVereda5 } from './components/pisos/pisoVereda5';
import HDRIEnvironment from './components/ui/HDRIEnvironment';
import BaseSceneAuera from './components/BaseSceneAfuera';




const BaseSceneEntrada = () => {
  const controlsRef = useRef(null);

  return (

    <Canvas camera={{ position: [-92, 0, 29] }}>

      <ambientLight intensity={Math.PI / 2} />


      <Physics gravity={[0, -100, 0]} iterations={10}>




        <BaseCharacter controls positionCharacter={[-92,-1, 170]} args={[2.2]} altura={20} velocidad={40} salto={20} color="green" />

        {/* <Debug color="black">
        </Debug> */}

      <BaseSceneAuera />
       
        {/* se deben mostrar al iniciar la carga */}
        {/* <PisoOctagono />
        <Vereda1 /> */}
        {/* <PisoTriangulo /> */}
        {/* <PisoCesped1 /> */}
        {/* <Vereda2 />
        <Pared1 />
        <Pared2 />
        <ParedS1 />
        <ParedE2 />
        <PisoArco />
        <PisoVereda />
        <PisoVereda2 /> */}
        {/* <PisoCesped3 />
        <Borde />
        <PisoCesped5 /> */}

        {/* <ParedVi />
        <PisoBar />

        <Bar /> */}

        {/* <PisoVereda5 /> */}




        {/* no es necesario mostrarlo al inicio de la carga sino a medida que el personaje este cerca */}
{/* 
        <PisoCesped2 /> */}
        {/* <PisoLabs />
        <PisoMedio />
        <ParedS2 />
        <ParedLabCiencias2 />
        <ParedLabCompu1 />
        <ParedLabCiencias1 /> */}
        {/* <ParedEn />
        <ParedDo /> */}
        {/* < PisoPrueba />
        <Puerta1 />
        <Puerta2 /> */}
        {/* <PisoVereda3 />
        <PisoVereda4 />
        <PisoTriangulo2 /> */}
        {/* <Cancha />
        <LockerM />
        <SillasLab />
        <Casilleros />
        <PisoCesped4 />
        <Estructura />
        <Estructura1 />
        <PisoCesped6 />
        <PisoCamino />
        <PisoAula />
        <Techo2 /> */}






      </Physics>


      {/* sin fisicas */}

      {/* <Frases />
      <Senaleticas />
      <Cartelera />
      <Parqueadero />
      <Tablero />  */}

      {/* 2 rejillas */}
      {/* <Rejilla /> */}

      {/* <Techo />
      <Techo1 /> */}
      {/* <ParedVertical /> */}
      {/* <Sobretecho /> */}
      {/* <Techo3 />  */}

      {/* solo una  */}
       {/* < Ventana1 />
      <Ventanas2 />

      <Puertas3 /> */}

      <HDRIEnvironment />





      <PointerLockControls ref={controlsRef} />

    </Canvas>

  );
};




export default BaseSceneEntrada;



