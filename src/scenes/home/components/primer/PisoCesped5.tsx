import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon' 

type GLTFResult = GLTF & {
  nodes: {
    Circle012: THREE.Mesh
    Circle012_1: THREE.Mesh
    Circle013: THREE.Mesh
    Circle013_1: THREE.Mesh
    Circle017: THREE.Mesh
    Circle017_1: THREE.Mesh
    Circle006_1: THREE.Mesh
    Circle006_2: THREE.Mesh
    Circle007_1: THREE.Mesh
    Circle007_2: THREE.Mesh
    Circle010: THREE.Mesh
    Circle010_1: THREE.Mesh
    Circle009_1: THREE.Mesh
    Circle009_2: THREE.Mesh
    Circle008_1: THREE.Mesh
    Circle008_2: THREE.Mesh
  }
  materials: {
    ['Material.124']: THREE.MeshStandardMaterial
    ['Material.125']: THREE.MeshStandardMaterial
  }
}

export function PisoCesped5(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoCesped5.glb') as unknown as GLTFResult

  const colliderPosition: [number, number, number] = [0, 0, 0];

  const geometriesToCombine: THREE.BufferGeometry[] = [];

  const processGroup = (
    meshName1: keyof GLTFResult['nodes'],
    meshName2: keyof GLTFResult['nodes'],
    groupPosition: [number, number, number],
    groupRotation: [number, number, number],
    groupScale: number | [number, number, number]
  ) => {
    const scaleVector = typeof groupScale === 'number' ? new THREE.Vector3(groupScale, groupScale, groupScale) : new THREE.Vector3(...groupScale);
    const rotationQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(groupRotation[0], groupRotation[1], groupRotation[2]));
    const positionVector = new THREE.Vector3(...groupPosition);

    const groupMatrix = new THREE.Matrix4().compose(positionVector, rotationQuaternion, scaleVector);

    const tempGeometry1 = (nodes[meshName1] as THREE.Mesh).geometry.clone();
    tempGeometry1.applyMatrix4(groupMatrix);
    geometriesToCombine.push(tempGeometry1);

    const tempGeometry2 = (nodes[meshName2] as THREE.Mesh).geometry.clone();
    tempGeometry2.applyMatrix4(groupMatrix);
    geometriesToCombine.push(tempGeometry2);
  };

  processGroup('Circle012', 'Circle012_1', [-305.776, 0.318, -325.881], [-0.011, -0.005, -3.141], 20.419);
  processGroup('Circle013', 'Circle013_1', [-299.624, 1.422, -770.625], [3.13, -0.005, -3.141], 20.419);
  processGroup('Circle017', 'Circle017_1', [-167.883, 0.002, -594.487], [-0.293, 1.57, 0.293], [11.073, 74.023, 14.024]);
  processGroup('Circle006_1', 'Circle006_2', [-303.026, 0.3, -167.475], [-3.13, 0, 0.001], 20.419);
  processGroup('Circle007_1', 'Circle007_2', [-472.68, 1.631, -580.637], [-0.293, 1.57, 0.293], 21.579);
  processGroup('Circle010', 'Circle010_1', [-476.987, -0.101, -863.554], [-0.293, 1.57, 0.293], 21.579);
  processGroup('Circle009_1', 'Circle009_2', [-637.544, 0.3, -833.311], [-3.13, 0, 0.001], [21.284, 21.284, 23.827]);
  processGroup('Circle008_1', 'Circle008_2', [-640.444, 0.46, -442.052], [-0.011, 0, -3.141], [21.284, 21.284, 25.123]);

  const totalVerticesCount = geometriesToCombine.reduce((sum, geo) => sum + geo.attributes.position.count, 0);
  const totalIndicesCount = geometriesToCombine.reduce((sum, geo) => sum + (geo.index?.count || 0), 0);

  const combinedVertices = new Float32Array(totalVerticesCount * 3);
  const combinedIndices = new Uint32Array(totalIndicesCount);

  let vertexOffset = 0;
  let indexOffset = 0;

  geometriesToCombine.forEach((geo) => {
    const posAttr = geo.attributes.position.array as Float32Array;
    const idxAttr = geo.index?.array as Uint16Array | Uint32Array | undefined;

    combinedVertices.set(posAttr, vertexOffset * 3);

    if (idxAttr) {
      for (let i = 0; i < idxAttr.length; i++) {
        combinedIndices[indexOffset + i] = idxAttr[i] + vertexOffset;
      }
    } else {
      console.warn("Geometry missing index buffer in PisoCesped5.tsx. Assuming triangle list.");
      for (let i = 0; i < posAttr.length / 3; i++) {
        combinedIndices[indexOffset + i] = vertexOffset + i;
      }
    }

    vertexOffset += posAttr.length / 3;
    indexOffset += idxAttr?.length || (posAttr.length / 3);
  });

  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [combinedVertices, combinedIndices],
    position: colliderPosition,
  }));

  return (
    <group {...props} dispose={null} ref={ref}> 
      
      <group
        name="Circle005"
        position={[-305.776, 0.318, -325.881]}
        rotation={[-0.011, -0.005, -3.141]}
        scale={20.419}>
        <mesh
          name="Circle012"
          geometry={nodes.Circle012.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle012_1"
          geometry={nodes.Circle012_1.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle003"
        position={[-299.624, 1.422, -770.625]}
        rotation={[3.13, -0.005, -3.141]}
        scale={20.419}>
        <mesh
          name="Circle013"
          geometry={nodes.Circle013.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle013_1"
          geometry={nodes.Circle013_1.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle008"
        position={[-167.883, 0.002, -594.487]}
        rotation={[-0.293, 1.57, 0.293]}
        scale={[11.073, 74.023, 14.024]}>
        <mesh
          name="Circle017"
          geometry={nodes.Circle017.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle017_1"
          geometry={nodes.Circle017_1.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle009"
        position={[-303.026, 0.3, -167.475]}
        rotation={[-3.13, 0, 0.001]}
        scale={20.419}>
        <mesh
          name="Circle006_1"
          geometry={nodes.Circle006_1.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle006_2"
          geometry={nodes.Circle006_2.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle006"
        position={[-472.68, 1.631, -580.637]}
        rotation={[-0.293, 1.57, 0.293]}
        scale={21.579}>
        <mesh
          name="Circle007_1"
          geometry={nodes.Circle007_1.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle007_2"
          geometry={nodes.Circle007_2.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle007"
        position={[-476.987, -0.101, -863.554]}
        rotation={[-0.293, 1.57, 0.293]}
        scale={21.579}>
        <mesh
          name="Circle010"
          geometry={nodes.Circle010.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle010_1"
          geometry={nodes.Circle010_1.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle001"
        position={[-637.544, 0.3, -833.311]}
        rotation={[-3.13, 0, 0.001]}
        scale={[21.284, 21.284, 23.827]}>
        <mesh
          name="Circle009_1"
          geometry={nodes.Circle009_1.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle009_2"
          geometry={nodes.Circle009_2.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="Circle004"
        position={[-640.444, 0.46, -442.052]}
        rotation={[-0.011, 0, -3.141]}
        scale={[21.284, 21.284, 25.123]}>
        <mesh
          name="Circle008_1"
          geometry={nodes.Circle008_1.geometry}
          material={materials['Material.124']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Circle008_2"
          geometry={nodes.Circle008_2.geometry}
          material={materials['Material.125']}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}
useGLTF.preload('models/pisos/pisoCesped5.glb')