
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2019: THREE.Mesh
    sobretecho012: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
    pared_vertical_2018: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
  }
}

export function SobretechoVilla7(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/sobretechoVilla7.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2019"
        geometry={nodes.pared_vertical_2019.geometry}
        material={materials['Material.066']}
        position={[-823.993, 43.581, 183.85]}
        scale={[0.581, 1, 1.048]}
      />
      <mesh
        name="sobretecho012"
        geometry={nodes.sobretecho012.geometry}
        material={materials['Material.059']}
        position={[-630.22, 42.139, 162.101]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-95.851, -4.05, -64.836]}
      />
      <group
        name="sobretecho013"
        position={[-779.916, 42.808, 176.952]}
        rotation={[0, 1.571, 0]}
        scale={[-65.21, -4.55, -55.024]}>
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
      <mesh
        name="pared_vertical_2018"
        geometry={nodes.pared_vertical_2018.geometry}
        material={materials['Material.066']}
        position={[-523.402, 43.425, 183.496]}
        scale={[0.581, 1, 1.032]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/sobretechoVilla7.glb')