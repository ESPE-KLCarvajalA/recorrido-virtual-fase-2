import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
  nodes: {
    a_mesa263: THREE.Mesh
    a_mesa264: THREE.Mesh
    a_mesa265: THREE.Mesh
    a_mesa266: THREE.Mesh
    ['Object001_Material_#1_0003']: THREE.Mesh
    a_mesa267: THREE.Mesh
    a_mesa268: THREE.Mesh
    a_mesa269: THREE.Mesh
    a_mesa272: THREE.Mesh
    a_mesa273: THREE.Mesh
    a_mesa274: THREE.Mesh
    a_mesa262: THREE.Mesh
  }
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial
    Material_1: THREE.MeshStandardMaterial
  }
}

export function Escritorios_p1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso1/escritorios_p1.glb`) as GLTFResult;

  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="a_mesa263"
        geometry={nodes.a_mesa263.geometry}
        material={materials.DefaultMaterial}
        position={[113.596, 23.096, -107.629]}
        scale={1.155}
      />
      <mesh
        name="a_mesa264"
        geometry={nodes.a_mesa264.geometry}
        material={materials.DefaultMaterial}
        position={[148.859, 23.096, -61.864]}
        rotation={[0, 1.571, 0]}
        scale={1.155}
      />
      <mesh
        name="a_mesa265"
        geometry={nodes.a_mesa265.geometry}
        material={materials.DefaultMaterial}
        position={[136.288, 22.89, -62.292]}
        rotation={[0, 1.571, 0]}
        scale={1.052}
      />
      <mesh
        name="a_mesa266"
        geometry={nodes.a_mesa266.geometry}
        material={materials.DefaultMaterial}
        position={[148.998, 22.89, -77.923]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.052}
      />
      <mesh
        name="Object001_Material_#1_0003"
        geometry={nodes['Object001_Material_#1_0003'].geometry}
        material={materials.Material_1}
        position={[108.14, 22.765, -70.905]}
        rotation={[-1.571, -0.022, 1.574]}
        scale={[0.038, 0.038, 0.011]}
      />
      <mesh
        name="a_mesa267"
        geometry={nodes.a_mesa267.geometry}
        material={materials.DefaultMaterial}
        position={[101.761, 22.89, -140.34]}
        rotation={[0, -1.571, 0]}
        scale={1.052}
      />
      <mesh
        name="a_mesa268"
        geometry={nodes.a_mesa268.geometry}
        material={materials.DefaultMaterial}
        position={[101.761, 22.89, -121.768]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={1.052}
      />
      <mesh
        name="a_mesa269"
        geometry={nodes.a_mesa269.geometry}
        material={materials.DefaultMaterial}
        position={[148.859, 23.096, -124.472]}
        rotation={[0, 1.571, 0]}
        scale={1.155}
      />
      <mesh
        name="a_mesa272"
        geometry={nodes.a_mesa272.geometry}
        material={materials.DefaultMaterial}
        position={[149.288, 23.096, -96.263]}
        rotation={[0, 1.571, 0]}
        scale={1.155}
      />
      <mesh
        name="a_mesa273"
        geometry={nodes.a_mesa273.geometry}
        material={materials.DefaultMaterial}
        position={[136.717, 22.89, -96.692]}
        rotation={[0, 1.571, 0]}
        scale={1.052}
      />
      <mesh
        name="a_mesa274"
        geometry={nodes.a_mesa274.geometry}
        material={materials.DefaultMaterial}
        position={[148.638, 23.096, -30.936]}
        rotation={[-Math.PI, 1.558, -Math.PI]}
        scale={1.155}
      />
      <mesh
        name="a_mesa262"
        geometry={nodes.a_mesa262.geometry}
        material={materials.DefaultMaterial}
        position={[113.596, 23.096, -90.439]}
        rotation={[0, -1.571, 0]}
        scale={1.155}
      />
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso1/escritorios_p1.glb`);
