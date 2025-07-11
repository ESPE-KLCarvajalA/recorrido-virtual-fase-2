

// Imports de tus componentes originales

import { Carpa } from "../bar/carpa";
// import { ParedesInternasBar } from "../bar/ParedesInternasBar";
// import { PisoBar } from "../bar/PisoBar";
import { SillaBar } from "../bar/SillaBar";



// cargar segun la distancia 



const BaseSceneBar2 = () => {

    return (
      <>
   {/*fisica */}
      {/* <PisoBar />
      <ParedesInternasBar /> */}

       {/* sin fisica */}
      <Carpa />
      <SillaBar />

      
  
      </>
    );
  };
  
  export default BaseSceneBar2;