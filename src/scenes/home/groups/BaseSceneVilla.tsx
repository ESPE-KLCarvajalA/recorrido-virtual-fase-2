

// Imports de tus componentes originales

import { ParedVilla5 } from "../components/villas/ParedVilla5";
import { ParedVilla6 } from "../components/villas/ParedVilla6";
import { ParedVilla7 } from "../components/villas/ParedVilla7";
import { TechoVilla5 } from "../components/villas/TechoVilla5";
import { TechoVilla6 } from "../components/villas/TechoVilla6";
import { TechoVilla7 } from "../components/villas/TechoVilla7";



// cargar segun la distancia 



const BaseSceneVilla = () => {

  return (
    <>

   
         {/*fisica */}
      <ParedVilla5 />
      <ParedVilla6/>
      <ParedVilla7/>

 {/* sin fisica */}
      < TechoVilla6/> 
     < TechoVilla5/>
      <TechoVilla7/>

      
   

    </>
  );
};

export default BaseSceneVilla;