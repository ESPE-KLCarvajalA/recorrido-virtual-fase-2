import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'


type GLTFResult = GLTF & {
  nodes: {
    Plane126: THREE.Mesh
    Plane126_1: THREE.Mesh
    Plane126_2: THREE.Mesh
  }
  materials: {
    WB_Metal: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
  }
}

export function Pizarron(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/pizarron1.glb') as unknown as GLTFResult
  
  
  
  return (
    <group {...props} dispose={null}>
      <group
        name="Whiteboard001"
        position={[234.566, 46.906, -133.209]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={50.608}>
        <mesh name="Plane126" geometry={nodes.Plane126.geometry} material={materials.WB_Metal} />
        <mesh
          name="Plane126_1"
          geometry={nodes.Plane126_1.geometry}
          material={materials['Material.007']}
        />
        <mesh
          name="Plane126_2"
          geometry={nodes.Plane126_2.geometry}
          material={materials['Material.008']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCom1/pizarron1.glb')
