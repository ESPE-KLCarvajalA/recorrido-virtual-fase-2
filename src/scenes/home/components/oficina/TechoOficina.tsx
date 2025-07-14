import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    techo015: THREE.Mesh
    techo017: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}
export function TechoOficina(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/techoOficina.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo015"
        geometry={nodes.techo015.geometry}
        material={materials['Material.212']}
        position={[72.124, 74.433, -68.044]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 52.569]}
      />
      <mesh
        name="techo017"
        geometry={nodes.techo017.geometry}
        material={materials['Material.212']}
        position={[-176.47, 73.899, -181.851]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}
      />
    </group>
  )
}


useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/techoOficina.glb')
