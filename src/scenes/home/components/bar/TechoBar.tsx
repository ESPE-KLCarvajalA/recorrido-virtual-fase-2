import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo022: THREE.Mesh
    techo024: THREE.Mesh
    techo004: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/techoBar.glb') as unknown as GLTFResult
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo022"
        geometry={nodes.techo022.geometry}
        material={materials['Material.212']}
        position={[-529.11, 65.532, -77.061]}
        rotation={[0, 1.57, 0]}
        scale={[12.797, 3.519, 28.212]}
      />
      <mesh
        name="techo024"
        geometry={nodes.techo024.geometry}
        material={materials['Material.212']}
        position={[-712.307, 71.104, -103.006]}
        scale={[24.2, 3.519, 31.177]}
      />
      <mesh
        name="techo004"
        geometry={nodes.techo004.geometry}
        material={materials['Material.212']}
        position={[-841.385, 87.165, -43.067]}
        rotation={[-1.793, 1.436, 1.716]}
        scale={[18.711, 3.536, 42.301]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/techoBar.glb')