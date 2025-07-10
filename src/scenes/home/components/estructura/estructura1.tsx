import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'



type GLTFResult = GLTF & {
  nodes: {
    Cube070: THREE.Mesh
    Cube069: THREE.Mesh
  }
  materials: {
    ['Material.051']: THREE.MeshStandardMaterial
  }
}


export function Estructura1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube070"
        geometry={nodes.Cube070.geometry}
        material={materials['Material.051']}
        position={[-173.318, 104, 648.364]}
        rotation={[0, 0.2, 0]}
        scale={[1,0.7,1]}
      />
      <mesh
        name="Cube069"
        geometry={nodes.Cube069.geometry}
        material={materials['Material.051']}
        position={[-280.251, 103, 723]}
        scale={[1,0.7,1]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura1.glb')