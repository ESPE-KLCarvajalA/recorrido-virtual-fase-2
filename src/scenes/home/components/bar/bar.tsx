import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    techo022: THREE.Mesh
    Plane069: THREE.Mesh
    Plane069_1: THREE.Mesh
    techo004: THREE.Mesh
    Plane043: THREE.Mesh
    Plane043_1: THREE.Mesh
    Plane038: THREE.Mesh
    Plane038_1: THREE.Mesh
    Cube: THREE.Mesh
    Room027: THREE.Mesh
    Room027_1: THREE.Mesh
    pared_vertical_2028: THREE.Mesh
    pared_vertical_2020: THREE.Mesh
    Room067: THREE.Mesh
    Room067_1: THREE.Mesh
    Room073: THREE.Mesh
    Room073_1: THREE.Mesh
    Room088: THREE.Mesh
    Room088_1: THREE.Mesh
  }
  materials: {
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
    ['Terrazzo Tiles']: THREE.MeshStandardMaterial
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

export function Bar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/bar/bar.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="techo022"
        geometry={nodes.techo022.geometry}
        material={materials['Material.042']}
        position={[-529.11, 65.532, -77.061]}
        rotation={[0, 1.57, 0]}
        scale={[12.797, 3.519, 28.212]}
      />
      <group name="techo024" position={[-712.307, 71.104, -103.006]} scale={[24.2, 3.519, 31.177]}>
        <mesh
          name="Plane069"
          geometry={nodes.Plane069.geometry}
          material={materials['Material.042']}
        />
        <mesh
          name="Plane069_1"
          geometry={nodes.Plane069_1.geometry}
          material={materials['Material.064']}
        />
      </group>
      <mesh
        name="techo004"
        geometry={nodes.techo004.geometry}
        material={materials['Material.042']}
        position={[-841.385, 87.165, -43.067]}
        rotation={[-1.793, 1.436, 1.716]}
        scale={[18.711, 3.536, 42.301]}
      />
      <group
        name="concrete_column001"
        position={[-648.523, -4.216, -288.685]}
        scale={[15.387, 19.73, 12.105]}>
        <mesh
          name="Plane043"
          geometry={nodes.Plane043.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Plane043_1"
          geometry={nodes.Plane043_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="concrete_column003"
        position={[-570.368, -4.216, -287.578]}
        scale={[15.387, 17.894, 13.264]}>
        <mesh
          name="Plane038"
          geometry={nodes.Plane038.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Plane038_1"
          geometry={nodes.Plane038_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={materials['Terrazzo Tiles']}
        position={[-708, -4.216, -210.603]}
        scale={[143.642, 2.5, 80.797]}
      />
      <group
        name="Room084"
        position={[-852, -4.216, -291.626]}
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
      <mesh
        name="pared_vertical_2028"
        geometry={nodes.pared_vertical_2028.geometry}
        material={materials['Material.066']}
        position={[-708.056, 73.635, -80.187]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[21.389, 1.139, 1.433]}
      />
      <mesh
        name="pared_vertical_2020"
        geometry={nodes.pared_vertical_2020.geometry}
        material={materials['Material.066']}
        position={[-446.76, 72.426, -76.084]}
        scale={[0.581, 1, 1.032]}
      />
      <group name="Room085" position={[-658.334, -8.962, -170.751]} scale={[14.781, 59.38, 14.781]}>
        <mesh
          name="Room067"
          geometry={nodes.Room067.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room067_1"
          geometry={nodes.Room067_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room086"
        position={[-539.055, -8.952, -150.963]}
        rotation={[0, -1.571, 0]}
        scale={[14.781, 59.38, 14.781]}>
        <mesh
          name="Room073"
          geometry={nodes.Room073.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room073_1"
          geometry={nodes.Room073_1.geometry}
          material={materials['Material.097']}
        />
      </group>
      <group
        name="Room087"
        position={[-790.393, -8.862, -90.465]}
        rotation={[0, -1.571, 0]}
        scale={[14.781, 59.38, 14.781]}>
        <mesh
          name="Room088"
          geometry={nodes.Room088.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room088_1"
          geometry={nodes.Room088_1.geometry}
          material={materials['Material.097']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/bar/bar.glb')