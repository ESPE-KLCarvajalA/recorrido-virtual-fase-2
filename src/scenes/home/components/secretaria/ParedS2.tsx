import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
    nodes: {
        Room092_1: THREE.Mesh
        Room092_2: THREE.Mesh
        Room092_3: THREE.Mesh
        Room092_4: THREE.Mesh
        Room092_5: THREE.Mesh
        Room092_6: THREE.Mesh
        Room092_7: THREE.Mesh
        Room092_8: THREE.Mesh
    }
    materials: {
        ['Material.094']: THREE.MeshStandardMaterial
        ['Material.095']: THREE.MeshStandardMaterial
        ['Material.096']: THREE.MeshStandardMaterial
        ['Material.097']: THREE.MeshStandardMaterial
        ['Material.066']: THREE.MeshStandardMaterial
        ['Material.067']: THREE.MeshStandardMaterial
        ['Material.033']: THREE.MeshStandardMaterial
        ['Material.032']: THREE.MeshStandardMaterial
    }
}

function CollisionMesh({
    geometry,
    position,
}: {
    geometry: THREE.BufferGeometry
    position: [number, number, number]
}) {
    const vertices = geometry.attributes.position.array as Float32Array
    const indices = geometry.index?.array as Uint16Array | Uint32Array

    const [ref] = useTrimesh(() => ({
        args: [vertices, indices],
        type: 'Static',
        position,
    }))

    return <mesh ref={ref} geometry={geometry} visible={false} />
}

export function ParedS2(props: ThreeElements['group']) {
    const { nodes, materials } = useGLTF('models/secretaria/paredS2.glb') as unknown as GLTFResult

    const position: [number, number, number] = [-172.066, 30, -212.124]

    return (
        <group {...props} dispose={null}>
            <group name="Room092" position={position}>
                {/* Visuales */}
                <mesh geometry={nodes.Room092_1.geometry} material={materials['Material.094']} />
                <mesh geometry={nodes.Room092_2.geometry} material={materials['Material.095']} />
                <mesh geometry={nodes.Room092_3.geometry} material={materials['Material.096']} />
                <mesh geometry={nodes.Room092_4.geometry} material={materials['Material.097']} />
                <mesh geometry={nodes.Room092_5.geometry} material={materials['Material.066']} />
                <mesh geometry={nodes.Room092_6.geometry} material={materials['Material.067']} />
                <mesh geometry={nodes.Room092_7.geometry} material={materials['Material.033']} />
                <mesh geometry={nodes.Room092_8.geometry} material={materials['Material.032']} />

                {/* Colisiones */}
                <CollisionMesh geometry={nodes.Room092_1.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_2.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_3.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_4.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_5.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_6.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_7.geometry} position={position} />
                <CollisionMesh geometry={nodes.Room092_8.geometry} position={position} />
            </group>
        </group>
    )
}

useGLTF.preload('models/secretaria/paredS2.glb')
