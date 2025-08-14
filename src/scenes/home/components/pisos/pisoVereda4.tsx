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
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda4.glb') as unknown as GLTFResult

  // Crear una caja de colisión simple para el piso
  // Dimensiones aproximadas basadas en las escalas del modelo
  const boxSize: [number, number, number] = [13.438 * 2, 2, 7.68 * 2] // ancho, alto, profundidad
  
  useBox(() => ({
    args: boxSize,
    position: [319.134, 0.459, -734.451], // Misma posición que el grupo
    rotation: [0, Math.PI / 3, 0], // Simplificar rotación (quitar -Math.PI)
    type: 'Static', // Cuerpo estático
  }))

  return (
    <group {...props} dispose={null}>
      <group
        name="curb009"
        position={[319.134, 0.459, -734.451]}
        rotation={[0, Math.PI / 3, -Math.PI]}
        scale={[-13.438, -11.258, -7.68]}
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

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda4.glb')