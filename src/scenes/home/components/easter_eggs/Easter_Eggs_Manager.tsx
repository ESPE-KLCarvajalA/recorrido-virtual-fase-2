import { Autos } from "./autos";
import { Batmobile } from "./batmobile";
import { Dog } from "./dog";
import { Gabinete_incendios } from "./gabinete_incendios";
import { Personaje1 } from "./personaje1";
import { Tachos } from "./tachos";

const Easter_Egss_Manager = () => {

  return (
    <>
      <Dog />
      <Gabinete_incendios />
      <Tachos position={[90.983, 3, -276.32]} rotation={[0, -0.261, 0]} scale={1.15} color={"#AF0113"} />
      <Tachos position={[88, 3, -277]} rotation={[0, -0.261, 0]} scale={1.15} color={"#0A7211"} />
      <Tachos position={[85, 3, -278]} rotation={[0, -0.261, 0]} scale={1.15} color={"#1911A3"} />

      <Personaje1 />
      <Autos />
      <Batmobile />
    </>
  );
};

export default Easter_Egss_Manager;
