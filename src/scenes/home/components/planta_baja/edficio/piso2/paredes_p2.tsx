import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
      pared_frente005: THREE.Mesh
      pared_frente006: THREE.Mesh
      pared_frente007: THREE.Mesh
      pared_frente008: THREE.Mesh
      pared_vidrio_1012: THREE.Mesh
      Cubo381: THREE.Mesh
      Cubo381_1: THREE.Mesh
      Cubo383: THREE.Mesh
      Cubo383_1: THREE.Mesh
      Cubo392: THREE.Mesh
      Cubo392_1: THREE.Mesh
      Cubo401: THREE.Mesh
      Cubo401_1: THREE.Mesh
      Cubo405: THREE.Mesh
      Cubo405_1: THREE.Mesh
      Cubo406: THREE.Mesh
      Cubo406_1: THREE.Mesh
      pared_vidrio_1013: THREE.Mesh
      Cubo408: THREE.Mesh
      Cubo408_1: THREE.Mesh
      Cubo409: THREE.Mesh
      Cubo409_1: THREE.Mesh
      Cubo410: THREE.Mesh
      Cubo410_1: THREE.Mesh
      Cubo415: THREE.Mesh
      Cubo415_1: THREE.Mesh
      Cubo416: THREE.Mesh
      Cubo416_1: THREE.Mesh
      Cubo417: THREE.Mesh
      Cubo417_1: THREE.Mesh
      Cubo418: THREE.Mesh
      Cubo418_1: THREE.Mesh
      Cubo419: THREE.Mesh
      Cubo419_1: THREE.Mesh
      Cubo420: THREE.Mesh
      Cubo420_1: THREE.Mesh
      Cubo421: THREE.Mesh
      Cubo421_1: THREE.Mesh
      Cubo422: THREE.Mesh
      Cubo422_1: THREE.Mesh
      Cubo423: THREE.Mesh
      Cubo423_1: THREE.Mesh
      Cubo424: THREE.Mesh
      Cubo424_1: THREE.Mesh
      Cubo425: THREE.Mesh
      Cubo425_1: THREE.Mesh
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


