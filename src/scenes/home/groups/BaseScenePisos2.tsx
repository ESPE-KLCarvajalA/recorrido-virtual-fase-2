

// Imports de tus componentes originales

import { PisoAula } from "../components/pisos/pisoAula";
import { PisoCamino } from "../components/pisos/PisoCamino";
import { PisoCesped2 } from "../components/pisos/PisoCesped2";
import { PisoCesped4 } from "../components/pisos/PisoCesped4";
import { PisoCesped5I } from "../components/pisos/PisoCesped5I";
import { PisoPrueba } from "../components/pisos/PisoPrueba";
import { PisoTriangulo2 } from "../components/pisos/PisoTriangulo2";
import { PisoVereda3 } from "../components/pisos/pisoVereda3";
import { PisoVereda4 } from "../components/pisos/pisoVereda4";
import { PisoVereda41 } from "../components/pisos/pisoVereda41";
import { PisoVereda6 } from "../components/pisos/pisoVereda6";
import { Piso7 } from "../components/primer/piso7";
import { PisoCesped7 } from "../components/primer/pisoCesped7";
import { PisoCesped8 } from "../components/primer/pisoCesped8";







// cargar segun la distancia 

const BaseScenePisos2 = () => {
  return (
    <>
     
      {/*fisica */}
      <PisoAula />
      <PisoCamino />
      <PisoPrueba />
      <PisoCesped2 />
      <PisoCesped4 />
      <PisoCesped5I />
     < PisoTriangulo2 />
     <PisoVereda3 />
     <PisoVereda4 />
     <PisoVereda41 />
     <PisoVereda6 />

     <PisoCesped7 />
     < Piso7 />
     <PisoCesped8 />



      </>
    
  );
};

export default BaseScenePisos2;
