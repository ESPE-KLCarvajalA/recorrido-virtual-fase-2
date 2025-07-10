import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta la ruta
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Room092_1: THREE.Mesh
    Room092_2: THREE.Mesh
    Room092_3: THREE.Mesh
    Room092_4: THREE.Mesh
    Room092_5: THREE.Mesh
    Room092_6: THREE.Mesh
    Room092_7: THREE.Mesh
    Room092_8: THREE.Mesh
  }
  materials: {
    ['Material.094']: THREE.MeshStandardMaterial
    ['Material.095']: THREE.MeshStandardMaterial
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.067']: THREE.MeshStandardMaterial
    ['Material.033']: THREE.MeshStandardMaterial
    ['Material.032']: THREE.MeshStandardMaterial
  }
}

export function ParedS2(props: ThreeElements['group']) {
  const position: [number, number, number] = [-172.066, 30, -212.124]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/secretaria/paredS2.glb"
      position={position}
      maxDistance={300}
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <group name="Room092" position={[0, 0, 0]}>
            <mesh geometry={nodes.Room092_1.geometry} material={materials['Material.094']} />
            <mesh geometry={nodes.Room092_2.geometry} material={materials['Material.095']} />
            <mesh geometry={nodes.Room092_3.geometry} material={materials['Material.096']} />
            <mesh geometry={nodes.Room092_4.geometry} material={materials['Material.097']} />
            <mesh geometry={nodes.Room092_5.geometry} material={materials['Material.066']} />
            <mesh geometry={nodes.Room092_6.geometry} material={materials['Material.067']} />
            <mesh geometry={nodes.Room092_7.geometry} material={materials['Material.033']} />
            <mesh geometry={nodes.Room092_8.geometry} material={materials['Material.032']} />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

// ✅ Preload para rendimiento
useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/secretaria/paredS2.glb')
