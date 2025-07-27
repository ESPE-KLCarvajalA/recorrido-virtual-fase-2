import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario



type GLTFResult = GLTF & {
  nodes: {
    Room027: THREE.Mesh
    Room027_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}


export function ParedesBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/paredesBar.glb') as unknown as GLTFResult

  const distance = useCameraDistance([-854.077, -9.046, -291.626]); // Punto de referencia
  if (distance > 600) return null;
  
  
  return (
    <group {...props} dispose={null}>
      <group
        name="Room084"
        position={[-854.077, -9.046, -291.626]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.051, 31.523, 2.999]}>
        <mesh
          name="Room027"
          geometry={nodes.Room027.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room027_1"
          geometry={nodes.Room027_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}


useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/paredesBar.glb')
