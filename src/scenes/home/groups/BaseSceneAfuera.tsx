

// Imports de tus componentes originales




import { Estructura } from "../components/estructura/estructura";
import { Estructura1 } from "../components/estructura/estructura1";
import { Cartelera } from "../components/otros/cartelera";
import { Frases } from "../components/otros/frases";
import { Senaleticas } from "../components/otros/senaleticas";
import { Tablero } from "../components/otros/tablero";
import { Parqueadero } from "../components/parqueadero/parqueadero";
import { Borde } from "../components/primer/Borde";
import { Carretera } from "../components/primer/carretera";
import { PisoArco } from "../components/primer/PisoArco";
import { PisoCesped1 } from "../components/primer/PisoCesped1";
import { PisoCesped3 } from "../components/primer/PisoCesped3";
import { PisoCesped5E } from "../components/primer/PisoCesped5E";
// import { PisoCesped6 } from "../components/primer/PisoCesped6";
import { PisoLabs } from "../components/primer/PisoLabs";
import { PisoOctagono } from "../components/primer/PisoOctagono";
import { PisoTriangulo } from "../components/primer/PisoTriangulo";
import { PisoVereda } from "../components/primer/pisoVereda";
import { PisoVereda2 } from "../components/primer/pisoVereda2";
// import { PisoVereda5 } from "../components/primer/pisoVereda5";
import { Vereda1 } from "../components/primer/vereda1";
import { Vereda2 } from "../components/primer/vereda2";




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


       {/* {/* <PisoVereda5 />

       <PisoCesped6 />*/}
       
       <Carretera /> 
      
      
 {/* sin fisica */}
      <Frases />
      <Senaleticas />

      <Estructura />
      <Estructura1 />

      <Cartelera />

      <Parqueadero />

      <Tablero />


      </>
    
  );
};

export default BaseSceneAfuera;
