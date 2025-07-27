import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario



type GLTFResult = GLTF & {
  nodes: {
    techo002: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}


export function TechoLabCC2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/techoLabCC2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo002"
        geometry={nodes.techo002.geometry}
        material={materials['Material.212']}
        position={[-53.158, 49.317, -184.376]}
        rotation={[Math.PI, 0, 3.035]}
        scale={[16.094, 3.529, 31.177]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/labCiencias2/techoLabCC2.glb')
