import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta la ruta si cambia

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2019: THREE.Mesh
    Plane109: THREE.Mesh
    Plane109_1: THREE.Mesh
    sobretecho012: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
    pared_vertical_2018: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.140']: THREE.MeshStandardMaterial
    ['Material.141']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla7(props: ThreeElements['group']) {
  // Centro aproximado para el cálculo de distancia
  const centerPosition: [number, number, number] = [-674.604, 62.276, 182.714]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla7.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <mesh
            name="pared_vertical_2019"
            geometry={nodes.pared_vertical_2019.geometry}
            material={materials['Material.066']}
            position={[-149.388, -17.146, 3.15]} // Relativo: [-823.992 - (-674.604), 45.13 - 62.276, 185.864 - 182.714]
            scale={[0.581, 1, 1.048]}
          />
          <group
            name="techo016"
            position={[0, 0, 0]} // Relativo: [-674.604 - (-674.604), 62.276 - 62.276, 182.714 - 182.714]
            rotation={[0, -Math.PI / 2, 0]}
            scale={[12.797, 3.519, 34.842]}
          >
            <mesh
              name="Plane109"
              geometry={nodes.Plane109.geometry}
              material={materials['Material.140']}
            />
            <mesh
              name="Plane109_1"
              geometry={nodes.Plane109_1.geometry}
              material={materials['Material.141']}
            />
          </group>
          <mesh
            name="sobretecho012"
            geometry={nodes.sobretecho012.geometry}
            material={materials['Material.059']}
            position={[56.23, -20.137, 8.809]} // Relativo: [-618.374 - (-674.604), 42.139 - 62.276, 191.523 - 182.714]
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-95.851, -4.05, -64.836]}
          />
          <group
            name="sobretecho013"
            position={[-94.402, -19.468, 7.187]} // Relativo: [-769.006 - (-674.604), 42.808 - 62.276, 189.901 - 182.714]
            rotation={[0, 1.571, 0]}
            scale={[-65.21, -4.55, -55.024]}
          >
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
          <mesh
            name="pared_vertical_2018"
            geometry={nodes.pared_vertical_2018.geometry}
            material={materials['Material.066']}
            position={[151.203, -17.302, 2.766]} // Relativo: [-523.401 - (-674.604), 44.974 - 62.276, 185.48 - 182.714]
            scale={[0.581, 1, 1.032]}
          />
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla7.glb')