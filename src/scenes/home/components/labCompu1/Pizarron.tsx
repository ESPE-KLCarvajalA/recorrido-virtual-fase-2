import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Plane152: THREE.Mesh
    Plane152_1: THREE.Mesh
    Plane152_2: THREE.Mesh
  }
  materials: {
    ['WB_Metal.001']: THREE.MeshStandardMaterial
    ['WB_Plastic.001']: THREE.MeshPhysicalMaterial
    ['WB_Board.001']: THREE.MeshStandardMaterial
  }
}

export function Pizarron(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/pizarron.glb') as unknown as GLTFResult
  
  
  const distance = useCameraDistance([103.759, 24.852, -77.841]); 
  if (distance > 600) return null;
  
  return (
    <group {...props} dispose={null}>
      <group
        name="Whiteboard002"
        position={[103.759, 24.852, -77.841]}
        rotation={[0, 1.571, 0]}
        scale={50.608}>
        <mesh
          name="Plane152"
          geometry={nodes.Plane152.geometry}
          material={materials['WB_Metal.001']}
        />
        <mesh
          name="Plane152_1"
          geometry={nodes.Plane152_1.geometry}
          material={materials['WB_Plastic.001']}
        />
        <mesh
          name="Plane152_2"
          geometry={nodes.Plane152_2.geometry}
          material={materials['WB_Board.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/pizarron.glb')
