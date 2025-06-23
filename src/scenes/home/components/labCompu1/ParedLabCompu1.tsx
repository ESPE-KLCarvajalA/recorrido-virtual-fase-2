import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Room_1: THREE.Mesh
    Room_2: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

// Componente para generar la colisión física
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

export function ParedLabCompu1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/plcom1.glb') as unknown as GLTFResult
  const position: [number, number, number] = [256.787, 36, -249.846]

  return (
    <group {...props} dispose={null}>
      <group name="Room" position={position}>
        {/* Visual */}
        <mesh geometry={nodes.Room_1.geometry} material={materials['Material.096']} />
        <mesh geometry={nodes.Room_2.geometry} material={materials['Material.097']} />

        {/* Colisiones */}
        <CollisionMesh geometry={nodes.Room_1.geometry} position={position} />
        <CollisionMesh geometry={nodes.Room_2.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/plcom1.glb')
