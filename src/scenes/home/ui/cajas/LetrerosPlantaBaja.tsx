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

const LetrerosPlantabaja = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[131.5, 10, -74]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[8, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-3.5, 0.25, 0.01]}>
          <textGeometry args={['Dtpo. Ciencias de la vida y la agricultura',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131.5, 10, -95]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[7, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-3, 0.25, 0.01]}>
          <textGeometry args={['Dtpo. Ciencias de la comunicación',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131.5, 10, -123]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.2, 0.25, 0.01]}>
          <textGeometry args={['Carrera de Biotecnología',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131.5, 10, -137]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.2, 0.25, 0.01]}>
          <textGeometry args={['Carrera de Agropecuaria',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[121.4, 10, -137]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.2, 0.25, 0.01]}>
          <textGeometry args={['Dpto. Ciencias Exactas',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[121.4, 10, -105.5]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.9, 0.25, 0.01]}>
          <textGeometry args={['Carrera de Tecnologías de la Información',
            { font, size: 0.24, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[121.4, 10, -93.7]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5.5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.1, 0.25, 0.01]}>
          <textGeometry args={['Secretaría Académica',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>
    </>
  );
};

export default LetrerosPlantabaja;
