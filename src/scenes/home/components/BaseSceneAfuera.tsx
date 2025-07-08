

// Imports de tus componentes originales



import { Borde } from "./primer/Borde";
import { PisoArco } from "./primer/PisoArco";
import { PisoCesped1 } from "./primer/PisoCesped1";
import { PisoCesped3 } from "./primer/PisoCesped3";
import { PisoCesped5 } from "./primer/PisoCesped5";
import { PisoLabs } from "./primer/PisoLabs";
import { PisoOctagono } from "./primer/PisoOctagono";
import { PisoTriangulo } from "./primer/PisoTriangulo";
import { PisoVereda } from "./primer/pisoVereda";
import { PisoVereda2 } from "./primer/pisoVereda2";
import { PisoVereda5 } from "./primer/pisoVereda5";
import { Vereda1 } from "./primer/vereda1";
import { Vereda2 } from "./primer/vereda2";



const BaseSceneAfuera = () => {

  return (
    <>
      <PisoOctagono />
      <Vereda1 />
      <PisoTriangulo />
      <PisoCesped1 />
      <Vereda2 />
     
      <PisoArco />
      <PisoVereda />
      <PisoVereda2 />
      <PisoCesped3 />
      <Borde />
      <PisoCesped5 />
      
      
      
      <PisoVereda5 />
      <PisoLabs />

    </>
  );
};

export default BaseSceneAfuera;