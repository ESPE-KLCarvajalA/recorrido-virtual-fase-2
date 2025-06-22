import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useTrimesh } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    piso_gris: THREE.Mesh;
  };
  materials: {
    ['Material.049']: THREE.MeshStandardMaterial;
  };
};

export function PisoOctagono(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoOctagono.glb') as unknown as GLTFResult;

  const geometry = nodes.piso_gris.geometry;
  const vertices = geometry.attributes.position.array as Float32Array;
  const indices = geometry.index?.array as Uint16Array | Uint32Array;

  if (!indices) {
    console.error('⚠️ La geometría del piso octágono no tiene índices. Exporta el modelo desde Blender con "Triangulate faces" y "Include Indices".');
    return null;
  }

  const position: [number, number, number] = [-63.105, -5.023, 133.726];

  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    type: 'Static',
    position,
  }));

  return (
    <group {...props} dispose={null} ref={ref} position={position}>
      <mesh geometry={geometry} material={materials['Material.049']} />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoOctagono.glb');
