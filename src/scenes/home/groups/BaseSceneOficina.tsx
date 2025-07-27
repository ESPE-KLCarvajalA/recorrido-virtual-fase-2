import { Pared1 } from '../components/oficina/Pared1';
import { Pared2 } from '../components/oficina/Pared2';
import { ParedS1 } from '../components/secretaria/ParedS1';
import { ParedS2 } from '../components/secretaria/ParedS2';

// Componentes sin física
import { Pared3 } from '../components/oficina/Pared3';



// cargar segun la distancia components/
const BaseSceneOficina = () => {
  return (
    <>
      {/* Componentes CON física */}
        <Pared1 />
        <Pared2 />
        <ParedS1 />
        <ParedS2 />
        <Pared3 />
      
      
    
     
  </>
  );
};

export default BaseSceneOficina;