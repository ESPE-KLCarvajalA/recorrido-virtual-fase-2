import { Barras_edificio } from "../../components/planta_baja/edficio/barras_edificio";
import { Pared_externa } from "../../components/planta_baja/edficio/pared_externa";
import { Pared_externa_2 } from "../../components/planta_baja/edficio/pared_externa2";
import { Pared_frente } from "../../components/planta_baja/edficio/pared_frente";
import { Pared_vidrio_edificio } from "../../components/planta_baja/edficio/pared_vidrio";
import { Paredes_interno } from "../../components/planta_baja/edficio/piso0/paredes_interno";
import { Piso_base_edificio } from "../../components/planta_baja/edficio/piso_base";
import { Piso_base_edificio2 } from "../../components/planta_baja/edficio/piso_base2";
import { Tapas } from "../../components/planta_baja/edficio/tapas";
import { Techo_edificio } from "../../components/planta_baja/edficio/techo_edificio";

import Piso0 from "./Piso0";
import Piso1 from "./Piso1";
import Piso2 from "./Piso2";
import Piso3 from "./Piso3";
import Piso4 from "./Piso4";

const Edificio = () => {


    return (
        <>
            <Piso_base_edificio />
            <Piso_base_edificio2 />
            <Pared_frente />
            <Pared_externa />
            <Pared_externa_2 />
            <Barras_edificio />
            <Techo_edificio />
            <Tapas />
            <Pared_vidrio_edificio />

            <Paredes_interno />

            <Piso0 />
            <Piso1 />
            <Piso2 />
            <Piso3 />
            <Piso4 />
        </>
    );
};

export default Edificio;
