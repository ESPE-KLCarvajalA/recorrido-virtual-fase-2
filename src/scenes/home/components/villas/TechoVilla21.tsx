import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta según estructura

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2005: THREE.Mesh
    pared_vertical_2007: THREE.Mesh
    Cube050: THREE.Mesh
    Cube050_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla21(props: ThreeElements['group']) {
  // Centro aproximado para el cálculo de distancia
  const centerPosition: [number, number, number] = [-777.798, 53.759, -791.393]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="models/villas/techoVilla21.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <mesh
            name="pared_vertical_2005"
            geometry={nodes.pared_vertical_2005.geometry}
            material={materials['Material.066']}
            position={[2.078, 2.758, 130.428]} // Relativo: [-775.72 - (-777.798), 56.517 - 53.759, -660.965 - (-791.393)]
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.581, 1, 1]}
          />
          <mesh
            name="pared_vertical_2007"
            geometry={nodes.pared_vertical_2007.geometry}
            material={materials['Material.066']}
            position={[2.078, 2.758, -131.247]} // Relativo: [-775.72 - (-777.798), 56.517 - 53.759, -922.64 - (-791.393)]
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.581, 1, 1]}
          />
          <group
            name="sobretecho009"
            position={[0, 0, 0]} // Relativo: [-777.798 - (-777.798), 53.759 - 53.759, -791.393 - (-791.393)]
            rotation={[0, 1.571, 0]}
            scale={[-129.452, -6.4, -64.836]}
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
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('models/villas/techoVilla21.glb')