import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plano001: THREE.Mesh
  }
  materials: {
    figura: THREE.MeshStandardMaterial
  }
}

export function Dibujo_atras(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/logos_letras/dibujo_atras.glb`) as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plano001"
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials.figura}
        position={[123.513, 45, -148.928]}
        rotation={[0,Math.PI,0]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/logos_letras/dibujo_atras.glb`)
