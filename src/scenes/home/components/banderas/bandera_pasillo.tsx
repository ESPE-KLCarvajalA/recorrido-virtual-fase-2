import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Object_8001: THREE.Mesh
        Object_10: THREE.Mesh
        Cubo355: THREE.Mesh
        Cubo355_1: THREE.Mesh
    }
    materials: {
        ['cafe oscuro']: THREE.MeshStandardMaterial
        color_flag1: THREE.MeshStandardMaterial
        ['madera paredes']: THREE.MeshStandardMaterial
        vidrio: THREE.MeshStandardMaterial
    }
}

export function Bandera_pasillo(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/banderas/bandera_pasillo.glb`) as GLTFResult

    materials.vidrio = new THREE.MeshStandardMaterial({
        color: 'white',
        opacity: 0.2,
        transparent: true,
        roughness: 0.7,
        metalness: 0.1,
    });


    return (
        <group {...props} dispose={null}>
            <mesh
                name="Object_8001"
                castShadow
                receiveShadow
                geometry={nodes.Object_8001.geometry}
                material={materials['cafe oscuro']}
                position={[124.347, 7.997, -0.2]}
            />
            <mesh
                name="Object_10"
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.color_flag1}
                position={[124.435, 7.741, -0.137]}
            />
            <group name="Cubo" position={[124.407, 8.207, -0.472]}>
                <mesh
                    name="Cubo355"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo355.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo355_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo355_1.geometry}
                    material={materials.vidrio}
                />
            </group>
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/banderas/bandera_pasillo.glb`)