export function Paredes_p2(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso2/paredes_p2.glb`) as GLTFResult

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
            name="pared_frente005"
            geometry={nodes.pared_frente005.geometry}
            material={materials['pared blanca']}
            position={[124.694, 47.382, -25.882]}
          />
          <mesh
            name="pared_frente006"
            geometry={nodes.pared_frente006.geometry}
            material={materials['pared blanca']}
            position={[117.173, 47.995, -39.493]}
          />
          <mesh
            name="pared_frente007"
            geometry={nodes.pared_frente007.geometry}
            material={materials['pared blanca']}
            position={[106.731, 47.995, -53.104]}
          />
          <mesh
            name="pared_frente008"
            geometry={nodes.pared_frente008.geometry}
            material={materials['pared blanca']}
            position={[142.78, 47.995, -54.898]}
          />
          <mesh
            name="pared_vidrio_1012"
            geometry={nodes.pared_vidrio_1012.geometry}
            material={materials['barras cuartos.001']}
            position={[97.049, 48.891, -84.087]}
          />
          <group name="a_1_export017" position={[108.508, 48.002, -113.959]}>
            <mesh name="Cubo381" geometry={nodes.Cubo381.geometry} material={materials.techo} />
            <mesh
              name="Cubo381_1"
              geometry={nodes.Cubo381_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export020" position={[131.612, 47.995, -63.037]}>
            <mesh name="Cubo383" geometry={nodes.Cubo383.geometry} material={materials.techo} />
            <mesh
              name="Cubo383_1"
              geometry={nodes.Cubo383_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export024" position={[118.218, 47.995, -126.99]}>
            <mesh name="Cubo392" geometry={nodes.Cubo392.geometry} material={materials.techo} />
            <mesh
              name="Cubo392_1"
              geometry={nodes.Cubo392_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export025" position={[131.612, 47.995, -100.704]}>
            <mesh name="Cubo401" geometry={nodes.Cubo401.geometry} material={materials.techo} />
            <mesh
              name="Cubo401_1"
              geometry={nodes.Cubo401_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="columna1025" position={[142.85, 47.995, -89.396]}>
            <mesh
              name="Cubo405"
              geometry={nodes.Cubo405.geometry}
              material={materials['madera paredes']}
            />
            <mesh
              name="Cubo405_1"
              geometry={nodes.Cubo405_1.geometry}
              material={materials['plateado columnas']}
            />
          </group>
          <group name="columna1026" position={[142.85, 47.995, -118.496]}>
            <mesh
              name="Cubo406"
              geometry={nodes.Cubo406.geometry}
              material={materials['madera paredes']}
            />
            <mesh
              name="Cubo406_1"
              geometry={nodes.Cubo406_1.geometry}
              material={materials['plateado columnas']}
            />
          </group>
          <mesh
            name="pared_vidrio_1013"
            geometry={nodes.pared_vidrio_1013.geometry}
            material={materials['barras cuartos.001']}
            position={[97.049, 48.891, -113.187]}
          />
          <group name="a_1_export027" position={[138.316, 47.995, -37.979]}>
            <mesh name="Cubo408" geometry={nodes.Cubo408.geometry} material={materials.techo} />
            <mesh
              name="Cubo408_1"
              geometry={nodes.Cubo408_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export028" position={[142.899, 48.002, -73.878]}>
            <mesh name="Cubo409" geometry={nodes.Cubo409.geometry} material={materials.techo} />
            <mesh
              name="Cubo409_1"
              geometry={nodes.Cubo409_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export029" position={[131.612, 47.995, -78.808]}>
            <mesh name="Cubo410" geometry={nodes.Cubo410.geometry} material={materials.techo} />
            <mesh
              name="Cubo410_1"
              geometry={nodes.Cubo410_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export030" position={[142.899, 48.002, -133.474]}>
            <mesh name="Cubo415" geometry={nodes.Cubo415.geometry} material={materials.techo} />
            <mesh
              name="Cubo415_1"
              geometry={nodes.Cubo415_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export026" position={[142.899, 48.002, -104.374]}>
            <mesh name="Cubo416" geometry={nodes.Cubo416.geometry} material={materials.techo} />
            <mesh
              name="Cubo416_1"
              geometry={nodes.Cubo416_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export031" position={[131.612, 47.995, -129.355]}>
            <mesh name="Cubo417" geometry={nodes.Cubo417.geometry} material={materials.techo} />
            <mesh
              name="Cubo417_1"
              geometry={nodes.Cubo417_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export032" position={[131.612, 47.995, -136.659]}>
            <mesh name="Cubo418" geometry={nodes.Cubo418.geometry} material={materials.techo} />
            <mesh
              name="Cubo418_1"
              geometry={nodes.Cubo418_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export033" position={[106.386, 48.002, -98.986]}>
            <mesh name="Cubo419" geometry={nodes.Cubo419.geometry} material={materials.techo} />
            <mesh
              name="Cubo419_1"
              geometry={nodes.Cubo419_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export022" position={[106.386, 48.002, -83.189]}>
            <mesh name="Cubo420" geometry={nodes.Cubo420.geometry} material={materials.techo} />
            <mesh
              name="Cubo420_1"
              geometry={nodes.Cubo420_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export034" position={[106.486, 48.002, -69.586]}>
            <mesh name="Cubo421" geometry={nodes.Cubo421.geometry} material={materials.techo} />
            <mesh
              name="Cubo421_1"
              geometry={nodes.Cubo421_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export035" position={[117.581, 47.995, -65.038]}>
            <mesh name="Cubo422" geometry={nodes.Cubo422.geometry} material={materials.techo} />
            <mesh
              name="Cubo422_1"
              geometry={nodes.Cubo422_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export036" position={[117.581, 47.995, -74.134]}>
            <mesh name="Cubo423" geometry={nodes.Cubo423.geometry} material={materials.techo} />
            <mesh
              name="Cubo423_1"
              geometry={nodes.Cubo423_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export037" position={[117.581, 47.995, -87.781]}>
            <mesh name="Cubo424" geometry={nodes.Cubo424.geometry} material={materials.techo} />
            <mesh
              name="Cubo424_1"
              geometry={nodes.Cubo424_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
          <group name="a_1_export038" position={[117.581, 47.995, -103.534]}>
            <mesh name="Cubo425" geometry={nodes.Cubo425.geometry} material={materials.techo} />
            <mesh
              name="Cubo425_1"
              geometry={nodes.Cubo425_1.geometry}
              material={materials['vidrio sala']}
            />
          </group>
        </group>
      )
    }

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso2/paredes_p2.glb`)
