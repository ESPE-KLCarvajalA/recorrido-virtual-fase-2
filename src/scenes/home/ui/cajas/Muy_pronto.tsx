import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';
import { extend, ReactThreeFiber } from '@react-three/fiber';
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

const Muy_pronto = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[60, 0, -600]} rotation={[0, 0.5, 0]} scale={2}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[15, 5]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-3, 0.7, 0.01]}>
          <textGeometry args={['BLOQUE B',
            { font, size: 1.1, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <mesh position={[-3.5, -0.7, 0.01]}>
          <textGeometry args={['¡¡¡MUY PRONTO!!!',
            { font, size: 0.7, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
      </group>


    </>
  );
};

export default Muy_pronto;
