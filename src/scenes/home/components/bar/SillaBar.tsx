import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    banco001: THREE.Mesh
    banco_01001: THREE.Mesh
    Cube016: THREE.Mesh
    Cube017: THREE.Mesh
    tampo_da_mesa001: THREE.Mesh
    tubo_2001: THREE.Mesh
    tubo1001: THREE.Mesh
    tubo1004: THREE.Mesh
    tubo_2004: THREE.Mesh
  }
  materials: {
    ['Material.079']: THREE.MeshStandardMaterial
    ['Material.080']: THREE.MeshStandardMaterial
    ['Material.054']: THREE.MeshStandardMaterial
    ['Material.078']: THREE.MeshStandardMaterial
    ['Material.053']: THREE.MeshStandardMaterial
  }
}

export function SillaBar(props: ThreeElements ['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sillaBar.glb') as unknown as GLTFResult
 
 
  const distance = useCameraDistance([-588.658, 5.61, -239.433]); // Punto de referencia
  if (distance > 600) return null;
 
  return (
    <group {...props} dispose={null}>
      <mesh
        name="banco001"
        geometry={nodes.banco001.geometry}
        material={materials['Material.079']}
        position={[-588.658, 5.61, -239.433]}
        scale={[18.844, 24.771, 21.147]}
      />
      <mesh
        name="banco_01001"
        geometry={nodes.banco_01001.geometry}
        material={materials['Material.080']}
        position={[-588.658, 5.61, -214.058]}
        scale={[18.844, 24.771, 21.147]}
      />
      <mesh
        name="Cube016"
        geometry={nodes.Cube016.geometry}
        material={materials['Material.054']}
        position={[-566.841, 3.497, -226.719]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[8.545, 16.514, 18.844]}
      />
      <mesh
        name="Cube017"
        geometry={nodes.Cube017.geometry}
        material={materials['Material.054']}
        position={[-610.452, 3.497, -226.719]}
        rotation={[0, 1.571, 0]}
        scale={[8.545, 16.514, 18.844]}
      />
      <mesh
        name="tampo_da_mesa001"
        geometry={nodes.tampo_da_mesa001.geometry}
        material={materials['Material.078']}
        position={[-588.658, 14.893, -226.772]}
        scale={[18.844, 24.771, 21.147]}
      />
      <mesh
        name="tubo_2001"
        geometry={nodes.tubo_2001.geometry}
        material={materials['Material.053']}
        position={[-566.839, 14.476, -224.219]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[9.254, 10.84, 8.246]}
      />
      <mesh
        name="tubo1001"
        geometry={nodes.tubo1001.geometry}
        material={materials['Material.053']}
        position={[-566.846, 14.476, -229.227]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[9.254, 10.84, 8.246]}
      />
      <mesh
        name="tubo1004"
        geometry={nodes.tubo1004.geometry}
        material={materials['Material.053']}
        position={[-610.485, 14.476, -229.227]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[9.254, 10.84, 8.246]}
      />
      <mesh
        name="tubo_2004"
        geometry={nodes.tubo_2004.geometry}
        material={materials['Material.053']}
        position={[-610.485, 14.476, -224.219]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[9.254, 10.84, 8.246]}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/bar/sillaBar.glb')