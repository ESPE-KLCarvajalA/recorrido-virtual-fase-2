import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cilindro002: THREE.Mesh
  }
  materials: {
    barras: THREE.MeshStandardMaterial
  }
}

export function Pasamanos(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/pasamanos/pasamanos.glb`) as GLTFResult

    const [] = useBox(() => ({
      type: 'Static',
      mass: 1,
      args: [0.5, 5, 250],
      rotation: [0, -0.25, 0],
      position: [35, 5, -420],
    }));


    const [] = useBox(() => ({
      type: 'Static',
      mass: 1,
      args: [0.5, 5, 477],
      rotation: [0, -0.245, 0],
      position: [-78, 5, -327],
    }));

    const [] = useBox(() => ({
      type: 'Static',
      mass: 1,
      args: [0.5, 5, 234.5],
      rotation: [0, -0.248, 0],
      position: [-29.5, 5, -164],
    }));

    const [] = useBox(() => ({
      type: 'Static',
      mass: 1,
      args: [65, 5, 0.5],
      rotation: [0, -0.248, 0],
      position: [30, 5, -271],
    }));

    const [] = useBox(() => ({
      type: 'Static',
      mass: 1,
      args: [65, 5, 0.5],
      rotation: [0, -0.248, 0],
      position: [36, 5, -291],
    }));

    const [] = useBox(() => ({
      type: 'Static',
      mass: 1,
      args: [40, 5, 0.5],
      rotation: [0, 0, 0],
      position: [-38, 5, -50],
    }));


  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cilindro002"
        geometry={nodes.Cilindro002.geometry}
        material={materials.barras}
        position={[-33.44, 4.739, -303.897]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/pasamanos/pasamanos.glb`)
