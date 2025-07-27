import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_1: THREE.Mesh
  }
  materials: {
    ['Material.076']: THREE.MeshStandardMaterial
    ['Material.077']: THREE.MeshStandardMaterial
  }
}

export function Carpa(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/carpa.glb') as unknown as GLTFResult
  
  
  const distance = useCameraDistance([-454.682, 38.02, -246.833]); // Punto de referencia
  if (distance > 400) return null;
  
  return (
    <group {...props} dispose={null}>
      <group
        name="Display_Tent"
        position={[-454.682, 38.02, -246.833]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.265, 0.417, 0.294]}>
        <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials['Material.076']} />
        <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials['Material.077']} />
      </group>
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/carpa.glb')
