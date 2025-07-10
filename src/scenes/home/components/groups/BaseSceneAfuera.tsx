

// Imports de tus componentes originales




// import { Borde } from "../primer/Borde";
// import { PisoArco } from "../primer/PisoArco";
// import { PisoCesped1 } from "../primer/PisoCesped1";
// import { PisoCesped3 } from "../primer/PisoCesped3";
// import { PisoLabs } from "../primer/PisoLabs";
import { PisoOctagono } from "../primer/PisoOctagono";
import { PisoTriangulo } from "../primer/PisoTriangulo";
// import { PisoVereda } from "../primer/pisoVereda";
// import { PisoVereda2 } from "../primer/pisoVereda2";
import { Vereda1 } from "../primer/vereda1";
// import { Vereda2 } from "../primer/vereda2";


// cargar segun la distancia 

const BaseSceneAfuera = () => {
  return (
    <>
        {/*fisica */}

        <PisoOctagono />
        <Vereda1 />
        <PisoTriangulo />
        {/* <PisoCesped1 />
        <Vereda2 />
        <PisoArco />
        <PisoVereda />
        <PisoVereda2 />
        <PisoCesped3 />
        <Borde />
        <PisoLabs /> */}
      
 

      </>
    
  );
};

export default BaseSceneAfuera;
