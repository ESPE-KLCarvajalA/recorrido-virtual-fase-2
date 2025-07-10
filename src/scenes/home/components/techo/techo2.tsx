import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useEffect } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    Plane082: THREE.Mesh
    Plane082_1: THREE.Mesh
    Plane063: THREE.Mesh
    Plane063_1: THREE.Mesh
    Plane064: THREE.Mesh
    Plane064_1: THREE.Mesh
    Plane080: THREE.Mesh
    Plane080_1: THREE.Mesh
    techo018: THREE.Mesh
    techo015: THREE.Mesh
    techo002: THREE.Mesh
  }
  materials: {
    ['Material.144']: THREE.MeshStandardMaterial
    ['Material.145']: THREE.MeshStandardMaterial
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
    ['Material.138']: THREE.MeshStandardMaterial
    ['Material.139']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
    ['Material.136']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.146']: THREE.MeshStandardMaterial
  }
}

export function Techo1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/techo/techo1.glb') as unknown as GLTFResult

  useEffect(() => {
    const mat = materials['Material.042']
    if (mat) {
      const baseGreen = new THREE.Color('#03562C')
      const lighterGreen = baseGreen.clone().lerp(new THREE.Color('white'), 0.90)
  
      mat.color = lighterGreen
      mat.transparent = false
      mat.opacity = 1
  
      if (mat.map) {
        mat.map.colorSpace = THREE.SRGBColorSpace // Por si es GLTF reciente
        mat.map.needsUpdate = true
      }
  
      mat.needsUpdate = true
    }
  }, [materials])
  

  return (
    <group {...props} dispose={null}>
      <group
        name="techo005"
        position={[-6.237, 65.572, 16.351]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[8.556, 2.388, 10.642]}>
        <mesh geometry={nodes.Plane082.geometry} material={materials['Material.144']} />
        <mesh geometry={nodes.Plane082_1.geometry} material={materials['Material.145']} />
      </group>
      <group
        name="techo009"
        position={[-170.228, 101.073, -412.704]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh geometry={nodes.Plane063.geometry} material={materials['Material.142']} />
        <mesh geometry={nodes.Plane063_1.geometry} material={materials['Material.143']} />
      </group>
      <group
        name="techo003"
        position={[238.931, 78.398, -268.552]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh geometry={nodes.Plane064.geometry} material={materials['Material.138']} />
        <mesh geometry={nodes.Plane064_1.geometry} material={materials['Material.139']} />
      </group>
      <group
        name="techo008"
        position={[109.607, 75.184, -410.137]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[12.797, 3.519, 31.177]}>
        <mesh geometry={nodes.Plane080.geometry} material={materials['Material.140']} />
        <mesh geometry={nodes.Plane080_1.geometry} material={materials['Material.141']} />
      </group>
      <mesh
        name="techo018"
        geometry={nodes.techo018.geometry}
        material={materials['Material.136']}
        position={[-176.47, 73.899, -181.851]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 31.177]}
      />
      <mesh
        name="techo015"
        geometry={nodes.techo015.geometry}
        material={materials['Material.042']}
        position={[72.124, 74.433, -68.044]}
        rotation={[0, -1.571, 0]}
        scale={[12.797, 3.519, 52.569]}
      />
      <mesh
        name="techo002"
        geometry={nodes.techo002.geometry}
        material={materials['Material.146']}
        position={[-53.158, 49.317, -184.376]}
        rotation={[Math.PI, 0, 3.035]}
        scale={[16.094, 3.529, 31.177]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/techo/techo1.glb')
