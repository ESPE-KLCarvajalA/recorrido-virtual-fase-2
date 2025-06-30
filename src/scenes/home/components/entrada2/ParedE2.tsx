import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cube040: THREE.Mesh
    Cube040_1: THREE.Mesh
    Cube040_2: THREE.Mesh
  }
  materials: {
    ['Material.068']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

// Utilidad para convertir geometría a vertices e índices
function getTrimeshArgs(geometry: THREE.BufferGeometry) {
  const vertices = Array.from(geometry.attributes.position.array as Float32Array)
  const indices = geometry.index
    ? Array.from(geometry.index.array as Uint16Array | Uint32Array)
    : []
  return [vertices, indices] as [number[], number[]]
}

export function ParedE2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/entrada2/paredE2.glb') as unknown as GLTFResult

  const geometry = nodes.Cube040.geometry
  const position: [number, number, number] = [-1.756, 30, 40.526]

  const [ref] = useTrimesh(() => ({
    args: getTrimeshArgs(geometry),
    type: 'Static',
    position,
  }))

  return (
    <group {...props} dispose={null}>
      <group name="arco4" position={position} ref={ref}>
        <mesh
          name="Cube040"
          geometry={nodes.Cube040.geometry}
          material={materials['Material.068']}
        />
        <mesh
          name="Cube040_1"
          geometry={nodes.Cube040_1.geometry}
          material={materials['Material.047']}
        />
        <mesh
          name="Cube040_2"
          geometry={nodes.Cube040_2.geometry}
          material={materials['Material.066']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/entrada2/paredE2.glb')
