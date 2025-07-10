import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane043: THREE.Mesh
    Plane043_1: THREE.Mesh
    Plane038: THREE.Mesh
    Plane038_1: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
    ['Terrazzo Tiles']: THREE.MeshPhysicalMaterial
  }
}

export function PisoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/bar/pisoBar.glb') as unknown as GLTFResult

  // Posiciones y escalas
  const posColumna1: [number, number, number] = [-648.523, -4.063, -288.685]
  const scaleColumna1: [number, number, number] = [15.387, 19.73, 12.105]

  const posColumna2: [number, number, number] = [-570.368, -4.063, -287.578]
  const scaleColumna2: [number, number, number] = [15.387, 17.894, 13.264]

  const posPiso: [number, number, number] = [-710.344, -6.479, -210.603]
  const scalePiso: [number, number, number] = [143.642, 2.5, 80.797]

  // Colisiones físicas (cajas estáticas)
  const [refColumna1] = useBox(() => ({
    args: scaleColumna1,
    position: posColumna1,
    type: 'Static',
  }))

  const [refColumna2] = useBox(() => ({
    args: scaleColumna2,
    position: posColumna2,
    type: 'Static',
  }))

  const [refPiso] = useBox(() => ({
    args: scalePiso,
    position: posPiso,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      <group
        name="concrete_column001"
        position={posColumna1}
        scale={scaleColumna1}
        ref={refColumna1}>
        <mesh
          name="Plane043"
          geometry={nodes.Plane043.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Plane043_1"
          geometry={nodes.Plane043_1.geometry}
          material={materials['Material.097']}
        />
      </group>

      <group
        name="concrete_column003"
        position={posColumna2}
        scale={scaleColumna2}
        ref={refColumna2}>
        <mesh
          name="Plane038"
          geometry={nodes.Plane038.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Plane038_1"
          geometry={nodes.Plane038_1.geometry}
          material={materials['Material.097']}
        />
      </group>

      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials['Terrazzo Tiles']}
        position={posPiso}
        scale={scalePiso}
        ref={refPiso}
      />
    </group>
  )
}

useGLTF.preload('models/bar/pisoBar.glb')
