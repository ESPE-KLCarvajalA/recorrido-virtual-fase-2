import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel'

type GLTFResult = GLTF & {
  nodes: {
    Room080: THREE.Mesh
    Room080_1: THREE.Mesh
    Plane088: THREE.Mesh
    Plane088_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
    ['Terrazzo Tiles']: THREE.MeshPhysicalMaterial
    ['Material.034']: THREE.MeshStandardMaterial
  }
}

export function ParedVilla7(props: ThreeElements['group']) {
  // Centro para el cálculo de distancia de renderizado
  const centerPosition: [number, number, number] = [-650.779, 14.37, 143.702]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="models/villas/paredVilla7.glb"
      position={centerPosition}
      maxDistance={600}
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <group
            name="Room076"
            position={[0, 0, 0]} // Posición relativa al centro (era la misma que el centro)
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
          <group
            name="piso_arco002"
            position={[-20.368, -21.352, 45.258]} // Relativo al centro: [-671.147 - (-650.779), -6.982 - 14.37, 188.96 - 143.702]
            scale={[4.683, 1, 1]}>
            <mesh
              name="Plane088"
              geometry={nodes.Plane088.geometry}
              material={materials['Terrazzo Tiles']}
            />
            <mesh
              name="Plane088_1"
              geometry={nodes.Plane088_1.geometry}
              material={materials['Material.034']}
            />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('models/villas/paredVilla7.glb')