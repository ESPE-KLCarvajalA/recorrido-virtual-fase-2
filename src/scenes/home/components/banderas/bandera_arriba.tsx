import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import { DoubleSide } from "three";

type BanderaProps = {
    texture: string; // URL de la textura
    position?: [number, number, number]; // Posición en la escena
    scale?: [number, number, number]; // Escala del objeto
    rotation?: [number, number, number]; // Rotación del objeto
    poleColor?: string; // Color del poste
};

export function Bandera_arriba({
    texture,
    position = [0, 0, 0],
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    poleColor = "#B2ADAB",
    ...props
}: BanderaProps) {
    const flagRef = useRef<Mesh>(null);
    const [waveParams] = useState({
        h: 0.5,
        v: 0.3,
        w: 0.2,
        s: 0.4
    });

    const segW = 30;
    const segH = 20;

    // Cargar textura desde una imagen
    const flagTexture = useLoader(TextureLoader, texture);

    // Animación de la bandera
    useFrame(() => {
        const { h, v, w, s } = waveParams;
        const time = Date.now() * s / 50;

        if (flagRef.current) {
            const position = flagRef.current.geometry.attributes.position;
            for (let y = 0; y <= segH; y++) {
                for (let x = 0; x <= segW; x++) {
                    const index = 3 * (x + y * (segW + 1));
                    const wave = Math.sin(h * x + v * y - time) * w * x / 4;
                    position.array[index + 2] = wave;
                }
            }
            position.needsUpdate = true;
        }
    });

    return (
        <group
            position={position}
            scale={scale}
            rotation={rotation}
            {...props}
            dispose={null}
        >
            {/* Poste */}
            <mesh position={[-15, -10, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 40, 16, 1]} />
                <meshPhongMaterial color={poleColor} specular={"#999999"} shininess={30} />
            </mesh>

            {/* Bandera */}
            <mesh ref={flagRef}>
                <planeGeometry args={[30, 20, segW, segH]} />
                <meshLambertMaterial
                    color={"#ffffff"}
                    side={DoubleSide}
                    map={flagTexture}
                />
            </mesh>
        </group>
    );
}
