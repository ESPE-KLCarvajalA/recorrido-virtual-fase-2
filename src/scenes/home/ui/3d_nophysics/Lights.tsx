import { Environment } from "@react-three/drei";

const Lights = () => {

  return (
    <>
      <ambientLight intensity={0.45} />

      <hemisphereLight
        groundColor="#888888"
        intensity={0.9}
      />

      <Environment
        background={true}
        files={`${import.meta.env.BASE_URL}autumn_park_1k.hdr`}
        backgroundBlurriness={0.06}
        environmentIntensity={0.4}
        backgroundIntensity={1.5}
        environmentRotation={[-0.2, 0.15, -0.1]}
      />
      
    </>
  );
};

export default Lights;
