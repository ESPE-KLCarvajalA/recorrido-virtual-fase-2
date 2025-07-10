import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo022: THREE.Mesh
    Plane069: THREE.Mesh
    Plane069_1: THREE.Mesh
    techo004: THREE.Mesh
    pared_vertical_2028: THREE.Mesh
    pared_vertical_2020: THREE.Mesh
  }
  materials: {
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

export function TechoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/bar/techoBar.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo022"
        geometry={nodes.techo022.geometry}
        material={materials['Material.042']}
        position={[-529.11, 65.532, -77.061]}
        rotation={[0, 1.57, 0]}
        scale={[12.797, 3.519, 28.212]}
      />
      <group name="techo024" position={[-712.307, 71.104, -103.006]} scale={[24.2, 3.519, 31.177]}>
        <mesh
          name="Plane069"
          geometry={nodes.Plane069.geometry}
          material={materials['Material.042']}
        />
        <mesh
          name="Plane069_1"
          geometry={nodes.Plane069_1.geometry}
          material={materials['Material.064']}
        />
      </group>
      <mesh
        name="techo004"
        geometry={nodes.techo004.geometry}
        material={materials['Material.042']}
        position={[-841.385, 87.165, -43.067]}
        rotation={[-1.793, 1.436, 1.716]}
        scale={[18.711, 3.536, 42.301]}
      />
      <mesh
        name="pared_vertical_2028"
        geometry={nodes.pared_vertical_2028.geometry}
        material={materials['Material.066']}
        position={[-708.056, 73.635, -80.187]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[21.389, 1.139, 1.433]}
      />
      <mesh
        name="pared_vertical_2020"
        geometry={nodes.pared_vertical_2020.geometry}
        material={materials['Material.066']}
        position={[-446.76, 72.426, -76.084]}
        scale={[0.581, 1, 1.032]}
      />
    </group>
  )
}

useGLTF.preload('models/bar/techoBar.glb')