import { Debug, Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import BaseCharacter from '../../shared/components/BaseCharacter';
import { PointerLockControls, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';



const BaseSceneCancha = () => {
  const controlsRef = useRef(null);

  return (
    <Canvas camera={{ position: [-92, 0, 29] }}>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        autoRotate={true}
        rotateSpeed={-0.4}
      />

        <ambientLight intensity={Math.PI / 2} />


        <Physics gravity={[0, -100, 0]} iterations={2}>

          <Debug color="black">
                          

            <BaseCharacter controls positionCharacter={[-92, 7, 29]} args={[2.2]} altura={6.5} velocidad={20} salto={20} color="white" />


          </Debug>

        </Physics>
        
     


        <PointerLockControls ref={controlsRef} />

      </Canvas>
  );
};



export default BaseSceneCancha;



