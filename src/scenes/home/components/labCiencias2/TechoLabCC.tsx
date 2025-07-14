import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube063: THREE.Mesh
    Cube063_1: THREE.Mesh
    techo009: THREE.Mesh
    techo008: THREE.Mesh
    Cube063_2: THREE.Mesh
    Cube063_3: THREE.Mesh
  }
  materials: {
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoLabCC(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/techoLabCC.glb') as unknown as GLTFResult
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
      <mesh
        name="techo009"
        geometry={nodes.techo009.geometry}
        material={materials['Material.212']}
        position={[-170.228, 101.073, -412.704]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}
      />
      <mesh
        name="techo008"
        geometry={nodes.techo008.geometry}
        material={materials['Material.212']}
        position={[109.607, 75.184, -410.137]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 31.177]}
      />
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

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/techoLabCC.glb')
