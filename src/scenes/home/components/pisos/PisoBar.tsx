import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useTrimesh } from '@react-three/cannon' // Importar useTrimesh

type GLTFResult = GLTF & {
  nodes: {
    Plane100: THREE.Mesh
    Plane100_1: THREE.Mesh
    Plane085: THREE.Mesh
    Plane085_1: THREE.Mesh
    Plane027: THREE.Mesh
    Plane027_1: THREE.Mesh
    Plane028: THREE.Mesh
    Plane028_1: THREE.Mesh
    Plane029: THREE.Mesh
    Plane029_1: THREE.Mesh
    Plane099: THREE.Mesh
    Plane099_1: THREE.Mesh
    Plane101: THREE.Mesh
    Plane101_1: THREE.Mesh
    piso_gris001: THREE.Mesh
    Plane089: THREE.Mesh
    Plane089_1: THREE.Mesh
    Plane089_2: THREE.Mesh
    Plane094: THREE.Mesh
    Plane094_1: THREE.Mesh
  }
  materials: {
    ['Material.128']: THREE.MeshStandardMaterial
    ['Material.129']: THREE.MeshStandardMaterial
    ['Material.130']: THREE.MeshStandardMaterial
    ['Material.131']: THREE.MeshStandardMaterial
    ['Material.132']: THREE.MeshStandardMaterial
    ['Material.133']: THREE.MeshStandardMaterial
    ['Material.134']: THREE.MeshStandardMaterial
    ['Material.135']: THREE.MeshStandardMaterial
    ['Material.148']: THREE.MeshStandardMaterial
    ['Material.149']: THREE.MeshStandardMaterial
    ['Material.126']: THREE.MeshStandardMaterial
    ['Material.127']: THREE.MeshStandardMaterial
    ['Material.150']: THREE.MeshStandardMaterial
    ['Material.151']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.154']: THREE.MeshStandardMaterial
    ['Material.155']: THREE.MeshStandardMaterial
    ['MDF Concrete decor Arauco.014']: THREE.MeshPhysicalMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Material.121']: THREE.MeshStandardMaterial
  }
}

