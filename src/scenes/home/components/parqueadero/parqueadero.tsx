import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario



type GLTFResult = GLTF & {
  nodes: {
    Cube044: THREE.Mesh
    Cube046: THREE.Mesh
    Cube051: THREE.Mesh
    Cube052: THREE.Mesh
    Cube053: THREE.Mesh
    ['6']: THREE.Mesh
    ['7']: THREE.Mesh
  }
  materials: {
    ['Material.009']: THREE.MeshStandardMaterial
    ['6']: THREE.MeshStandardMaterial
    ['7']: THREE.MeshStandardMaterial
  }
}

export function Parqueadero(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/parqueadero/parqueadero.glb') as unknown as GLTFResult
  
  const distance = useCameraDistance([-189.67, -0.28, 77.25]); // Punto de referencia
  if (distance > 600) return null;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube044"
        geometry={nodes.Cube044.geometry}
        material={materials['Material.009']}
        position={[-189.67, -0.28, 77.25]}
        rotation={[0, 1.571, 0]}
        scale={[16.986, 13.032, 31.204]}
      />
      <mesh
        name="Cube046"
        geometry={nodes.Cube046.geometry}
        material={materials['Material.009']}
        position={[-251.985, -0.28, 77.25]}
        rotation={[0, 1.571, 0]}
        scale={[16.986, 13.032, 31.204]}
      />
      <mesh
        name="Cube051"
        geometry={nodes.Cube051.geometry}
        material={materials['Material.009']}
        position={[-311.957, -0.28, 77.25]}
        rotation={[0, 1.571, 0]}
        scale={[16.986, 13.032, 31.204]}
      />
      <mesh
        name="Cube052"
        geometry={nodes.Cube052.geometry}
        material={materials['Material.009']}
        position={[112.662, -0.28, 77.25]}
        rotation={[0, 1.571, 0]}
        scale={[16.986, 13.032, 31.204]}
      />
      <mesh
        name="Cube053"
        geometry={nodes.Cube053.geometry}
        material={materials['Material.009']}
        position={[179.939, -0.28, 77.25]}
        rotation={[0, 1.571, 0]}
        scale={[16.986, 13.032, 31.204]}
      />
      <mesh
        name="6"
        geometry={nodes['6'].geometry}
        material={materials['6']}
        position={[-133.931, -0.887, 78.472]}
        scale={74.66}
      />
      <mesh
        name="7"
        geometry={nodes['7'].geometry}
        material={materials['7']}
        position={[-199.329, 0, 78.461]}
        scale={73.686}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/parqueadero/parqueadero.glb')