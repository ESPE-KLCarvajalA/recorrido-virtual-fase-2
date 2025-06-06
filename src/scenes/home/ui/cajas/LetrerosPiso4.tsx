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

const LetrerosPiso4 = () => {
  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[138, 88, -40]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.7, 0.25, 0.01]}>
          <textGeometry args={['Secretaría Dirección',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 88, -67]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1, 0.25, 0.01]}>
          <textGeometry args={['Dirección',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[124.5, 89, -83]} rotation={[0, 0, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1, 0.25, 0.01]}>
          <textGeometry args={['Auditorio',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[124.5, 86, -83]} rotation={[0, 0, 0]} onClick={() => window.open('#/auditorio', '_blank')}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[7, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.5, 0.25, 0.01]}>
          <textGeometry args={['- Click aqui para ver Auditorio -',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>
    </>
  );
};

export default LetrerosPiso4;
