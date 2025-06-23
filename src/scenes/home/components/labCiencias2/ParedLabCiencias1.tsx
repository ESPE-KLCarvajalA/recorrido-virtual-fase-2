import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane032: THREE.Mesh
    Plane032_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.067']: THREE.MeshStandardMaterial
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

export function ParedLabCiencias1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/plcc2.glb') as unknown as GLTFResult
  const position: [number, number, number] = [66.674, 33.7, -418.078]

  return (
    <group {...props} dispose={null}>
      <group name="pared_vertical_2001" position={position}>
        {/* Visuales */}
        <mesh geometry={nodes.Plane032.geometry} material={materials['Material.066']} />
        <mesh geometry={nodes.Plane032_1.geometry} material={materials['Material.067']} />

        {/* Colisiones */}
        <CollisionMesh geometry={nodes.Plane032.geometry} position={position} />
        <CollisionMesh geometry={nodes.Plane032_1.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/plcc2.glb')
