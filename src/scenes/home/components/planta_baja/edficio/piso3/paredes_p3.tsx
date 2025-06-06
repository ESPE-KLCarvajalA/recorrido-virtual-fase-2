import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pared_frente009: THREE.Mesh
    pared_frente010: THREE.Mesh
    pared_frente011: THREE.Mesh
    pared_frente012: THREE.Mesh
    pared_vidrio_1014: THREE.Mesh
    Cubo402: THREE.Mesh
    Cubo402_1: THREE.Mesh
    Cubo426: THREE.Mesh
    Cubo426_1: THREE.Mesh
    Cubo427: THREE.Mesh
    Cubo427_1: THREE.Mesh
    Cubo428: THREE.Mesh
    Cubo428_1: THREE.Mesh
    Cubo429: THREE.Mesh
    Cubo429_1: THREE.Mesh
    Cubo430: THREE.Mesh
    Cubo430_1: THREE.Mesh
    Cubo432: THREE.Mesh
    Cubo432_1: THREE.Mesh
    Cubo433: THREE.Mesh
    Cubo433_1: THREE.Mesh
    Cubo434: THREE.Mesh
    Cubo434_1: THREE.Mesh
    Cubo438: THREE.Mesh
    Cubo438_1: THREE.Mesh
    Cubo439: THREE.Mesh
    Cubo439_1: THREE.Mesh
    Cubo440: THREE.Mesh
    Cubo440_1: THREE.Mesh
    Cubo444: THREE.Mesh
    Cubo444_1: THREE.Mesh
    Cubo445: THREE.Mesh
    Cubo445_1: THREE.Mesh
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

export function Paredes_p3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso3/paredes_p3.glb`) as GLTFResult

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
        name="pared_frente009"
        geometry={nodes.pared_frente009.geometry}
        material={materials['pared blanca']}
        position={[124.694, 66.692, -25.882]}
      />
      <mesh
        name="pared_frente010"
        geometry={nodes.pared_frente010.geometry}
        material={materials['pared blanca']}
        position={[117.173, 67.304, -39.493]}
      />
      <mesh
        name="pared_frente011"
        geometry={nodes.pared_frente011.geometry}
        material={materials['pared blanca']}
        position={[106.731, 67.304, -53.104]}
      />
      <mesh
        name="pared_frente012"
        geometry={nodes.pared_frente012.geometry}
        material={materials['pared blanca']}
        position={[142.78, 67.304, -54.898]}
      />
      <mesh
        name="pared_vidrio_1014"
        geometry={nodes.pared_vidrio_1014.geometry}
        material={materials['barras cuartos.001']}
        position={[97.049, 68.2, -84.087]}
      />
      <group name="a_1_export039" position={[108.508, 67.312, -113.959]}>
        <mesh name="Cubo402" geometry={nodes.Cubo402.geometry} material={materials.techo} />
        <mesh
          name="Cubo402_1"
          geometry={nodes.Cubo402_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export040" position={[131.612, 67.304, -63.037]}>
        <mesh name="Cubo426" geometry={nodes.Cubo426.geometry} material={materials.techo} />
        <mesh
          name="Cubo426_1"
          geometry={nodes.Cubo426_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export041" position={[118.218, 67.304, -126.99]}>
        <mesh name="Cubo427" geometry={nodes.Cubo427.geometry} material={materials.techo} />
        <mesh
          name="Cubo427_1"
          geometry={nodes.Cubo427_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export042" position={[131.612, 67.304, -100.704]}>
        <mesh name="Cubo428" geometry={nodes.Cubo428.geometry} material={materials.techo} />
        <mesh
          name="Cubo428_1"
          geometry={nodes.Cubo428_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="columna1062" position={[142.85, 67.304, -89.396]}>
        <mesh
          name="Cubo429"
          geometry={nodes.Cubo429.geometry}
          material={materials['madera paredes']}
        />
        <mesh
          name="Cubo429_1"
          geometry={nodes.Cubo429_1.geometry}
          material={materials['plateado columnas']}
        />
      </group>
      <group name="columna1067" position={[142.85, 67.304, -118.496]}>
        <mesh
          name="Cubo430"
          geometry={nodes.Cubo430.geometry}
          material={materials['madera paredes']}
        />
        <mesh
          name="Cubo430_1"
          geometry={nodes.Cubo430_1.geometry}
          material={materials['plateado columnas']}
        />
      </group>
      <group name="a_1_export043" position={[138.316, 67.304, -37.979]}>
        <mesh name="Cubo432" geometry={nodes.Cubo432.geometry} material={materials.techo} />
        <mesh
          name="Cubo432_1"
          geometry={nodes.Cubo432_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export044" position={[142.899, 67.312, -73.878]}>
        <mesh name="Cubo433" geometry={nodes.Cubo433.geometry} material={materials.techo} />
        <mesh
          name="Cubo433_1"
          geometry={nodes.Cubo433_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export045" position={[131.612, 67.304, -78.808]}>
        <mesh name="Cubo434" geometry={nodes.Cubo434.geometry} material={materials.techo} />
        <mesh
          name="Cubo434_1"
          geometry={nodes.Cubo434_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export049" position={[131.612, 67.304, -143.729]}>
        <mesh name="Cubo438" geometry={nodes.Cubo438.geometry} material={materials.techo} />
        <mesh
          name="Cubo438_1"
          geometry={nodes.Cubo438_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export050" position={[106.386, 67.312, -98.986]}>
        <mesh name="Cubo439" geometry={nodes.Cubo439.geometry} material={materials.techo} />
        <mesh
          name="Cubo439_1"
          geometry={nodes.Cubo439_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export051" position={[106.386, 67.312, -83.233]}>
        <mesh name="Cubo440" geometry={nodes.Cubo440.geometry} material={materials.techo} />
        <mesh
          name="Cubo440_1"
          geometry={nodes.Cubo440_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export055" position={[117.581, 67.304, -87.781]}>
        <mesh name="Cubo444" geometry={nodes.Cubo444.geometry} material={materials.techo} />
        <mesh
          name="Cubo444_1"
          geometry={nodes.Cubo444_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
      <group name="a_1_export056" position={[117.581, 67.304, -103.534]}>
        <mesh name="Cubo445" geometry={nodes.Cubo445.geometry} material={materials.techo} />
        <mesh
          name="Cubo445_1"
          geometry={nodes.Cubo445_1.geometry}
          material={materials['vidrio sala']}
        />
      </group>
    </group>
  )
}


useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso3/paredes_p3.glb`)
