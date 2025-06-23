import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber';


type GLTFResult = GLTF & {
  nodes: {
    Door004_1: THREE.Mesh
    Door004_2: THREE.Mesh
    Handle_Back004: THREE.Mesh
  }
  materials: {
    glass: THREE.MeshStandardMaterial
    ['Material.084']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
  }
}

export function Puerta1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Door004"
        position={[502.716, 20.347, -371.26]}
        rotation={[Math.PI, -0.262, Math.PI]}
        scale={[21.373, 18.914, 18.914]}>
        <mesh name="Door004_1" geometry={nodes.Door004_1.geometry} material={materials.glass} />
        <mesh
          name="Door004_2"
          geometry={nodes.Door004_2.geometry}
          material={materials['Material.084']}
        />
      </group>
      <mesh
        name="Handle_Back004"
        geometry={nodes.Handle_Back004.geometry}
        material={materials['Material.023']}
        position={[518.901, 21.245, -375.353]}
        rotation={[Math.PI, -0.262, Math.PI]}
        scale={[21.373, 18.914, 18.914]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/puerta/puerta1.glb')
