import { Debug, Physics } from "@react-three/cannon";
import BaseCharacter from "../../../shared/components/BaseCharacter";


interface ExperienceProps {
    positionCharacter: [number, number, number];
  }
  
  const Experience: React.FC<ExperienceProps> = ({ positionCharacter }) => {

    return (
        <>
            <Physics gravity={[0, -100, 0]} iterations={2} >
                {/* <Debug scale={1.1} color="black" /> */}
                <BaseCharacter controls positionCharacter={positionCharacter} args={[2.2]} altura={6.5} velocidad={20} salto={20} color="white" />

                <Debug color="black">
                </Debug>

               
            
               
            </Physics >

           


            {/* <Easter_Eggs_Manager /> */}
        </>
    );
};

export default Experience;
