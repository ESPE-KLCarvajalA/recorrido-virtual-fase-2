
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'
import { BufferGeometry } from 'three'


type GLTFResult = GLTF & {
  nodes: {
    piso_cesped_cerca_del_lab001: THREE.Mesh
  }
  materials: {
    ['Material.112']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped1(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped.glb') as unknown as GLTFResult
  const geom = nodes.piso_cesped_cerca_del_lab001.geometry as BufferGeometry

  const vertices = geom.attributes.position.array as Float32Array
  const indices = geom.index?.array as Uint16Array | Uint32Array

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    type: 'Static',
    position: [422.832, -5.023, -56.592],
  }))

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        geometry={geom}
        material={materials['Material.112']}
        position={[422.832, -5.023, -56.592]}
      />
    </group>
  )
}

useGLTF.preload('models/pisos/pisoCesped.glb')
