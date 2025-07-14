

// Imports de tus componentes originales

import { ParedesBar } from "../bar/ParedesBar";
import { SobretechoBar } from "../bar/SobretechoBar";
import { TechoBar } from "../bar/TechoBar";


// cargar segun la distancia 



const BaseSceneBar = () => {

    return (
      <>
      {/* sin fisica */}
      <TechoBar />
      <SobretechoBar />
      

         {/*fisica */}
      <ParedesBar />
      

      </>
    );
  };
  
  export default BaseSceneBar;