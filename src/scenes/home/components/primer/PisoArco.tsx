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
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoArco.glb') as unknown as GLTFResult

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [40, 1, 40], // tamaño aproximado del piso (ajusta según el modelo real)
    position: [-1.895, 2.797, 31.141],
  }))

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="piso_arco" position={[-1.895, 2.797, 31.141]}>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Terrazzo Tiles']} />
        <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.034']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoArco.glb')
