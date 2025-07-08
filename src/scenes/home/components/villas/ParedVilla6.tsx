
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Room030_1: THREE.Mesh
    Room030_2: THREE.Mesh
    Room031_1: THREE.Mesh
    Room031_2: THREE.Mesh
    Room032: THREE.Mesh
    Room032_1: THREE.Mesh
    Room033: THREE.Mesh
    Room033_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function ParedVilla6(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/paredVilla6.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Room027"
        position={[-471.072, 25.177, -413.96]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[7.349, 20.124, 7.349]}>
        <mesh
          name="Room030_1"
          geometry={nodes.Room030_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room030_2"
          geometry={nodes.Room030_2.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room029"
        position={[-488.423, 25.681, -449.065]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[56.293, 20.125, 56.293]}>
        <mesh
          name="Room031_1"
          geometry={nodes.Room031_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room031_2"
          geometry={nodes.Room031_2.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room030"
        position={[-414.014, 25.133, -476.317]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 20.125, 1]}>
        <mesh
          name="Room032"
          geometry={nodes.Room032.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room032_1"
          geometry={nodes.Room032_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room031"
        position={[-474.13, 25.133, -441.714]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 20.125, 1]}>
        <mesh
          name="Room033"
          geometry={nodes.Room033.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room033_1"
          geometry={nodes.Room033_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/paredVilla6.glb')