import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
  nodes: {
    piso_cesped_cerca_del_lab: THREE.Mesh;
  };
  materials: {
    ['Material.057']: THREE.MeshStandardMaterial;
  };
};

export function PisoCesped2(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped2.glb') as unknown as GLTFResult;

  const geometry = nodes.piso_cesped_cerca_del_lab.geometry;

  // Bounding box del plano
  const box = new THREE.Box3().setFromObject(nodes.piso_cesped_cerca_del_lab);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);

  const position: [number, number, number] = [364.12, -2, -332.336];

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [size.x, size.y, size.z],
    position: [
      position[0] + center.x,
      position[1] + center.y,
      position[2] + center.z,
    ],
  }));

  return (
    <group {...props} dispose={null}>
      <group ref={ref} />
      <mesh
        name="piso_cesped_cerca_del_lab"
        geometry={geometry}
        material={materials['Material.057']}
        position={position}
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoCesped2.glb');
