import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
    nodes: {
        Cubo131: THREE.Mesh
        Cubo131_1: THREE.Mesh
        Cubo131_2: THREE.Mesh
        Cubo131_3: THREE.Mesh
        Cubo131_4: THREE.Mesh
    }
    materials: {
        ['madera paredes']: THREE.MeshStandardMaterial
        vidrio: THREE.MeshStandardMaterial
        ['pared blanca']: THREE.MeshStandardMaterial
        ['barras cuartos']: THREE.MeshStandardMaterial
        ['madera clara 2']: THREE.MeshStandardMaterial
    }
}

export function Lab_0_abajo(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/lab_0_abajo.glb`) as GLTFResult

    materials.vidrio = new THREE.MeshStandardMaterial({
        color: 'white',
        opacity: 0.15,
        transparent: true,
        roughness: 0.7,
        metalness: 0.1,
    });

    const distance = useCameraDistance([-104.047, -9.06, -58.11]);
    if (distance > 300) return null;

    return (
        <group {...props} dispose={null}>
            <group name="aula_base008" position={[-98.477, -9.109, -85.621]}>
                <mesh
                    name="Cubo131"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo131.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo131_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo131_1.geometry}
                    material={materials.vidrio}
                />
                <mesh
                    name="Cubo131_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo131_2.geometry}
                    material={materials['pared blanca']}
                />
                <mesh
                    name="Cubo131_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo131_3.geometry}
                    material={materials['barras cuartos']}
                />
                <mesh
                    name="Cubo131_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo131_4.geometry}
                    material={materials['madera clara 2']}
                />
            </group>
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/lab_0_abajo.glb`)
