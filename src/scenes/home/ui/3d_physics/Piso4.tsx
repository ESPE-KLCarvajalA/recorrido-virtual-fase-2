
import useCameraDistance from "../../../../utils/useCameraDistance";
import { Escritorios_p4 } from "../../components/planta_baja/edficio/piso4/escritorios_p4";
import { Paredes_p4 } from "../../components/planta_baja/edficio/piso4/paredes_p4";

const Piso2 = () => {

    
  const distance = useCameraDistance([124.586, 80, -60]);
  if (distance > 100) return null;

    return (
        <>  
            <Paredes_p4 />
            <Escritorios_p4 />
        </>
    );
};

export default Piso2;
