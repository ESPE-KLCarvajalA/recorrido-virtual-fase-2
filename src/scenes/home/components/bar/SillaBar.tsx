import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Plane041: THREE.Mesh
    Plane041_1: THREE.Mesh
  }
  materials: {
    ['Material.078']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
  }
}
export function SillaBar(props: ThreeElements ['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sillaBar1.glb') as unknown as GLTFResult
 
 
  // const distance = useCameraDistance([-588.658, 5.61, -239.433]); // Punto de referencia
  // if (distance > 400) return null;
 
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane041"
        geometry={nodes.Plane041.geometry}
        material={materials['Material.078']}
      />
      <mesh
        name="Plane041_1"
        geometry={nodes.Plane041_1.geometry}
        material={materials['Material.010']}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sillaBar1.glb')