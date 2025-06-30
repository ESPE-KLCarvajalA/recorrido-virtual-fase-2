
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'



type GLTFResult = GLTF & {
    nodes: {
      Plane007: THREE.Mesh
      Plane004: THREE.Mesh
      Circle101: THREE.Mesh
      Circle102: THREE.Mesh
      Circle103: THREE.Mesh
      Circle105: THREE.Mesh
      Circle106: THREE.Mesh
      Cube045: THREE.Mesh
      Cube047: THREE.Mesh
      Cube048: THREE.Mesh
      Cube049: THREE.Mesh
      Cube050: THREE.Mesh
      Cube005: THREE.Mesh
      Cube006: THREE.Mesh
      Cube007: THREE.Mesh
      Cube008: THREE.Mesh
      Cube009: THREE.Mesh
      Cube034: THREE.Mesh
      Cube037: THREE.Mesh
      Cube038: THREE.Mesh
      Cube039: THREE.Mesh
      Cube040: THREE.Mesh
      Cube041: THREE.Mesh
      Cube057: THREE.Mesh
      Cube058: THREE.Mesh
      Cube059: THREE.Mesh
      Cube060: THREE.Mesh
      Cylinder001: THREE.Mesh
      Cylinder074: THREE.Mesh
      Cube061: THREE.Mesh
      Torus005: THREE.Mesh
      Torus007: THREE.Mesh
    }
    materials: {
      ['Material.004']: THREE.MeshStandardMaterial
      ['Material.122']: THREE.MeshStandardMaterial
      ['Material.018']: THREE.MeshStandardMaterial
      ['Material.017']: THREE.MeshStandardMaterial
      ['Material.016']: THREE.MeshStandardMaterial
      ['Material.040']: THREE.MeshStandardMaterial
      ['Material.014']: THREE.MeshStandardMaterial
      ['Material.012']: THREE.MeshStandardMaterial
      ['Material.011']: THREE.MeshStandardMaterial
      ['Material.010']: THREE.MeshStandardMaterial
      ['Material.123']: THREE.MeshStandardMaterial
      ['Material.008']: THREE.MeshStandardMaterial
      ['White.002']: THREE.MeshStandardMaterial
      ['Material.013']: THREE.MeshStandardMaterial
      ['glass frosted']: THREE.MeshStandardMaterial
      ['Material.007']: THREE.MeshStandardMaterial
      ['Material.024']: THREE.MeshStandardMaterial
      ['Material.003']: THREE.MeshStandardMaterial
      ['Material.002']: THREE.MeshStandardMaterial
    }
  }

