

// Imports de tus componentes originales

import { ParedesBar } from "../components/bar/ParedesBar";
import { SobretechoBar } from "../components/bar/SobretechoBar";
import { TechoBar } from "../components/bar/TechoBar";


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