import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
// import { useBox } from '@react-three/cannon'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
    nodes: {
      Cube079: THREE.Mesh
      Cube079_1: THREE.Mesh
    }
    materials: {
      ['Material.051']: THREE.MeshStandardMaterial
      ['MDF Concrete decor Arauco']: THREE.MeshStandardMaterial
    }
  }

export function PisoTriangulo(props: ThreeElements['group']) {
    const { nodes, materials } = useGLTF('models/pisos/pisoTriangulo.glb') as unknown as GLTFResult

    

    return (
        <group {...props} dispose={null}>
          <group name="triangulo" position={[-156.257, -0.05, 292.311]}>
            <mesh
              name="Cube079"
              geometry={nodes.Cube079.geometry}
              material={materials['Material.051']}
            />
            <mesh
              name="Cube079_1"
              geometry={nodes.Cube079_1.geometry}
              material={materials['MDF Concrete decor Arauco']}
            />
          </group>
        </group>
      )
    }
    

useGLTF.preload('models/pisos/pisoTriangulo.glb')