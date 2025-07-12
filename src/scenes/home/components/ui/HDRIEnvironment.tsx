import { Environment } from "@react-three/drei";

const HDRIEnvironment = () => {
  return (
    <>
      {/* 🎯 ILUMINACIÓN SIMPLIFICADA */}
      <ambientLight intensity={0.3} />

      {/* 🎯 ELIMINAMOS hemisphereLight para reducir shaders */}
      {/* <hemisphereLight groundColor="#888888" intensity={0.9} /> */}

      {/* 🎯 ENVIRONMENT OPTIMIZADO */}
      <Environment
        background={true}
        files="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/hdr/pretoria_gardens_1k.hdr"
        backgroundBlurriness={0.15}     // Aumentado de 0.06 (menos shaders)
        environmentIntensity={0.25}     // Reducido de 0.4
        backgroundIntensity={1.2}       // Reducido de 1.5
        environmentRotation={[-0.2, 0.15, -0.1]}
        
        
        preset={undefined}              // No usar preset para control manual
        resolution={256}                // Reducir resolución (era automático)
      />
    </>
  );
};

export default HDRIEnvironment;