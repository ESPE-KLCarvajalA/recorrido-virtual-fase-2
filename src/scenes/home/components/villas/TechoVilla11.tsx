import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta la ruta según tu proyecto

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2003: THREE.Mesh
    pared_vertical_2004: THREE.Mesh
    sobretecho010: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla11(props: ThreeElements['group']) {
  // Posición central aproximada para el cálculo de distancia
  const centerPosition: [number, number, number] = [-779.91, 52.851, -472.582]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla11.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <mesh
            name="pared_vertical_2003"
            geometry={nodes.pared_vertical_2003.geometry}
            material={materials['Material.066']}
            position={[8.312, 2.11, 94.382]} // Relativo: [-771.598 - (-779.91), 54.961 - 52.851, -378.2 - (-472.582)]
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.581, 1, 1]}
          />
          <mesh
            name="pared_vertical_2004"
            geometry={nodes.pared_vertical_2004.geometry}
            material={materials['Material.066']}
            position={[2.177, 2.829, -99.753]} // Relativo: [-777.733 - (-779.91), 55.68 - 52.851, -572.335 - (-472.582)]
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.581, 1, 1]}
          />
          <mesh
            name="sobretecho010"
            geometry={nodes.sobretecho010.geometry}
            material={materials['Material.059']}
            position={[0, 0, 0]} // Relativo: [-779.91 - (-779.91), 52.851 - 52.851, -472.582 - (-472.582)]
            rotation={[0, 1.571, 0]}
            scale={[-92.242, -6.4, -64.836]}
          />
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla11.glb')