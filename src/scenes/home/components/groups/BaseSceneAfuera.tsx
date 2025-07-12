

// Imports de tus componentes originales




import { Cartelera } from "../otros/cartelera";
import { Frases } from "../otros/frases";
import { Senaleticas } from "../otros/senaleticas";
import { Tablero } from "../otros/tablero";
import { Parqueadero } from "../parqueadero/parqueadero";
import { Borde } from "../primer/Borde";
import { PisoArco } from "../primer/PisoArco";
import { PisoCesped1 } from "../primer/PisoCesped1";
import { PisoCesped3 } from "../primer/PisoCesped3";
import { PisoCesped5E } from "../primer/PisoCesped5E";
import { PisoLabs } from "../primer/PisoLabs";
import { PisoOctagono } from "../primer/PisoOctagono";
import { PisoTriangulo } from "../primer/PisoTriangulo";
import { PisoVereda } from "../primer/pisoVereda";
import { PisoVereda2 } from "../primer/pisoVereda2";
import { PisoVereda5 } from "../primer/pisoVereda5";
import { Vereda1 } from "../primer/vereda1";
import { Vereda2 } from "../primer/vereda2";


// cargar segun la distancia 

const BaseSceneAfuera = () => {
  return (
    <>
        {/*fisica */}

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
        <PisoCesped5E />
        <PisoLabs />
       <PisoVereda5 />
       
      
 {/* sin fisica */}
      <Frases />
      <Senaleticas />

      <Cartelera />

      <Parqueadero />
      <Tablero />

      </>
    
  );
};

export default BaseSceneAfuera;
