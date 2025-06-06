import { Barras } from "../../components/barras";
import { Columna_metal } from "../../components/columna_metal";
import { Techo_subtecho_plantabaja } from "../../components/techo_subtecho_plantabaja";
import { Viga_metal } from "../../components/viga_metal";

const Estructura = () => {

  return (
    <>
      <Techo_subtecho_plantabaja />
      <Columna_metal />
      <Viga_metal />
      <Barras />
    </>
  );
};

export default Estructura;
