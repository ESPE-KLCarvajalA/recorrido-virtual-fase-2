import { Compus } from "../components/labCompu1/compus";
import { Pizarron } from "../components/labCompu1/Pizarron";
import { Escritorio } from "../components/oficina/Escritorio";
import { Acondicionador } from "../components/otros/acondicionador";

import { Palma } from "../components/otros/palma";
// import { SillasLab } from "../components/sillas/sillasLab";



// cargar segun la distancia components/
const BaseSceneOtros2 = () => {
  return (
    <>
    <Escritorio />
    <Pizarron />
    <Compus />

    <Acondicionador />
    <Palma />



      {/* <SillasLab /> */}
    
    
     
  </>
  );
};

export default BaseSceneOtros2;