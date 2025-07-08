import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube063: THREE.Mesh
    Cube063_1: THREE.Mesh
    Plane063: THREE.Mesh
    Plane063_1: THREE.Mesh
    Plane080: THREE.Mesh
    Plane080_1: THREE.Mesh
    Cube063_2: THREE.Mesh
    Cube063_3: THREE.Mesh
  }
  materials: {
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
  }
}

export function TechoLabCC(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoLabCC.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="sobretecho002"
        position={[133.165, 53.479, -424.943]}
        rotation={[0, 1.571, 0]}
        scale={[0.921, 8.099, 1.08]}>
        <mesh
          name="Cube063"
          geometry={nodes.Cube063.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube063_1"
          geometry={nodes.Cube063_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group
        name="techo009"
        position={[-170.228, 101.073, -412.704]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh
          name="Plane063"
          geometry={nodes.Plane063.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane063_1"
          geometry={nodes.Plane063_1.geometry}
          material={materials['Material.143']}
        />
      </group>
      <group
        name="techo008"
        position={[109.607, 75.184, -410.137]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh
          name="Plane080"
          geometry={nodes.Plane080.geometry}
          material={materials['Material.140']}
        />
        <mesh
          name="Plane080_1"
          geometry={nodes.Plane080_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <group name="sobretecho004" position={[-154.697, 79.516, -390.117]} scale={[1, 6.185, 1]}>
        <mesh
          name="Cube063_2"
          geometry={nodes.Cube063_2.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube063_3"
          geometry={nodes.Cube063_3.geometry}
          material={materials['Material.059']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/techoLabCC.glb')
