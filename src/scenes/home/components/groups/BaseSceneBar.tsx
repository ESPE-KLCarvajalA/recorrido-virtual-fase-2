

// Imports de tus componentes originales

import { ParedesBar } from "../bar/ParedesBar";
import { TechoBar } from "../bar/TechoBar";


// cargar segun la distancia 



const BaseSceneBar = () => {

    return (
      <>
      {/* sin fisica */}
      <TechoBar />

         {/*fisica */}
      <ParedesBar />
      

      </>
    );
  };
  
  export default BaseSceneBar;