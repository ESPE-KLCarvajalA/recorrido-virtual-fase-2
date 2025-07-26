import { Cancha } from "../components/otros/cancha";
import { Puerta1 } from "../components/puerta/Puerta1";
import { Puerta2 } from "../components/puerta/Puerta2";
import { Puertas3 } from "../components/puerta/Puerta3";
import { Rejilla } from "../components/rejilla/rejilla";




// cargar segun la distancia components/
const BaseSceneOtros = () => {
  return (
    <>
     <Puerta1 />
     <Puerta2 />
     <Puertas3 /> 
     <Cancha />
      <Rejilla />

     
  </>
  );
};

export default BaseSceneOtros;