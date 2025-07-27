import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useRef, useEffect } from 'react'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


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
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/cartelera.glb') as unknown as GLTFResult

  const ref1 = useRef<THREE.InstancedMesh>(null)
  const ref2 = useRef<THREE.InstancedMesh>(null)
  const ref3 = useRef<THREE.InstancedMesh>(null)
  const ref4 = useRef<THREE.InstancedMesh>(null)

  useEffect(() => {
    for (let i = 0; i < transforms.length; i++) {
      const t = transforms[i]
      const matrix = new THREE.Matrix4()
      const pos = new THREE.Vector3(...t.position)
      const rot = new THREE.Euler(...t.rotation)
      const scl = new THREE.Vector3(...t.scale)
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scl)

      if (ref1.current) ref1.current.setMatrixAt(i, matrix)
      if (ref2.current) ref2.current.setMatrixAt(i, matrix)
      if (ref3.current) ref3.current.setMatrixAt(i, matrix)
      if (ref4.current) ref4.current.setMatrixAt(i, matrix)
    }

    for (const ref of [ref1, ref2, ref3, ref4]) {
      if (ref.current) {
        ref.current.instanceMatrix.needsUpdate = true
        ref.current.frustumCulled = false
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
        geometry={nodes.WindowFrane006.geometry}
        material={materials['Material.060']}
        count={transforms.length}
      />
      <instancedMesh
        ref={ref2}
        geometry={nodes.WindowFrane006_1.geometry}
        material={materials['Material.015']}
        count={transforms.length}
      />
      <instancedMesh
        ref={ref3}
        geometry={nodes.WindowFrane006_2.geometry}
        material={materials['Material.036']}
        count={transforms.length}
      />
      <instancedMesh
        ref={ref4}
        geometry={nodes.WindowFrane006_3.geometry}
        material={materials['Material.084']}
        count={transforms.length}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/cartelera.glb')
