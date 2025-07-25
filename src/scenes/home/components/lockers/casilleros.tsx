
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    Plane005: THREE.Mesh
    Plane005_1: THREE.Mesh
  }
  materials: {
    ['Casilleros.002']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
  }
}
  
  

export function Casilleros(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/casillero.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="casilleros001" position={[-79.359, 17.8, -243.995]}>
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials['Casilleros.002']}
        />
        <mesh
          name="Plane005_1"
          geometry={nodes.Plane005_1.geometry}
          material={materials['Material.019']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/casillero.glb')
