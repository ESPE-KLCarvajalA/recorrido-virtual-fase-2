import { Pared1 } from '../oficina/Pared1';
import { Pared2 } from '../oficina/Pared2';
import { TechoNuevo } from '../oficina/prueba';
import { SobretechoOficina } from '../oficina/Sobretecho';
import { ParedS1 } from '../secretaria/ParedS1';
import { ParedS2 } from '../secretaria/ParedS2';

// Componentes sin física
// import { TechoOficina } from '../oficina/TechoOficina';
// import { TechoOficina1 } from '../oficina/TechoOficina1';
import { Ventana1 } from '../ventana/Ventana1';
import { Ventanas2 } from '../ventana/Ventana2';


// cargar segun la distancia 
const BaseSceneOficina = () => {
  return (
    <>
      {/* Componentes CON física */}
        <Pared1 />
        <Pared2 />
        <ParedS1 />
        <ParedS2 />
        <SobretechoOficina /> 
       <TechoNuevo />  
      
    
     {/* sin fisica */}
      {/* <TechoOficina />
      <TechoOficina1 /> */}
      <Ventana1 />
      <Ventanas2 />
  </>
  );
};

export default BaseSceneOficina;