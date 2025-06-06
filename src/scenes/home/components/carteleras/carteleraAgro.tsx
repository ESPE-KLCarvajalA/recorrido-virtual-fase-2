import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { extend, ReactThreeFiber, useFrame, useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { Modal } from 'antd';
import { Html } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import source_sans_pro_regular from '../../fonts/source-sans-pro/Source Sans Pro_Regular.json';

extend({ TextGeometry });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
        }
    }
}

type GLTFResult = GLTF & {
    nodes: {
        Plano021: THREE.Mesh
        Plano021_1: THREE.Mesh
    }
    materials: {
        mat20: THREE.MeshStandardMaterial
        ['pared blanca']: THREE.MeshStandardMaterial
    }
}

export function CarteleraAgro(props: JSX.IntrinsicElements['group']) {
    const hoverSound = `${import.meta.env.BASE_URL}audios/hover1.mp3`;


    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/cartelera.glb`) as GLTFResult;

    const texture = useLoader(THREE.TextureLoader, `${import.meta.env.BASE_URL}img/carteleras/agropecuaria.png`);
    texture.rotation = Math.PI; // Ajusta la rotación de la textura
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1; // Voltea la textura horizontalmente
    texture.center.set(0.5, 0.5);

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

    const circleRef = useRef<THREE.Mesh>(null);
    const textRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        // Animación de flotación directa (movimiento en el eje Y)
        const time = Date.now() * 0.003;
        const yOffset = Math.sin(time) * 0.1;  // Movimiento oscilante en el eje Y

        // Actualizar directamente la posición de los objetos
        if (circleRef.current) {
            circleRef.current.position.y = 4.2 + yOffset;
        }
        if (textRef.current) {
            textRef.current.position.y = 4.05 + yOffset;
        }
    });

    const font = new FontLoader().parse(source_sans_pro_regular as any);

    return (
        <>
            <group {...props} dispose={null}>
                <group position={[71.849, 5.603, -27.5]} onClick={showModal}>
                    <mesh ref={circleRef} position={[0.5, 4.2, 0]} rotation={[0, Math.PI / 2, 0]}>
                        <circleGeometry args={[0.4, 32]} />
                        <meshBasicMaterial color={new THREE.Color('white')} />
                    </mesh>
                    <mesh ref={textRef} position={[0.51, 4.05, 0.07]} rotation={[0, Math.PI / 2, 0]}>
                        <textGeometry args={['i', { font, size: 0.3, depth: 0.01 }]} />
                        <meshBasicMaterial attach="material" color={'black'} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plano021.geometry}
                        material={materials.mat20}
                    />
                    <mesh
                        name="Plano021_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Plano021_1.geometry}
                    >
                        <meshBasicMaterial map={texture} /></mesh>
                </group>
            </group>
            <Html>
                <Modal
                    title="TÍTULO A OBTENER: INGENIERO/A AGROPECUARIO"
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
                        <div style={{ paddingRight: '3%', display: 'flex', flexDirection: 'column', width: '70%' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', gap: '5%' }}>
                                <div>
                                    <strong>Modalidad: </strong> <br />
                                    <span>Presencial</span>
                                </div>
                                <div>
                                    <strong>Duración: </strong> <br />
                                    <span>8 semestres</span>
                                </div>
                            </div>
                            <br />

                            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '5%' }}>
                                <a
                                    href='https://www.espe.edu.ec/ingenieria-agropecuaria/'
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
                                    href='https://www.facebook.com/ESPE.SD.Ingenieria.Agropecuaria'
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

                            <br />

                            <div>
                                <strong>Perfil profesional: </strong> <br />
                                <span>
                                    El Ingeniero Agropecuario es un profesional con competencias para crear, innovar y
                                    administrar sistemas agroproductivos en el
                                    marco de la soberanía alimentaria con responsabilidad social, ética y ambiental.
                                </span>
                                <br />
                                <br />
                                <strong>Malla curricular</strong> <br />
                                <a
                                    href='https://www.espe.edu.ec/wp-content/uploads/2020/11/MallaIngenieriaAgropecuaria2020.pdf'
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
                                    Click para ver Malla curricular PDF
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                            <img style={{ margin: 'auto' }} src={`${import.meta.env.BASE_URL}img/carreras/agropecuaria2.jpg`} alt="Biotecnologia" width="100%" />
                            <img style={{ margin: 'auto' }} src={`${import.meta.env.BASE_URL}img/carreras/agropecuaria8.jpg`} alt="Biotecnologia" width="100%" />

                        </div>

                    </div>
                </Modal>
            </Html>
        </>
    )

}
useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/cartelera.glb`)
