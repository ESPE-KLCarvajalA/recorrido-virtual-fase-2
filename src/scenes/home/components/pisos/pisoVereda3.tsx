import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane098: THREE.Mesh
    Plane098_1: THREE.Mesh
    Plane034: THREE.Mesh
    Plane034_1: THREE.Mesh
    Plane092: THREE.Mesh
    Plane092_1: THREE.Mesh
    Plane046: THREE.Mesh
    Plane046_1: THREE.Mesh
    Plane044: THREE.Mesh
    Plane044_1: THREE.Mesh
    Plane002: THREE.Mesh
    Plane002_1: THREE.Mesh
    Plane030: THREE.Mesh
    Plane030_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda3.glb') as unknown as GLTFResult

  const colliderPosition: [number, number, number] = [0, 0, 0]
  const geometriesToCombine: THREE.BufferGeometry[] = []

  const matrix = new THREE.Matrix4()

  const processGroup = (
    meshName1: keyof GLTFResult['nodes'],
    meshName2: keyof GLTFResult['nodes'] | null,
    position: [number, number, number],
    rotation: [number, number, number],
    scale: [number, number, number]
  ) => {
    const transform = matrix.compose(
      new THREE.Vector3(...position),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),
      new THREE.Vector3(...scale)
    )

    const meshes: (keyof GLTFResult['nodes'] | null)[] = [meshName1, meshName2]
    meshes.forEach((name) => {
      if (name) {
        const geo = (nodes[name] as THREE.Mesh).geometry.clone()
        if (!geo.index) geo.setIndex([...Array(geo.attributes.position.count).keys()])
        geo.applyMatrix4(transform)
        geo.computeVertexNormals()
        geometriesToCombine.push(geo)
      }
    })
  }

  processGroup('Plane098', 'Plane098_1', [-179.37, -0.481, -956.117], [-Math.PI, 0.878, 0], [-11.8, -11.258, -8.549])
  processGroup('Plane034', 'Plane034_1', [-161.657, -1.347, -1044.02], [0, 1.369, 0], [20.946, 11.258, 3.726])
  processGroup('Plane092', 'Plane092_1', [-556.531, -1.325, -1034.446], [0, 0.002, 0], [5.09, 11.258, 10.385])
  processGroup('Plane046', 'Plane046_1', [-349.967, -1.699, -973.712], [Math.PI, -0.002, Math.PI], [5.09, 11.258, 16.479])
  processGroup('Plane044', 'Plane044_1', [-151.045, -0.924, -917.661], [0, -1.568, 0], [5.09, 11.258, 13.307])
  processGroup('Plane002', 'Plane002_1', [-243.986, -1.699, -891.281], [0, 0.002, 0], [5.09, 11.258, 4.638])
  processGroup('Plane030', 'Plane030_1', [-284.652, -1.699, -874.314], [0, -1.568, 0], [5.09, 11.258, 8.961])

  const totalVertices = geometriesToCombine.reduce((sum, geo) => sum + geo.attributes.position.count, 0)
  const totalIndices = geometriesToCombine.reduce((sum, geo) => sum + (geo.index?.count || 0), 0)

  const combinedVertices = new Float32Array(totalVertices * 3)
  const combinedIndices = new Uint32Array(totalIndices)

  let vertexOffset = 0
  let indexOffset = 0

  geometriesToCombine.forEach((geo) => {
    const posAttr = geo.attributes.position.array as Float32Array
    const idxAttr = geo.index!.array as Uint16Array | Uint32Array

    combinedVertices.set(posAttr, vertexOffset * 3)

    for (let i = 0; i < idxAttr.length; i++) {
      combinedIndices[indexOffset + i] = idxAttr[i] + vertexOffset
    }

    vertexOffset += posAttr.length / 3
    indexOffset += idxAttr.length
  })

  const [ref] = useTrimesh(() => ({
    mass: 0,
    args: [combinedVertices, combinedIndices],
    position: colliderPosition
  }))

  return (
    <group {...props} dispose={null} ref={ref}>
      <group name="curb004" position={[-179.37, -0.481, -956.117]} rotation={[-Math.PI, 0.878, 0]} scale={[-11.8, -11.258, -8.549]}>
        <mesh geometry={nodes.Plane098.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane098_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
      <group name="curb008" position={[-161.657, -1.347, -1044.02]} rotation={[0, 1.369, 0]} scale={[20.946, 11.258, 3.726]}>
        <mesh geometry={nodes.Plane034.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane034_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
      <group name="road006" position={[-556.531, -1.325, -1034.446]} rotation={[0, 0.002, 0]} scale={[5.09, 11.258, 10.385]}>
        <mesh geometry={nodes.Plane092.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane092_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
      <group name="road012" position={[-349.967, -1.699, -973.712]} rotation={[Math.PI, -0.002, Math.PI]} scale={[5.09, 11.258, 16.479]}>
        <mesh geometry={nodes.Plane046.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane046_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
      <group name="road019" position={[-151.045, -0.924, -917.661]} rotation={[0, -1.568, 0]} scale={[5.09, 11.258, 13.307]}>
        <mesh geometry={nodes.Plane044.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane044_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
      <group name="road020" position={[-243.986, -1.699, -891.281]} rotation={[0, 0.002, 0]} scale={[5.09, 11.258, 4.638]}>
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
      <group name="road021" position={[-284.652, -1.699, -874.314]} rotation={[0, -1.568, 0]} scale={[5.09, 11.258, 8.961]}>
        <mesh geometry={nodes.Plane030.geometry} material={materials['Material.114']} castShadow receiveShadow />
        <mesh geometry={nodes.Plane030_1.geometry} material={materials['Material.116']} castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoVereda3.glb')
