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

  const groupPosition: [number, number, number] = [-1.895, -3, 31.141]

  // Combinar bounding box de las dos mallas para sacar dimensiones
  const box = new THREE.Box3().setFromObject(new THREE.Group())
  box.expandByObject(nodes.Plane)
  box.expandByObject(nodes.Plane_1)

  const size = new THREE.Vector3()
  box.getSize(size)

  const center = new THREE.Vector3()
  box.getCenter(center)

  // useBox con dimensiones y posición ajustadas
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [size.x, size.y, size.z],
    position: [
      groupPosition[0] + center.x,
      groupPosition[1] + center.y,
      groupPosition[2] + center.z
    ],
  }))

  return (
    <group {...props} dispose={null}>
      <group name="piso_arco" position={groupPosition} ref={ref}>
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials['Terrazzo Tiles']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={materials['Material.034']}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoArco.glb')
