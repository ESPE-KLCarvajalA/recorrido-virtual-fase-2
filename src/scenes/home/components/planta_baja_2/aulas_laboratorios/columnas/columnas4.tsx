import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../../../utils/useCameraDistance'

type GLTFResult = GLTF & {
    nodes: {
        Cubo144: THREE.Mesh
        Cubo144_1: THREE.Mesh
        Cubo144_2: THREE.Mesh
    }
    materials: {
        ['madera paredes']: THREE.MeshStandardMaterial
        ['plateado columnas']: THREE.MeshStandardMaterial
        ['pared blanca']: THREE.MeshStandardMaterial
    }
}

export function Columnas4(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna4.glb`) as GLTFResult;

    const distance = useCameraDistance([-104.047, -9.06, -58.11]);
    if (distance > 320) return null;

    return (
        <group {...props} dispose={null}>
            <group name="especiales" position={[-73.45, 0.675, -295.117]}>
                <mesh
                    name="Cubo144"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo144.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo144_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo144_1.geometry}
                    material={materials['plateado columnas']}
                />
                <mesh
                    name="Cubo144_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo144_2.geometry}
                    material={materials['pared blanca']}
                />
            </group>
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja_2/aulas_laboratorios/columnas/columna4.glb`);
