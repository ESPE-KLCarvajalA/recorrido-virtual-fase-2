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

const LetrerosPiso2 = () => {

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[138, 50, -46]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.5, 0.25, 0.01]}>
          <textGeometry args={['Compras Públicas',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 50, -67]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.1, 0.25, 0.01]}>
          <textGeometry args={['Unidad de Logística',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>
      <group position={[131, 50, -80]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.1, 0.25, 0.01]}>
          <textGeometry args={['Unidad de Bienes',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 50, -100]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.9, 0.25, 0.01]}>
          <textGeometry args={['Unidad de Remanentes',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 50, -108.2]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.4, 0.25, 0.01]}>
          <textGeometry args={['Unidad de Desarrollo Físico',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[131, 50, -130]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5.5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-2.1, 0.25, 0.01]}>
          <textGeometry args={['Área de comercialización',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>
      <group position={[131, 50, -140]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[6.5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-3, 0.25, 0.01]}>
          <textGeometry args={['Jefatura administrativa financiera',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>



      <group position={[118.1, 50, -135]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[7, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.5, 0.25, 0.01]}>
          <textGeometry args={['Contabilidad',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 50, -105]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.1, 0.25, 0.01]}>
          <textGeometry args={['Contabilidad',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 50, -90]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.1, 0.25, 0.01]}>
          <textGeometry args={['Presupuesto',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 50, -75]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.1, 0.25, 0.01]}>
          <textGeometry args={['Presupuesto',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[118.1, 50, -64]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[5, 1]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[-1.1, 0.25, 0.01]}>
          <textGeometry args={['Desarrollo Físico',
            { font, size: 0.3, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>


    </>
  );
};

export default LetrerosPiso2;
