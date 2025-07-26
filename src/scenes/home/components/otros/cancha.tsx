
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'



type GLTFResult = GLTF & {
  nodes: {
    Plane008: THREE.Mesh
    Plane008_1: THREE.Mesh
    Circle101: THREE.Mesh
    Cube021: THREE.Mesh
    Cube021_1: THREE.Mesh
    Cube021_2: THREE.Mesh
    Cube017: THREE.Mesh
    Cube017_1: THREE.Mesh
    Cube017_2: THREE.Mesh
  }
  materials: {
    ['Material.122']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['glass frosted']: THREE.MeshStandardMaterial


  }
}


export function Cancha(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/cancha/cancha1.glb') as unknown as GLTFResult
 
 
  return (
    <group {...props} dispose={null}>
      <group name="Plane004" position={[104.551, -0.857, -949.428]}>
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials['Material.122']}
        />
        <mesh
          name="Plane008_1"
          geometry={nodes.Plane008_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        name="Circle101"
        geometry={nodes.Circle101.geometry}
        material={materials['Material.122']}
        position={[206.529, 1.338, -838.351]}
      />
      <group name="Cube007" position={[277.996, 20.221, -763.321]}>
        <mesh name="Cube021" geometry={nodes.Cube021.geometry} material={materials['Material.122']} />
        <mesh
          name="Cube021_1"
          geometry={nodes.Cube021_1.geometry}
          material={materials['glass frosted']}
        />
        <mesh
          name="Cube021_2"
          geometry={nodes.Cube021_2.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group name="Cube037" position={[-56.729, 47.545, -1122.482]}>
        <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials['Material.122']} />
        <mesh
          name="Cube017_1"
          geometry={nodes.Cube017_1.geometry}
          material={materials['glass frosted']}
        />
        <mesh
          name="Cube017_2"
          geometry={nodes.Cube017_2.geometry}
          material={materials['Material.003']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/cancha/cancha1.glb')
