import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Seat: THREE.Mesh
    Base: THREE.Mesh
  }
  materials: {
    ['Dark metal']: THREE.MeshStandardMaterial
    ['Frozen white metal']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
}

export function SillasLab() {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/sillas/sillaLab.glb') as unknown as GLTFResult

  const seatRef = useRef<THREE.InstancedMesh>(null)
  const baseRef = useRef<THREE.InstancedMesh>(null)

  const seatInstances: InstanceData[] = [
    { position: [6.856, 9.4, -340.743], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [95.993, 9.4, -137.682], rotation: [Math.PI,  0, Math.PI], scale: [1, 1, 1] },
    { position: [60.333, 9.4, -137.682], rotation: [Math.PI , 0, Math.PI], scale: [1, 1, 1] },
    { position: [-23.349, 9.4, -143.068], rotation: [Math.PI/2 , 1.5, -Math.PI /2], scale: [1, 1, 1] },
    { position: [-23.349, 9.4, -179.029], rotation: [Math.PI/2 ,1.5, -Math.PI / 2], scale: [1, 1, 1] },
    { position: [158.161, 9.4, -324.046], rotation: [Math.PI/2 , -1.5, Math.PI / 2], scale: [1, 1, 1] }
  ]

  const baseInstances: InstanceData[] = [
    { position: [19.23, -2, -338.555], rotation: [0, 0, 0], scale: [23.579, 23.579, 23.579] },
    { position: [83.618, -2, -139.896], rotation: [0, 0, 0], scale: [23.579, 23.579, 23.579] },
    { position: [47.959, -2, -139.896], rotation: [0, 0, 0], scale: [23.579, 23.579, 23.579] },
    { position: [-21.135, -2, -155.442], rotation: [0, Math.PI / 2, 0], scale: [23.579, 23.579, 23.579] },
    { position: [-21.135, -2, -191.403], rotation: [0, Math.PI / 2, 0], scale: [23.579, 23.579, 23.579] },
    { position: [155.947, -2, -311.672], rotation: [0, -Math.PI / 2, 0], scale: [23.579, 23.579, 23.579] }
  ];
  

  useEffect(() => {
    seatInstances.forEach((data, i) => {
      const matrix = new THREE.Matrix4()
      matrix.compose(
        new THREE.Vector3(...data.position),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(...data.rotation)),
        new THREE.Vector3(...data.scale)
      )
      seatRef.current?.setMatrixAt(i, matrix)
    })

    baseInstances.forEach((data, i) => {
      const matrix = new THREE.Matrix4()
      matrix.compose(
        new THREE.Vector3(...data.position),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(...data.rotation)),
        new THREE.Vector3(...data.scale)
      )
      baseRef.current?.setMatrixAt(i, matrix)
    })

    seatRef.current!.instanceMatrix.needsUpdate = true
    baseRef.current!.instanceMatrix.needsUpdate = true
    seatRef.current!.frustumCulled = false
    baseRef.current!.frustumCulled = false
  }, [])

  return (
    <group>
      <instancedMesh
        ref={seatRef}
        args={[null, null, seatInstances.length]}
        geometry={nodes.Seat.geometry}
        material={materials['Dark metal']}
      />
      <instancedMesh
        ref={baseRef}
        args={[null, null, baseInstances.length]}
        geometry={nodes.Base.geometry}
        material={materials['Frozen white metal']}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/sillas/sillaLab.glb')
