import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane012: THREE.Mesh
  }
  materials: {
    ['Material.118']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped3.glb') as unknown as GLTFResult

  const geometry = nodes.Plane012.geometry;

  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index ? (geometry.index.array as Uint16Array | Uint32Array) : new Uint32Array();

  const position: [number, number, number] = [-798.342, -4.216, -169.25];

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: position,
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="Plane012"
        geometry={geometry}
        material={materials['Material.118']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoCesped3.glb')