import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    techo001: THREE.Mesh
  }
  materials: {
    ['Material.212']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla4(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla4.glb') as unknown as GLTFResult
  
   
  const distance = useCameraDistance([-165.586, 69.83, -748.706]); // Punto de referencia
  if (distance > 300) return null;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo001"
        geometry={nodes.techo001.geometry}
        material={materials['Material.212']}
        position={[-165.586, 69.83, -748.706]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[10.902, 3.519, 22.977]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla4.glb')
