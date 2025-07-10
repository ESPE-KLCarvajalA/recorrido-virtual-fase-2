import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta la ruta si es necesario

type GLTFResult = GLTF & {
  nodes: {
    Plane106: THREE.Mesh
    Plane106_1: THREE.Mesh
  }
  materials: {
    ['Material.142']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla2(props: ThreeElements['group']) {
  // Centro para el cálculo de distancia de renderizado
  const centerPosition: [number, number, number] = [-778.392, 74.388, -797.53]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla2.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <group
            name="techo011"
            position={[0, 0, 0]} // Posición relativa al centro (era la misma que el centro)
            rotation={[Math.PI, 0, Math.PI]}
            scale={[12.797, 3.519, 29.831]}>
            <mesh
              name="Plane106"
              geometry={nodes.Plane106.geometry}
              material={materials['Material.142']}
            />
            <mesh
              name="Plane106_1"
              geometry={nodes.Plane106_1.geometry}
              material={materials['Material.142']}
            />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla2.glb')