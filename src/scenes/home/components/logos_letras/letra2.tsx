import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    letra2: THREE.Mesh
  }
  materials: {
    ['plateado columnas']: THREE.MeshStandardMaterial
  }
}

export function Letra2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/logos_letras/letra2.glb`) as GLTFResult
  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.letra2.geometry}
      material={materials['plateado columnas']}
      position={[125.347, 48, -3.72]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={2.709}
    />
  </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/logos_letras/letra2.glb`)
