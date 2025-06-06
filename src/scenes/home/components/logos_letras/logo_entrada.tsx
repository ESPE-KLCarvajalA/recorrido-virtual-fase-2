import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    base_logo: THREE.Mesh
    letra1001: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    verde: THREE.MeshStandardMaterial
  }
}

export function Logo_entrada(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/logos_letras/logo_entrada.glb`) as GLTFResult

  const distance = useCameraDistance([431.413, -1.642, 17.68]);

  if (distance > 600) return null;

  return (
    <group {...props} dispose={null}>
      <mesh
        name="base_logo"
        castShadow
        receiveShadow
        geometry={nodes.base_logo.geometry}
        material={materials['Material.001']}
        position={[431.413, -1.642, 17.68]}
        scale={0.812}
      />
      <mesh
        name="letra1001"
        castShadow
        receiveShadow
        geometry={nodes.letra1001.geometry}
        material={materials.verde}
        position={[430.551, -2.98, 17.826]}
        rotation={[Math.PI / 2, -0.022, -0.245]}
        scale={18.9}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/logos_letras/logo_entrada.glb`)
