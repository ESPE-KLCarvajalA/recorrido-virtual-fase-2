import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

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

  // Obtener el bounding box del mesh para calcular tamaño y centro
  const box = new THREE.Box3().setFromBufferAttribute(nodes.piso_gris.geometry.attributes.position as THREE.BufferAttribute);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);

  // Ajustar posición para el collider y el mesh
  const position: [number, number, number] = [-63.105, -5, 133.726];

  // El offset entre la posición del mesh y el centro geométrico, para que collider y mesh estén alineados
  const offset = [center.x, center.y, center.z];

  const [ref] = useBox(() => ({
    args: [size.x, size.y, size.z],
    type: 'Static',
    position: [position[0] + offset[0], position[1] + offset[1], position[2] + offset[2]],
  }));

  return (
    <group {...props} dispose={null} ref={ref} position={position}>
      <mesh geometry={nodes.piso_gris.geometry} material={materials['Material.049']} />
    </group>
  );
}

useGLTF.preload('models/pisos/pisoOctagono.glb');
