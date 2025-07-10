import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta la ruta según tu estructura

type GLTFResult = GLTF & {
  nodes: {
    pared_vertical_2017: THREE.Mesh
    pared_vertical_2025: THREE.Mesh
    Plane114: THREE.Mesh
    Plane114_1: THREE.Mesh
  }
  materials: {
    ['Material.066']: THREE.MeshStandardMaterial
    ['Material.156']: THREE.MeshStandardMaterial
    ['Material.157']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla6(props: ThreeElements['group']) {
  // Centro aproximado del modelo para el cálculo de distancia
  const centerPosition: [number, number, number] = [-509.625, 36.268, -446.305]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="models/villas/techoVilla6.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <mesh
            name="pared_vertical_2017"
            geometry={nodes.pared_vertical_2017.geometry}
            material={materials['Material.066']}
            position={[138.632, 17.884, 1.995]} // Relativo: [-370.993 - (-509.625), 54.152 - 36.268, -444.31 - (-446.305)]
            scale={[0.581, 0.688, 1.032]}
          />
          <mesh
            name="pared_vertical_2025"
            geometry={nodes.pared_vertical_2025.geometry}
            material={materials['Material.066']}
            position={[-62.804, 17.024, 32.441]} // Relativo: [-572.429 - (-509.625), 53.292 - 36.268, -413.864 - (-446.305)]
            rotation={[Math.PI, 0, Math.PI]}
            scale={[1, 0.651, 1.125]}
          />
          <group
            name="techo025"
            position={[0, 0, 0]} // Relativo: [-509.625 - (-509.625), 36.268 - 36.268, -446.305 - (-446.305)]
            rotation={[0, -1.571, 0]}
            scale={[12.797, 3.519, 23.436]}
          >
            <mesh
              name="Plane114"
              geometry={nodes.Plane114.geometry}
              material={materials['Material.156']}
            />
            <mesh
              name="Plane114_1"
              geometry={nodes.Plane114_1.geometry}
              material={materials['Material.157']}
            />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('models/villas/techoVilla6.glb')