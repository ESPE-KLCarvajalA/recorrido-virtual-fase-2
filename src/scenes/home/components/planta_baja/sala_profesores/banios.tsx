import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Cubo090: THREE.Mesh
        Cubo090_1: THREE.Mesh
        Cubo091: THREE.Mesh
        Cubo091_1: THREE.Mesh
        puertas0: THREE.Mesh
    }
    materials: {
        ['madera clara 2']: THREE.MeshStandardMaterial
        ['madera paredes']: THREE.MeshStandardMaterial
        ['cafe oscuro']: THREE.MeshStandardMaterial
    }
}

export function Banios(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/banios/banios1.glb`) as GLTFResult

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [37, 7, 27],
        position: [-96.475, 6, -18.565],
    }));

    return (
        <group {...props} dispose={null}>
            <group name="paredes" position={[-96.475, 9.376, -32.565]}>
                <mesh
                    name="Cubo090"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo090.geometry}
                    material={materials['madera clara 2']}
                />
                <mesh
                    name="Cubo090_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo090_1.geometry}
                    material={materials['madera paredes']}
                />
            </group>
            <group name="caja" position={[-96.475, 9.376, -18.249]}>
                <mesh
                    name="Cubo091"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo091.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo091_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo091_1.geometry}
                    material={materials['cafe oscuro']}
                />
            </group>
            <mesh
                name="puertas0"
                castShadow
                receiveShadow
                geometry={nodes.puertas0.geometry}
                material={materials['cafe oscuro']}
                position={[-96.475, 8.186, -31.653]}
            />
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/banios/banios1.glb`)