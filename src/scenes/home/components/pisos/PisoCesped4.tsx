import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane017: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped4(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped4.glb') as unknown as GLTFResult

  const geometry = nodes.Plane017.geometry;

  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index ? (geometry.index.array as Uint16Array | Uint32Array) : new Uint32Array();

  const position: [number, number, number] = [-1023.585, -5, 972.149];

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: position,
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="Plane017"
        geometry={geometry}
        material={materials['Material.118']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoCesped4.glb')