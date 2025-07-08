import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane055: THREE.Mesh
    Plane055_1: THREE.Mesh
    Plane055_2: THREE.Mesh
  }
  materials: {
    ['Material.049']: THREE.MeshStandardMaterial
    ['MDF Concrete decor Arauco.008']: THREE.MeshPhysicalMaterial
    ['MDF Concrete decor Arauco.010']: THREE.MeshPhysicalMaterial
  }
}

export function Borde(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/borde.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="piso_gris003" position={[-343.52, -8.075, 269.232]}>
        <mesh
          name="Plane055"
          geometry={nodes.Plane055.geometry}
          material={materials['Material.049']}
        />
        <mesh
          name="Plane055_1"
          geometry={nodes.Plane055_1.geometry}
          material={materials['MDF Concrete decor Arauco.008']}
        />
        <mesh
          name="Plane055_2"
          geometry={nodes.Plane055_2.geometry}
          material={materials['MDF Concrete decor Arauco.010']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/borde.glb')