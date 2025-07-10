import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { ConditionalGLTFModel } from '../../../../components/common/ConditionalGLTFModel' // Ajusta según tu ruta

type GLTFResult = GLTF & {
  nodes: {
    Plane107: THREE.Mesh
    Plane107_1: THREE.Mesh
  }
  materials: {
    ['Material.142']: THREE.MeshStandardMaterial
  }
}

export function TechoVilla1(props: ThreeElements['group']) {
  // Centro para el cálculo de distancia de renderizado
  const centerPosition: [number, number, number] = [-768.999, 74.927, -514.194]

  return (
    <ConditionalGLTFModel<GLTFResult>
      url="https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla1.glb"
      position={centerPosition}
      maxDistance={250} // Optimizado según tu performance actual
    >
      {(nodes, materials) => (
        <group {...props} dispose={null}>
          <group
            name="techo013"
            position={[0, 0, 0]} // Posición relativa al centro (era la misma que el centro)
            rotation={[Math.PI, 0, Math.PI]}
            scale={[12.797, 3.519, 31.177]}
          >
            <mesh
              name="Plane107"
              geometry={nodes.Plane107.geometry}
              material={materials['Material.142']}
            />
            <mesh
              name="Plane107_1"
              geometry={nodes.Plane107_1.geometry}
              material={materials['Material.142']}
            />
          </group>
        </group>
      )}
    </ConditionalGLTFModel>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/villas/techoVilla1.glb')