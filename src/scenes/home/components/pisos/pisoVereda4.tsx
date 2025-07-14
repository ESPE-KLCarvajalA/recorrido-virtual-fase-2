import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane098: THREE.Mesh
    Plane098_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda4(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/piso/pisoVereda4.glb') as unknown as GLTFResult

  // Define tamaño de la caja para colisión (ajusta según tu modelo)
  // Puedes cambiar estos valores para ajustarlo mejor al modelo
  const boxSize: [number, number, number] = [13, 11, 8] // Ancho, alto, profundidad
  const position: [number, number, number] = [319.134, 0.459, -734.451]
  const rotation: [number, number, number] = [0, Math.PI / 3, -Math.PI]
  const scale: [number, number, number] = [-13.438, -11.258, -7.68]

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
        name="curb009"
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          name="Plane098"
          geometry={nodes.Plane098.geometry}
          material={materials['Material.114']}
        />
        <mesh
          name="Plane098_1"
          geometry={nodes.Plane098_1.geometry}
          material={materials['Material.116']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/piso/pisoVereda4.glb')
