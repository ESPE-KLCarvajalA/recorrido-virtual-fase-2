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

const Bienvenida = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[390, 7, 31]} rotation={[0, 0.4, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[17, 4]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-7.5, 0.1, 0.01]}>
          <textGeometry args={['Estas en el ingreso a la ESPE',
            { font, size: 0.9, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
      </group>


      <group position={[310, 3, 20]} rotation={[0, 0.2, 0]}>
        {/* Poste del letrero */}
        <mesh position={[0, -2.6, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 3.5, 32]} />
          <meshBasicMaterial color={new THREE.Color('#4B4B4B')} />
        </mesh>

        {/* Letrero trapezoidal */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[10, 5, 0.1]} /> {/* Largo, alto, profundidad */}
          <meshBasicMaterial color={new THREE.Color('#FFFFFF')} />
        </mesh>

        {/* Texto del letrero dividido en varias líneas */}
        <mesh position={[-3, 2, 0.1]}>
          <textGeometry args={['Abre el menú para ', { font, size: 0.6, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <mesh position={[-4.5, 1, 0.1]}>
          <textGeometry args={['seleccionar una ubicación,', { font, size: 0.6, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <mesh position={[-3.5, 0, 0.1]}>
          <textGeometry args={['o continua explorando', { font, size: 0.6, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[175, 15, -16]} rotation={[0, -1.6, 0]}>
        <mesh position={[-2.5, 0.9, 0.01]}>
          <textGeometry args={['Laboratorio de',
            { font, size: 0.7, depth: 0.03 }]} />
          <meshBasicMaterial attach="material" color={'green'} />
        </mesh>
        <mesh position={[-4, -0.4, 0.01]}>
          <textGeometry args={['Fabricación Digital',
            { font, size: 0.9, depth: 0.03 }]} />
          <meshBasicMaterial attach="material" color={'green'} />
        </mesh>
      </group>
    </>
  );
};

export default Bienvenida;
