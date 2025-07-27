import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useConvexPolyhedron } from '@react-three/cannon'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


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

function getConvexPolyhedronArgs(geometry: THREE.BufferGeometry) {
  const positionAttr = geometry.attributes.position
  const vertices: THREE.Vector3[] = []

  for (let i = 0; i < positionAttr.count; i++) {
    vertices.push(
      new THREE.Vector3(
        positionAttr.getX(i),
        positionAttr.getY(i),
        positionAttr.getZ(i)
      )
    )
  }

  const faces: number[][] = []
  if (geometry.index) {
    const index = geometry.index.array
    for (let i = 0; i < index.length; i += 3) {
      faces.push([index[i], index[i + 1], index[i + 2]])
    }
  }

  return [vertices, faces] as const
}

function CollisionMesh({
  geometry,
  position,
}: {
  geometry: THREE.BufferGeometry
  position: [number, number, number]
}) {
  const [vertices, faces] = getConvexPolyhedronArgs(geometry)

  const [ref] = useConvexPolyhedron(() => ({
    args: [vertices, faces],
    type: 'Static',
    position,
  }))

  return <mesh ref={ref} geometry={geometry} visible={false} />
}

export function ParedEn(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/enfermeria/paredEn.glb') as unknown as GLTFResult
  const position: [number, number, number] = [537.62, 25, -330.33]

  return (
    <group {...props} dispose={null}>
      <group name="Room089" position={position}>
        <mesh geometry={nodes.Room028.geometry} material={materials['Material.081']} />
        <mesh geometry={nodes.Room028_1.geometry} material={materials['Material.082']} />

        <CollisionMesh geometry={nodes.Room028.geometry} position={position} />
        <CollisionMesh geometry={nodes.Room028_1.geometry} position={position} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/enfermeria/paredEn.glb')
