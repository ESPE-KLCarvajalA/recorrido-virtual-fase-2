import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_8002: THREE.Mesh
    Object_10001: THREE.Mesh
    Object_8003: THREE.Mesh
    Object_10002: THREE.Mesh
    Object_8004: THREE.Mesh
    Object_10003: THREE.Mesh
    a_mesa311: THREE.Mesh
    a_mesa314: THREE.Mesh
    a_mesa315: THREE.Mesh
  }
  materials: {
    ['cafe oscuro']: THREE.MeshStandardMaterial
    color_flag1: THREE.MeshStandardMaterial
    DefaultMaterial: THREE.MeshStandardMaterial
  }
}

export function Escritorios_p4(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso4/escritorios_p4.glb`) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object_8002"
        geometry={nodes.Object_8002.geometry}
        material={materials['cafe oscuro']}
        position={[135.542, 85.2, -80.633]}
      />
      <mesh
        name="Object_10001"
        geometry={nodes.Object_10001.geometry}
        material={materials.color_flag1}
        position={[135.63, 84.72, -80.57]}
      />
      <mesh
        name="Object_8003"
        geometry={nodes.Object_8003.geometry}
        material={materials['cafe oscuro']}
        position={[138.413, 85.2, -80.633]}
      />
      <mesh
        name="Object_10002"
        geometry={nodes.Object_10002.geometry}
        material={materials.color_flag1}
        position={[138.501, 84.72, -80.57]}
      />
      <mesh
        name="Object_8004"
        geometry={nodes.Object_8004.geometry}
        material={materials['cafe oscuro']}
        position={[141.524, 85.2, -80.633]}
      />
      <mesh
        name="Object_10003"
        geometry={nodes.Object_10003.geometry}
        material={materials.color_flag1}
        position={[141.612, 84.72, -80.57]}
      />
      <mesh
        name="a_mesa311"
        geometry={nodes.a_mesa311.geometry}
        material={materials.DefaultMaterial}
        position={[146.18, 80.803, -140.34]}
      />
      <mesh
        name="a_mesa314"
        geometry={nodes.a_mesa314.geometry}
        material={materials.DefaultMaterial}
        position={[148.638, 81.009, -48.458]}
      />
      <mesh
        name="a_mesa315"
        geometry={nodes.a_mesa315.geometry}
        material={materials.DefaultMaterial}
        position={[148.066, 80.803, -71.655]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
      />
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso4/escritorios_p4.glb`);
