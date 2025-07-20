
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

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

export function VentanaNueva(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana8Vertices.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="WindowL010" position={[242.022, 34, -94.585]}>
        
        <mesh
          name="WindowL005"
          geometry={nodes.WindowL005.geometry}
          material={materials['Material.099']}
        />
        <mesh
          name="WindowL005_1"
          geometry={nodes.WindowL005_1.geometry}
          material={materials['Material.098']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana8Vertices.glb')