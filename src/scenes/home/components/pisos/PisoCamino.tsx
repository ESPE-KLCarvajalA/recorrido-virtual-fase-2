import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon' 

type GLTFResult = GLTF & {
  nodes: {
    Plane016: THREE.Mesh
  }
  materials: {
    ['Concrete.001']: THREE.MeshStandardMaterial
  }
}

export function PisoCamino(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCamino.glb') as unknown as GLTFResult

  const geometry = nodes.Plane016.geometry;

  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index ? (geometry.index.array as Uint16Array | Uint32Array) : new Uint32Array();

  const position: [number, number, number] = [-721.556, -4, 665.493];

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: position,
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="Plane016"
        geometry={geometry}
        material={materials['Concrete.001']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoCamino.glb')