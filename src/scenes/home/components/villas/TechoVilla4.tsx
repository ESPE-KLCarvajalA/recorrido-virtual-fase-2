import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta si tu estructura cambia

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
  // Punto central aproximado para el cálculo de distancia
  const centerPosition: [number, number, number] = [-165.586, 69.83, -748.706]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="models/villas/techoVilla4.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <mesh
            name="pared_vertical_2014"
            geometry={nodes.pared_vertical_2014.geometry}
            material={materials['Material.066']}
            position={[-2.645, -15.573, -102.533]} // Relativo: [-168.231 - (-165.586), 54.257 - 69.83, -851.239 - (-748.706)]
            rotation={[0, -1.571, 0]}
            scale={[0.581, 0.926, 0.89]}
          />
          <mesh
            name="pared_vertical_2015"
            geometry={nodes.pared_vertical_2015.geometry}
            material={materials['Material.066']}
            position={[-3.978, -15.721, 101.953]} // Relativo: [-169.564 - (-165.586), 54.109 - 69.83, -646.753 - (-748.706)]
            rotation={[0, -1.571, 0]}
            scale={[0.581, 0.938, 0.926]}
          />
          <mesh
            name="sobretecho011"
            geometry={nodes.sobretecho011.geometry}
            material={materials['Material.059']}
            position={[5.742, -16.979, 15.695]} // Relativo: [-159.844 - (-165.586), 52.851 - 69.83, -733.011 - (-748.706)]
            rotation={[Math.PI, -Math.PI / 2, 0]}
            scale={[-87.651, -5.586, -56.593]}
          />
          <group
            name="techo001"
            position={[0, 0, 0]} // Relativo: [-165.586 - (-165.586), 69.83 - 69.83, -748.706 - (-748.706)]
            rotation={[Math.PI, 0, Math.PI]}
            scale={[10.902, 3.519, 22.977]}
          >
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
            position={[-28.003, -20.816, -124.929]} // Relativo: [-193.589 - (-165.586), 49.014 - 69.83, -873.635 - (-748.706)]
            rotation={[-0.004, -0.003, -0.092]}
            scale={[14.007, 3.532, 18.255]}
          />
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('models/villas/techoVilla4.glb')