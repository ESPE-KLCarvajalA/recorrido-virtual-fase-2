import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';



type GLTFResult = GLTF & {
  nodes: {
    Cube078: THREE.Mesh
    Cube078_1: THREE.Mesh
    Cube078_2: THREE.Mesh
    Cube078_3: THREE.Mesh
  }
  materials: {
    ['black.005']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
  }
}

export function Compus(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/computadora.glb'
  ) as unknown as GLTFResult;

  
  return (
    <group {...props} dispose={null}>
      <group name="Moniter023" position={[163.294, 12.54, -23.168]}>
        <mesh name="Cube078" geometry={nodes.Cube078.geometry} material={materials['black.005']} />
        <mesh
          name="Cube078_1"
          geometry={nodes.Cube078_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          name="Cube078_2"
          geometry={nodes.Cube078_2.geometry}
          material={materials['Material.011']}
        />
        <mesh
          name="Cube078_3"
          geometry={nodes.Cube078_3.geometry}
          material={materials['Material.012']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/computadora.glb');
