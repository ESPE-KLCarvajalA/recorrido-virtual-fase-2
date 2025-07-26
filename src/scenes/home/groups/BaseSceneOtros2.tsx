import { Compus } from "../components/labCompu1/compus";
import { Pizarron } from "../components/labCompu1/Pizarron";
import { Escritorio } from "../components/oficina/Escritorio";

import { Palma } from "../components/otros/palma";



// cargar segun la distancia components/
const BaseSceneOtros2 = () => {
  return (
    <>
    <Escritorio />
    <Pizarron />
    <Compus />
      <Palma />
    
    
     
  </>
  );
};

export default BaseSceneOtros2;