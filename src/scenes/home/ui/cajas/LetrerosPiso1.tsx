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

const LetrerosPiso1 = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[138, 30, -43]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[12, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-5.4, 0.25, 0.01]}>
          <textGeometry args={['Unidad de Tecnologías de la Información y Comunicaciones',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 30, -67]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.5, 0.25, 0.01]}>
          <textGeometry args={['Unidad de Talento Humano',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 28.8, -80]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.8, 0.25, 0.01]}>
          <textGeometry args={['Seguridad Integrada',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 30, -80]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.8, 0.25, 0.01]}>
          <textGeometry args={['Trabajo Social',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 30, -105]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[4, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1, 0.25, 0.01]}>
          <textGeometry args={['Psicología',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 30, -126]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[4, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1, 0.25, 0.01]}>
          <textGeometry args={['Tesorería',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 30, -135]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.7, 0.25, 0.01]}>
          <textGeometry args={['Dirección Financiera',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 30, -90]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[12, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-4.5, 0.25, 0.01]}>
          <textGeometry args={['HUB: Centro de transferencia, innovación y desarrollo',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

    </>
  );
};

export default LetrerosPiso1;
