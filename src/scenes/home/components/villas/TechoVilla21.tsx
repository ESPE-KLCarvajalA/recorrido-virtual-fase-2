import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2005: THREE.Mesh
    pared_vertical_2007: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla21(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla21.glb') as unknown as GLTFResult
 
  
  const distance = useCameraDistance([-775.72, 56.517, -660.965]); // Punto de referencia
  if (distance > 300) return null;
 
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2005"
        geometry={nodes.pared_vertical_2005.geometry}
        material={materials['Material.066']}
        position={[-775.72, 56.517, -660.965]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2007"
        geometry={nodes.pared_vertical_2007.geometry}
        material={materials['Material.066']}
        position={[-775.72, 56.517, -922.64]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <group
        name="sobretecho009"
        position={[-777.798, 53.759, -791.393]}
        rotation={[0, 1.571, 0]}
        scale={[-129.452, -6.4, -64.836]}>
        <mesh
          name="Cube050"
          geometry={nodes.Cube050.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube050_1"
          geometry={nodes.Cube050_1.geometry}
          material={materials['Material.059']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla21.glb')