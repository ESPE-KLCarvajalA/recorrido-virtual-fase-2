import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        pared_frente001: THREE.Mesh
        pared_frente002: THREE.Mesh
        pared_frente003: THREE.Mesh
        pared_frente004: THREE.Mesh
        pared_vidrio_1010: THREE.Mesh
        Cubo379: THREE.Mesh
        Cubo379_1: THREE.Mesh
        Cubo380: THREE.Mesh
        Cubo380_1: THREE.Mesh
        Cubo382: THREE.Mesh
        Cubo382_1: THREE.Mesh
        Cubo388: THREE.Mesh
        Cubo388_1: THREE.Mesh
        Cubo389: THREE.Mesh
        Cubo389_1: THREE.Mesh
        Cubo391: THREE.Mesh
        Cubo391_1: THREE.Mesh
        Cubo393: THREE.Mesh
        Cubo393_1: THREE.Mesh
        Cubo394: THREE.Mesh
        Cubo394_1: THREE.Mesh
        pared_vidrio_1011: THREE.Mesh
        Cubo398: THREE.Mesh
        Cubo398_1: THREE.Mesh
        Cubo403: THREE.Mesh
        Cubo403_1: THREE.Mesh
        Cubo404: THREE.Mesh
        Cubo404_1: THREE.Mesh
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


export function Paredes_p1(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso1/paredes_p1.glb`) as GLTFResult

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
                name="pared_frente001"
                geometry={nodes.pared_frente001.geometry}
                material={materials['pared blanca']}
                position={[124.694, 28.685, -25.882]}
            />
            <mesh
                name="pared_frente002"
                geometry={nodes.pared_frente002.geometry}
                material={materials['pared blanca']}
                position={[124.694, 28.685, -54.898]}
            />
            <mesh
                name="pared_frente003"
                geometry={nodes.pared_frente003.geometry}
                material={materials['pared blanca']}
                position={[117.173, 28.685, -37.996]}
                rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
                name="pared_frente004"
                geometry={nodes.pared_frente004.geometry}
                material={materials['pared blanca']}
                position={[106.608, 28.685, -53.104]}
            />
            <mesh
                name="pared_vidrio_1010"
                geometry={nodes.pared_vidrio_1010.geometry}
                material={materials['barras cuartos.001']}
                position={[97.049, 29.581, -84.087]}
            />
            <group
                name="a_1_export013"
                position={[109.992, 28.693, -113.959]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo379"
                    geometry={nodes.Cubo379.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo379_1"
                    geometry={nodes.Cubo379_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export014" position={[131.612, 28.685, -66.996]} scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo380"
                    geometry={nodes.Cubo380.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo380_1"
                    geometry={nodes.Cubo380_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export016" position={[118.12, 28.685, -93.439]} scale={[1, 1.04, 0.401]}>
                <mesh
                    name="Cubo382"
                    geometry={nodes.Cubo382.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo382_1"
                    geometry={nodes.Cubo382_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export018" position={[118.218, 28.685, -126.99]} scale={[1, 1.04, 1.168]}>
                <mesh
                    name="Cubo388"
                    geometry={nodes.Cubo388.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo388_1"
                    geometry={nodes.Cubo388_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export019" position={[131.612, 28.685, -100.704]} scale={[1, 1.04, 0.931]}>
                <mesh
                    name="Cubo389"
                    geometry={nodes.Cubo389.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo389_1"
                    geometry={nodes.Cubo389_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export021"
                position={[131.706, 28.685, -141.714]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1, 1.04, 0.46]}>
                <mesh
                    name="Cubo391"
                    geometry={nodes.Cubo391.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo391_1"
                    geometry={nodes.Cubo391_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="columna1021"
                position={[142.85, 28.685, -89.396]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.938, 5.699, 0.631]}>
                <mesh
                    name="Cubo393"
                    geometry={nodes.Cubo393.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo393_1"
                    geometry={nodes.Cubo393_1.geometry}
                    material={materials['plateado columnas']}
                />
            </group>
            <group
                name="columna1022"
                position={[142.85, 28.685, -118.496]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.938, 5.699, 0.631]}>
                <mesh
                    name="Cubo394"
                    geometry={nodes.Cubo394.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo394_1"
                    geometry={nodes.Cubo394_1.geometry}
                    material={materials['plateado columnas']}
                />
            </group>
            <mesh
                name="pared_vidrio_1011"
                geometry={nodes.pared_vidrio_1011.geometry}
                material={materials['barras cuartos.001']}
                position={[97.049, 29.581, -113.187]}
            />
            <group name="a_1_export023" position={[138.316, 28.685, -37.979]} scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo398"
                    geometry={nodes.Cubo398.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo398_1"
                    geometry={nodes.Cubo398_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export012"
                position={[142.899, 28.693, -73.878]}
                rotation={[0, 1.571, 0]}
                scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo403"
                    geometry={nodes.Cubo403.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo403_1"
                    geometry={nodes.Cubo403_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export015" position={[131.612, 28.685, -85.029]} scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo404"
                    geometry={nodes.Cubo404.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo404_1"
                    geometry={nodes.Cubo404_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/piso1/paredes_p1.glb`)
