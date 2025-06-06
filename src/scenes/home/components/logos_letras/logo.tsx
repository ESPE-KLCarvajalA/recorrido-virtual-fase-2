import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
      Círculo005: THREE.Mesh
      Círculo005_1: THREE.Mesh
    }
    materials: {
      ['pared blanca']: THREE.MeshStandardMaterial
      logo: THREE.MeshStandardMaterial
    }
  }

export function Logo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/logos_letras/logo.glb`) as GLTFResult

  return (
    <group dispose={null}>
      <group
        name="logo"
        position={props.position}
        rotation={props.rotation}
        scale={props.scale}>
        <mesh
          name="Círculo005"
          castShadow
          receiveShadow
          geometry={nodes.Círculo005.geometry}
          material={materials['pared blanca']}
        />
        <mesh
          name="Círculo005_1"
          castShadow
          receiveShadow
          geometry={nodes.Círculo005_1.geometry}
          material={materials.logo}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/logos_letras/logo.glb`)