export function Cancha(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/cancha/cancha.glb') as unknown as GLTFResult
 
  // Datos de Plane004
  const geometry = nodes.Plane004.geometry
  const position: [number, number, number] = [104.551, -0.857, -949.428]
  const rotation: [number, number, number] = [0, 0, 0]

  const vertices = Array.from(geometry.attributes.position.array as Float32Array)
  const indices = geometry.index ? Array.from(geometry.index.array as Uint16Array | Uint32Array) : []

  const [] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position,
    rotation,
  }))

 
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane007"
        geometry={nodes.Plane007.geometry}
        material={materials['Material.004']}
        position={[104.551, 1.11, -949.428]}
      />
      <mesh
        name="Plane004"
        geometry={nodes.Plane004.geometry}
        material={materials['Material.122']}
        position={[104.551, -1, -949.428]}
      />
      <mesh
        name="Circle101"
        geometry={nodes.Circle101.geometry}
        material={materials['Material.018']}
        position={[206.529, 1.338, -838.351]}
      />
      <mesh
        name="Circle102"
        geometry={nodes.Circle102.geometry}
        material={materials['Material.017']}
        position={[211.635, 1.207, -834.527]}
      />
      <mesh
        name="Circle103"
        geometry={nodes.Circle103.geometry}
        material={materials['Material.016']}
        position={[-2.534, 1.207, -1064.33]}
      />
      <mesh
        name="Circle105"
        geometry={nodes.Circle105.geometry}
        material={materials['Material.040']}
        position={[10.242, 1.338, -1050.66]}
      />
      <mesh
        name="Circle106"
        geometry={nodes.Circle106.geometry}
        material={materials['Material.014']}
        position={[104.551, 1.338, -949.428]}
      />
      <mesh
        name="Cube045"
        geometry={nodes.Cube045.geometry}
        material={materials['Material.012']}
        position={[14.905, 1.328, -1045.604]}
      />
      <mesh
        name="Cube047"
        geometry={nodes.Cube047.geometry}
        material={materials['Material.011']}
        position={[104.129, 1.328, -949.881]}
      />
      <mesh
        name="Cube048"
        geometry={nodes.Cube048.geometry}
        material={materials['Material.010']}
        position={[44.488, 1.098, -893.452]}
      />
      <mesh name="Cube049" geometry={nodes.Cube049.geometry} material={materials['Material.123']} />
      <mesh
        name="Cube050"
        geometry={nodes.Cube050.geometry}
        material={materials['Material.008']}
        position={[104.551, 1.099, -949.428]}
      />
      <mesh
        name="Cube005"
        geometry={nodes.Cube005.geometry}
        material={materials['Material.122']}
        position={[-63.473, 40.685, -1129.719]}
      />
      <mesh
        name="Cube006"
        geometry={nodes.Cube006.geometry}
        material={materials['Material.122']}
        position={[-63.395, 32.919, -1129.602]}
      />
      <mesh
        name="Cube007"
        geometry={nodes.Cube007.geometry}
        material={materials['Material.122']}
        position={[277.996, 20.221, -763.321]}
      />
      <mesh
        name="Cube008"
        geometry={nodes.Cube008.geometry}
        material={materials['Material.122']}
        position={[272.997, 32.919, -768.718]}
      />
      <mesh
        name="Cube009"
        geometry={nodes.Cube009.geometry}
        material={materials['Material.122']}
        position={[273.075, 40.685, -768.601]}
      />
      <mesh
        name="Cube034"
        geometry={nodes.Cube034.geometry}
        material={materials['Material.122']}
        position={[-68.394, 20.221, -1134.999]}
      />
      <mesh
        name="Cube037"
        geometry={nodes.Cube037.geometry}
        material={materials['White.002']}
        position={[-56.729, 47.545, -1122.482]}
      />
      <mesh
        name="Cube038"
        geometry={nodes.Cube038.geometry}
        material={materials['White.002']}
        position={[-56.729, 49.827, -1122.482]}
      />
      <mesh
        name="Cube039"
        geometry={nodes.Cube039.geometry}
        material={materials['Material.013']}
        position={[-55.808, 43.084, -1121.495]}
      />
      <mesh
        name="Cube040"
        geometry={nodes.Cube040.geometry}
        material={materials['White.002']}
        position={[-57.19, 49.827, -1122.976]}
      />
      <mesh
        name="Cube041"
        geometry={nodes.Cube041.geometry}
        material={materials['glass frosted']}
        position={[-57.41, 49.827, -1123.163]}
        rotation={[0, 0.105, 0]}
        scale={[1, 0.899, 0.809]}
      />
      <mesh
        name="Cube057"
        geometry={nodes.Cube057.geometry}
        material={materials['White.002']}
        position={[266.331, 47.545, -775.838]}
      />
      <mesh
        name="Cube058"
        geometry={nodes.Cube058.geometry}
        material={materials['White.002']}
        position={[266.331, 49.827, -775.838]}
      />
      <mesh
        name="Cube059"
        geometry={nodes.Cube059.geometry}
        material={materials['Material.007']}
        position={[265.41, 43.084, -776.826]}
      />
      <mesh
        name="Cube060"
        geometry={nodes.Cube060.geometry}
        material={materials['Material.024']}
        position={[266.792, 49.827, -775.344]}
      />
      <mesh
        name="Cylinder001"
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.122']}
        position={[272.513, 45.687, -769.055]}
      />
      <mesh
        name="Cylinder074"
        geometry={nodes.Cylinder074.geometry}
        material={materials['Material.122']}
        position={[-62.911, 45.687, -1129.266]}
      />
      <mesh
        name="Cube061"
        geometry={nodes.Cube061.geometry}
        material={materials['glass frosted']}
        position={[266.802, 49.827, -775.227]}
        rotation={[0, 0.122, 0]}
        scale={[1, 0.858, 0.787]}
      />
      <mesh
        name="Torus005"
        geometry={nodes.Torus005.geometry}
        material={materials['Material.003']}
        position={[-52.539, 44.249, -1117.986]}
      />
      <mesh
        name="Torus007"
        geometry={nodes.Torus007.geometry}
        material={materials['Material.002']}
        position={[262.141, 44.249, -780.334]}
      />
    </group>
  )
}
useGLTF.preload('models/cancha/cancha.glb')
