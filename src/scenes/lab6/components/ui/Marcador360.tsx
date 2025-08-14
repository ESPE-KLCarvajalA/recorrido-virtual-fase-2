// components/ui/Marcador360.tsx
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import '../../styles/pointers.css';

interface Props {
    position: [number, number, number];
    icon?: string;
    text?: string;
    url: string;
    isEspecial?: boolean;
}

export default function Marcador360({
    position,
    icon = '⬇', // Icono de flecha hacia abajo
    text = 'Ver Laboratorio',
    url,
    isEspecial = false,
}: Props) {
    const ref = useRef<THREE.Group>(null);
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    useFrame(({ camera }) => {
        if (!ref.current) return;

        const markerPos = new THREE.Vector3(...position);
        const camPos = camera.position.clone();
        const distance = markerPos.distanceTo(camPos);

        // Vector dirección desde cámara hacia marcador
        const toMarker = markerPos.clone().sub(camPos).normalize();

        // Dirección en la que mira la cámara
        const camDir = new THREE.Vector3();
        camera.getWorldDirection(camDir);

        // Ángulo entre la mirada y el marcador
        const angle = camDir.angleTo(toMarker); // en radianes

        // Mostrar solo si estás cerca y mirando hacia él
        const shouldShow = distance < 400 && angle < Math.PI / 4; // ← 🎯 Mayor distancia de visibilidad

        setVisible(shouldShow);

        // Animación flotante más suave
        const time = Date.now() * 0.001; // Más lento
        const yOffset = Math.sin(time) * 0.15; // Menos movimiento vertical

        ref.current.position.set(position[0], position[1] + yOffset, position[2]);
        ref.current.lookAt(camPos);
    });

    const handleClick = () => {
        // GUARDAR la posición de la PUERTA/MARCADOR (no del jugador)
        const doorPosition = {
            x: position[0], // Posición X del marcador
            y: position[1] - 1, // Posición Y del marcador (un poco más abajo para que el personaje esté en el suelo)
            z: position[2] + 3  // Posición Z del marcador (un poco hacia afuera de la puerta)
        };
        
        // Guardar en sessionStorage
        sessionStorage.setItem('doorPosition', JSON.stringify(doorPosition));
        
        // Navegar a la vista 360
        const routePath = url.startsWith('#') ? url.substring(1) : url;
        navigate(routePath);
    };

    return (
        <group ref={ref} position={position}>
            {visible && (
                <Html transform>
                    <div
                        onClick={handleClick}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                        }}
                    >
                        {/* Icono separado */}
                        <div
                            className="marker-icon"
                            style={{
                                fontSize: isEspecial ? '10rem' : '6rem', // ← 🎯 Iconos más grandes
                                color: '#000000', // ← 🎯 Flecha blanca para ambos tipos
                                textShadow: isEspecial 
                                    ? '0 0 20px rgba(255, 255, 255, 0.9)' // ← Brillo blanco para especiales
                                    : '0 2px 8px rgba(0, 0, 0, 0.6)',      // ← Sombra más fuerte para normales
                                filter: isEspecial ? 'drop-shadow(0 0 15px #ffffff)' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))',
                                animation: 'bounceArrow 1.5s ease-in-out infinite',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: isEspecial ? '150px' : '100px',   // ← 🎯 Contenedor más grande
                                height: isEspecial ? '150px' : '100px', // ← 🎯 Contenedor más grande
                                borderRadius: '50%',
                                background: isEspecial 
                                    ? 'radial-gradient(circle, rgba(0, 255, 102, 0.2), transparent)'
                                    : 'radial-gradient(circle, rgba(3, 86, 44, 0.1), transparent)',
                            }}
                        >
                            {icon}
                        </div>

                        {/* Texto separado */}
                        <div
                            className="marker-text"
                            style={{
                                padding: '15px 25px',
                                borderRadius: '15px',
                                background: isEspecial
                                    ? 'linear-gradient(135deg, #00cc66cc, #009944cc)'
                                    : '#e5fff5',
                                boxShadow: isEspecial
                                    ? '0 0 12px rgba(0, 200, 120, 0.7)'
                                    : '0 0 6px rgba(0, 100, 60, 0.3)',
                                color: isEspecial ? '#fff' : '#03562C',
                                fontSize: isEspecial ? '2.5rem' : '1.2rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                animation: isEspecial ? 'pulseGreen 2s infinite' : 'none',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {text}
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}