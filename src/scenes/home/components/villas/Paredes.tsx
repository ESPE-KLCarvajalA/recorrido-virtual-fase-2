
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Room071: THREE.Mesh
    Room071_1: THREE.Mesh
    Room072: THREE.Mesh
    Room072_1: THREE.Mesh
    Room034: THREE.Mesh
    Room034_1: THREE.Mesh
    Room046: THREE.Mesh
    Room046_1: THREE.Mesh
    Room059: THREE.Mesh
    Room059_1: THREE.Mesh
    Room016: THREE.Mesh
    Room016_1: THREE.Mesh
    Room030_1: THREE.Mesh
    Room030_2: THREE.Mesh
    Room031_1: THREE.Mesh
    Room031_2: THREE.Mesh
    Room032_1: THREE.Mesh
    Room032_2: THREE.Mesh
    Room033: THREE.Mesh
    Room033_1: THREE.Mesh
    Room080: THREE.Mesh
    Room080_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function ParedVi(props: ThreeElements ['group']) {
  const { nodes, materials } = useGLTF('models/villas/paredesglb.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Room068"
        position={[-751.424, 24.12, -597.53]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1, 19.25, 1]}>
        <mesh
          name="Room071"
          geometry={nodes.Room071.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room071_1"
          geometry={nodes.Room071_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room069"
        position={[-746.54, 25.649, -448.642]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1.296, 20.125, 1]}>
        <mesh
          name="Room072"
          geometry={nodes.Room072.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room072_1"
          geometry={nodes.Room072_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group name="Room032" position={[-790.295, 26.819, -766.079]} scale={[0.923, 20.125, 1.714]}>
        <mesh
          name="Room034"
          geometry={nodes.Room034.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room034_1"
          geometry={nodes.Room034_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room044"
        position={[-530.929, 26.108, -1008.118]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.923, 20.125, 1.714]}>
        <mesh
          name="Room046"
          geometry={nodes.Room046.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room046_1"
          geometry={nodes.Room046_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room057"
        position={[-193.617, 23.565, -752.193]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.369, 20.125, 0.879]}>
        <mesh
          name="Room059"
          geometry={nodes.Room059.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room059_1"
          geometry={nodes.Room059_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room025"
        position={[-485.492, 25.797, -729.139]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[56.293, 20.125, 56.293]}>
        <mesh
          name="Room016"
          geometry={nodes.Room016.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room016_1"
          geometry={nodes.Room016_1.geometry}
          material={materials['Material.097']}
        />
      </group>
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
          name="Room032_1"
          geometry={nodes.Room032_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room032_2"
          geometry={nodes.Room032_2.geometry}
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
      <group
        name="Room076"
        position={[-650.779, 14.37, 143.702]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.918, 20.125, 1.968]}>
        <mesh
          name="Room080"
          geometry={nodes.Room080.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room080_1"
          geometry={nodes.Room080_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/villas/paredesglb.glb')