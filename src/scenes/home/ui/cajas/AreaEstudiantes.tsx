import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';
import { extend, ReactThreeFiber, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Extender elementos JSX para incluir TextGeometry
extend({ TextGeometry });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
}

const AreaEstudiantes = () => {
  const font = new FontLoader().parse(source_sans_pro_regular as any);
  const texture = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}img/carteleras/estudiantes1.png`);

  return (
    <>
      <group
        position={[-117, 10, -15]}
        rotation={[0, -1.55, 0]}
        scale={2}
      >
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[4, 1]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        
        <mesh position={[-1.72, 0.32, 0.01]}>
          <textGeometry
            args={[
              'Area de Estudiantes',
              { font, size: 0.3, depth: 0.01 },
            ]}
          />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>

        <mesh position={[0, -1, 0]}>
          <planeGeometry args={[4.5, 1.5]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </>
  );
};

export default AreaEstudiantes;
