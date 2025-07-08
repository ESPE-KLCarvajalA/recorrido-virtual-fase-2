import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2010: THREE.Mesh
    pared_vertical_2012: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
    Plane108: THREE.Mesh
    Plane108_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoVilla3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2010"
        geometry={nodes.pared_vertical_2010.geometry}
        material={materials['Material.066']}
        position={[-635.764, 56.517, -998.029]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2012"
        geometry={nodes.pared_vertical_2012.geometry}
        material={materials['Material.066']}
        position={[-374.374, 56.517, -997.48]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.581, 1, 1]}
      />
      <group
        name="sobretecho008"
        position={[-505.098, 53.759, -995.173]}
        scale={[-129.452, -6.4, -64.836]}>
        <mesh
          name="Cube050"
          geometry={nodes.Cube050.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube050_1"
          geometry={nodes.Cube050_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group
        name="techo014"
        position={[-505.473, 75.184, -994.907]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 29.306]}>
        <mesh
          name="Plane108"
          geometry={nodes.Plane108.geometry}
          material={materials['Material.140']}
        />
        <mesh
          name="Plane108_1"
          geometry={nodes.Plane108_1.geometry}
          material={materials['Material.141']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/techoVilla3.glb')