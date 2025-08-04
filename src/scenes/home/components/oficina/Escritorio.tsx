import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Wooden_table_office-01002_1']: THREE.Mesh
    ['Wooden_table_office-01002_2']: THREE.Mesh
    ['Wooden_table_office-01002_3']: THREE.Mesh
  }
  materials: {
    ['Material.209']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.211']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
}

export function Escritorio() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/escritorio.glb'
  ) as unknown as GLTFResult

  const ref1 = useRef<THREE.InstancedMesh>(null)
  const ref2 = useRef<THREE.InstancedMesh>(null)
  const ref3 = useRef<THREE.InstancedMesh>(null)

  const instances: InstanceData[] = [
    
      { position: [282.262, 10.037, -146.118], rotation: [Math.PI, 0, Math.PI], scale: [34.258, 34.258, 34.258] },
      { position: [116.144, 10.037, -26.286], rotation: [0, 1.571, 0], scale: [34.258, 34.258, 34.258] },
      { position: [83.625, 10.74, -40.022], rotation: [Math.PI, 0, Math.PI], scale: [23.818, 23.818, 23.818] },
      { position: [83.354, 9.285, -83.582], rotation: [0, 0, 0], scale: [30.779, 30.779, 30.779] },
      { position: [-52.641, 9.285, -15.636], rotation: [Math.PI, 0, Math.PI], scale: [30.779, 30.779, 30.779] }
  
  ]

  useEffect(() => {
    instances.forEach((instance, i) => {
      const pos = new THREE.Vector3(...instance.position)
      const rot = new THREE.Euler(...instance.rotation)
      const scl = new THREE.Vector3(...instance.scale)
      const matrix = new THREE.Matrix4()
      matrix.compose(pos, new THREE.Quaternion().setFromEuler(rot), scl)

      ref1.current!.setMatrixAt(i, matrix)
      ref2.current!.setMatrixAt(i, matrix)
      ref3.current!.setMatrixAt(i, matrix)

      ref1.current!.frustumCulled = false
      ref2.current!.frustumCulled = false
      ref3.current!.frustumCulled = false
    })

    ref1.current!.instanceMatrix.needsUpdate = true
    ref2.current!.instanceMatrix.needsUpdate = true
    ref3.current!.instanceMatrix.needsUpdate = true
  }, [instances])

  return (
    <group>
      <instancedMesh ref={ref1} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes['Wooden_table_office-01002_1'].geometry} />
        <meshStandardMaterial {...materials['Material.209']} />
      </instancedMesh>
      <instancedMesh ref={ref2} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes['Wooden_table_office-01002_2'].geometry} />
        <meshStandardMaterial {...materials['Material.013']} />
      </instancedMesh>
      <instancedMesh ref={ref3} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes['Wooden_table_office-01002_3'].geometry} />
        <meshStandardMaterial {...materials['Material.211']} />
      </instancedMesh>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/escritorio.glb')
