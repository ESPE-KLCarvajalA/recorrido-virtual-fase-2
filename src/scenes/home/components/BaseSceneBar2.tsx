

// Imports de tus componentes originales

import { Carpa } from "./bar/carpa";
import { ParedesInternasBar } from "./bar/paredesInternasBar";
import { PisoBar } from "./bar/PisoBar";
import { SillaBar } from "./bar/SillaBar";

// DESPUES Vista



const BaseSceneBar2 = () => {

    return (
      <>

      <PisoBar />
      <ParedesInternasBar />
      <Carpa />
      <SillaBar />

      
  
      </>
    );
  };
  
  export default BaseSceneBar2;