

// Imports de tus componentes originales

import { Pared1 } from "./oficina/Pared1";
import { Pared2 } from "./oficina/Pared2";
import { TechoOficina } from "./oficina/TechoOficina";
import { TechoOficina1 } from "./oficina/TechoOficina1";
import { ParedS1 } from "./secretaria/ParedS1";
import { ParedS2 } from "./secretaria/ParedS2";

// DESPUES Vista



const BaseSceneOficina = () => {

    return (
      <>
    {/*fisicos*/}
      <Pared1 />
      <Pared2 />
      <ParedS1 />
      <ParedS2 /> 
      
       {/*  no fisicos */}

       <TechoOficina />
       <TechoOficina1 />
     
  
      </>
    );
  };
  
  export default BaseSceneOficina;