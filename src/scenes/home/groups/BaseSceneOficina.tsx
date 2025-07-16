import { Pared1 } from '../components/oficina/Pared1';
import { Pared2 } from '../components/oficina/Pared2';
import { SobretechoOficina } from '../components/oficina/Sobretecho';
import { ParedS1 } from '../components/secretaria/ParedS1';
import { ParedS2 } from '../components/secretaria/ParedS2';

// Componentes sin física
import { TechoOficina } from '../components/oficina/TechoOficina';
import { Ventana1 } from '../components/ventana/Ventana1';
import { Ventana2 } from '../components/ventana/Ventana2';
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
        <SobretechoOficina /> 
      
      
    
     {/* sin fisica */}
      <TechoOficina />
      <Ventana1 />
      <Ventana2 />
  </>
  );
};

export default BaseSceneOficina;