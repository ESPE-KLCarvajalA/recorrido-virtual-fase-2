import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['a-c_chigo-removebg-preview002']: THREE.Mesh
    ['a-c_chigo-removebg-preview002_1']: THREE.Mesh
  }
  materials: {
    ['a-c_chigo-removebg-preview.002']: THREE.MeshStandardMaterial
    ['Material.100']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
}

export function Acondicionador() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/ac.glb'
  ) as unknown as GLTFResult

  const ref1 = useRef<THREE.InstancedMesh>(null)
  const ref2 = useRef<THREE.InstancedMesh>(null)

  const instances: InstanceData[] = [
    
        { position: [-2.157, 49.189, -343.718], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-161.426, 52.446, -0.432], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-98.971, 43.07, -269.681], rotation: [-1.571, 0, -1.571], scale: [1,1,1] },
        { position: [271.264, 59.096, -128.451], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [242.324, 62.203, -65.241], rotation: [-1.571, 0, -1.571], scale: [1,1,1] },
        { position: [-443.095, 52.763, -929.897], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-510.338, 54.361, -494.021], rotation: [-1.571, 0, 1.571], scale: [1,1,1] },
        { position: [-741.364, 41.52, -376.113], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-805.394, 41.52, -376.113], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-707.17, 70.216, -7.389], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-664.689, 40.563, 124.603], rotation: [-1.571, 0, 0], scale: [1,1,1] },
        { position: [-785.387, 64.015, -291.593], rotation: [-1.571, 0, 0], scale: [1,1,1] },
        { position: [-765.337, 39.877, 254.955], rotation: [-1.571, 0, -3.142], scale: [1,1,1] },
        { position: [-220.534, 52.763, -791.58], rotation: [-1.571, 0, 1.571], scale: [1,1,1] },
        { position: [-507.497, 54.361, -776.247], rotation: [-1.571, 0, 1.571], scale: [1,1,1] }
      
      

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

      ref1.current!.frustumCulled = false
      ref2.current!.frustumCulled = false
    })

    ref1.current!.instanceMatrix.needsUpdate = true
    ref2.current!.instanceMatrix.needsUpdate = true
  }, [instances])

  return (
    <group>
      <instancedMesh ref={ref1} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes['a-c_chigo-removebg-preview002'].geometry} />
        <meshStandardMaterial {...materials['a-c_chigo-removebg-preview.002']} />
      </instancedMesh>
      <instancedMesh ref={ref2} args={[null, null, instances.length]}>
        <bufferGeometry {...nodes['a-c_chigo-removebg-preview002_1'].geometry} />
        <meshStandardMaterial {...materials['Material.100']} />
      </instancedMesh>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/ac.glb')
