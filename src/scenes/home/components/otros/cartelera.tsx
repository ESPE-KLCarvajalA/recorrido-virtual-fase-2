import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef, useEffect } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    WindowFrane006: THREE.Mesh
    WindowFrane006_1: THREE.Mesh
    WindowFrane006_2: THREE.Mesh
    WindowFrane006_3: THREE.Mesh
  }
  materials: {
    ['Material.060']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['Material.084']: THREE.MeshStandardMaterial
  }
}

const transforms = [
  {
    position: [-32.7, 30, 44.923],
    rotation: [0, 0, 0],
    scale: [1,1,1]
  },
  {
    position: [-241.911, 30, -386.61],
    rotation: [0,0, 0],
    scale: [1,1,1]
  }
]

export function Cartelera(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/otros/cartelera.glb') as unknown as GLTFResult

  const ref1 = useRef<THREE.InstancedMesh>(null)
  const ref2 = useRef<THREE.InstancedMesh>(null)
  const ref3 = useRef<THREE.InstancedMesh>(null)
  const ref4 = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    transforms.forEach((transform, i) => {
      const matrix = new THREE.Matrix4()
      const pos = new THREE.Vector3(...transform.position)
      const rot = new THREE.Euler(...transform.rotation)
      const scl = new THREE.Vector3(...transform.scale)
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scl)

      ref1.current?.setMatrixAt(i, matrix)
      ref2.current?.setMatrixAt(i, matrix)
      ref3.current?.setMatrixAt(i, matrix)
      ref4.current?.setMatrixAt(i, matrix)
    })

    for (const ref of [ref1, ref2, ref3, ref4]) {
      if (ref.current) {
        ref.current.frustumCulled = false
        ref.current.instanceMatrix.needsUpdate = true
      }
    }
  }, [])

  return (
    <group {...props} dispose={null}>
      {/* Cartelera individual original */}
      <group name="WindowFrame040" position={[30.118, 30, 43.065]}>
        <mesh geometry={nodes.WindowFrane006.geometry} material={materials['Material.060']} />
        <mesh geometry={nodes.WindowFrane006_1.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.WindowFrane006_2.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.WindowFrane006_3.geometry} material={materials['Material.084']} />
      </group>

      {/* Instanciadas */}
      <instancedMesh
        ref={ref1}
        args={[undefined, undefined, transforms.length]}
        geometry={nodes.WindowFrane006.geometry}
        material={materials['Material.060']}
      />
      <instancedMesh
        ref={ref2}
        args={[undefined, undefined, transforms.length]}
        geometry={nodes.WindowFrane006_1.geometry}
        material={materials['Material.015']}
      />
      <instancedMesh
        ref={ref3}
        args={[undefined, undefined, transforms.length]}
        geometry={nodes.WindowFrane006_2.geometry}
        material={materials['Material.036']}
      />
      <instancedMesh
        ref={ref4}
        args={[undefined, undefined, transforms.length]}
        geometry={nodes.WindowFrane006_3.geometry}
        material={materials['Material.084']}
      />
    </group>
  )
}

useGLTF.preload('models/otros/cartelera.glb')
