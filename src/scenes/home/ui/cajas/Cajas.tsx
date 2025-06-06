import AreaEstudiantes from "./AreaEstudiantes";
import Ascensor1 from "./Ascensor1";
import Aulas from "./Aulas";
import Bienvenida from "./Bienvenida";
import InfBanderaPasillo from "./InfBanderaPasillo";
import LabsBIO from "./LabsBIO";
import LabsITIN from "./LabsITIN";
import LetrerosPiso1 from "./LetrerosPiso1";
import LetrerosPiso2 from "./LetrerosPiso2";
import LetrerosPiso3 from "./LetrerosPiso3";
import LetrerosPiso4 from "./LetrerosPiso4";
import Muy_pronto from "./Muy_pronto";
import LetrerosPlantabaja from "./LetrerosPlantaBaja";
import Mision_vision from "./Mision_vision";
import SalaDocentes from "./SalaDocentes";

interface CajasProps {
  setPositionCharacter: (pos: [number, number, number]) => void;
}

const Cajas = ({ setPositionCharacter }: CajasProps) => {

  return (
    <>

      <InfBanderaPasillo />
      <SalaDocentes />
      <AreaEstudiantes />
      <Ascensor1 setPositionCharacter={(pos) => setPositionCharacter(pos)} />

      <Bienvenida />

      <Aulas position={[-71.5, 9, -86]} rotation={[0, 1.27, 0]} />
      <Aulas position={[-125, 9, -100]} rotation={[0, -1.7, 0]} />

      <Aulas position={[-40, 9, -210]} rotation={[0, 1.27, 0]} />
      <Aulas position={[-97, 9, -210]} rotation={[0, -1.75, 0]} />

      <Aulas position={[0.7, 9, -372]} rotation={[0, 1.27, 0]} />
      <Aulas position={[-56, 9, -372]} rotation={[0, -1.7, 0]} />

      <Aulas position={[25, 9, -468]} rotation={[0, 1.27, 0]} />
      <Aulas position={[-31, 9, -468]} rotation={[0, -1.7, 0]} />

      <LabsITIN position={[27, -10, -468]} rotation={[0, 1.27, 0]} url="#/itin01" />
      <LabsITIN position={[29, -10, -481]} rotation={[0, 1.27, 0]} url="#/itin01" />
      <LabsITIN position={[3, -10, -371]} rotation={[0, 1.27, 0]} url="#/itin03" />
      <LabsITIN position={[0, -10, -357]} rotation={[0, 1.27, 0]} url="#/itin03" />

      <LabsBIO p2={[-1.5, 0.25, 0.01]} args={[4, 0.8]} txt={'Laboratorio Química'} position={[-37, -10, -209]} rotation={[0, 1.27, 0]} url="#/b05" />
      <LabsBIO p2={[-1.5, 0.25, 0.01]} args={[5, 0.8]} txt={'Biotecnología Vegetal'} position={[-40, -10, -196]} rotation={[0, 1.27, 0]} url="#/b06" />
      <LabsBIO p2={[-2.7, 0.25, 0.01]} args={[7, 0.8]} txt={'Biotecnología industrial y alimentaria'} position={[-65, -10, -100]} rotation={[0, 1.27, 0]} url="#/b07" />
      <LabsBIO p2={[-1.1, 0.25, 0.01]} args={[4, 0.8]} txt={'Biología Celular'} position={[-70, -10, -86]} rotation={[0, 1.27, 0]} url="#/b08" />

      <LetrerosPlantabaja />
      <LetrerosPiso1 />
      <LetrerosPiso2 />
      <LetrerosPiso3 />
      <LetrerosPiso4 />

      
      <Mision_vision />
      <Muy_pronto />
    </>
  );
};

export default Cajas;
