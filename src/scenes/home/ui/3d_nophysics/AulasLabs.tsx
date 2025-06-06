import { useBox } from "@react-three/cannon";
import { Aula_1_arriba } from "../../components/planta_baja_2/aulas_laboratorios/aula_1_arriba";
import { Aula_2_arriba } from "../../components/planta_baja_2/aulas_laboratorios/aula_2_arriba";
import { Aula_3_arriba } from "../../components/planta_baja_2/aulas_laboratorios/aula_3_arriba";
import { Aula_a1 } from "../../components/planta_baja_2/aulas_laboratorios/aula_a1";
import { Banca_aula } from "../../components/planta_baja_2/aulas_laboratorios/banca_aula";
import { Columnas1 } from "../../components/planta_baja_2/aulas_laboratorios/columnas/columnas1";
import { Columnas2 } from "../../components/planta_baja_2/aulas_laboratorios/columnas/columnas2";
import { Columnas3 } from "../../components/planta_baja_2/aulas_laboratorios/columnas/columnas3";
import { Columnas4 } from "../../components/planta_baja_2/aulas_laboratorios/columnas/columnas4";
import { Lab_0_abajo } from "../../components/planta_baja_2/aulas_laboratorios/lab_0_abajo";
import { Lab_1_abajo } from "../../components/planta_baja_2/aulas_laboratorios/lab_1_abajo";
import { Lab_2_abajo } from "../../components/planta_baja_2/aulas_laboratorios/lab_2_abajo";
import { Puerta_aula1 } from "../../components/planta_baja_2/aulas_laboratorios/puertas/puerta_aula1";
import { Puerta_lab } from "../../components/planta_baja_2/aulas_laboratorios/puertas/puerta_lab";
import { Banios_2 } from "../../components/planta_baja_2/banios_2";
import { Casillero } from "../../components/planta_baja_2/casillero";
import { Puerta_banio } from "../../components/planta_baja_2/puerta_banio";

const AulasLabs = () => {

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [5, 35, 256],
        rotation: [0, -0.25, 0],
        position: [12, -5, -405],
      }));

      const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [5, 35, 220],
        rotation: [0, -0.25, 0],
        position: [-51.5, -5, -151],
      }));

    return (
        <>
            <Aula_1_arriba />
            <Aula_2_arriba />
            <Aula_3_arriba />
            <Aula_a1 />
            <Banios_2 />
            <Puerta_banio />
            <Columnas1 />
            <Columnas2 />
            <Columnas3 />
            <Columnas4 />
            <Lab_0_abajo />
            <Lab_1_abajo />
            <Lab_2_abajo />
            <Puerta_lab />
            <Puerta_aula1 />
            <Banca_aula />
            <Casillero />
        </>
    );
};

export default AulasLabs;
