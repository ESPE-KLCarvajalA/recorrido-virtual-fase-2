// components/ui/Marcador360.tsx
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import '../../styles/pointers.css';

interface Props {
    position: [number, number, number];
    label?: string;
    text?: string;
    url: string;
    isEspecial?: boolean;
}

export default function Marcador360({
    position,
    label = '👀',
    text = 'Explorar Laboratorio',
    url,
    isEspecial = false,
}: Props) {
    const ref = useRef<THREE.Group>(null);
    const [visible, setVisible] = useState(true);

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
        const shouldShow = distance < 200 && angle < Math.PI / 4;

        setVisible(shouldShow);

        // Animación flotante
        const time = Date.now() * 0.002;
        const yOffset = Math.sin(time) * 0.2;

        ref.current.position.set(position[0], position[1] + yOffset, position[2]);
        ref.current.lookAt(camPos);
    });

    const handleClick = () => {
        window.open(url, '_blank'); // Abre en nueva pestaña
    };

    return (
        <group ref={ref} position={position}>
            {visible && (
                <Html transform>
                    <div
                        onClick={handleClick}
                        style={{
                            width: isEspecial ? '550px' : '400px',
                            padding: '25px',
                            borderRadius: '20px',
                            background: isEspecial
                                ? 'linear-gradient(135deg, #00cc66cc, #009944cc)'
                                : '#e5fff5',
                            boxShadow: isEspecial
                                ? '0 0 12px rgba(0, 200, 120, 0.7)'
                                : '0 0 6px rgba(0, 100, 60, 0.3)',
                            color: isEspecial ? '#fff' : '#03562C',
                            fontSize: isEspecial ? '3rem' : '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textAlign: 'center',
                            animation: isEspecial ? 'pulseGreen 2s infinite' : 'none',
                        }}
                    >
                        <div
                            style={{
                                fontSize: isEspecial ? '7rem' : '1.2rem',
                                marginBottom: '5px',
                            }}
                        >
                            {label}
                        </div>
                        <div style={{ fontSize: isEspecial ? '5rem' : '1.2rem' }}>
                            {text}
                        </div>
                    </div>
                </Html>
            )}
        </group>
    );
}
