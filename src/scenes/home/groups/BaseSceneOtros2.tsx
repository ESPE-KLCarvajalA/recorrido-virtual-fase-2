import { Compus } from "../components/labCompu1/compus";
import { Pizarron } from "../components/labCompu1/Pizarron";
import { Escritorio } from "../components/oficina/Escritorio";




// cargar segun la distancia components/
const BaseSceneOtros = () => {
  return (
    <>
    <Escritorio />
    <Pizarron />
    <Compus />
    
    
     
  </>
  );
};

export default BaseSceneOtros;