
import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube013: THREE.Mesh
  }
  materials: {
    Tiles: THREE.MeshStandardMaterial
  }
}

export function PisoAula(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoAula.glb') as unknown as GLTFResult

  const position: [number, number, number] = [435.774, -1, -585.645];

  const geometry = nodes.Cube013.geometry;

 
  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index ? (geometry.index.array as Uint16Array | Uint32Array) : new Uint32Array(); // Fallback si no hay índices, aunque raro para mallas bien exportadas

 
  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [vertices, indices],
    position: position,
  }));

  return (
    <group {...props} dispose={null}>
     
      <group ref={ref} />

      <mesh
        name="Cube013"
        geometry={geometry}
        material={materials.Tiles}
        position={position} 
        castShadow 
        receiveShadow 
      />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoAula.glb')
