// import { Casilleros } from "../components/lockers/casilleros";
// import { LockerM } from "../components/lockers/locker-m";
import { Cancha } from "../components/otros/cancha";
import { Puerta1 } from "../components/puerta/Puerta1";
import { Puerta2 } from "../components/puerta/Puerta2";
import { Puertas3 } from "../components/puerta/Puerta3";
import { Ventana1 } from "../components/ventana/Ventana1";
// import { Rejilla } from "../components/rejilla/rejilla";




// cargar segun la distancia components/
const BaseSceneOtros = () => {
  return (
    <>
     <Puerta1 />
     <Puerta2 />
     <Puertas3 /> 
     <Cancha />
      {/* <Rejilla /> */}

      <Ventana1/>

      {/* <Casilleros/>
      <LockerM /> */}

     
  </>
  );
};

export default BaseSceneOtros;