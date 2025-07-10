import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel'

type GLTFResult = GLTF & {
  nodes: {
    Room030_1: THREE.Mesh
    Room030_2: THREE.Mesh
    Room031_1: THREE.Mesh
    Room031_2: THREE.Mesh
    Room032: THREE.Mesh
    Room032_1: THREE.Mesh
    Room033: THREE.Mesh
    Room033_1: THREE.Mesh
  }
  materials: {
    ['Material.096']: THREE.MeshStandardMaterial
    ['Material.097']: THREE.MeshStandardMaterial
  }
}

export function ParedVilla6(props: ThreeElements['group']) {
  // Centro aproximado solo para el cálculo de distancia de renderizado
  const centerPosition: [number, number, number] = [-471.072, 25.177, -413.96]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="models/villas/paredVilla6.glb"
      position={centerPosition}
      maxDistance={200}
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          {/* Posiciones relativas al centro del ConditionalGLTFModel */}
          <group
            name="Room027"
            position={[0, 0, 0]} // Esta era la posición central, ahora es (0,0,0)
            rotation={[Math.PI, -Math.PI / 2, 0]}
            scale={[7.349, 20.124, 7.349]}>
            <mesh geometry={nodes.Room030_1.geometry} material={materials['Material.096']} />
            <mesh geometry={nodes.Room030_2.geometry} material={materials['Material.097']} />
          </group>

          <group
            name="Room029"
            position={[-17.351, 0.504, -35.105]} // Relativo al centro: [-488.423 - (-471.072), 25.681 - 25.177, -449.065 - (-413.96)]
            rotation={[0, -Math.PI / 2, 0]}
            scale={[56.293, 20.125, 56.293]}>
            <mesh geometry={nodes.Room031_1.geometry} material={materials['Material.096']} />
            <mesh geometry={nodes.Room031_2.geometry} material={materials['Material.097']} />
          </group>

          <group
            name="Room030"
            position={[57.058, -0.044, -62.357]} // Relativo al centro: [-414.014 - (-471.072), 25.133 - 25.177, -476.317 - (-413.96)]
            rotation={[Math.PI, 0, Math.PI]}
            scale={[1, 20.125, 1]}>
            <mesh geometry={nodes.Room032.geometry} material={materials['Material.096']} />
            <mesh geometry={nodes.Room032_1.geometry} material={materials['Material.097']} />
          </group>

          <group
            name="Room031"
            position={[-3.058, -0.044, -27.754]} // Relativo al centro: [-474.13 - (-471.072), 25.133 - 25.177, -441.714 - (-413.96)]
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1, 20.125, 1]}>
            <mesh geometry={nodes.Room033.geometry} material={materials['Material.096']} />
            <mesh geometry={nodes.Room033_1.geometry} material={materials['Material.097']} />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('models/villas/paredVilla6.glb')