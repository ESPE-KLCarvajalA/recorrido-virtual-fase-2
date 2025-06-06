import { useBox } from "@react-three/cannon";
import { Pared_derecha } from "../../components/pared_derecha";
import { Pasillo_entrada_media } from "../../components/pasillo_entrada_media";
import { Piso_base_1 } from "../../components/piso_base_1";
import { Piso_base_2 } from "../../components/piso_base_2";
import { Piso_base_pared } from "../../components/piso_base_3";

const EstructuraP = () => {

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [0.5, 10, 220],
    rotation: [0, 0.30, 0],
    position: [454, -1, 30],
  }));

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [0.5, 10, 500],
    rotation: [0, 0.5, 0],
    position: [303, 0, -285],
  }));

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [0.5, 40, 270],
    rotation: [0, 1, 0],
    position: [87, 0, -560],
  }));

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [400, 30, 0.5],
    rotation: [0, 1.35, 0],
    position: [-70, -5, -440],
  }));

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [310, 30, 0.5],
    rotation: [0, 1.25, 0],
    position: [-162, -5, -100],
  }));


  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [190, 30, 0.5],
    rotation: [0, 1.555, 0],
    position: [-195, -5, 85],
  }));

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [720, 20, 0.5],
    rotation: [0, 0.07, 0],
    position: [125, 2, 155],
  }));



  return (
    <>
      <Piso_base_1 />
      <Piso_base_2 />
      <Piso_base_pared />
      <Pared_derecha />
      <Pasillo_entrada_media />
    </>
  );
};

export default EstructuraP;
