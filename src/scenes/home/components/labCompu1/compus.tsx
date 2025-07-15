
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube078: THREE.Mesh
    Cube078_1: THREE.Mesh
    Cube078_2: THREE.Mesh
    Cube078_3: THREE.Mesh
    Cube078_4: THREE.Mesh
    Cube078_5: THREE.Mesh
    Cube078_6: THREE.Mesh
  }
  materials: {
    ['black.005']: THREE.MeshStandardMaterial
    ['White.006']: THREE.MeshStandardMaterial
    ['desktop.005']: THREE.MeshStandardMaterial
    ['BlenderKeyboardMat.005']: THREE.MeshPhysicalMaterial
    ['Material.201']: THREE.MeshStandardMaterial
    ['Material.199']: THREE.MeshStandardMaterial
    ['Material.200']: THREE.MeshStandardMaterial
  }
}

export function Compus(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/compus.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Moniter023" position={[161.535, 16.867, -22.455]} scale={7.145}>
        <mesh name="Cube078" geometry={nodes.Cube078.geometry} material={materials['black.005']} />
        <mesh
          name="Cube078_1"
          geometry={nodes.Cube078_1.geometry}
          material={materials['White.006']}
        />
        <mesh
          name="Cube078_2"
          geometry={nodes.Cube078_2.geometry}
          material={materials['desktop.005']}
        />
        <mesh
          name="Cube078_3"
          geometry={nodes.Cube078_3.geometry}
          material={materials['BlenderKeyboardMat.005']}
        />
        <mesh
          name="Cube078_4"
          geometry={nodes.Cube078_4.geometry}
          material={materials['Material.201']}
        />
        <mesh
          name="Cube078_5"
          geometry={nodes.Cube078_5.geometry}
          material={materials['Material.199']}
        />
        <mesh
          name="Cube078_6"
          geometry={nodes.Cube078_6.geometry}
          material={materials['Material.200']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/compus.glb')
