import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Room067: THREE.Mesh
    Room067_1: THREE.Mesh
    Room073: THREE.Mesh
    Room073_1: THREE.Mesh
    Room088: THREE.Mesh
    Room088_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}


export function ParedesInternasBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/paredesInternasBar.glb') as unknown as GLTFResult

  const distance = useCameraDistance([-658.334, -8.962, -170.751]); // Punto de referencia
  if (distance > 600) return null;
  

  return (
    <group {...props} dispose={null}>
      <group name="Room085" position={[-658.334, -8.962, -170.751]} scale={[14.781, 59.38, 14.781]}>
        <mesh
          name="Room067"
          geometry={nodes.Room067.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room067_1"
          geometry={nodes.Room067_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room086"
        position={[-539.055, -8.952, -150.963]}
        rotation={[0, -1.571, 0]}
        scale={[14.781, 59.38, 14.781]}>
        <mesh
          name="Room073"
          geometry={nodes.Room073.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room073_1"
          geometry={nodes.Room073_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room087"
        position={[-790.393, -8.862, -90.465]}
        rotation={[0, -1.571, 0]}
        scale={[14.781, 59.38, 14.781]}>
        <mesh
          name="Room088"
          geometry={nodes.Room088.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room088_1"
          geometry={nodes.Room088_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/paredesInternasBar.glb')
