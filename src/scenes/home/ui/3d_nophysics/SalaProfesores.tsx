import { Mesa_1 } from "../../components/planta_baja/sala_profesores/cubiculos/mesas/mesa_1";
import { Cubiculo_1 } from "../../components/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_1";
import { Cubiculo_2 } from "../../components/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_2";
import { Cubiculo_3 } from "../../components/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_3";
import { Cubiculo_4 } from "../../components/planta_baja/sala_profesores/cubiculos/separadores/cubiculo_4";
import { A_2 } from "../../components/planta_baja/sala_profesores/paredes/a_2";
import { A_3 } from "../../components/planta_baja/sala_profesores/paredes/a_3";
import { B_0_verticales } from "../../components/planta_baja/sala_profesores/paredes/b_0_verticales";
import { C_3 } from "../../components/planta_baja/sala_profesores/paredes/c_3";
import { Pared_interna_2Manager } from "../../components/planta_baja/sala_profesores/paredes/pared_interna_2Manager";
import { Pared_internaManager } from "../../components/planta_baja/sala_profesores/paredes/pared_internaManager";
import { Puerta } from "../../components/planta_baja/sala_profesores/paredes/puerta";

const SalaProfesores = () => {

    return (
        <>
            <B_0_verticales />
            <C_3 /> {/** Sin ventana */}
            <A_2 /> {/** Ventana cerrada */}
            <A_3 /> {/** Ventana abierta */}
            <Pared_internaManager />
            <Pared_interna_2Manager />
            <Puerta />
            <Cubiculo_1 />
            <Cubiculo_2 />
            <Cubiculo_3 />
            <Cubiculo_4 />
            <Mesa_1 />
        </>
    );
};

export default SalaProfesores;
