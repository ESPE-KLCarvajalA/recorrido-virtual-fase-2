import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
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
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoAula.glb') as unknown as GLTFResult;

  const geometry = nodes.Cube013.geometry;

  // Saca dimensiones y centro
  const box = new THREE.Box3().setFromObject(nodes.Cube013);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);

  const position: [number, number, number] = [435.774, -1, -585.645];

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

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoAula.glb');
