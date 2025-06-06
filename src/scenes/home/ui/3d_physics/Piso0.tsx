import { Asiento1 } from "../../components/planta_baja/edficio/piso0/asiento1";
import { Asiento2 } from "../../components/planta_baja/edficio/piso0/asiento2";
import { Asiento3 } from "../../components/planta_baja/edficio/piso0/asiento3";
import { Cajonera } from "../../components/planta_baja/edficio/piso0/cajonera";
import { Escritorios } from "../../components/planta_baja/edficio/piso0/escritorios";

import useCameraDistance from "../../../../utils/useCameraDistance";

const Piso0 = () => {

    
  const distance = useCameraDistance([124.586, 3.58, -60]);
  if (distance > 100) return null;

    return (
        <>  
            <Asiento1 />
            <Asiento2 />
            <Asiento3 />

            <Escritorios />

            <Cajonera />
        </>
    );
};

export default Piso0;
