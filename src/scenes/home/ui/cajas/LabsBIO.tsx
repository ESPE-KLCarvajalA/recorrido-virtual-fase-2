import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';
import { extend, ReactThreeFiber, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useState, useCallback, useRef } from 'react';

// Extender elementos JSX para incluir TextGeometry
extend({ TextGeometry });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
}

const LabsBIO = (props: any) => {
  const font = new FontLoader().parse(source_sans_pro_regular as any);

  // Estado para manejar la posición en "y"
  const [currentPosition, setCurrentPosition] = useState(props.position);

  // Manejar clics
  const handleClick = useCallback(() => {
    setCurrentPosition((prevPosition: any[]) => [
      prevPosition[0],
      prevPosition[1] + (prevPosition[1] === props.position[1] ? 1 : -1),
      prevPosition[2],
    ]);

    // Redirigir al enlace
    window.open(props.url, '_blank');
  }, [props.position]);

  const texture = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}img/UI/mouse2.png`);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // Animación de flotación directa (movimiento en el eje Y)
    const time = Date.now() * 0.008;
    const yOffset = Math.sin(time) * 0.03;  // Movimiento oscilante en el eje Y

    // Actualizar directamente la posición de los objetos
    if (meshRef.current) {
      meshRef.current.position.y = 1.1 + yOffset;
    }
  });

  return (
    <group position={currentPosition} rotation={props.rotation}>
      <mesh ref={meshRef} position={[0, 1.1, 0]} scale={[0.7, 1, 1]}>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh position={[0, 0.4, 0]} onClick={handleClick}>
        <planeGeometry args={props.args} />
        <meshBasicMaterial color={new THREE.Color('white')} />
      </mesh>
      <mesh position={props.p2} onClick={handleClick}>
        <textGeometry
          args={[
            props.txt,
            { font, size: 0.25, depth: 0.01 },
          ]}
        />
        <meshBasicMaterial attach="material" color={'black'} />
      </mesh>
    </group>
  );
};

export default LabsBIO;
