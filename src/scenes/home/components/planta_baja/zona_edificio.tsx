import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    pared: THREE.Mesh
    columna1001: THREE.Mesh
    columna1002: THREE.Mesh
    alfombra: THREE.Mesh
    Cubo149: THREE.Mesh
    Cubo149_1: THREE.Mesh
    Cubo149_2: THREE.Mesh
    Círculo001: THREE.Mesh
    Círculo001_1: THREE.Mesh
    Círculo001_2: THREE.Mesh
    puerta_gruesa: THREE.Mesh
  }
  materials: {
    ['pared blanca']: THREE.MeshStandardMaterial
    verde: THREE.MeshStandardMaterial
    ['plateado ascensor']: THREE.MeshStandardMaterial
    ['plateado columnas']: THREE.MeshStandardMaterial
    barras: THREE.MeshStandardMaterial
    ['Material.021']: THREE.MeshStandardMaterial
    ['madera paredes']: THREE.MeshStandardMaterial
    ['cafe oscuro']: THREE.MeshStandardMaterial
    ['barras cuartos']: THREE.MeshStandardMaterial
  }
}

export function Zona_edificio(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/zona_edificio.glb`) as GLTFResult

  const [ref1] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [57, 7, 24],
    position: [124.758, 6, -15.748],
  }));

  const distance = useCameraDistance([124.758, 9.376, -15.748]);
  if (distance > 320) return null;

  materials['Material.021'] = new THREE.MeshStandardMaterial({
    color: 0x808080, // Gris
    metalness: 0.8,  // Similar a metal
    roughness: 0.2,  // Brillo moderado
  });

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref1 as React.Ref<THREE.Mesh>} visible={false} />
      <mesh
        name="pared"
        castShadow
        receiveShadow
        geometry={nodes.pared.geometry}
        material={materials['pared blanca']}
        position={[124.758, 9.376, -15.748]}
      />
      <mesh
        name="columna1001"
        castShadow
        receiveShadow
        geometry={nodes.columna1001.geometry}
        material={nodes.columna1001.material}
        position={[152.871, 9.376, -18.628]}
      />
      <mesh
        name="columna1002"
        castShadow
        receiveShadow
        geometry={nodes.columna1002.geometry}
        material={nodes.columna1002.material}
        position={[96.646, 9.376, -18.628]}
      />

      <mesh
        name="alfombra"
        geometry={nodes.alfombra.geometry}
        material={materials.verde}
        position={[124.582, 1.489, -26.437]}
      >
      </mesh>


      <group name="puerra_ascensor" position={[124.581, 7.573, -25.248]}>
        <mesh
          name="Cubo149"
          geometry={nodes.Cubo149.geometry}
          material={materials['plateado ascensor']}
        />
        <mesh
          name="Cubo149_1"
          geometry={nodes.Cubo149_1.geometry}
          material={materials['plateado columnas']}
        >
        </mesh>
        <mesh
          name="Cubo149_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo149_2.geometry}
          material={materials.barras}
        />
      </group>

      <group name="puerta_3" position={[100.074, 7.692, -27.442]}>
        <mesh
          name="Círculo001"
          castShadow
          receiveShadow
          geometry={nodes.Círculo001.geometry}
          material={materials['Material.021']}
        />
        <mesh
          name="Círculo001_1"
          castShadow
          receiveShadow
          geometry={nodes.Círculo001_1.geometry}
          material={materials['madera paredes']}
        />
        <mesh
          name="Círculo001_2"
          castShadow
          receiveShadow
          geometry={nodes.Círculo001_2.geometry}
          material={materials['cafe oscuro']}
        />
      </group>

      <mesh
        name="puerta_gruesa"
        castShadow
        receiveShadow
        geometry={nodes.puerta_gruesa.geometry}
        material={materials['barras cuartos']}
        position={[133.35, 7.692, -27.78]}
      />
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/zona_edificio.glb`)
