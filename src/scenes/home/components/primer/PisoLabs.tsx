import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ThreeElements } from '@react-three/fiber';
import { useConvexPolyhedron } from '@react-three/cannon';
import { useConditionalRender } from '../../../../utils/withLOD';


type GLTFResult = GLTF & {
  nodes: {
    piso_labs: THREE.Mesh;
  };
  materials: {
    ['Granite Tiles']: THREE.MeshStandardMaterial;
  };
};

export function PisoLabs(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoLabs.glb') as unknown as GLTFResult;

  const geometry = nodes.piso_labs.geometry;
  const position: [number, number, number] = [-17.977, -1, -203.107];
  const shouldRender = useConditionalRender(position, 150); // 150 unidades de distancia
  
  if (!shouldRender) return null;
  // Convertir atributos a vertices Vector3
  const positionAttr = geometry.attributes.position;
  const vertices: THREE.Vector3[] = [];
  for (let i = 0; i < positionAttr.count; i++) {
    vertices.push(new THREE.Vector3(
      positionAttr.getX(i),
      positionAttr.getY(i),
      positionAttr.getZ(i)
    ));
  }

  // Obtener índices (triángulos)
  // Si no hay índices, se asume que la geometría es un conjunto de triángulos en orden
  let faces: number[][] = [];
  if (geometry.index) {
    const indexAttr = geometry.index;
    for (let i = 0; i < indexAttr.count; i += 3) {
      faces.push([
        indexAttr.getX(i),
        indexAttr.getX(i + 1),
        indexAttr.getX(i + 2)
      ]);
    }
  } else {
    // Sin índices, cada 3 vertices forman un triángulo
    for (let i = 0; i < positionAttr.count; i += 3) {
      faces.push([i, i + 1, i + 2]);
    }
  }

  const [ref] = useConvexPolyhedron(() => ({
    args: [vertices, faces],
    position,
    type: 'Static',
  }));

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="piso_labs"
        geometry={geometry}
        material={materials['Granite Tiles']}
        position={position}
        castShadow
        receiveShadow
      />
    </group>
  );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/pisos/pisoLabs.glb');
