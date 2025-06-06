import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Cubo360: THREE.Mesh
    Cubo360_1: THREE.Mesh
    Cubo360_2: THREE.Mesh
    pared_derecha002: THREE.Mesh
    Cubo370: THREE.Mesh
    Cubo370_1: THREE.Mesh
    Cubo370_2: THREE.Mesh
    columna1019: THREE.Mesh
    Cubo378: THREE.Mesh
    Cubo378_1: THREE.Mesh
    Cubo384: THREE.Mesh
    Cubo384_1: THREE.Mesh
    Cubo385: THREE.Mesh
    Cubo385_1: THREE.Mesh
    Cubo386: THREE.Mesh
    Cubo386_1: THREE.Mesh
    Cubo387: THREE.Mesh
    Cubo387_1: THREE.Mesh
  }
  materials: {
    ['plateado columnas']: THREE.MeshStandardMaterial
    ['madera clara 2']: THREE.MeshStandardMaterial
    ['madera paredes']: THREE.MeshStandardMaterial
    ['pared blanca']: THREE.MeshStandardMaterial
    ['barras cuartos']: THREE.MeshStandardMaterial
    vidrio: THREE.MeshBasicMaterial
  }
}

export function Taller(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/taller.glb`) as GLTFResult

  const [] = useBox(() => ({
    type: 'Static',
    mass: 1,
    args: [36, 7, 22],
    position: [195, 6, -14.82],
  }));

  const distance = useCameraDistance([174.756, 9.376, -5.95]);
  if (distance > 270) return null;


  materials.vidrio = new THREE.MeshBasicMaterial({
    color: 'white',
    opacity: 0.9,
    transparent: true,
    fog: true,
  });

  
  materials['madera clara 2'].roughness = 0.8;
  materials['madera paredes'].roughness = 0.8;

  return (
    <group {...props} dispose={null}>
      <group name="columna1016" position={[174.756, 9.376, -5.72]}>
        <mesh
          name="Cubo360"
          castShadow
          receiveShadow
          geometry={nodes.Cubo360.geometry}
          material={materials['plateado columnas']}
        />
        <mesh
          name="Cubo360_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo360_1.geometry}
          material={materials['madera clara 2']}
        />
        <mesh
          name="Cubo360_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo360_2.geometry}
          material={materials['madera paredes']}
        />
      </group>
      <mesh
        name="pared_derecha002"
        castShadow
        receiveShadow
        geometry={nodes.pared_derecha002.geometry}
        material={materials['pared blanca']}
        position={[212.812, 9.376, -17.001]}
      />
      <group name="columna1018" position={[174.756, 9.376, -25.586]}>
        <mesh
          name="Cubo370"
          castShadow
          receiveShadow
          geometry={nodes.Cubo370.geometry}
          material={materials['plateado columnas']}
        />
        <mesh
          name="Cubo370_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo370_1.geometry}
          material={materials['madera paredes']}
        />
        <mesh
          name="Cubo370_2"
          castShadow
          receiveShadow
          geometry={nodes.Cubo370_2.geometry}
          material={materials['madera clara 2']}
        />
      </group>
      <mesh
        name="columna1019"
        castShadow
        receiveShadow
        geometry={nodes.columna1019.geometry}
        material={materials['pared blanca']}
        position={[212.12, 9.376, -5.72]}
      />
      <group name="pared_frente006" position={[196.736, 9.376, -4.184]}>
        <mesh
          name="Cubo378"
          castShadow
          receiveShadow
          geometry={nodes.Cubo378.geometry}
          material={materials['barras cuartos']}
        />
        <mesh
          name="Cubo378_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo378_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group
        name="pared_frente012"
        position={[193.816, 9.376, -27.103]}
        rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          name="Cubo384"
          castShadow
          receiveShadow
          geometry={nodes.Cubo384.geometry}
          material={materials['barras cuartos']}
        />
        <mesh
          name="Cubo384_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo384_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group name="pared_frente002" position={[175.647, 7.542, -19.854]}>
        <mesh
          name="Cubo385"
          castShadow
          receiveShadow
          geometry={nodes.Cubo385.geometry}
          material={materials['barras cuartos']}
        />
        <mesh
          name="Cubo385_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo385_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group name="pared_frente003" position={[175.439, 7.542, -11.452]}>
        <mesh
          name="Cubo386"
          castShadow
          receiveShadow
          geometry={nodes.Cubo386.geometry}
          material={materials['barras cuartos']}
        />
        <mesh
          name="Cubo386_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo386_1.geometry}
          material={materials.vidrio}
        />
      </group>
      <group name="pared_frente005" position={[175.439, 15.442, -15.653]}>
        <mesh
          name="Cubo387"
          castShadow
          receiveShadow
          geometry={nodes.Cubo387.geometry}
          material={materials['barras cuartos']}
        />
        <mesh
          name="Cubo387_1"
          castShadow
          receiveShadow
          geometry={nodes.Cubo387_1.geometry}
          material={materials.vidrio}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/taller.glb`)
