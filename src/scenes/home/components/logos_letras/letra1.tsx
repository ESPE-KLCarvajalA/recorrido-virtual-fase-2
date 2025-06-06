import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'


type GLTFResult = GLTF & {
  nodes: {
    letra1: THREE.Mesh
  }
  materials: {
    ['plateado columnas']: THREE.MeshStandardMaterial
  }
}

export function Letra1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/logos_letras/letra1.glb`) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="letra1"
        castShadow
        receiveShadow
        geometry={nodes.letra1.geometry}
        material={materials['plateado columnas']}
        position={[125.347, 80, -3.72]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={12.032}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/logos_letras/letra1.glb`)
