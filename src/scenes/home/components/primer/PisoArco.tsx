import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useBox } from '@react-three/cannon'

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

export function PisoArco(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoArco.glb'
  ) as unknown as GLTFResult

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [40, 1, 40], // Ajusta según el tamaño real del piso
    position: [-2.431, 1, 31.138],
  }))

  return (
    <group {...props} dispose={null}>
      <group ref={ref} name="piso_arco" position={[-2.431, 1, 31.138]}>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Terrazzo Tiles']} />
        <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.034']} />
      </group>
    </group>
  )
}

useGLTF.preload(
  'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoArco.glb'
)
