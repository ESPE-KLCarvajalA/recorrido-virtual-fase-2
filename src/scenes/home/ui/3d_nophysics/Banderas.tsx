import { Bandera_arriba } from "../../components/banderas/bandera_arriba";
import { Bandera_pasillo } from "../../components/banderas/bandera_pasillo";

const Banderas = () => {

  return (
    <>
      <Bandera_pasillo />

      <Bandera_arriba
        texture={`${import.meta.env.BASE_URL}img/bandera_prov_santo_domingo.webp`}
        position={[116.4, 35.9, 29]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 0.5, 0]}
      />
      <Bandera_arriba
        texture={`${import.meta.env.BASE_URL}img/bandera_ecuador.webp`}
        position={[129.9, 35.9, 29]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 0.5, 0]}
      />
      <Bandera_arriba
        texture={`${import.meta.env.BASE_URL}img/bandera_santo_domingo.webp`}
        position={[143.205, 35.9, 29]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 0.5, 0]}
      />
    </>
  );
};

export default Banderas;
