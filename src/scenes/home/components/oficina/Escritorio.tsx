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
    ['Material.016']: THREE.MeshStandardMaterial
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
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/escritorio2.glb'
  ) as unknown as GLTFResult

  const ref1 = useRef<THREE.InstancedMesh>(null)
  const ref2 = useRef<THREE.InstancedMesh>(null)
  const ref3 = useRef<THREE.InstancedMesh>(null)

  const instances: InstanceData[] = [
    
    { position: [83.625, 9, -40.022], rotation: [0,0,0], scale: [1,1,1] },
    { position: [83.354, 9, -83.582], rotation: [0, Math.PI, 0], scale: [1,1,1] },

    { position: [116.144, 9, -26.286], rotation: [0,-Math.PI/2 ,0], scale: [1,1,1] },
      { position: [282.262, 9, -146.118], rotation: [0,0,0], scale: [1,1,1] },

      { position: [-52.641, 9, -15.636], rotation: [0,0,0], scale: [1,1,1] }
    
    
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
        <meshStandardMaterial {...materials['Material.016']} />
      </instancedMesh>
      <instancedMesh ref={ref3} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes['Wooden_table_office-01002_3'].geometry} />
        <meshStandardMaterial {...materials['Material.211']} />
      </instancedMesh>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/escritorio2.glb')
