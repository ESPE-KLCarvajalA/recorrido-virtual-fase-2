import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Room004_1: THREE.Mesh
    Room004_2: THREE.Mesh
    Room004_3: THREE.Mesh
  }
  materials: {
    ['Material.094']: THREE.MeshStandardMaterial
    ['Material.095']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

export function Pared1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared1.glb') as unknown as GLTFResult;

  const distance = useCameraDistance([72.941, 30, -71.785]); 
  if (distance > 600) return null;
  
  return (
    <group {...props} dispose={null}>
      <group name="Room004" position={[72.941, 30, -71.785]}>
        <mesh
          name="Room004_1"
          geometry={nodes.Room004_1.geometry}
          material={materials['Material.094']}
        />
        <mesh
          name="Room004_2"
          geometry={nodes.Room004_2.geometry}
          material={materials['Material.095']}
        />
        <mesh
          name="Room004_3"
          geometry={nodes.Room004_3.geometry}
          material={materials['Material.066']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/pared1.glb');
