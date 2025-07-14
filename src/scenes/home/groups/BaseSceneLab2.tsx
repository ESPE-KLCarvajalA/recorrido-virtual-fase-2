

// Imports de tus componentes originales

import { ParedLabCiencias1 } from "../components/labCiencias2/ParedLabCiencias1";
import { ParedLabCiencias2 } from "../components/labCiencias2/ParedLabCiencias2";
import { TechoLabCC } from "../components/labCiencias2/TechoLabCC";
import { TechoLabCC2 } from "../components/labCiencias2/TechoLabCC2";
import PisoMedio from "../components/pisos/PisoMedio";


// cargar segun la distancia 


const BaseSceneLab2 = () => {

    return (
      <>
      < ParedLabCiencias1 />
      < ParedLabCiencias2 />
      <PisoMedio />
      <TechoLabCC /> 
       <TechoLabCC2 />

     
     
  
      </>
    );
  };
  
  export default BaseSceneLab2;