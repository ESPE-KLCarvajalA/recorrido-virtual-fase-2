import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'

import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { Modal } from 'antd';

export function Dog() {

  const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}models/easter_eggs/dog_animation.glb`)

  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const playSound = (soundFile: string) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const hoverSound = `${import.meta.env.BASE_URL}audios/hover1.mp3`;

  const showModal = () => {
    playSound(hoverSound);
    //setIsModalOpen(true);
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

  return (
    <>
      <primitive object={scene} position={[197, 0, -395]} scale={[6.5, 6.5, 6.5]} onClick={showModal} />

      <Html>
        <Modal
          title="Clubes Estudiantiles"
          open={isModalOpen} onCancel={closeModal}
          width={1000}
          centered
          footer={[
            <>
              <span style={{ color: 'gray' }}>Presiona la tecla 'Enter' para cerrar</span> <br />
              <span style={{ color: 'gray' }}>Presiona la tecla 'Esc' para habilitar mouse</span>
            </>
          ]}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ paddingRight: '3%', display: 'flex', flexDirection: 'column', width: '60%' }}>

              <div>
              <strong>Mas información</strong> <br />
                <a
                  href='https://www.espe.edu.ec/clubes-estudiantiles/'
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    background: 'rgb(0, 112, 60)',
                    color: 'white',
                    width: '100%',
                    padding: '2%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Club estudiantiles
                </a>

                <br />

                <strong>Perfil profesional: </strong> <br />
                <span>
                  cialales.
                </span>
                
              </div>

              <br />

              <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', gap: '5%' }}>
                <div>
                  <strong>Modalidad: </strong> <br />
                  <span>Presencial</span>
                </div>
                <div>
                  <strong>Duración: </strong> <br />
                  <span>9 semestres</span>
                </div>
              </div>
              <br />

              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '5%' }}>
                <a
                  href='https://www.espe.edu.ec/ingenieria-en-biotecnologia/'
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    background: 'rgb(0, 112, 60)',
                    color: 'white',
                    width: '100%',
                    padding: '2%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Más información
                </a>
                <a
                  href='https://www.facebook.com/IBIOSD'
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    background: 'rgb(0, 112, 60)',
                    color: 'white',
                    width: '100%',
                    padding: '2%',
                    borderRadius: '5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Redes sociales
                </a>
              </div>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <img style={{ margin: 'auto' }} src={`${import.meta.env.BASE_URL}img/carreras/biotecnologia2.jpg`} alt="Biotecnologia" width="100%" />
              <img style={{ margin: 'auto' }} src={`${import.meta.env.BASE_URL}img/carreras/biotecnologia3.jpg`} alt="Biotecnologia" width="100%" />

            </div>

          </div>
        </Modal>
      </Html>
    </>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/easter_eggs/dog_animation.glb`)