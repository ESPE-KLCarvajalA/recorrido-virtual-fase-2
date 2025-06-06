import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['Object001_Material_#1_0002']: THREE.Mesh
    a_mesa293: THREE.Mesh
    a_mesa294: THREE.Mesh
    a_mesa296: THREE.Mesh
    a_mesa298: THREE.Mesh
    a_mesa299: THREE.Mesh
    a_mesa300: THREE.Mesh
    a_mesa307: THREE.Mesh
    a_mesa308: THREE.Mesh
    a_mesa309: THREE.Mesh
  }
  materials: {
    Material_1: THREE.MeshStandardMaterial
    DefaultMaterial: THREE.MeshStandardMaterial
  }
}

export function Escritorios_p3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso3/escritorios_p3.glb`) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object001_Material_#1_0002"
        geometry={nodes['Object001_Material_#1_0002'].geometry}
        material={materials.Material_1}
        position={[142.349, 61.366, -134.228]}
      />
      <mesh
        name="a_mesa293"
        geometry={nodes.a_mesa293.geometry}
        material={materials.DefaultMaterial}
        position={[143.476, 61.509, -84.449]}
      />
      <mesh
        name="a_mesa294"
        geometry={nodes.a_mesa294.geometry}
        material={materials.DefaultMaterial}
        position={[101.761, 61.509, -140.34]}
      />
      <mesh
        name="a_mesa296"
        geometry={nodes.a_mesa296.geometry}
        material={materials.DefaultMaterial}
        position={[149.288, 61.715, -94.582]}
      />
      <mesh
        name="a_mesa298"
        geometry={nodes.a_mesa298.geometry}
        material={materials.DefaultMaterial}
        position={[148.638, 61.715, -30.973]}
      />
      <mesh
        name="a_mesa299"
        geometry={nodes.a_mesa299.geometry}
        material={materials.DefaultMaterial}
        position={[148.638, 61.715, -48.458]}
      />
      <mesh
        name="a_mesa300"
        geometry={nodes.a_mesa300.geometry}
        material={materials.DefaultMaterial}
        position={[150.042, 61.509, -68.934]}
      />
      <mesh
        name="a_mesa307"
        geometry={nodes.a_mesa307.geometry}
        material={materials.DefaultMaterial}
        position={[103.474, 61.509, -104.323]}
      />
      <mesh
        name="a_mesa308"
        geometry={nodes.a_mesa308.geometry}
        material={materials.DefaultMaterial}
        position={[105.204, 61.509, -87.544]}
      />
      <mesh
        name="a_mesa309"
        geometry={nodes.a_mesa309.geometry}
        material={materials.DefaultMaterial}
        position={[103.474, 61.509, -75.23]}
      />
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso3/escritorios_p3.glb`);
