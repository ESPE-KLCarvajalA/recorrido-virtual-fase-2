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
        backgroundIntensity={1.5}
        environmentRotation={[-0.2, 0.15, -0.1]}
      />
      
    </>
  );
};

export default HDRIEnvironment;

