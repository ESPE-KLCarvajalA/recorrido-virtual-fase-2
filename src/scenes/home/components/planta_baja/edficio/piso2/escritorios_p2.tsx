import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    a_mesa275: THREE.Mesh
    a_mesa276: THREE.Mesh
    a_mesa277: THREE.Mesh
    a_mesa278: THREE.Mesh
    a_mesa280: THREE.Mesh
    a_mesa281: THREE.Mesh
    a_mesa282: THREE.Mesh
    a_mesa284: THREE.Mesh
    a_mesa271: THREE.Mesh
    a_mesa285: THREE.Mesh
    a_mesa286: THREE.Mesh
    a_mesa279: THREE.Mesh
    a_mesa287: THREE.Mesh
    a_mesa288: THREE.Mesh
    a_mesa289: THREE.Mesh
    a_mesa270: THREE.Mesh
    a_mesa283: THREE.Mesh
    a_mesa290: THREE.Mesh
    a_mesa291: THREE.Mesh
  }
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial
  }
}

export function Escritorios_p2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso2/escritorios_p2.glb`) as GLTFResult;

  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="a_mesa275"
        geometry={nodes.a_mesa275.geometry}
        material={materials.DefaultMaterial}
        position={[140.973, 42.199, -60.719]}
      />
      <mesh
        name="a_mesa276"
        geometry={nodes.a_mesa276.geometry}
        material={materials.DefaultMaterial}
        position={[148.998, 42.199, -77.923]}
      />
      <mesh
        name="a_mesa277"
        geometry={nodes.a_mesa277.geometry}
        material={materials.DefaultMaterial}
        position={[101.761, 42.199, -140.34]}
      />
      <mesh
        name="a_mesa278"
        geometry={nodes.a_mesa278.geometry}
        material={materials.DefaultMaterial}
        position={[101.746, 42.199, -121.768]}
      />
      <mesh
        name="a_mesa280"
        geometry={nodes.a_mesa280.geometry}
        material={materials.DefaultMaterial}
        position={[149.288, 42.405, -94.582]}
      />
      <mesh
        name="a_mesa281"
        geometry={nodes.a_mesa281.geometry}
        material={materials.DefaultMaterial}
        position={[136.717, 42.199, -95.01]}
      />
      <mesh
        name="a_mesa282"
        geometry={nodes.a_mesa282.geometry}
        material={materials.DefaultMaterial}
        position={[148.638, 42.405, -30.973]}
      />
      <mesh
        name="a_mesa284"
        geometry={nodes.a_mesa284.geometry}
        material={materials.DefaultMaterial}
        position={[148.638, 42.405, -48.458]}
      />
      <mesh
        name="a_mesa271"
        geometry={nodes.a_mesa271.geometry}
        material={materials.DefaultMaterial}
        position={[150.042, 42.199, -60.719]}
      />
      <mesh
        name="a_mesa285"
        geometry={nodes.a_mesa285.geometry}
        material={materials.DefaultMaterial}
        position={[140.972, 42.199, -108.435]}
      />
      <mesh
        name="a_mesa286"
        geometry={nodes.a_mesa286.geometry}
        material={materials.DefaultMaterial}
        position={[150.041, 42.199, -108.362]}
      />
      <mesh
        name="a_mesa279"
        geometry={nodes.a_mesa279.geometry}
        material={materials.DefaultMaterial}
        position={[140.972, 42.199, -123.862]}
      />
      <mesh
        name="a_mesa287"
        geometry={nodes.a_mesa287.geometry}
        material={materials.DefaultMaterial}
        position={[150.041, 42.199, -123.788]}
      />
      <mesh
        name="a_mesa288"
        geometry={nodes.a_mesa288.geometry}
        material={materials.DefaultMaterial}
        position={[140.972, 42.199, -138.562]}
      />
      <mesh
        name="a_mesa289"
        geometry={nodes.a_mesa289.geometry}
        material={materials.DefaultMaterial}
        position={[150.041, 42.199, -138.488]}
      />
      <mesh
        name="a_mesa270"
        geometry={nodes.a_mesa270.geometry}
        material={materials.DefaultMaterial}
        position={[103.474, 42.199, -104.323]}
      />
      <mesh
        name="a_mesa283"
        geometry={nodes.a_mesa283.geometry}
        material={materials.DefaultMaterial}
        position={[105.204, 42.199, -87.544]}
      />
      <mesh
        name="a_mesa290"
        geometry={nodes.a_mesa290.geometry}
        material={materials.DefaultMaterial}
        position={[103.474, 42.199, -74.134]}
      />
      <mesh
        name="a_mesa291"
        geometry={nodes.a_mesa291.geometry}
        material={materials.DefaultMaterial}
        position={[103.474, 42.199, -58.741]}
      />
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso2/escritorios_p2.glb`);
