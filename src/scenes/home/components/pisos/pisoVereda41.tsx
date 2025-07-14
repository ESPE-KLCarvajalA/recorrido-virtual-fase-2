import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane042: THREE.Mesh
    Plane042_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda41(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/piso/pisoVereda41.glb') as unknown as GLTFResult

  const position: [number, number, number] = [301.791, -1.328, -483.508]
  const rotation: [number, number, number] = [0, 0.637, 0]
  const scale: [number, number, number] = [16.826, 11.258, 4.26]

  // Ajusta el tamaño de la caja según la escala o tamaño real de tu mesh
  const boxSize: [number, number, number] = [16, 11, 4]

  const [ref] = useBox(() => ({
    args: boxSize,
    position,
    rotation,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group
        ref={ref}
        name="curb006"
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          name="Plane042"
          geometry={nodes.Plane042.geometry}
          material={materials['Material.114']}
        />
        <mesh
          name="Plane042_1"
          geometry={nodes.Plane042_1.geometry}
          material={materials['Material.116']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/piso/pisoVereda41.glb')
