import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane_1: THREE.Mesh
  }
  materials: {
    ['Terrazzo Tiles']: THREE.MeshPhysicalMaterial
    ['Material.034']: THREE.MeshStandardMaterial
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

export function PisoArco(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoArco.glb') as unknown as GLTFResult
  const position: [number, number, number] = [-1.895,0.5 , 31.141]

  return (
    <group {...props} dispose={null}>
      <group name="piso_arco" position={position}>
        {/* Visuales */}
        <mesh geometry={nodes.Plane.geometry} material={materials['Terrazzo Tiles']} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.034']} />

        {/* Colisiones físicas */}
        <CollisionMesh geometry={nodes.Plane.geometry} position={position} />
        <CollisionMesh geometry={nodes.Plane_1.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoArco.glb')