export function PisoBar(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoBar.glb') as unknown as GLTFResult

  // --- Lógica de física para el "piso" principal del bar ---
  // Identificamos las mallas que probablemente forman el suelo o elementos grandes colisionables
  // Se asume que 'piso_gris001' es el suelo principal que debe tener colisión.
  // Podrías necesitar ajustar esta selección dependiendo de cómo estén modeladas las partes colisionables.
  const mainFloorGeometry = nodes.piso_gris001.geometry;
  const mainFloorPosition: [number, number, number] = [-469, -8, -263.412];
  const mainFloorRotation: [number, number, number] = [0, 0, -Math.PI];
  const mainFloorScale: [number, number, number] = [-0.319, -1, -0.83];

  // Clona y aplica transformaciones a la geometría del collider
  const transformedMainFloorGeometry = mainFloorGeometry.clone();
  const tempMatrix = new THREE.Matrix4();
  tempMatrix.makeRotationFromEuler(new THREE.Euler(mainFloorRotation[0], mainFloorRotation[1], mainFloorRotation[2]));
  tempMatrix.scale(new THREE.Vector3(mainFloorScale[0], mainFloorScale[1], mainFloorScale[2]));
  transformedMainFloorGeometry.applyMatrix4(tempMatrix);

  const mainFloorVertices = transformedMainFloorGeometry.attributes.position.array as Float32Array;
  const mainFloorIndices = transformedMainFloorGeometry.index ? (transformedMainFloorGeometry.index.array as Uint16Array | Uint32Array) : new Uint32Array();

  const [mainFloorRef] = useTrimesh(() => ({
    type: 'Static',
    args: [mainFloorVertices, mainFloorIndices],
    position: mainFloorPosition,
  }));
  // --- Fin de la lógica de física ---

  return (
    <group {...props} dispose={null}>
      {/* REFERENCIA DE FÍSICA PARA EL PISO PRINCIPAL */}
      <group ref={mainFloorRef} />

      {/* GRUPOS Y MESHES VISUALES ORIGINALES */}
      <group
        name="curb003"
        position={[-575.581, -4, 60.901]}
        rotation={[-Math.PI, 0.664, 0]}
        scale={[-13.438, -11.258, -7.68]}>
        <mesh
          name="Plane100"
          geometry={nodes.Plane100.geometry}
          material={materials['Material.128']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane100_1"
          geometry={nodes.Plane100_1.geometry}
          material={materials['Material.129']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="curb007"
        position={[-732.487, -4, 145.569]}
        rotation={[-Math.PI, 0.664, 0]}
        scale={[-13.438, -11.258, -7.68]}>
        <mesh
          name="Plane085"
          geometry={nodes.Plane085.geometry}
          material={materials['Material.130']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane085_1"
          geometry={nodes.Plane085_1.geometry}
          material={materials['Material.131']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road001"
        position={[-872.397, -4, -241.381]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.337, 11.258, 22.208]}>
        <mesh
          name="Plane027"
          geometry={nodes.Plane027.geometry}
          material={materials['Material.132']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane027_1"
          geometry={nodes.Plane027_1.geometry}
          material={materials['Material.133']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road003"
        position={[-917.575, -4, -49.504]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[6.96, 11.258, 38.979]}>
        <mesh
          name="Plane028"
          geometry={nodes.Plane028.geometry}
          material={materials['Material.134']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane028_1"
          geometry={nodes.Plane028_1.geometry}
          material={materials['Material.135']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road005"
        position={[-854.43, -4, -105.094]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[6.96, 11.258, 38.979]}>
        <mesh
          name="Plane029"
          geometry={nodes.Plane029.geometry}
          material={materials['Material.148']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane029_1"
          geometry={nodes.Plane029_1.geometry}
          material={materials['Material.149']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road007"
        position={[-465.979, -4.216, -164.703]}
        rotation={[0, -1.568, 0]}
        scale={[5.09, 11.258, 14.195]}>
        <mesh
          name="Plane099"
          geometry={nodes.Plane099.geometry}
          material={materials['Material.126']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane099_1"
          geometry={nodes.Plane099_1.geometry}
          material={materials['Material.127']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road011"
        position={[-787.014, -4.216, -195.368]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.337, 11.258, 22.208]}>
        <mesh
          name="Plane101"
          geometry={nodes.Plane101.geometry}
          material={materials['Material.150']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane101_1"
          geometry={nodes.Plane101_1.geometry}
          material={materials['Material.151']}
          castShadow
          receiveShadow
        />
      </group>
      <mesh
        name="piso_gris001"
        geometry={nodes.piso_gris001.geometry}
        material={materials['Material.031']}
        position={mainFloorPosition} // Usamos la posición del collider para el visual
        rotation={mainFloorRotation} // Usamos la rotación del collider para el visual
        scale={mainFloorScale}       // Usamos la escala del collider para el visual
        castShadow
        receiveShadow
      />
      <group
        name="road004"
        position={[-581.282, -4.216, -129.609]}
        scale={[17.387, 11.258, 10.745]}>
        <mesh
          name="Plane089"
          geometry={nodes.Plane089.geometry}
          material={materials['Material.154']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane089_1"
          geometry={nodes.Plane089_1.geometry}
          material={materials['Material.155']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane089_2"
          geometry={nodes.Plane089_2.geometry}
          material={materials['MDF Concrete decor Arauco.014']}
          castShadow
          receiveShadow
        />
      </group>
      <group
        name="road002"
        position={[-646.937, -4.216, 8.19]}
        rotation={[-Math.PI, 1.568, -Math.PI]}
        scale={[6.96, 11.258, 38.979]}>
        <mesh
          name="Plane094"
          geometry={nodes.Plane094.geometry}
          material={materials['Material.039']}
          castShadow
          receiveShadow
        />
        <mesh
          name="Plane094_1"
          geometry={nodes.Plane094_1.geometry}
          material={materials['Material.121']}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/pisos/pisoBar.glb')