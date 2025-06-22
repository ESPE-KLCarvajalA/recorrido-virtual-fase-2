import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Room028: THREE.Mesh
    Room028_1: THREE.Mesh
  }
  materials: {
    ['Material.081']: THREE.MeshStandardMaterial
    ['Material.082']: THREE.MeshStandardMaterial
  }
}

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

export function ParedEn(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/enfermeria/paredEn.glb') as unknown as GLTFResult
  const position: [number, number, number] = [537.62, 25, -330.33]

  return (
    <group {...props} dispose={null}>
      <group name="Room089" position={position}>
        {/* Visuales */}
        <mesh geometry={nodes.Room028.geometry} material={materials['Material.081']} />
        <mesh geometry={nodes.Room028_1.geometry} material={materials['Material.082']} />

        {/* Colisiones */}
        <CollisionMesh geometry={nodes.Room028.geometry} position={position} />
        <CollisionMesh geometry={nodes.Room028_1.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('models/enfermeria/paredEn.glb')
