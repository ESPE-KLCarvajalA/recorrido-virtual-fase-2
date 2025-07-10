import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta según estructura

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2016: THREE.Mesh
    pared_vertical_2024: THREE.Mesh
    Plane077: THREE.Mesh
    Plane077_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla5(props: ThreeElements['group']) {
  // Centro aproximado del modelo para el cálculo de distancia
  const centerPosition: [number, number, number] = [-505.7, 36.596, -725.926]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla5.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <mesh
            name="pared_vertical_2016"
            geometry={nodes.pared_vertical_2016.geometry}
            material={materials['Material.066']}
            position={[136.857, 16.871, 3.225]} // Relativo: [-368.843 - (-505.7), 53.467 - 36.596, -722.701 - (-725.926)]
            scale={[0.581, 0.688, 1.032]}
          />
          <mesh
            name="pared_vertical_2024"
            geometry={nodes.pared_vertical_2024.geometry}
            material={materials['Material.066']}
            position={[-64.03, 16.813, 32.143]} // Relativo: [-569.73 - (-505.7), 53.409 - 36.596, -693.783 - (-725.926)]
            rotation={[Math.PI, 0, Math.PI]}
            scale={[1, 0.651, 1.125]}
          />
          <group
            name="techo023"
            position={[0, 0, 0]} // Relativo: [-505.7 - (-505.7), 36.596 - 36.596, -725.926 - (-725.926)]
            rotation={[0, -1.571, 0]}
            scale={[12.797, 3.519, 23.436]}
          >
            <mesh
              name="Plane077"
              geometry={nodes.Plane077.geometry}
              material={materials['Material.042']}
            />
            <mesh
              name="Plane077_1"
              geometry={nodes.Plane077_1.geometry}
              material={materials['Material.064']}
            />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla5.glb')