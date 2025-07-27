import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Room019: THREE.Mesh
    Room019_1: THREE.Mesh
    Room019_2: THREE.Mesh
    Room019_3: THREE.Mesh
  }
  materials: {
    ['Material.094']: THREE.MeshStandardMaterial
    ['Material.095']: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.050']: THREE.MeshStandardMaterial
  }
}

export function ParedS1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/secretaria/paredS1.glb') as unknown as GLTFResult

  const position: [number, number, number] = [-155.823, 26, -39.883]

  // Crear colisiones automáticamente para todos los nodos relevantes
  const trimeshNodes = [nodes.Room019, nodes.Room019_1, nodes.Room019_2, nodes.Room019_3]

  trimeshNodes.forEach((mesh) => {
    useTrimesh(() => ({
      args: [
        mesh.geometry.attributes.position.array as Float32Array,
        mesh.geometry.index!.array as Uint16Array,
      ],
      position,
      type: 'Static',
    }))
  })

  return (
    <group {...props} dispose={null}>
      <group name="Room018" position={position}>
        <mesh geometry={nodes.Room019.geometry} material={materials['Material.094']} />
        <mesh geometry={nodes.Room019_1.geometry} material={materials['Material.095']} />
        <mesh geometry={nodes.Room019_2.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.Room019_3.geometry} material={materials['Material.050']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/secretaria/paredS1.glb')
