import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { Minimapa } from "../../components/minimapa";
import { Select } from "antd";
import Markers from "../../components/Markers";

function Minimap({ targetPosition, targetFov, marker }: { targetPosition: THREE.Vector3; targetFov: number, marker: string }) {
  const { camera, gl } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (targetPosition) {
      // Animación con GSAP hacia el objetivo
      gsap.to(camera.position, {
        x: targetPosition.x + 30,
        y: targetPosition.y + 30,
        z: targetPosition.z + 30,
        duration: 1.5,
        onUpdate: () => {
          camera.lookAt(targetPosition);
          camera.updateProjectionMatrix();
        },
      });

      gsap.to(camera, {
        fov: targetFov,
        duration: 1.5,
        onUpdate: () => camera.updateProjectionMatrix(),
      });

      gsap.to(controlsRef.current.target, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1.5,
        onUpdate: () => controlsRef.current.update(),
      });
    }
  }, [targetPosition, targetFov]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <Markers marker={marker} />
      <Minimapa />
      <OrbitControls
        ref={controlsRef}
        camera={camera}
        domElement={gl.domElement}
        enableDamping
        dampingFactor={0.1}
        enablePan={false}
        enableRotate={true}
        enableZoom={true}
        minDistance={50}
        maxDistance={200}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </>
  );
}

const ModalMinimapa = () => {
  const [target, setTarget] = useState({
    position: new THREE.Vector3(0, 0, 320),
    fov: 100, // Valor estándar de campo de visión
    marker: 'box1'
  });

  const handleSelectionChange = (value: string) => {
    const positions: { [key: string]: { position: THREE.Vector3; fov: number , marker: string} } = {
      box1: { position: new THREE.Vector3(0, 0, 320), fov: 100, marker: 'box1' },
      box2: { position: new THREE.Vector3(-120, -39, 200), fov: 60, marker: 'box2' },
      box3: { position: new THREE.Vector3(-185, -44, 80), fov: 35, marker: 'box3' },
      box4: { position: new THREE.Vector3(-120, -44, -200), fov: 35, marker: 'box4' },
      box5: { position: new THREE.Vector3(-165, -20, 0), fov: 35, marker: 'box5' },
    };

    setTarget(positions[value as keyof typeof positions]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {/* Información lateral */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ padding: '1%', fontWeight: 'bold', textAlign: 'center', fontSize: '1.6rem' }}>
            Bienvenido a la Universidad de las Fuerzas Armadas ESPE </span>

          <br />
          <div style={{
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-between'
          }}>

            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', width: '50%'
            }}>
              <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Activar control</span>
              <img
                style={{
                  filter: 'contrast(60%)',
                  margin: 'auto',
                  width: '50%'
                }}
                src={`${import.meta.env.BASE_URL}img/UI/mouse.gif`}
                alt="Mouse Interaction"
              />
            </div>

            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', width: '50%'
            }}>
              <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Activar puntero mouse</span>
              <img
                style={{ margin: 'auto', width: '35%' }}
                src={`${import.meta.env.BASE_URL}img/UI/esc.gif`} alt="esc" />
            </div>
          </div>

          <div style={{
            display: 'flex', flexDirection: 'row',
            justifyContent: 'space-between'
          }}>

            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', width: '50%'
            }}>
              <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Movimiento</span>
              <img
                style={{ margin: 'auto', width: '50%' }}
                src={`${import.meta.env.BASE_URL}img/UI/wasd.gif`} alt="wasd" />
            </div>

            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', width: '50%'
            }}>
              <span style={{ fontWeight: 'bold', textAlign: 'center' }}>Menú de opciones</span>
              <img
                style={{ margin: 'auto', width: '50%' }}
                src={`${import.meta.env.BASE_URL}img/UI/space.gif`} alt="espacio" />
            </div>
          </div>
        </div>

      {/* Sección del Canvas */}
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
        <Select
          defaultValue="box1"
          style={{ position: 'absolute', zIndex: 1, top: 10, right: 10, width: '40%' }}
          onChange={handleSelectionChange}
          options={[
            { value: 'box1', label: 'General' },
            { value: 'box2', label: 'Sala de Docentes' },
            { value: 'box3', label: 'Laboratorios Biotecnología' },
            { value: 'box4', label: 'Labs Tecnologías de la Información' },
            { value: 'box5', label: 'Aulas' },
          ]}
        />

        <Canvas>
          <Minimap targetPosition={target.position} targetFov={target.fov} marker={target.marker} />
        </Canvas>
      </div>
    </div>
  );
};

export default ModalMinimapa;
