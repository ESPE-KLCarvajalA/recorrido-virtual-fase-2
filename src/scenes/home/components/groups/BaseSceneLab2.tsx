

// Imports de tus componentes originales

import { ParedLabCiencias1 } from "../labCiencias2/ParedLabCiencias1";
import { ParedLabCiencias2 } from "../labCiencias2/ParedLabCiencias2";
import { TechoLabCC } from "../labCiencias2/TechoLabCC";
import { TechoLabCC2 } from "../labCiencias2/TechoLabCC2";


// cargar segun la distancia 


const BaseSceneLab2 = () => {

    return (
      <>
      < ParedLabCiencias1 />
      < ParedLabCiencias2 />
      <TechoLabCC />
      <TechoLabCC2 />

     
     
  
      </>
    );
  };
  
  export default BaseSceneLab2;