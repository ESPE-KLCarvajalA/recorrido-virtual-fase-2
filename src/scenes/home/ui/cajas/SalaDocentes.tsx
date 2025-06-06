import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';
import { extend, ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';

import { Modal } from 'antd';
import { Html } from '@react-three/drei';
import { useRef, useState } from 'react';

// Extender elementos JSX para incluir TextGeometry
extend({ TextGeometry });

declare global {
  namespace JSX {
    interface IntrinsicElaements {
      textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
}

const SalaDocentes = () => {
  const hoverSound = `${import.meta.env.BASE_URL}audios/hover1.mp3`;

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio(hoverSound)); // Referencia única al audio

  const handleHover = (open: boolean) => {
    setIsModalOpen(open); // Controlar el estado del modal
    if (open) {
      audioRef.current.play(); // Reproducir sonido al abrir
    }
  };

  return (
    <>
      <group
        position={[71, 13, -2.258]}
        rotation={[0, 1.55, 0]}
      >
        <mesh position={[0, 0.4, 0]}
          onPointerOver={() => handleHover(true)}
          onPointerOut={() => handleHover(false)}>
          <planeGeometry args={[3.5, 1]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-1.5, 0.32, 0.01]}>
          <textGeometry
            args={[
              'Sala de Docentes',
              { font, size: 0.3, depth: 0.01 },
            ]}
          />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
      </group>

      <Html>
        <Modal
          title=""
          open={isModalOpen}
          width={600}
          centered
          closable={false}
          footer={null}
        >
          <div style={{ padding: '3%' }}>
            En esta sala se encuentran más de 60 docentes de los departamentos
            de Ciencias de la Computación, Ciencias de la Vida, y Ciencias
            Exactas.
          </div>
        </Modal>
      </Html>
    </>
  );
};

export default SalaDocentes;
