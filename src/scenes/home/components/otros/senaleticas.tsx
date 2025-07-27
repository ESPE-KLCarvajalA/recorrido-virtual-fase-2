
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../utils/useCameraDistance'; // Ajusta la ruta si es necesario


type GLTFResult = GLTF & {
  nodes: {
    ta: THREE.Mesh
    p: THREE.Mesh
    ecu: THREE.Mesh
    pro: THREE.Mesh
    medico: THREE.Mesh
    medico001: THREE.Mesh
    ru: THREE.Mesh
  }
  materials: {
    ta: THREE.MeshStandardMaterial
    p: THREE.MeshStandardMaterial
    ecu: THREE.MeshStandardMaterial
    pro: THREE.MeshStandardMaterial
    medico: THREE.MeshStandardMaterial
    ru: THREE.MeshStandardMaterial
  }
}

export function Senaleticas(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/senaleticas.glb') as unknown as GLTFResult
  
  const distance = useCameraDistance([-156.735, 39.121, -0.017]); // Punto de referencia
  if (distance > 600) return null;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        name="ta"
        geometry={nodes.ta.geometry}
        material={materials.ta}
        position={[-156.735, 39.121, -0.017]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={3.572}
      />
      <mesh
        name="p"
        geometry={nodes.p.geometry}
        material={materials.p}
        position={[-231.06, 36.407, 0.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[20.274, 17.253, 19.167]}
      />
      <mesh
        name="ecu"
        geometry={nodes.ecu.geometry}
        material={materials.ecu}
        position={[-109.17, 43.181, 0.102]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={9.71}
      />
      <mesh
        name="pro"
        geometry={nodes.pro.geometry}
        material={materials.pro}
        position={[-109.036, 33.33, 0.072]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={7.127}
      />
      <mesh
        name="medico"
        geometry={nodes.medico.geometry}
        material={materials.medico}
        position={[230.052, 44.841, 0.032]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={6.143}
      />
      <mesh
        name="medico001"
        geometry={nodes.medico001.geometry}
        material={materials.medico}
        position={[302.165, 43.888, -127.938]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={6.143}
      />
      <mesh
        name="ru"
        geometry={nodes.ru.geometry}
        material={materials.ru}
        position={[334.524, 43.251, -499.32]}
        rotation={[Math.PI / 2, 0, 0.927]}
        scale={5.149}
      />
    </group>
  )
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/otros/senaleticas.glb')