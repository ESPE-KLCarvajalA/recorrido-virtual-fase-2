import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pared_frente013: THREE.Mesh
    pared_frente014: THREE.Mesh
    pared_frente015: THREE.Mesh
    pared_frente016: THREE.Mesh
    pared_vidrio_1019: THREE.Mesh
    Cubo465: THREE.Mesh
    Cubo465_1: THREE.Mesh
    Cubo468: THREE.Mesh
    Cubo468_1: THREE.Mesh
    pared_vidrio_1018: THREE.Mesh
    Cubo471: THREE.Mesh
    Cubo471_1: THREE.Mesh
    Cubo476: THREE.Mesh
    Cubo476_1: THREE.Mesh
    pared_vidrio_1020: THREE.Mesh
  }
  materials: {
    ['pared blanca']: THREE.MeshStandardMaterial
    ['barras cuartos.001']: THREE.MeshStandardMaterial
    techo: THREE.MeshStandardMaterial
    ['vidrio sala']: THREE.MeshStandardMaterial
    ['madera paredes']: THREE.MeshStandardMaterial
    ['plateado columnas']: THREE.MeshStandardMaterial
  }
}


export function Paredes_p4(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso4/paredes_p4.glb`) as GLTFResult

    materials['vidrio sala'] = new THREE.MeshStandardMaterial({
        color: 'white',
        opacity: 0.15,
        transparent: true,
        roughness: 0.8,
        metalness: 0.1,
    });

    return (
      <group {...props} dispose={null}>
        <mesh
          name="pared_frente013"
          geometry={nodes.pared_frente013.geometry}
          material={materials['pared blanca']}
          position={[124.694, 86.001, -25.882]}
        />
        <mesh
          name="pared_frente014"
          geometry={nodes.pared_frente014.geometry}
          material={materials['pared blanca']}
          position={[117.173, 86.614, -39.493]}
        />
        <mesh
          name="pared_frente015"
          geometry={nodes.pared_frente015.geometry}
          material={materials['pared blanca']}
          position={[106.731, 86.614, -53.104]}
        />
        <mesh
          name="pared_frente016"
          geometry={nodes.pared_frente016.geometry}
          material={materials['pared blanca']}
          position={[142.78, 86.614, -54.898]}
        />
        <mesh
          name="pared_vidrio_1019"
          geometry={nodes.pared_vidrio_1019.geometry}
          material={materials['barras cuartos.001']}
          position={[97.049, 87.495, -84.087]}
        />
        <group name="a_1_export064" position={[131.612, 86.599, -75.943]}>
          <mesh name="Cubo465" geometry={nodes.Cubo465.geometry} material={materials.techo} />
          <mesh
            name="Cubo465_1"
            geometry={nodes.Cubo465_1.geometry}
            material={materials['vidrio sala']}
          />
        </group>
        <group name="columna1072" position={[142.85, 86.599, -84.068]}>
          <mesh
            name="Cubo468"
            geometry={nodes.Cubo468.geometry}
            material={materials['madera paredes']}
          />
          <mesh
            name="Cubo468_1"
            geometry={nodes.Cubo468_1.geometry}
            material={materials['plateado columnas']}
          />
        </group>
        <mesh
          name="pared_vidrio_1018"
          geometry={nodes.pared_vidrio_1018.geometry}
          material={materials['barras cuartos.001']}
          position={[97.049, 87.495, -113.187]}
        />
        <group name="a_1_export067" position={[138.316, 86.599, -42.801]}>
          <mesh name="Cubo471" geometry={nodes.Cubo471.geometry} material={materials.techo} />
          <mesh
            name="Cubo471_1"
            geometry={nodes.Cubo471_1.geometry}
            material={materials['vidrio sala']}
          />
        </group>
        <group name="a_1_export072" position={[106.386, 86.606, -83.233]}>
          <mesh name="Cubo476" geometry={nodes.Cubo476.geometry} material={materials.techo} />
          <mesh
            name="Cubo476_1"
            geometry={nodes.Cubo476_1.geometry}
            material={materials['vidrio sala']}
          />
        </group>
      </group>
    )
  }

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso4/paredes_p4.glb`)
