import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Plane042: THREE.Mesh
    Plane042_1: THREE.Mesh
    Plane098: THREE.Mesh
    Plane098_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

// Escalar manualmente los vértices
function getTrimeshArgs(geometry: THREE.BufferGeometry, scale: [number, number, number]) {
  const position = geometry.attributes.position
  const vertices: number[] = []
  for (let i = 0; i < position.count; i++) {
    vertices.push(
      position.getX(i) * scale[0],
      position.getY(i) * scale[1],
      position.getZ(i) * scale[2]
    )
  }
  const indices = geometry.index ? Array.from(geometry.index.array) : []
  return [vertices, indices] as const
}

export function PisoVereda4(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda4.glb') as unknown as GLTFResult

  // Escalas exactas usadas en los grupos visuales
  const scale1: [number, number, number] = [16.826, 11.258, 4.26]
  const scale2: [number, number, number] = [-13.438, -11.258, -7.68]

  const [vertices1, indices1] = getTrimeshArgs(nodes.Plane042.geometry, scale1)
  const [vertices2, indices2] = getTrimeshArgs(nodes.Plane098.geometry, scale2)

  const [ref1] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices1, indices1],
    position: [301.791, -2, -483.508],
    rotation: [0, 0.637, 0],
  }))

  const [ref2] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices2, indices2],
    position: [319.134, 0, -734.451],
    rotation: [0, Math.PI / 3, -Math.PI],
  }))

  return (
    <group {...props} dispose={null}>
      <group
        ref={ref1}
        position={[301.791, -2, -483.508]}
        rotation={[0, 0.637, 0]}
        scale={scale1}>
        <mesh geometry={nodes.Plane042.geometry} material={materials['Material.114']} />
        <mesh geometry={nodes.Plane042_1.geometry} material={materials['Material.116']} />
      </group>

      <group
        ref={ref2}
        position={[319.134, 0, -734.451]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={scale2}>
        <mesh geometry={nodes.Plane098.geometry} material={materials['Material.114']} />
        <mesh geometry={nodes.Plane098_1.geometry} material={materials['Material.116']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoVereda4.glb')
