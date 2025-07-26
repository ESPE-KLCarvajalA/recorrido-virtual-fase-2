
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    techo011: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla2.glb') as unknown as GLTFResult
  
   
  const distance = useCameraDistance([-778.392, 74.388, -797.53]); // Punto de referencia
  if (distance > 300) return null;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo011"
        geometry={nodes.techo011.geometry}
        material={materials['Material.212']}
        position={[-778.392, 74.388, -797.53]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[12.797, 3.519, 29.831]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla2.glb')