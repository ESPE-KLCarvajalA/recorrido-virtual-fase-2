import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useEffect, useRef } from 'react'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    ['2__1_-removebg-preview']: THREE.Mesh
  }
  materials: {
    ['2__1_-removebg-preview']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
}

export function Palma() {
  const { nodes, materials } = useGLTF(
      'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/palma.glb'
  ) as unknown as GLTFResult

  const instancedRef = useRef<THREE.InstancedMesh>(null)

  const instances: InstanceData[] = [
    { position: [-303.948,7, -330.415], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-303.948,7, -431.053], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-308.25, 7, -82.042], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-299.473,7, -622.537], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-299.473,7, -787.342], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-9.968,  7, -764.204], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-9.968,  7, -657.544], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [-9.404,  7, -545.241], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [101.206, 7, -544.677], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [77.504,  7, -656.98], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [175.134, 7, -544.677], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [443.346, 7, -197.827], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [533.218, 7, -129.019], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [448.963, 7, -54.593], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 },
    { position: [342.24,  7, -34.934], rotation: [Math.PI / 2, 0, -Math.PI / 2], scale: 34.105 }
  ]

  useEffect(() => {
    instances.forEach((instance, i) => {
      const matrix = new THREE.Matrix4()
      matrix.compose(
        new THREE.Vector3(...instance.position),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(...instance.rotation)),
        new THREE.Vector3(instance.scale, instance.scale, instance.scale)
      )
      instancedRef.current!.setMatrixAt(i, matrix)
    })

    if (instancedRef.current) {
      instancedRef.current.instanceMatrix.needsUpdate = true
      instancedRef.current.frustumCulled = false
    }
  }, [instances])

  return (
    <instancedMesh ref={instancedRef} args={[null, null, instances.length]}>
      <bufferGeometry attach="geometry" {...nodes['2__1_-removebg-preview'].geometry} />
      <meshStandardMaterial attach="material" {...materials['2__1_-removebg-preview']} />
    </instancedMesh>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/palma.glb')
