import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2014: THREE.Mesh
    pared_vertical_2015: THREE.Mesh
    sobretecho011: THREE.Mesh
    Plane105: THREE.Mesh
    Plane105_1: THREE.Mesh
    techo021: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.142']: THREE.MeshStandardMaterial
    ['Material.143']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla4(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('/techoVilla4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2014"
        geometry={nodes.pared_vertical_2014.geometry}
        material={materials['Material.066']}
        position={[-168.231, 54.257, -851.239]}
        rotation={[0, -1.571, 0]}
        scale={[0.581, 0.926, 0.89]}
      />
      <mesh
        name="pared_vertical_2015"
        geometry={nodes.pared_vertical_2015.geometry}
        material={materials['Material.066']}
        position={[-169.564, 54.109, -646.753]}
        rotation={[0, -1.571, 0]}
        scale={[0.581, 0.938, 0.926]}
      />
      <mesh
        name="sobretecho011"
        geometry={nodes.sobretecho011.geometry}
        material={materials['Material.059']}
        position={[-159.844, 52.851, -733.011]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-87.651, -5.586, -56.593]}
      />
      <group
        name="techo001"
        position={[-165.586, 69.83, -748.706]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[10.902, 3.519, 22.977]}>
        <mesh
          name="Plane105"
          geometry={nodes.Plane105.geometry}
          material={materials['Material.142']}
        />
        <mesh
          name="Plane105_1"
          geometry={nodes.Plane105_1.geometry}
          material={materials['Material.143']}
        />
      </group>
      <mesh
        name="techo021"
        geometry={nodes.techo021.geometry}
        material={materials['Material.042']}
        position={[-193.589, 49.014, -873.635]}
        rotation={[-0.004, -0.003, -0.092]}
        scale={[14.007, 3.532, 18.255]}
      />
    </group>
  )
}

useGLTF.preload('/techoVilla4.glb')