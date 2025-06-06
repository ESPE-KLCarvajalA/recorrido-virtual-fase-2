import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
  nodes: {
    a_mesa044: THREE.Mesh
    a_mesa045: THREE.Mesh
    a_mesa248: THREE.Mesh
    a_mesa253: THREE.Mesh
    a_mesa254: THREE.Mesh
    ['Object001_Material_#1_0001']: THREE.Mesh
    a_mesa255: THREE.Mesh
    a_mesa256: THREE.Mesh
    a_mesa257: THREE.Mesh
    a_mesa258: THREE.Mesh
    a_mesa259: THREE.Mesh
    a_mesa260: THREE.Mesh
    a_mesa261: THREE.Mesh
  }
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial
    Material_1: THREE.MeshStandardMaterial
  }
}
export function Escritorios(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/escritorios.glb`) as GLTFResult;

  
  return (
    <group {...props} dispose={null}>
    <mesh
      name="a_mesa044"
      geometry={nodes.a_mesa044.geometry}
      material={materials.DefaultMaterial}
      position={[104.586, 3.58, -109.648]}
      scale={1.052}
    />
    <mesh
      name="a_mesa045"
      geometry={nodes.a_mesa045.geometry}
      material={materials.DefaultMaterial}
      position={[100.629, 3.786, -89.589]}
      scale={1.155}
    />
    <mesh
      name="a_mesa248"
      geometry={nodes.a_mesa248.geometry}
      material={materials.DefaultMaterial}
      position={[148.859, 3.786, -61.864]}
      rotation={[0, 1.571, 0]}
      scale={1.155}
    />
    <mesh
      name="a_mesa253"
      geometry={nodes.a_mesa253.geometry}
      material={materials.DefaultMaterial}
      position={[136.288, 3.58, -62.292]}
      rotation={[0, 1.571, 0]}
      scale={1.052}
    />
    <mesh
      name="a_mesa254"
      geometry={nodes.a_mesa254.geometry}
      material={materials.DefaultMaterial}
      position={[148.998, 3.58, -77.923]}
      rotation={[-Math.PI, 0, -Math.PI]}
      scale={1.052}
    />
    <mesh
      name="Object001_Material_#1_0001"
      geometry={nodes['Object001_Material_#1_0001'].geometry}
      material={materials.Material_1}
      position={[113.972, 3.455, -124.797]}
      rotation={[-1.571, -0.022, 1.574]}
      scale={[0.038, 0.038, 0.011]}
    />
    <mesh
      name="a_mesa255"
      geometry={nodes.a_mesa255.geometry}
      material={materials.DefaultMaterial}
      position={[101.761, 3.58, -140.34]}
      rotation={[0, -1.571, 0]}
      scale={1.052}
    />
    <mesh
      name="a_mesa256"
      geometry={nodes.a_mesa256.geometry}
      material={materials.DefaultMaterial}
      position={[101.761, 3.58, -121.768]}
      rotation={[-Math.PI, 1.56, -Math.PI]}
      scale={1.052}
    />
    <mesh
      name="a_mesa257"
      geometry={nodes.a_mesa257.geometry}
      material={materials.DefaultMaterial}
      position={[148.859, 3.786, -118.708]}
      rotation={[0, 1.571, 0]}
      scale={1.155}
    />
    <mesh
      name="a_mesa258"
      geometry={nodes.a_mesa258.geometry}
      material={materials.DefaultMaterial}
      position={[140.137, 3.786, -118.708]}
      rotation={[0, 1.571, 0]}
      scale={1.155}
    />
    <mesh
      name="a_mesa259"
      geometry={nodes.a_mesa259.geometry}
      material={materials.DefaultMaterial}
      position={[147.251, 3.58, -139.451]}
      rotation={[Math.PI, -0.018, Math.PI]}
      scale={1.052}
    />
    <mesh
      name="a_mesa260"
      geometry={nodes.a_mesa260.geometry}
      material={materials.DefaultMaterial}
      position={[136.717, 3.786, -107.323]}
      rotation={[0, -1.571, 0]}
      scale={1.155}
    />
    <mesh
      name="a_mesa261"
      geometry={nodes.a_mesa261.geometry}
      material={materials.DefaultMaterial}
      position={[149.288, 3.58, -106.895]}
      rotation={[0, -1.571, 0]}
      scale={1.052}
    />
  </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/escritorios.glb`);
