import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
  nodes: {
    Cubo140: THREE.Mesh
    Cubo140_1: THREE.Mesh
    Cubo141: THREE.Mesh
    Cubo141_1: THREE.Mesh
    Cubo256: THREE.Mesh
    Cubo256_1: THREE.Mesh
    marco_puerta003: THREE.Mesh
    Cubo215: THREE.Mesh
    Cubo215_1: THREE.Mesh
    Cubo215_2: THREE.Mesh
    marco_puerta004: THREE.Mesh
    Cubo237: THREE.Mesh
    Cubo237_1: THREE.Mesh
    Cubo237_2: THREE.Mesh
  }
  materials: {
    ['madera paredes']: THREE.MeshStandardMaterial
    ['pared blanca externa']: THREE.MeshStandardMaterial
    ['pared blanca']: THREE.MeshStandardMaterial
    ['plateado columnas']: THREE.MeshStandardMaterial
    ['plateado ascensor']: THREE.MeshStandardMaterial
    barras: THREE.MeshStandardMaterial
  }
}

export function Banios_2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/banios.glb`) as GLTFResult

  const distance = useCameraDistance([-104.047, -9.06, -58.11]);
  if (distance > 370) return null;

  return (
    <group {...props} dispose={null}>
      <group name="aula_base034" position={[-104.047, -9.06, -58.11]}>
        <mesh
          name="Cubo140"
          castShadow
          receiveShadow
          geometry={nodes.Cubo140.geometry}
          material={materials['madera paredes']}
        />
        <mesh
          name="Cubo140_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo140_1.geometry}
          material={materials['pared blanca externa']}
        />
      </group>
      <group name="aula_base015" position={[-41.76, -9.82, -302.316]}>
        <mesh
          name="Cubo141"
          castShadow
          receiveShadow
          geometry={nodes.Cubo141.geometry}
          material={materials['pared blanca']}
        />
        <mesh
          name="Cubo141_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo141_1.geometry}
          material={materials['madera paredes']}
        />
      </group>
      <group name="aula_base019" position={[-40.993, 9.571, -302.122]}>
        <mesh
          name="Cubo256"
          castShadow
          receiveShadow
          geometry={nodes.Cubo256.geometry}
          material={materials['pared blanca']}
        />
        <mesh
          name="Cubo256_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo256_1.geometry}
          material={materials['madera paredes']}
        />
      </group>
      <mesh
        name="marco_puerta003"
        castShadow
        receiveShadow
        geometry={nodes.marco_puerta003.geometry}
        material={materials['plateado columnas']}
        position={[-24.932, 7.659, -285.699]}
      />
      <group name="puerra_ascensor001" position={[-24.949, 7.607, -285.684]}>
        <mesh
          name="Cubo215"
          castShadow
          receiveShadow
          geometry={nodes.Cubo215.geometry}
          material={materials['plateado ascensor']}
        />
        <mesh
          name="Cubo215_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo215_1.geometry}
          material={materials['plateado columnas']}
        />
        <mesh
          name="Cubo215_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo215_2.geometry}
          material={materials.barras}
        />
      </group>
      <mesh
        name="marco_puerta004"
        castShadow
        receiveShadow
        geometry={nodes.marco_puerta004.geometry}
        material={materials['plateado columnas']}
        position={[-24.944, -11.674, -285.702]}
      />
      <group name="puerra_ascensor002" position={[-24.954, -11.738, -285.713]}>
        <mesh
          name="Cubo237"
          castShadow
          receiveShadow
          geometry={nodes.Cubo237.geometry}
          material={materials['plateado ascensor']}
        />
        <mesh
          name="Cubo237_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo237_1.geometry}
          material={materials['plateado columnas']}
        />
        <mesh
          name="Cubo237_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo237_2.geometry}
          material={materials.barras}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/banios.glb`)
