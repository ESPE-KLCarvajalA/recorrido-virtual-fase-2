import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario



type GLTFResult = GLTF & {
  nodes: {
    Cube053: THREE.Mesh
    Cube053_1: THREE.Mesh
  }
  materials: {
    ['Material.216']: THREE.MeshStandardMaterial
    ['Material.217']: THREE.MeshStandardMaterial
  }
}


export function SillasLab(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/sillas/sillalab1.glb') as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group name="Base" position={[19.23, 5.343, -333.243]}>
        <mesh
          name="Cube053"
          geometry={nodes.Cube053.geometry}
          material={materials['Material.216']}
        />
        <mesh
          name="Cube053_1"
          geometry={nodes.Cube053_1.geometry}
          material={materials['Material.217']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/sillas/sillalab1.glb');
