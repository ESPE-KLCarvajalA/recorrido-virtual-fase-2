import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';
import { extend, ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';
import { useState, useEffect } from 'react';
import { Modal, Menu, MenuProps } from 'antd';
import { Html } from '@react-three/drei';

// Extender elementos JSX para incluir TextGeometry
extend({ TextGeometry });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
    }
  }
}

interface Ascensor1Props {
  setPositionCharacter: (pos: [number, number, number]) => void;
}

const Ascensor1 = ({ setPositionCharacter }: Ascensor1Props) => {
  const hoverSound = `${import.meta.env.BASE_URL}audios/hover1.mp3`;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const items: MenuProps['items'] = [
    {
      key: 'grp',
      label: 'Selecciona un piso para visitar',
      type: 'group',
      children: [
        {
          key: '0',
          label: 'Planta baja',
          title: 'Planta baja',
          onClick: () => setPositionCharacter([123, 10, -60]),
        },
        {
          key: '1',
          label: 'Piso 1',
          title: 'Piso 1',
          onClick: () => setPositionCharacter([124, 32, -35]),
        },
        {
          key: '2',
          label: 'Piso 2',
          onClick: () => setPositionCharacter([124, 50, -35]),
        },
        {
          key: '3',
          label: 'Piso 3',
          onClick: () => setPositionCharacter([124, 65, -35]),
        },
        {
          key: '4',
          label: 'Piso 4',
          onClick: () => setPositionCharacter([124, 88, -37]),
        },
      ],
    },
  ];

  

  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const showModal = () => {
    playSound(hoverSound);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Agregar el evento para cerrar el modal con ENTER
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const font = new FontLoader().parse(source_sans_pro_regular as any);

  return (
    <>
      <group position={[124.581, 8, -27]} rotation={[0.55, 3.11, 0]} scale={2}>
        <mesh position={[0, 0.15, 0]} onClick={showModal}>
          <planeGeometry args={[1.5, 0.22]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-0.2, 0.35, 0.01]}>
          <textGeometry args={['Ascensor', { font, size: 0.09, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
        <mesh position={[-0.3, 0.13, 0.01]}>
          <textGeometry args={['-- Seleccionar piso --', { font, size: 0.05, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[124.581, 28, -27]} rotation={[0.55, 3.11, 0]} scale={2}>
        <mesh position={[0, 0.15, 0]} onClick={showModal}>
          <planeGeometry args={[1.5, 0.22]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-0.2, 0.35, 0.01]}>
          <textGeometry args={['Ascensor', { font, size: 0.09, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
        <mesh position={[-0.3, 0.13, 0.01]}>
          <textGeometry args={['-- Seleccionar piso --', { font, size: 0.05, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      
      <group position={[124.581, 48, -27]} rotation={[0.55, 3.11, 0]} scale={2}>
        <mesh position={[0, 0.15, 0]} onClick={showModal}>
          <planeGeometry args={[1.5, 0.22]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-0.2, 0.35, 0.01]}>
          <textGeometry args={['Ascensor', { font, size: 0.09, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
        <mesh position={[-0.3, 0.13, 0.01]}>
          <textGeometry args={['-- Seleccionar piso --', { font, size: 0.05, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[124.581, 68, -27]} rotation={[0.55, 3.11, 0]} scale={2}>
        <mesh position={[0, 0.15, 0]} onClick={showModal}>
          <planeGeometry args={[1.5, 0.22]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-0.2, 0.35, 0.01]}>
          <textGeometry args={['Ascensor', { font, size: 0.09, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
        <mesh position={[-0.3, 0.13, 0.01]}>
          <textGeometry args={['-- Seleccionar piso --', { font, size: 0.05, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <group position={[124.581, 85, -27]} rotation={[0.55, 3.11, 0]} scale={2}>
        <mesh position={[0, 0.15, 0]} onClick={showModal}>
          <planeGeometry args={[1.5, 0.22]} />
          <meshBasicMaterial color={new THREE.Color('white')} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-0.2, 0.35, 0.01]}>
          <textGeometry args={['Ascensor', { font, size: 0.09, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
        <mesh position={[-0.3, 0.13, 0.01]}>
          <textGeometry args={['-- Seleccionar piso --', { font, size: 0.05, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>

      <Html>
        <Modal
          title="Edificio Administrativo ESPE"
          open={isModalOpen} onCancel={closeModal}
          width={350}
          centered
          footer={[
            <>
            <span style={{color: 'gray'}}>Presiona 'Enter' para cerrar</span>
            <br />
            <span style={{color: 'gray'}}>Presiona 'Esc' para habilitar mouse</span>
            </>
          ]}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'left' }}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <Menu
                style={{
                  width: 300,
                }}
                mode="inline"
                items={items}
              />

            </div>

          </div>

        </Modal>
      </Html>
    </>
  );
};

export default Ascensor1;
