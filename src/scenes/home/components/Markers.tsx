import { useState } from 'react';
import { Html } from '@react-three/drei';
import { CSSProperties } from 'react';

const MarkerComponents = ({ marker }: { marker: string }) => {
    const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

    // Estilos Globales
    const globalStyles: CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        cursor: "pointer",
        borderRadius: "50%",
    };

    const markerStyles = {
        box1: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transform: hoveredMarker === "box1" ? "scale(4)" : "scale(2)",
        },
        box1_2: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transform: hoveredMarker === "box1_2" ? "scale(8)" : "scale(3)",
        },
        box1_3: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transform: hoveredMarker === "box1_3" ? "scale(9)" : "scale(4)",
        },
        box2: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transform: hoveredMarker === "box2" ? "scale(1.3)" : "scale(1.1)",
        },
        box3: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transform: hoveredMarker === "box3" ? "scale(1.8)" : "scale(1.2)",
        },
        box4: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transform: hoveredMarker === "box4" ? "scale(2.2)" : "scale(1.5)",
        },
    };


    // Estilos de las etiquetas (label)
    const globalLabelStyles: CSSProperties = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        color: "#fff",
        fontSize: "4rem",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "90px",
        transition: "0.3s all ease",
    };

    const individualLabelStyles = {
        box1: { },
    };

    // Estilos de los textos (text)
    const globalTextStyles: CSSProperties = {
        width: "180px",
        padding: "1rem",
        position: "absolute",
        top: "90px",
        left: "-60px",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "#fff",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "40px",
        transition: "0.3s all ease",
        pointerEvents: "none",
    };

    const individualTextStyles = {
        box1: {
            opacity: hoveredMarker === "box1" ? 1 : 0,
            width: "230px",
        },
        box1_2: {
            opacity: hoveredMarker === "box1_2" ? 1 : 0,
            width: "260px",
        },
        box1_3: {
            opacity: hoveredMarker === "box1_3" ? 1 : 0,
            width: "250px",
        },
        box2: { 
            opacity: hoveredMarker === "box2" ? 1 : 0,
            width: "230px",
         },
        box3: { opacity: hoveredMarker === "box3" ? 1 : 0,
            width: "240px",
         },
         box4: { opacity: hoveredMarker === "box4" ? 1 : 0,
            width: "240px",
         },
    };

    const renderFloatPoint = (
        label: string,
        text: string,
        markerKey: string,
        position: [number, number, number],
        rotation: [number, number, number]
    ) => (
        <group position={position} rotation={rotation}>
            <Html transform>
                <div
                    style={{
                        ...globalStyles,
                        ...markerStyles[markerKey as keyof typeof markerStyles],
                    }}
                    onMouseEnter={() => setHoveredMarker(markerKey)}
                    onMouseLeave={() => setHoveredMarker(null)}
                >
                    <div
                        style={{
                            ...globalLabelStyles,
                            ...individualLabelStyles[markerKey as keyof typeof individualLabelStyles],
                        }}
                    >
                        {label}
                    </div>
                    <div
                        style={{
                            ...globalTextStyles,
                            ...individualTextStyles[markerKey as keyof typeof individualTextStyles],
                        }}
                    >
                        {text}
                    </div>
                </div>
            </Html>
        </group>
    );

    if (marker === 'box1') {
        return (
            <>
                {renderFloatPoint('i', 'Parqueadero y gradas', 'box1', 
                    [0, -15, 335], [-0.8, 0, 0])}
                {renderFloatPoint('ii', 'Edificio Administrativo', 'box1_2', 
                    [-20, 50, 240], [0, 0, 0])}
                {renderFloatPoint('ii', 'Sala de docentes', 'box1_3', 
                    [-120, 10, 245], [0, 0.3, 0])}
            </>
        );
    } else if (marker === 'box2') {
        return (
            <>
                {renderFloatPoint('i', 'Sala de Docentes', 'box2', 
                    [-105, -22, 220], [0, 0.9, 0])}
            </>
        );
    } else if (marker === 'box3') {
        return (
            <>
                {renderFloatPoint('i', 'Labs de Biotecnología', 'box3',
                     [-195, -40, 120], [0.2, 2.4, -0.2])}
                {renderFloatPoint('i', 'Labs de Biotecnología', 'box3',
                     [-175, -40, 50], [0, 0, 0])}
            </>
        );
    } else if (marker === 'box4') {
        return (
            <>
                {renderFloatPoint('i', 'Labs de ITIN', 'box4',
                     [-130, -40, -140], [0.2, 2.4, -0.2])}
                {renderFloatPoint('i', 'Labs de ITIN', 'box4',
                     [-120, -40, -260], [0, 0, 0])}
            </>
        );
    }
    return null;

};

export default MarkerComponents;
