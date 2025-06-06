

import useCameraDistance from "../../../../utils/useCameraDistance";
import { Escritorios_p2 } from "../../components/planta_baja/edficio/piso2/escritorios_p2";
import { Paredes_p2 } from "../../components/planta_baja/edficio/piso2/paredes_p2";

const Piso2 = () => {

    
  const distance = useCameraDistance([104.586, 20, -109.648]);
  if (distance > 100) return null;

    return (
        <>  
            <Paredes_p2 />
            <Escritorios_p2 />
        </>
    );
};

export default Piso2;
