import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    barra_suelo_0: THREE.Mesh
    barra_suelo_2: THREE.Mesh
    barra_suelo_1: THREE.Mesh
    barra_suelo_3: THREE.Mesh
  }
  materials: {
    ['barras cuartos.001']: THREE.MeshStandardMaterial
  }
}

export function Barras_suelo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/barras_suelo.glb`) as GLTFResult

  const [ref1] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [1, 7, 20],
    position: [70.659, 6, 12.6],
  }));
  const [ref2] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [7, 1, 140], 
    position: [1.5, 6, -31.774],
    rotation: [-Math.PI / 2, Math.PI / 2, 0],
  }));
  const [ref3] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [7, 1, 208], 
    position: [-34, 6, 23.109],
    rotation: [-Math.PI / 2, Math.PI / 2, 0],
  }));
  const [ref4] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [1, 7, 19], 
    position: [-114.389, 6, 12.8],
  }));

  return (
    <group {...props} dispose={null}>
        <mesh ref={ref1 as React.Ref<THREE.Mesh>} visible={false} />
        <mesh ref={ref2 as React.Ref<THREE.Mesh>} visible={false} />
        <mesh ref={ref3 as React.Ref<THREE.Mesh>} visible={false} />
        <mesh ref={ref4 as React.Ref<THREE.Mesh>} visible={false} />

      <mesh
        name="barra_suelo_0"
        castShadow
        receiveShadow
        geometry={nodes.barra_suelo_0.geometry}
        material={materials['barras cuartos.001']}
        position={[70.659, 1.81, 13.247]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.631, 5.699, 0.631]}
      />
      <mesh
        name="barra_suelo_2"
        castShadow
        receiveShadow
        geometry={nodes.barra_suelo_2.geometry}
        material={materials['barras cuartos.001']}
        position={[7.476, 1.81, -32.774]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.631, 5.699, 0.631]}
      />
      <mesh
        name="barra_suelo_1"
        castShadow
        receiveShadow
        geometry={nodes.barra_suelo_1.geometry}
        material={materials['barras cuartos.001']}
        position={[-34.001, 1.81, 23.109]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.631, 5.699, 0.631]}
      />
      <mesh
        name="barra_suelo_3"
        castShadow
        receiveShadow
        geometry={nodes.barra_suelo_3.geometry}
        material={materials['barras cuartos.001']}
        position={[-114.389, 1.81, 13.247]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.631, 5.699, 0.631]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/sala_profesores/paredes/barras_suelo.glb`)