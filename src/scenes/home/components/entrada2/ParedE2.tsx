import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cube040: THREE.Mesh
    Cube040_1: THREE.Mesh
  }
  materials: {
    ['Material.068']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
  }
}

// Componente para colisión
function CollisionMesh({
  geometry,
  position,
}: {
  geometry: THREE.BufferGeometry
  position: [number, number, number]
}) {
  const vertices = geometry.attributes.position.array as Float32Array
  const indices = geometry.index?.array as Uint16Array | Uint32Array

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    type: 'Static',
    position,
  }))

  return <mesh ref={ref} geometry={geometry} visible={false} />
}

export function ParedE2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/entrada2/paredE2.glb') as unknown as GLTFResult
  const position: [number, number, number] = [-1.753, 27, 36.382]

  return (
    <group {...props} dispose={null}>
      <group name="arco4" position={position}>
        {/* Visual */}
        <mesh geometry={nodes.Cube040.geometry} material={materials['Material.068']} />
        <mesh geometry={nodes.Cube040_1.geometry} material={materials['Material.047']} />

        {/* Colisiones */}
        <CollisionMesh geometry={nodes.Cube040.geometry} position={position} />
        <CollisionMesh geometry={nodes.Cube040_1.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/entrada2/paredE2.glb')
