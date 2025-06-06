import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Cubo246: THREE.Mesh
    Cubo246_1: THREE.Mesh
    Cubo246_2: THREE.Mesh
    Cubo246_3: THREE.Mesh
    Cubo246_4: THREE.Mesh
    Cubo246_5: THREE.Mesh
    Cubo246_6: THREE.Mesh
    Cubo245: THREE.Mesh
    Cubo245_1: THREE.Mesh
    Cubo245_2: THREE.Mesh
    Cubo245_3: THREE.Mesh
    Cubo245_4: THREE.Mesh
  }
  materials: {
    ['madera paredes']: THREE.MeshStandardMaterial
    vidrio: THREE.MeshStandardMaterial
    ['madera clara 2']: THREE.MeshStandardMaterial
    ['barras cuartos']: THREE.MeshStandardMaterial
    ['pared blanca']: THREE.MeshStandardMaterial
    ['piso aulas']: THREE.MeshStandardMaterial
  }
}

export function Aula_a1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_a1.glb`) as GLTFResult
  materials.vidrio = new THREE.MeshStandardMaterial({
    color: 'white',
    opacity: 0.15,
    transparent: true,
    roughness: 0.7,
    metalness: 0.1,
  });
  const distance = useCameraDistance([3.526, 10.484, -495.336]);

  if (distance > 350) return null;
  return (
    <group {...props} dispose={null}>
    <group name="aula_ultima" position={[3.576, 10.484, -495.373]}>
      <mesh
        name="Cubo246"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246.geometry}
        material={materials['madera paredes']}
      />
      <mesh
        name="Cubo246_1"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246_1.geometry}
        material={materials.vidrio}
      />
      <mesh
        name="Cubo246_2"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246_2.geometry}
        material={materials['madera clara 2']}
      />
      <mesh
        name="Cubo246_3"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246_3.geometry}
        material={materials['barras cuartos']}
      />
      <mesh
        name="Cubo246_4"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246_4.geometry}
        material={materials['pared blanca']}
      />
      <mesh
        name="Cubo246_5"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246_5.geometry}
        material={materials.vidrio}
      />
      <mesh
        name="Cubo246_6"
        castShadow
        receiveShadow
        geometry={nodes.Cubo246_6.geometry}
        material={materials['piso aulas']}
      />
    </group>
    <group name="aula_ultima_2" position={[13.016, 10.485, -522.196]}>
      <mesh
        name="Cubo245"
        castShadow
        receiveShadow
        geometry={nodes.Cubo245.geometry}
        material={materials['pared blanca']}
      />
      <mesh
        name="Cubo245_1"
        castShadow
        receiveShadow
        geometry={nodes.Cubo245_1.geometry}
        material={materials['madera paredes']}
      />
      <mesh
        name="Cubo245_2"
        castShadow
        receiveShadow
        geometry={nodes.Cubo245_2.geometry}
        material={materials['barras cuartos']}
      />
      <mesh
        name="Cubo245_3"
        castShadow
        receiveShadow
        geometry={nodes.Cubo245_3.geometry}
        material={materials.vidrio}
      />
      <mesh
        name="Cubo245_4"
        castShadow
        receiveShadow
        geometry={nodes.Cubo245_4.geometry}
        material={materials['piso aulas']}
      />
    </group>
  </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/aula_a1.glb`)
