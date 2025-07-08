
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2017: THREE.Mesh
    pared_vertical_2025: THREE.Mesh
    Plane114: THREE.Mesh
    Plane114_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.156']: THREE.MeshStandardMaterial
    ['Material.157']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla6(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoVilla6.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2017"
        geometry={nodes.pared_vertical_2017.geometry}
        material={materials['Material.066']}
        position={[-370.993, 54.152, -444.31]}
        scale={[0.581, 0.688, 1.032]}
      />
      <mesh
        name="pared_vertical_2025"
        geometry={nodes.pared_vertical_2025.geometry}
        material={materials['Material.066']}
        position={[-572.429, 53.292, -413.864]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.651, 1.125]}
      />
      <group
        name="techo025"
        position={[-509.625, 36.268, -446.305]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 23.436]}>
        <mesh
          name="Plane114"
          geometry={nodes.Plane114.geometry}
          material={materials['Material.156']}
        />
        <mesh
          name="Plane114_1"
          geometry={nodes.Plane114_1.geometry}
          material={materials['Material.157']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/techoVilla6.glb')