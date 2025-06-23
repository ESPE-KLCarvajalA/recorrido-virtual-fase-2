import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cube079: THREE.Mesh
    Cube079_1: THREE.Mesh
  }
  materials: {
    ['Material.105']: THREE.MeshStandardMaterial
    ['Material.101']: THREE.MeshStandardMaterial
  }
}

export function PisoTriangulo(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoTriangulo.glb') as unknown as GLTFResult

  // Tomamos una sola geometría para la colisión
  const geometry = nodes.Cube079.geometry

  // Extraemos vértices e índices para la colisión
  const positionAttr = geometry.getAttribute('position')
  const vertices = Array.from(positionAttr.array)
  const indices = geometry.index ? Array.from(geometry.index.array) : []

  // Configuramos la colisión trimesh
  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: [-156.001, -3, 292.708], // misma posición que el modelo visual
  }))

  return (
    <group {...props} dispose={null}>
      {/* Colisión */}
      <group ref={ref} />

      {/* Modelo visible */}
      <group name="triangulo" position={[-156.001, -3, 292.708]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials['Material.105']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube079_1.geometry}
          material={materials['Material.101']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoTriangulo.glb')
