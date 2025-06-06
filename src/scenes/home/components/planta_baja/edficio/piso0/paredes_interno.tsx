import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useCameraDistance from '../../../../../../utils/useCameraDistance'
import { useBox } from '@react-three/cannon'

type GLTFResult = GLTF & {
    nodes: {
        pared_vidrio_1008: THREE.Mesh
        Cubo356: THREE.Mesh
        Cubo356_1: THREE.Mesh
        Cubo362: THREE.Mesh
        Cubo362_1: THREE.Mesh
        Cubo361: THREE.Mesh
        Cubo361_1: THREE.Mesh
        Cubo364: THREE.Mesh
        Cubo364_1: THREE.Mesh
        Cubo365: THREE.Mesh
        Cubo365_1: THREE.Mesh
        Cubo366: THREE.Mesh
        Cubo366_1: THREE.Mesh
        Cubo367: THREE.Mesh
        Cubo367_1: THREE.Mesh
        Cubo369: THREE.Mesh
        Cubo369_1: THREE.Mesh
        Cubo371: THREE.Mesh
        Cubo371_1: THREE.Mesh
        Cubo372: THREE.Mesh
        Cubo372_1: THREE.Mesh
        Cubo373: THREE.Mesh
        Cubo373_1: THREE.Mesh
        Cubo358: THREE.Mesh
        Cubo358_1: THREE.Mesh
        Cubo359: THREE.Mesh
        Cubo359_1: THREE.Mesh
        pared_vidrio_1009: THREE.Mesh
    }
    materials: {
        ['barras cuartos.001']: THREE.MeshStandardMaterial
        techo: THREE.MeshStandardMaterial
        ['vidrio sala']: THREE.MeshStandardMaterial
        ['madera paredes']: THREE.MeshStandardMaterial
        ['plateado columnas']: THREE.MeshStandardMaterial
    }
}

export function Paredes_interno(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/planta_baja/edificio/paredes_interno.glb`) as GLTFResult

    materials['vidrio sala'] = new THREE.MeshStandardMaterial({
        color: 'white',
        opacity: 0.1,
        transparent: true,
        roughness: 0.8,
        metalness: 0.1,
    });

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [23, 5, 1],
        position: [108.5, 7, -84],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [22, 5, 1],
        position: [142.5, 7, -84],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [22, 5, 1],
        position: [142.5, 7, -113.5],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [22, 5, 1],
        position: [142.5, 7, -129.5],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [23, 5, 1],
        position: [108.5, 7, -100],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [23, 5, 1],
        position: [108.5, 7, -113.5],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [1, 5, 20],
        position: [131.612, 7, -66.996],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [1, 5, 20],
        position: [131.612, 7, -103],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [1, 5, 16],
        position: [121, 7, -101],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [1, 5, 20],
        position: [131.612, 7, -130],
    }));

    const [] = useBox(() => ({
        type: 'Static',
        mass: 1,
        args: [1, 5, 23],
        position: [121, 7, -127],
    }));




    const distance = useCameraDistance([97.049, 10.271, -84.087]);
    if (distance > 300) return null;

    return (
        <group {...props} dispose={null}>
            <mesh
                name="pared_vidrio_1008"
                castShadow
                receiveShadow
                geometry={nodes.pared_vidrio_1008.geometry}
                material={materials['barras cuartos.001']}
                position={[97.049, 10.271, -84.087]}
            />
            <group
                name="a_1_export001"
                position={[109.992, 9.383, -84.859]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo356"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo356.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo356_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo356_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export002"
                position={[109.992, 9.383, -113.959]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo362"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo362.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo362_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo362_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export003" position={[131.612, 9.376, -66.996]} scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo361"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo361.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo361_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo361_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export004"
                position={[108.19, 9.383, -99.672]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo364"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo364.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo364_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo364_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export005" position={[121.186, 9.376, -95.234]} scale={[1, 1.04, 0.401]}>
                <mesh
                    name="Cubo365"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo365.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo365_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo365_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export006" position={[121.186, 9.376, -104.207]} scale={[1, 1.04, 0.401]}>
                <mesh
                    name="Cubo366"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo366.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo366_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo366_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export007" position={[121.186, 9.376, -126.99]} scale={[1, 1.04, 1.168]}>
                <mesh
                    name="Cubo367"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo367.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo367_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo367_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group name="a_1_export008" position={[131.612, 9.376, -101.8]} scale={[1, 1.04, 0.931]}>
                <mesh
                    name="Cubo369"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo369.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo369_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo369_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export009"
                position={[142.899, 9.383, -129.85]}
                rotation={[0, 1.571, 0]}
                scale={[1, 1.04, 1]}>
                <mesh
                    name="Cubo371"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo371.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo371_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo371_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export010"
                position={[131.706, 9.376, -135.05]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1, 1.04, 0.46]}>
                <mesh
                    name="Cubo372"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo372.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo372_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo372_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="a_1_export011"
                position={[131.706, 9.376, -124.425]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1, 1.04, 0.48]}>
                <mesh
                    name="Cubo373"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo373.geometry}
                    material={materials.techo}
                />
                <mesh
                    name="Cubo373_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo373_1.geometry}
                    material={materials['vidrio sala']}
                />
            </group>
            <group
                name="columna1013"
                position={[142.85, 9.376, -84.166]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.938, 5.699, 0.631]}>
                <mesh
                    name="Cubo358"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo358.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo358_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo358_1.geometry}
                    material={materials['plateado columnas']}
                />
            </group>
            <group
                name="columna1015"
                position={[142.85, 9.376, -113.108]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.938, 5.699, 0.631]}>
                <mesh
                    name="Cubo359"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo359.geometry}
                    material={materials['madera paredes']}
                />
                <mesh
                    name="Cubo359_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cubo359_1.geometry}
                    material={materials['plateado columnas']}
                />
            </group>
            <mesh
                name="pared_vidrio_1009"
                castShadow
                receiveShadow
                geometry={nodes.pared_vidrio_1009.geometry}
                material={materials['barras cuartos.001']}
                position={[97.049, 10.271, -113.187]}
            />
        </group>
    )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/planta_baja/edificio/paredes_interno.glb`)
