// Imports de tus componentes originales
import { Estructura } from "../components/estructura/estructura";
import { Estructura1 } from "../components/estructura/estructura1";
import { Cartelera } from "../components/otros/cartelera";
import { Frases } from "../components/otros/frases";
import { Senaleticas } from "../components/otros/senaleticas";
import { Tablero } from "../components/otros/tablero";
import { Parqueadero } from "../components/parqueadero/parqueadero";
import { Borde } from "../components/primer/Borde";
import { PisoArco } from "../components/primer/PisoArco";
import { PisoCesped1 } from "../components/primer/PisoCesped1";
import { PisoCesped3 } from "../components/primer/PisoCesped3";
import { PisoCesped5E } from "../components/primer/PisoCesped5E";
import { PisoLabs } from "../components/primer/PisoLabs";
import { PisoOctagono } from "../components/primer/PisoOctagono";
import { PisoTriangulo } from "../components/primer/PisoTriangulo";
import { PisoVereda } from "../components/primer/pisoVereda";
import { PisoVereda2 } from "../components/primer/pisoVereda2";
import { PisoVereda5 } from "../components/primer/pisoVereda5";
import { Vereda1 } from "../components/primer/vereda1";
import { Vereda2 } from "../components/primer/vereda2";

// NUEVO: Import para optimizaciones
import useCameraDistance from '../../../utils/useCameraDistance';

// TEMPORAL: Función sin LOD para debuggear
const BaseSceneAfuera = () => {
  
  // TEMPORAL: Posición del spawn del personaje para referencia
  const playerSpawn: [number, number, number] = [-80, -1, 170];
  const distance = useCameraDistance(playerSpawn);
  
  // TEMPORAL: Mostrar la distancia en consola para debuggear
  console.log("Distancia desde spawn:", distance);

  return (
    <>
      {/* TODOS LOS COMPONENTES VISIBLES - SIN LOD TEMPORAL */}
      {/* Física - Pisos principales y estructuras básicas */}
      <PisoOctagono />
      <Vereda1 />
      <PisoTriangulo />
      <PisoCesped1 />
      <Vereda2 />
      <PisoArco />
      <PisoVereda />
      <PisoVereda2 />
      <PisoCesped3 />
      <Borde />
      <PisoCesped5E />
      <PisoLabs />
      <PisoVereda5 />
      
      {/* Sin física */}
      <Frases />
      <Senaleticas />
      <Estructura />
      <Estructura1 />
      <Cartelera />
      <Parqueadero />
      <Tablero />

      {/* DEBUG: Indicador visual en el spawn del personaje */}
      <mesh position={playerSpawn}>
        <sphereGeometry args={[5]} />
        <meshBasicMaterial 
          color="red" 
          wireframe 
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* DEBUG: Texto con la distancia actual */}
      <mesh position={[playerSpawn[0], playerSpawn[1] + 10, playerSpawn[2]]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
};

export default BaseSceneAfuera;