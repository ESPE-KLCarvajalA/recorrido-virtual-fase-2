import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon' 

type GLTFResult = GLTF & {
  nodes: {
    Plane098: THREE.Mesh
    Plane098_1: THREE.Mesh
    Plane034: THREE.Mesh
    Plane034_1: THREE.Mesh
    Plane092: THREE.Mesh
    Plane092_1: THREE.Mesh
    Plane046: THREE.Mesh
    Plane046_1: THREE.Mesh
    Plane044: THREE.Mesh
    Plane044_1: THREE.Mesh
    Plane002: THREE.Mesh
    Plane002_1: THREE.Mesh
    Plane030: THREE.Mesh
    Plane030_1: THREE.Mesh
  }
  materials: {
    ['Material.114']: THREE.MeshStandardMaterial
    ['Material.116']: THREE.MeshStandardMaterial
  }
}

export function PisoVereda3(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda3.glb') as unknown as GLTFResult

  
  const colliderPosition: [number, number, number] = [0, 0, 0];

  // Array para almacenar las geometrías transformadas que combinaremos
  const geometriesToCombine: THREE.BufferGeometry[] = [];

  // Función para procesar un grupo y sus mallas
  const processGroup = (
    meshName1: keyof GLTFResult['nodes'],
    meshName2: keyof GLTFResult['nodes'] | null, // Puede que solo haya una malla en el grupo
    groupPosition: [number, number, number],
    groupRotation: [number, number, number],
    groupScale: [number, number, number]
  ) => {
    const tempGeometry1 = (nodes[meshName1] as THREE.Mesh).geometry.clone();
    const matrix1 = new THREE.Matrix4();
    matrix1.compose(
      new THREE.Vector3(...groupPosition),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(groupRotation[0], groupRotation[1], groupRotation[2])),
      new THREE.Vector3(...groupScale)
    );
    tempGeometry1.applyMatrix4(matrix1);
    geometriesToCombine.push(tempGeometry1);

    if (meshName2) {
      const tempGeometry2 = (nodes[meshName2] as THREE.Mesh).geometry.clone();
      const matrix2 = new THREE.Matrix4();
      matrix2.compose(
        new THREE.Vector3(...groupPosition),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(groupRotation[0], groupRotation[1], groupRotation[2])),
        new THREE.Vector3(...groupScale)
      );
      tempGeometry2.applyMatrix4(matrix2);
      geometriesToCombine.push(tempGeometry2);
    }
  };

  // Procesar cada grupo de meshes con sus transformaciones
  processGroup('Plane098', 'Plane098_1', [-179.37, -0.481, -956.117], [-Math.PI, 0.878, 0], [-11.8, -11.258, -8.549]);
  processGroup('Plane034', 'Plane034_1', [-161.657, -1.347, -1044.02], [0, 1.369, 0], [20.946, 11.258, 3.726]);
  processGroup('Plane092', 'Plane092_1', [-556.531, -1.325, -1034.446], [0, 0.002, 0], [5.09, 11.258, 10.385]);
  processGroup('Plane046', 'Plane046_1', [-349.967, -1.699, -973.712], [Math.PI, -0.002, Math.PI], [5.09, 11.258, 16.479]);
  processGroup('Plane044', 'Plane044_1', [-151.045, -0.924, -917.661], [0, -1.568, 0], [5.09, 11.258, 13.307]);
  processGroup('Plane002', 'Plane002_1', [-243.986, -1.699, -891.281], [0, 0.002, 0], [5.09, 11.258, 4.638]);
  processGroup('Plane030', 'Plane030_1', [-284.652, -1.699, -874.314], [0, -1.568, 0], [5.09, 11.258, 8.961]);


  // Calcular el tamaño total de los vértices e índices combinados
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
        // Esto solo se ejecutaría si alguna de tus mallas no tiene un índice.
        // Para mallas exportadas de Blender o similar, usualmente tienen.
        console.warn("Geometry missing index buffer in PisoVereda3.tsx. Assuming triangle list.");
        for (let i = 0; i < posAttr.length / 3; i++) {
            combinedIndices[indexOffset + i] = vertexOffset + i;
        }
    }

    vertexOffset += posAttr.length / 3;
    indexOffset += idxAttr?.length || (posAttr.length / 3);
  });

  // Crea el cuerpo de física con useTrimesh para la geometría COMBINADA
  const [ref] = useTrimesh(() => ({
    type: 'Static',
    args: [combinedVertices, combinedIndices],
    position: colliderPosition, // La posición base del collider combinado
  }));

  return (
    <group {...props} dispose={null} ref={ref}> {/* Adjuntamos el ref al grupo padre de los visuales */}
      {/* Renderizado de todos los grupos y meshes visuales, tal como en tu original */}
      <group
        name="curb004"
        position={[-179.37, -0.481, -956.117]}
        rotation={[-Math.PI, 0.878, 0]}
        scale={[-11.8, -11.258, -8.549]}>
        <mesh
          name="Plane098"
          geometry={nodes.Plane098.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane098_1"
          geometry={nodes.Plane098_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="curb008"
        position={[-161.657, -1.347, -1044.02]}
        rotation={[0, 1.369, 0]}
        scale={[20.946, 11.258, 3.726]}>
        <mesh
          name="Plane034"
          geometry={nodes.Plane034.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane034_1"
          geometry={nodes.Plane034_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road006"
        position={[-556.531, -1.325, -1034.446]}
        rotation={[0, 0.002, 0]}
        scale={[5.09, 11.258, 10.385]}>
        <mesh
          name="Plane092"
          geometry={nodes.Plane092.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane092_1"
          geometry={nodes.Plane092_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road012"
        position={[-349.967, -1.699, -973.712]}
        rotation={[Math.PI, -0.002, Math.PI]}
        scale={[5.09, 11.258, 16.479]}>
        <mesh
          name="Plane046"
          geometry={nodes.Plane046.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane046_1"
          geometry={nodes.Plane046_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road019"
        position={[-151.045, -0.924, -917.661]}
        rotation={[0, -1.568, 0]}
        scale={[5.09, 11.258, 13.307]}>
        <mesh
          name="Plane044"
          geometry={nodes.Plane044.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane044_1"
          geometry={nodes.Plane044_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road020"
        position={[-243.986, -1.699, -891.281]}
        rotation={[0, 0.002, 0]}
        scale={[5.09, 11.258, 4.638]}>
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane002_1"
          geometry={nodes.Plane002_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road021"
        position={[-284.652, -1.699, -874.314]}
        rotation={[0, -1.568, 0]}
        scale={[5.09, 11.258, 8.961]}>
        <mesh
          name="Plane030"
          geometry={nodes.Plane030.geometry}
          material={materials['Material.114']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane030_1"
          geometry={nodes.Plane030_1.geometry}
          material={materials['Material.116']}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoVereda3.glb')