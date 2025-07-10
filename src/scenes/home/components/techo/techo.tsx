
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube063: THREE.Mesh
    Cube063_1: THREE.Mesh
    Cube062: THREE.Mesh
    Cube062_1: THREE.Mesh
    Cube063_2: THREE.Mesh
    Cube063_3: THREE.Mesh
    Cube063_4: THREE.Mesh
    Cube063_5: THREE.Mesh
    Cube064: THREE.Mesh
    Cube064_1: THREE.Mesh
    Cube061: THREE.Mesh
    Cube061_1: THREE.Mesh
  }
  materials: {
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function Techo(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/techo/techo.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="sobretecho002"
        position={[133.165, 50, -424.943]}
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
      <group name="sobretecho005" position={[-117, 52, -104]}>
        <mesh
          name="Cube062"
          geometry={nodes.Cube062.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube062_1"
          geometry={nodes.Cube062_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group name="sobretecho004" position={[-154.697, 74, -390.117]} scale={[1, 6.185, 1]}>
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
      <group name="sobretecho001" position={[251.785, 52, -242.042]} scale={[1, 8.099, 1.08]}>
        <mesh
          name="Cube063_4"
          geometry={nodes.Cube063_4.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube063_5"
          geometry={nodes.Cube063_5.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group name="sobretecho003" position={[155.165, 54, -79.396]}>
        <mesh
          name="Cube064"
          geometry={nodes.Cube064.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube064_1"
          geometry={nodes.Cube064_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group name="sobretecho015" position={[2.274, 56, -79.396]}>
        <mesh
          name="Cube061"
          geometry={nodes.Cube061.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube061_1"
          geometry={nodes.Cube061_1.geometry}
          material={materials['Material.059']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/techo/techo.glb')