import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta si es necesario

type GLTFResult = GLTF & {
  nodes: {
    Room016: THREE.Mesh
    Room016_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function ParedVilla5(props: ThreeElements['group']) {
  // Centro para el cálculo de distancia de renderizado
  const centerPosition: [number, number, number] = [-485.492, 25.797, -729.139]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredVilla5.glb"
      position={centerPosition}
      maxDistance={200}
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <group
            name="Room025"
            position={[0, 0, 0]} // Posición relativa al centro (era la misma que el centro)
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
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredVilla5.glb')