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

const LetrerosPiso3 = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[138, 70, -46]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.7, 0.25, 0.01]}>
          <textGeometry args={['Jefatura Académica',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 70, -67]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1, 0.25, 0.01]}>
          <textGeometry args={['Jurídico',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 70, -80]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.1, 0.25, 0.01]}>
          <textGeometry args={['Comunición Social',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 70, -105]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[9, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-3.5, 0.25, 0.01]}>
          <textGeometry args={['Jefatura de Vinculación e Investigación',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 70, -130]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.5, 0.25, 0.01]}>
          <textGeometry args={['Sala de reuniones',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>


      <group position={[118.1, 70, -135]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[7, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.5, 0.25, 0.01]}>
          <textGeometry args={['Subdirección',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 70, -105]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.1, 0.25, 0.01]}>
          <textGeometry args={['Planificación',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 70, -89]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[4, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.1, 0.25, 0.01]}>
          <textGeometry args={['',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[108, 67, -75]} rotation={[0, 1, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2, 0.25, 0.01]}>
          <textGeometry args={['Secretaría Subdirección',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>


    </>
  );
};

export default LetrerosPiso3;
