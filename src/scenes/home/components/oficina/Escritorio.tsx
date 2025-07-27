
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    ['Wooden_table_office-01002_1']: THREE.Mesh
    ['Wooden_table_office-01002_2']: THREE.Mesh
    ['Wooden_table_office-01002_3']: THREE.Mesh
  }
  materials: {
    ['Material.209']: THREE.MeshStandardMaterial
    ['Material.210']: THREE.MeshStandardMaterial
    ['Material.211']: THREE.MeshStandardMaterial
  }
}

export function Escritorio(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/escritorio.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="Wooden_table_office-01002"
        position={[83.625, 10.74, -40.022]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={23.818}>
        <mesh
          name="Wooden_table_office-01002_1"
          geometry={nodes['Wooden_table_office-01002_1'].geometry}
          material={materials['Material.209']}
        />
        <mesh
          name="Wooden_table_office-01002_2"
          geometry={nodes['Wooden_table_office-01002_2'].geometry}
          material={materials['Material.210']}
        />
        <mesh
          name="Wooden_table_office-01002_3"
          geometry={nodes['Wooden_table_office-01002_3'].geometry}
          material={materials['Material.211']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/oficina/escritorio.glb')
