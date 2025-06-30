
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
    Cube050_2: THREE.Mesh
    Cube050_3: THREE.Mesh
    sobretecho010: THREE.Mesh
    sobretecho011: THREE.Mesh
    sobretecho012: THREE.Mesh
    Cube050_4: THREE.Mesh
    Cube050_5: THREE.Mesh
  }
  materials: {
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function Sobretecho(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/sobretecho.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        name="sobretecho008"
        position={[-505.098, 53.759, -995.173]}
        scale={[-129.452, -6.4, -64.836]}>
        <mesh
          name="Cube050"
          geometry={nodes.Cube050.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube050_1"
          geometry={nodes.Cube050_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group
        name="sobretecho009"
        position={[-777.798, 53.759, -791.393]}
        rotation={[0, 1.571, 0]}
        scale={[-129.452, -6.4, -64.836]}>
        <mesh
          name="Cube050_2"
          geometry={nodes.Cube050_2.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube050_3"
          geometry={nodes.Cube050_3.geometry}
          material={materials['Material.059']}
        />
      </group>
      <mesh
        name="sobretecho010"
        geometry={nodes.sobretecho010.geometry}
        material={materials['Material.059']}
        position={[-779.91, 52.851, -472.582]}
        rotation={[0, 1.571, 0]}
        scale={[-92.242, -6.4, -64.836]}
      />
      <mesh
        name="sobretecho011"
        geometry={nodes.sobretecho011.geometry}
        material={materials['Material.059']}
        position={[-159.844, 52.851, -733.011]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-87.651, -5.586, -56.593]}
      />
      <mesh
        name="sobretecho012"
        geometry={nodes.sobretecho012.geometry}
        material={materials['Material.059']}
        position={[-618.374, 42.139, 191.523]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-95.851, -4.05, -64.836]}
      />
      <group
        name="sobretecho013"
        position={[-769.006, 42.808, 189.901]}
        rotation={[0, 1.571, 0]}
        scale={[-65.21, -4.55, -55.024]}>
        <mesh
          name="Cube050_4"
          geometry={nodes.Cube050_4.geometry}
          material={materials['Material.058']}
        />
        <mesh
          name="Cube050_5"
          geometry={nodes.Cube050_5.geometry}
          material={materials['Material.059']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/villas/sobretecho.glb')