
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2003: THREE.Mesh
    pared_vertical_2004: THREE.Mesh
    pared_vertical_2005: THREE.Mesh
    pared_vertical_2007: THREE.Mesh
    pared_vertical_2010: THREE.Mesh
    pared_vertical_2012: THREE.Mesh
    pared_vertical_2014: THREE.Mesh
    pared_vertical_2015: THREE.Mesh
    pared_vertical_2016: THREE.Mesh
    pared_vertical_2017: THREE.Mesh
    pared_vertical_2018: THREE.Mesh
    pared_vertical_2019: THREE.Mesh
    pared_vertical_2024: THREE.Mesh
    pared_vertical_2025: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
  }
}

export function ParedVertical(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/villas/paredVertical.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        name="pared_vertical_2003"
        geometry={nodes.pared_vertical_2003.geometry}
        material={materials['Material.066']}
        position={[-771.598, 54.961, -378.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2004"
        geometry={nodes.pared_vertical_2004.geometry}
        material={materials['Material.066']}
        position={[-777.733, 55.68, -572.335]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2005"
        geometry={nodes.pared_vertical_2005.geometry}
        material={materials['Material.066']}
        position={[-775.72, 56.517, -660.965]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2007"
        geometry={nodes.pared_vertical_2007.geometry}
        material={materials['Material.066']}
        position={[-775.72, 56.517, -922.64]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2010"
        geometry={nodes.pared_vertical_2010.geometry}
        material={materials['Material.066']}
        position={[-635.764, 56.517, -998.029]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.581, 1, 1]}
      />
      <mesh
        name="pared_vertical_2012"
        geometry={nodes.pared_vertical_2012.geometry}
        material={materials['Material.066']}
        position={[-374.374, 56.517, -997.48]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.581, 1, 1]}
      />
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
        name="pared_vertical_2016"
        geometry={nodes.pared_vertical_2016.geometry}
        material={materials['Material.066']}
        position={[-368.843, 53.467, -722.701]}
        scale={[0.581, 0.688, 1.032]}
      />
      <mesh
        name="pared_vertical_2017"
        geometry={nodes.pared_vertical_2017.geometry}
        material={materials['Material.066']}
        position={[-370.993, 54.152, -444.31]}
        scale={[0.581, 0.688, 1.032]}
      />
      <mesh
        name="pared_vertical_2018"
        geometry={nodes.pared_vertical_2018.geometry}
        material={materials['Material.066']}
        position={[-523.401, 44.974, 185.48]}
        scale={[0.581, 1, 1.032]}
      />
      <mesh
        name="pared_vertical_2019"
        geometry={nodes.pared_vertical_2019.geometry}
        material={materials['Material.066']}
        position={[-823.992, 45.13, 185.864]}
        scale={[0.581, 1, 1.048]}
      />
      <mesh
        name="pared_vertical_2024"
        geometry={nodes.pared_vertical_2024.geometry}
        material={materials['Material.066']}
        position={[-569.73, 53.409, -693.783]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.651, 1.125]}
      />
      <mesh
        name="pared_vertical_2025"
        geometry={nodes.pared_vertical_2025.geometry}
        material={materials['Material.066']}
        position={[-572.429, 53.292, -413.864]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 0.651, 1.125]}
      />
    </group>
  )
}

useGLTF.preload('models/villas/paredVertical.glb')