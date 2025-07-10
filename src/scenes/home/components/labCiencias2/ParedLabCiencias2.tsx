import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane048: THREE.Mesh
    Plane048_1: THREE.Mesh
    Plane048_2: THREE.Mesh
    Plane048_3: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.067']: THREE.MeshStandardMaterial
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
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

export function ParedLabCiencias2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/paredLabCiencias2.glb') as unknown as GLTFResult
  const position: [number, number, number] = [-180.048, 44, -410.42]

  return (
    <group {...props} dispose={null}>
      <group name="paredes_lab_ciencias_2" position={position}>
        {/* Visuales */}
        <mesh geometry={nodes.Plane048.geometry} material={materials['Material.066']} />
        <mesh geometry={nodes.Plane048_1.geometry} material={materials['Material.067']} />
        <mesh geometry={nodes.Plane048_2.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Plane048_3.geometry} material={materials['Material.097']} />

        {/* Colisiones */}
        <CollisionMesh geometry={nodes.Plane048.geometry} position={position} />
        <CollisionMesh geometry={nodes.Plane048_1.geometry} position={position} />
        <CollisionMesh geometry={nodes.Plane048_2.geometry} position={position} />
        <CollisionMesh geometry={nodes.Plane048_3.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/paredLabCiencias2.glb')
