
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane100: THREE.Mesh
    Plane100_1: THREE.Mesh
    Plane085: THREE.Mesh
    Plane085_1: THREE.Mesh
    Plane099: THREE.Mesh
    Plane099_1: THREE.Mesh
    piso_gris001: THREE.Mesh
    road004: THREE.Mesh
    Plane094: THREE.Mesh
    Plane094_1: THREE.Mesh
  }
  materials: {
    ['Material.128']: THREE.MeshStandardMaterial
    ['Material.129']: THREE.MeshStandardMaterial
    ['Material.130']: THREE.MeshStandardMaterial
    ['Material.131']: THREE.MeshStandardMaterial
    ['Material.126']: THREE.MeshStandardMaterial
    ['Material.127']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.154']: THREE.MeshStandardMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Material.121']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda5(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="curb003"
        position={[-575.581, -4.216, 60.901]}
        rotation={[-Math.PI, 0.664, 0]}
        scale={[-13.438, -11.258, -7.68]}>
        <mesh
          name="Plane100"
          geometry={nodes.Plane100.geometry}
          material={materials['Material.128']}
        />
        <mesh
          name="Plane100_1"
          geometry={nodes.Plane100_1.geometry}
          material={materials['Material.129']}
        />
      </group>
      <group
        name="curb007"
        position={[-732.487, -4.216, 145.569]}
        rotation={[-Math.PI, 0.664, 0]}
        scale={[-13.438, -11.258, -7.68]}>
        <mesh
          name="Plane085"
          geometry={nodes.Plane085.geometry}
          material={materials['Material.130']}
        />
        <mesh
          name="Plane085_1"
          geometry={nodes.Plane085_1.geometry}
          material={materials['Material.131']}
        />
      </group>
      <group
        name="road007"
        position={[-465.979, -4.216, -164.703]}
        rotation={[0, -1.568, 0]}
        scale={[5.09, 11.258, 14.195]}>
        <mesh
          name="Plane099"
          geometry={nodes.Plane099.geometry}
          material={materials['Material.126']}
        />
        <mesh
          name="Plane099_1"
          geometry={nodes.Plane099_1.geometry}
          material={materials['Material.127']}
        />
      </group>
      <mesh
        name="piso_gris001"
        geometry={nodes.piso_gris001.geometry}
        material={materials['Material.031']}
        position={[-455.786, -4.216, -263.412]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.319, -1, -0.83]}
      />
      <mesh
        name="road004"
        geometry={nodes.road004.geometry}
        material={materials['Material.154']}
        position={[-406.536, -4.216, -85.252]}
        scale={[17.387, 11.258, 10.745]}
      />
      <group
        name="road002"
        position={[-646.937, -4.216, 8.19]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[6.96, 11.258, 38.979]}>
        <mesh
          name="Plane094"
          geometry={nodes.Plane094.geometry}
          material={materials['Material.039']}
        />
        <mesh
          name="Plane094_1"
          geometry={nodes.Plane094_1.geometry}
          material={materials['Material.121']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoVereda5.glb')