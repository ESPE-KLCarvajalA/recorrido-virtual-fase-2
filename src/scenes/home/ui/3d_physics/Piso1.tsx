

import useCameraDistance from "../../../../utils/useCameraDistance";
import { Escritorios_p1 } from "../../components/planta_baja/edficio/piso1/escritorios_p1";
import { Paredes_p1 } from "../../components/planta_baja/edficio/piso1/paredes_p1";

const Piso1 = () => {

    
  const distance = useCameraDistance([104.586, 10, -109.648]);
  if (distance > 100) return null;

    return (
        <>  
            <Paredes_p1 />
            <Escritorios_p1 />
        </>
    );
};

export default Piso1;
