import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Room_1: THREE.Mesh
    Room_2: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}



export function ParedLabCompu1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/plcom1.glb') as unknown as GLTFResult
  const position: [number, number, number] = [256.787, 36, -249.846]

  return (
    <group {...props} dispose={null}>
      <group name="Room" position={position}>
        {/* Visual */}
        <mesh geometry={nodes.Room_1.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room_2.geometry} material={materials['Material.097']} />

       
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/plcom1.glb')
