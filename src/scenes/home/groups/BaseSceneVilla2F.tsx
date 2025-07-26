

// Imports de tus componentes originales

import { Paredes1 } from "../components/villas/Paredes1";


import { ParedVilla5 } from "../components/villas/ParedVilla5";
import { ParedVilla6 } from "../components/villas/ParedVilla6";
import { ParedVilla7 } from "../components/villas/ParedVilla7";




// cargar segun la distancia 



const BaseSceneVilla2 = () => {

  return (
    <>
       {/*fisica */}
    
      <Paredes1/>




        <ParedVilla5 />
            <ParedVilla6/>
            <ParedVilla7/>



    </>
  );
};

export default BaseSceneVilla2;