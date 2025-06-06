import { Dibujo_atras } from "../../components/logos_letras/dibujo_atras";
import { Letra1 } from "../../components/logos_letras/letra1";
import { Letra2 } from "../../components/logos_letras/letra2";
import { Logo } from "../../components/logos_letras/logo";
import { Logo_entrada } from "../../components/logos_letras/logo_entrada";
import { Flechas } from "../../components/logos_letras/flechas";
import { Arbol1 } from "../../components/parte_fuera/plantas/arbol1";
import { Arbol2 } from "../../components/parte_fuera/plantas/arbol2";
import { Hiberba1 } from "../../components/parte_fuera/plantas/hierba1";
import { Postes } from "../../components/parte_fuera/postes";

const ParteFuera = () => {

  return (
    <>
      <Logo position={[124.641, 64, -4.289]} rotation={[Math.PI / 2, 0, 0]} scale={[8.781, 8.781, 8.781]} />
      <Logo position={[126.66, 11, -147]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 1.5]} />
      <Logo position={[125, 32, -147]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 1.5]} />
      <Logo position={[125, 52, -147]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 1.5]} />

      <Letra1 />
      <Letra2 />
      <Logo_entrada />
      <Dibujo_atras />

      <Arbol1 />
      <Arbol2 />
      <Hiberba1 />

      <Postes />

      <Flechas />
    </>
  );
};

export default ParteFuera;
