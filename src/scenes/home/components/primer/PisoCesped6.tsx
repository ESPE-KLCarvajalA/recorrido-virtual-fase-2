import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane014: THREE.Mesh
    Plane015: THREE.Mesh
    Plane011: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped6(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped6.glb') as unknown as GLTFResult

  // Plane014
  const geometry1 = nodes.Plane014.geometry
  const position1: [number, number, number] = [375.291, -1, -720.258]
  const rotation1: [number, number, number] = [0, 0.747, 0]
  const scale1: [number, number, number] = [188.801, 20.77, 111.115]

  const geo1 = geometry1.clone()
  geo1.scale(...scale1)
  const vertices1 = Array.from(geo1.attributes.position.array as Float32Array)
  const indices1 = geo1.index ? Array.from(geo1.index.array as Uint32Array) : []
  const [ref1] = useTrimesh(() => ({ type: 'Static', args: [vertices1, indices1], position: position1, rotation: rotation1 }))

  // Plane015
  const geometry2 = nodes.Plane015.geometry
  const position2: [number, number, number] = [-221.88, -1, -968.167]
  const rotation2: [number, number, number] = [0, 0, 0]
  const scale2: [number, number, number] = [131.118, 20.77, 88.088]

  const geo2 = geometry2.clone()
  geo2.scale(...scale2)
  const vertices2 = Array.from(geo2.attributes.position.array as Float32Array)
  const indices2 = geo2.index ? Array.from(geo2.index.array as Uint32Array) : []
  const [ref2] = useTrimesh(() => ({ type: 'Static', args: [vertices2, indices2], position: position2, rotation: rotation2 }))

  // Plane011
  const geometry3 = nodes.Plane011.geometry
  const position3: [number, number, number] = [-695.148, -4.216, 63.023]
  const rotation3: [number, number, number] = [0, 0, 0]
  const scale3: [number, number, number] = [113.115, 38.087, 43.158]

  const geo3 = geometry3.clone()
  geo3.scale(...scale3)
  const vertices3 = Array.from(geo3.attributes.position.array as Float32Array)
  const indices3 = geo3.index ? Array.from(geo3.index.array as Uint32Array) : []
  const [ref3] = useTrimesh(() => ({ type: 'Static', args: [vertices3, indices3], position: position3, rotation: rotation3 }))

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref1}
        geometry={nodes.Plane014.geometry}
        material={materials['Material.118']}
        position={position1}
        rotation={rotation1}
        scale={scale1}
        castShadow
        receiveShadow
      />
      <mesh
        ref={ref2}
        geometry={nodes.Plane015.geometry}
        material={materials['Material.118']}
        position={position2}
        rotation={rotation2}
        scale={scale2}
        castShadow
        receiveShadow
      />
      <mesh
        ref={ref3}
        geometry={nodes.Plane011.geometry}
        material={materials['Material.118']}
        position={position3}
        rotation={rotation3}
        scale={scale3}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('models/pisos/pisoCesped6.glb')
