import { Environment } from "@react-three/drei";

const HDRIEnvironment = () => {

  return (
    <>
      <ambientLight intensity={0.40} />

      <hemisphereLight
        groundColor="#888888"
        intensity={0.9}
      />

      <Environment
        background={true}
        files="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/hdr/pretoria_gardens_1k.hdr"
        environmentIntensity={0.4}
        environmentRotation={[-0.2, 0.15, -0.1]}
        // ✨ PARÁMETROS PARA MAYOR NITIDEZ
        blur={0}              // Elimina completamente la difuminación (por defecto es 0.03)
        resolution={512}      // Mayor resolución del environment map
        ground={{             // Proyección de suelo más nítida
          height: 100,
          radius: 100,
          scale: 100
        }}
      />
      
    </>
  );
};

export default HDRIEnvironment;