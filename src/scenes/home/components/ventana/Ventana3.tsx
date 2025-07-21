import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WindowL005: THREE.Mesh
    WindowL005_1: THREE.Mesh
  }
  materials: {
    ['Material.099']: THREE.MeshPhysicalMaterial
    ['Material.098']: THREE.MeshStandardMaterial
  }
}

type InstanceData = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
}

export function Ventana3() {
  const { nodes, materials } = useGLTF(
    'https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana8Vertices.glb'
  ) as unknown as GLTFResult

  const WindowL005 = useRef<THREE.InstancedMesh>(null)
  const WindowL005_1 = useRef<THREE.InstancedMesh>(null)

  const instances: InstanceData[] = [
    { position: [240.26, 34, -94.596], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [240.258, 34, -35.451], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [309.261, 32, -167.015], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [309.261, 32, -230.993], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [309.261, 32, -305.12], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [309.261, 32, -368.611], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [274.432, 32, -408.267], rotation: [0, 1.63, 0], scale: [1, 1, 1] },
    { position: [201.334, 32, -476.457], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { position: [144.435, 34.252, -476.642], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { position: [54.775, 32, -476.477], rotation: [0, -1.57, 0], scale: [1, 1, 1] },
    { position: [-31.235, 32, -443.202], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [16.355, 37, -345], rotation: [0, 1.57, 0], scale: [0.5, 0.1, 0.32] },
    { position: [167.037, 41, -315.864], rotation: [0, 0, 0], scale: [1, 0.6, 0.69] },
    { position: [167.037, 41.3, -230.96], rotation: [0, 0, 0], scale: [1, 0.56, 1.1] },
    { position: [65.292, 31, -130.052], rotation: [0, 1.57, 0], scale: [1, 1.1, 1] },
    { position: [65.292, 35, -1.18], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { position: [-95.089, 34, -103.401], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { position: [-31.588, 30, -172.574], rotation: [0, 0, 0], scale: [1, 1.5, 1.23] },
    { position: [-100.11, 52, -322.591], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { position: [-100.11, 52, -386.439], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { position: [-100.11, 52, -452.282], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { position: [-239.405, 55, -452.215], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { position: [-239.405, 55, -386.8], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { position: [-239.405, 55, -322.361], rotation: [0, 0, 0], scale: [1, 1.2, 1.04] },
    { position: [-239.565, 33, -87.474], rotation: [0, 0, 0], scale: [1, 1, 0.9] },
    { position: [-199.212, 35, -1.768], rotation: [0, 1.571, 0], scale: [1, 1.2, 1] },
    { position: [-74.673, 35, -1.825], rotation: [0, 1.57, 0], scale: [1, 1.2, 1.04] },
    { position: [-445.361, 53, -31.28], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-677.887, 40, -8.14], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-736.969, 40, -8.065], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-824.916, 40, -8.065], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-506, 26.9, -493], rotation: [-3.15, 3.1, -0], scale: [1, 1.15, 0.35] },
    { position: [-511, 26.9, -479], rotation: [-0.012, 2.4, -0], scale: [1, 1.15, 0.38] },
    { position: [-504.788, 28, -775.368], rotation: [-3.15, 3.1, -0], scale: [1, 1.25, 0.35] },
    { position: [-508.899, 27.5, -762.588], rotation: [-0.012, 2.4, -0], scale: [1, 1.22, 0.38] },
    { position: [-573.043, 36.5, -413.5], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-569.879, 36.7, -690.823], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-701.732, 35, -403.741], rotation: [0, 0, 0], scale: [1, 0.9, 0.8] },
    { position: [-721.288, 35, -482.914], rotation: [0, 0, 0], scale: [1, 1, 0.8] },
    { position: [-844.582, 36, -409.664], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-824.801, 26, 159.244], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-824, 26, 223.6], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-551.912, 25, 113.974], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-626.035, 25, 134.84], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-698.228, 29, 126.415], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-785.539, 29, 126.415], rotation: [0, 1.57, 0], scale: [1, 0.9, 0.5] },
    { position: [-854.965, 45, -183.902], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-789.623, 42, -117.321], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-796.093, 25, 253.954], rotation: [0, 1.57, 0], scale: [1, 1, 0.9] },
    { position: [-733, 25, 252.989], rotation: [0, 1.57, 0], scale: [1, 1, 0.9] },
    { position: [-666.1, 25, 252.997], rotation: [0, 1.57, 0], scale: [1, 1, 0.9] },
    { position: [-559, 25, 252.991], rotation: [0, 1.57, 0], scale: [1, 1, 0.9] },
  
    { position: [-495, 39, -365], rotation: [-Math.PI, -0.9, -Math.PI], scale: [1, 0.5, 0.3] },
    { position: [-481.194, 39, -361], rotation: [-Math.PI, 1.57, -Math.PI], scale: [1, 0.5, 0.4] },
    { position: [-456.901, 39, -360.674], rotation: [-Math.PI, 1.57, -Math.PI], scale: [1, 0.5, 0.365] },
    { position: [-443.518, 39, -366.5], rotation: [-Math.PI, 0.8, -Math.PI], scale: [1, 0.5, 0.38] },
  
    { position: [-490.128, 39, -646.427], rotation: [-Math.PI, -0.9, -Math.PI], scale: [1, 0.6, 0.35] },
    { position: [-476.878, 39, -641.029], rotation: [-Math.PI, 1.57, -Math.PI], scale: [1, 0.6, 0.35] },
    { position: [-454.714, 40, -641.002], rotation: [-Math.PI, 1.57, -Math.PI], scale: [1, 0.6, 0.365] },
    { position: [-441.331, 40, -645.885], rotation: [-Math.PI, 0.8, -Math.PI], scale: [1, 0.6, 0.38] },
  
    { position: [-470.509, 42.975, -803.756], rotation: [0, 1.57, 0], scale: [1, 0.5, 0.5] },
    { position: [-472.194, 43, -523.783], rotation: [0, 1.57, 0], scale: [1, 0.5, 0.5] },
  
    { position: [-843.734, 39.847, -473.953], rotation: [0, 0, 0], scale: [1, 0.65, 0.55] },
    { position: [-713.943, 41, -559.961], rotation: [0, 0, 0], scale: [1, 0.45, 0.55] },
  
    { position: [-219.983, 44, -825.995], rotation: [0, 0, 0], scale: [1, 0.3, 0.55] },
    { position: [-104.46, 40.5, -753.116], rotation: [0, 0, 0], scale: [1, 0.6, 0.55] },
    { position: [-445.19, 49.586, -127.051], rotation: [0, 0, 0], scale: [1, 0.6, 0.5] },
  
    { position: [-609.373, 35, 253.288], rotation: [0, 1.57, 0], scale: [1, 0.3, 0.5] },
  
    { position: [-509.74, 61, -8.257], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-583.769, 60, -8.257], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
  
    { position: [-844.582, 35.5, -540.4], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-368.974, 36.5, -691.607], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-230.304, 34, -671], rotation: [0, 0, 0], scale: [1, 1.1, 0.95] },
    { position: [-211.403, 32, -743.754], rotation: [0, 0, 0], scale: [1, 0.9, 0.8] },
    { position: [-104.53, 34.5, -683.326], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-104.53, 34.5, -822.501], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-368.974, 36.5, -764.226], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-374.808, 36.154, -962.932], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-374.808, 36.143, -1027.517], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-405.538, 35.48, -931.418], rotation: [0, 1.57, 0], scale: [1, 1.2, 1] },
    { position: [-520.084, 36.335, -931.418], rotation: [0, 1.57, 0], scale: [1, 1.1, 1] },
    { position: [-372.04, 36.5, -475], rotation: [0, 0, 0], scale: [1, 1.1, 1.1] },
    { position: [-809.429, 38, -922.603], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-743.933, 38, -922.603], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-713.37, 37, -888.392], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-713.37, 38.5, -773.904], rotation: [0, 0, 0], scale: [1, 1.1, 1] },
    { position: [-744.433, 36.624, -661.652], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-806.474, 37.601, -661.652], rotation: [0, 1.57, 0], scale: [1, 1, 1] },
    { position: [-841.912, 37, -760.785], rotation: [0, 0, 0], scale: [1, 1, 0.8] }
  
  ]

  useEffect(() => {
    instances.forEach((instance, i) => {
      const matrix = new THREE.Matrix4()
      matrix.compose(
        new THREE.Vector3(...instance.position),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(...instance.rotation)),
        new THREE.Vector3(...instance.scale)
      )

      WindowL005.current!.setMatrixAt(i, matrix)
      WindowL005_1.current!.setMatrixAt(i, matrix)
    })

    WindowL005.current!.instanceMatrix.needsUpdate = true
    WindowL005_1.current!.instanceMatrix.needsUpdate = true

    WindowL005.current!.frustumCulled = false
    WindowL005_1.current!.frustumCulled = false
  }, [instances])

  return (
    <group>
      <instancedMesh ref={WindowL005} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.WindowL005.geometry} />
        <meshPhysicalMaterial attach="material" {...materials['Material.099']} />
      </instancedMesh>
      <instancedMesh ref={WindowL005_1} args={[null, null, instances.length]}>
        <bufferGeometry attach="geometry" {...nodes.WindowL005_1.geometry} />
        <meshStandardMaterial attach="material" {...materials['Material.098']} />
      </instancedMesh>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana8Vertices.glb')
