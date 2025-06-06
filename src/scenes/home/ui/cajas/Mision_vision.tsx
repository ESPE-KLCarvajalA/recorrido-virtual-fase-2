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

const Mision_vision = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[-15, 11, -289.5]} rotation={[0, 1.31, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[15, 5]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-7, 2.2, 0.01]}>
          <textGeometry args={['Misión',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <mesh position={[-6, 1.8, 0.01]}>
          <textGeometry args={['Formar académicos, profesionales e investigadores de excelencia,',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
        <mesh position={[-6, 1.4, 0.01]}>
          <textGeometry args={['creativos, humanista, con capacidad de liderazgo, pensamiento',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
        <mesh position={[-6, 1, 0.01]}>
          <textGeometry args={['crítico y alta conciencia ciudadana; generar, aplicar y transferir el',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
        <mesh position={[-6, 0.6, 0.01]}>
          <textGeometry args={['conocimiento y, proporcionar e implementar alternativas de',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
        <mesh position={[-6, 0.2, 0.01]}>
          <textGeometry args={['solución a los problemas del país acordes al Plan Nacional de Desarrollo',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>


        <mesh position={[-7, -0.5, 0.01]}>
          <textGeometry args={['Visión',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
        <mesh position={[-6, -0.9, 0.01]}>
          <textGeometry args={['Ser una universidad líder en la gestión del conocimiento y de la',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
        <mesh position={[-6, -1.3, 0.01]}>
          <textGeometry args={['tecnología en el Sistema de Educación Superior del país, con',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
        <mesh position={[-6, -1.7, 0.01]}>
          <textGeometry args={['prestigio internacional.',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'#3F3F3F'} />
        </mesh>
      </group>


    </>
  );
};

export default Mision_vision;
