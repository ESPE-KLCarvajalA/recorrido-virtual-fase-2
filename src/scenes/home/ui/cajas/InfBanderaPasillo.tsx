import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';
import { extend, ReactThreeFiber, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useState, useEffect, useRef } from 'react';
import { Modal } from 'antd';
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

const InfBanderaPasillo = () => {
  const hoverSound = `${import.meta.env.BASE_URL}audios/hover1.mp3`;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const showModal = () => {
    playSound(hoverSound);
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
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
  const texture = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}img/logo_espe.webp`);

  const circleRef = useRef<THREE.Mesh>(null);
  const circleRef2 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // Animación de flotación directa (movimiento en el eje Y)
    const time = Date.now() * 0.003;
    const yOffset = Math.sin(time) * 0.01;  // Movimiento oscilante en el eje Y

    // Actualizar directamente la posición de los objetos
    if (circleRef.current) {
      circleRef.current.position.y = 0.4 + yOffset;
    }

    if (circleRef2.current) {
      circleRef2.current.position.y = 0.35 + yOffset;
    }
  });

  return (
    <>
      <group position={[124.407, 8.207, 3.01]} rotation={[-0.55, 0, 0]}>
        <mesh position={[0, -0.25, 0]} onClick={showModal}>
          <planeGeometry args={[1.5, 1]} />
          <meshBasicMaterial map={texture} />
        </mesh>
        <mesh position={[0, 0.4, 0]} ref={circleRef}>
          <planeGeometry args={[1.5, 0.2]} />
          <meshBasicMaterial color={new THREE.Color('#2D2B2B')} />
        </mesh>
        <mesh position={[-0.5, 0.35, 0.01]} ref={circleRef2}>
          <textGeometry args={['Himno de la ESPE', { font, size: 0.09, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'white'} />
        </mesh>
        <mesh position={[-0.35, -0.7, 0.01]}>
          <textGeometry args={['- Click aqui para escuchar -', { font, size: 0.05, depth: 0.01 }]} />
          <meshBasicMaterial attach="material" color={'black'} />
        </mesh>
      </group>
      <Html>
        <Modal
          title="Himno de la ESPE"
          open={isModalOpen} onCancel={closeModal}
          width={1000}
          centered
          footer={[
            <span style={{ color: 'gray' }}>Presiona la tecla 'Enter' para cerrar</span>
          ]}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <video
              ref={videoRef}
              width="500"
              controls
              autoPlay
              loop
              style={{ border: "0.5px solid black", borderRadius: "5px" }}
            >
              <source
                src={`${import.meta.env.BASE_URL}video/himno_espe.mp4`}
                type="video/mp4"
              />
              Tu navegador no soporta la reproduccion de video para este sitio.
            </video>

            <div style={{ marginLeft: '3%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 'bold', textAlign: 'center' }}>CORO</span>
              <span style={{ textAlign: 'center' }}>
                Bajo el sacro pendón de la Patria, Alma Máter escribes la historia; y es eterna tu egregia memoria de progreso, trabajo y honor.
              </span>
              <br />
              <span style={{ fontWeight: 'bold', textAlign: 'center' }}>ESTROFAS</span>
              <span style={{ textAlign: 'center' }}>
                Las trompetas anuncian tu nombre en sonoros compases de plata; y tu nombre se vuelve sonata, en los campos de mirto y laurel.
              </span>
              <br />
              <span style={{ textAlign: 'center' }}>
                Templo vivo de un sueño de gloria, esperanza de un pueblo en granito, juramento de amor infinito, a la Patria, la ciencia y al bien.
              </span>
              <br />
              <span style={{ textAlign: 'center' }}>
                Forjadora del arte y la ciencia, de las Fuerzas Armadas seguro, tú serás más allá del futuro, el baluarte del nuevo Ecuador.
              </span>

            </div>


          </div>

        </Modal>
      </Html>
    </>
  );
};

export default InfBanderaPasillo;
