import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane_1: THREE.Mesh
  }
  materials: {
    ['Terrazzo Tiles']: THREE.MeshPhysicalMaterial
    ['Material.034']: THREE.MeshStandardMaterial
  }
}

export function PisoArco(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoArco.glb') as unknown as GLTFResult
  const groupPosition: [number, number, number] = [-1.895, 0, 31.141]

  const geometriesToCombine: THREE.BufferGeometry[] = [
    nodes.Plane.geometry,
    nodes.Plane_1.geometry,
  ];

  const totalVerticesCount = geometriesToCombine.reduce((sum, geo) => sum + geo.attributes.position.count, 0);
  const totalIndicesCount = geometriesToCombine.reduce((sum, geo) => sum + (geo.index?.count || geo.attributes.position.count), 0);

  const combinedVertices = new Float32Array(totalVerticesCount * 3);
  const combinedIndices = new Uint32Array(totalIndicesCount);

  let vertexOffset = 0;
  let indexOffset = 0;

  geometriesToCombine.forEach((geo) => {
    const posAttr = geo.attributes.position.array as Float32Array;
    const idxAttr = geo.index?.array as Uint16Array | Uint32Array | undefined;

    // Copiar vértices
    combinedVertices.set(posAttr, vertexOffset * 3);

    // Copiar y ajustar índices
    if (idxAttr) {
      for (let i = 0; i < idxAttr.length; i++) {
        combinedIndices[indexOffset + i] = idxAttr[i] + vertexOffset;
      }
    } else {
        console.warn("Geometría sin búfer de índice encontrada en PisoArco.tsx. Podría no ser manejado correctamente para todos los casos sin índices explícitos.");
        for (let i = 0; i < posAttr.length / 3; i++) {
            combinedIndices[indexOffset + i] = vertexOffset + i;
        }
    }

    // Actualizar offsets para la siguiente geometría
    vertexOffset += posAttr.length / 3;
    indexOffset += idxAttr?.length || (posAttr.length / 3);
  });

  // Crea el cuerpo de física con useTrimesh para la geometría combinada
  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [combinedVertices, combinedIndices],
    position: groupPosition,
  }));

  return (
    <group {...props} dispose={null}>
      {/* Adjunta la referencia del cuerpo de física al grupo visual principal */}
      <group name="piso_arco" position={groupPosition} ref={ref}>
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials['Terrazzo Tiles']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Plane_1.geometry}
          material={materials['Material.034']}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/pisos/pisoArco.glb')