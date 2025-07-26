

// Imports de tus componentes originales

import { TechoVilla1 } from "../components/villas/TechoVilla1";
import { TechoVilla11 } from "../components/villas/TechoVilla11";
import { TechoVilla2 } from "../components/villas/TechoVilla2";
import { TechoVilla21 } from "../components/villas/TechoVilla21";
import { TechoVilla3 } from "../components/villas/TechoVilla3";
import { TechoVilla4 } from "../components/villas/TechoVilla4";

import { SobretechoVilla7 } from "../components/villas/sobretechoVilla7";
import { TechoVilla5 } from "../components/villas/TechoVilla5";
import { TechoVilla6 } from "../components/villas/TechoVilla6";
import { TechoVilla7 } from "../components/villas/TechoVilla7";


// cargar segun la distancia 



const BaseSceneVilla2SF = () => {

  return (
    <>

    {/* sin fisica */}
    
     <TechoVilla1/>
      <TechoVilla11/>
     < TechoVilla2/>
     < TechoVilla21/>
     < TechoVilla3/>
     < TechoVilla4/>




      < TechoVilla6/> 
          < TechoVilla5/>
           <TechoVilla7/>
           <SobretechoVilla7/>
     


    </>
  );
};

export default BaseSceneVilla2SF;