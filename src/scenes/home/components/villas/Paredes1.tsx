import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario
import { useSpring, a } from '@react-spring/three'

type GLTFResult = GLTF & {
  nodes: {
    Room071: THREE.Mesh
    Room071_1: THREE.Mesh
    Room001_1: THREE.Mesh
    Room001_2: THREE.Mesh
    Room006_1: THREE.Mesh
    Room006_2: THREE.Mesh
    Room007_1: THREE.Mesh
    Room007_2: THREE.Mesh
    Room002_1: THREE.Mesh
    Room002_2: THREE.Mesh
    Room003_1: THREE.Mesh
    Room003_2: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
   
  }
}


export function Paredes1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredes1.glb') as unknown as GLTFResult



  const distance = useCameraDistance([-751.424, 24.589, -597.53])
  const visible = distance < 300

  const { opacity, scale } = useSpring({
    opacity: visible ? 1 : 0,
    scale: visible ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 14 }
  })

  return (
    <a.group
      {...props}
      dispose={null}
      scale={scale}
     
    >
      <group
        name="Room068"
        position={[-751.424, 24.589, -597.53]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1, 19.25, 1]}>
        <mesh
          name="Room071"
          geometry={nodes.Room071.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room071_1"
          geometry={nodes.Room071_1.geometry}
          material={materials['Material.097']}
        />
      </group>
  
      <group
        name="Room001"
        position={[-530.929, 26.108, -1008.118]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.923, 20.125, 1.714]}>
        <mesh
          name="Room001_1"
          geometry={nodes.Room001_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room001_2"
          geometry={nodes.Room001_2.geometry}
          material={materials['Material.097']}
        />
      </group>
  
      <group
        name="Room006"
        position={[-746.54, 25.649, -448.642]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[1.296, 20.125, 1]}>
        <mesh
          name="Room006_1"
          geometry={nodes.Room006_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room006_2"
          geometry={nodes.Room006_2.geometry}
          material={materials['Material.097']}
        />
      </group>
  
      <group
        name="Room007"
        position={[-790.295, 26.819, -766.079]}
        scale={[0.923, 20.125, 1.714]}>
        <mesh
          name="Room007_1"
          geometry={nodes.Room007_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room007_2"
          geometry={nodes.Room007_2.geometry}
          material={materials['Material.097']}
        />
      </group>
  
      <group
        name="Room002"
        position={[-185.163, 23.565, -747.731]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.369, 20.125, 0.879]}>
        <mesh
          name="Room002_1"
          geometry={nodes.Room002_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room002_2"
          geometry={nodes.Room002_2.geometry}
          material={materials['Material.097']}
        />
      </group>
  
      <group
        name="Room003"
        position={[-191.765, 24.323, -873.595]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.879, 20.125, 0.879]}>
        <mesh
          name="Room003_1"
          geometry={nodes.Room003_1.geometry}
          material={materials['Material.096']}
        />
        <mesh
          name="Room003_2"
          geometry={nodes.Room003_2.geometry}
          material={materials['Material.097']}
        />
      </group>
    </a.group>
  )
}  

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/paredes1.glb')
