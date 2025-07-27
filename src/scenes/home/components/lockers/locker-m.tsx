import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber'
// import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario



type GLTFResult = GLTF & {
  nodes: {
    Plane013: THREE.Mesh
    Plane013_1: THREE.Mesh
  }
  materials: {
    ['Material.055']: THREE.MeshStandardMaterial
    ['Material.056']: THREE.MeshStandardMaterial
  }
}



export function LockerM(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/locker-m.glb') as unknown as GLTFResult;

 

  return (
    <group {...props} dispose={null}>
      <group
        name="casilleros002"
        position={[155.354, 13.603, -237.843]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.905, 0.88, 1]}>
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={materials['Material.055']}
        />
        <mesh
          name="Plane013_1"
          geometry={nodes.Plane013_1.geometry}
          material={materials['Material.056']}
        />
      </group>
    </group>
  )
}
useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/lockers/locker-m.glb');
