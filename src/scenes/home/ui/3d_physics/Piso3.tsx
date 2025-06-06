
import useCameraDistance from "../../../../utils/useCameraDistance";
import { Asiento3_p3 } from "../../components/planta_baja/edficio/piso3/asiento3";
import { Escritorios_p3 } from "../../components/planta_baja/edficio/piso3/escritorios_p3";
import { Paredes_p3 } from "../../components/planta_baja/edficio/piso3/paredes_p3";

const Piso2 = () => {

    
  const distance = useCameraDistance([124.586, 70, -60]);
  if (distance > 100) return null;

    return (
        <>  
            <Paredes_p3 />
            <Escritorios_p3 />

            <Asiento3_p3 />
        </>
    );
};

export default Piso2;
