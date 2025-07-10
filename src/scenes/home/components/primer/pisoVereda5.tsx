import * as THREE from 'three'
import { ThreeElements } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useConvexPolyhedron } from '@react-three/cannon'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'

type GLTFResult = GLTF & {
  nodes: {
    Plane100: THREE.Mesh
    Plane100_1: THREE.Mesh
    Plane085: THREE.Mesh
    Plane085_1: THREE.Mesh
    Plane099: THREE.Mesh
    Plane099_1: THREE.Mesh
    piso_gris001: THREE.Mesh
    road004: THREE.Mesh
    Plane094: THREE.Mesh
    Plane094_1: THREE.Mesh
  }
  materials: {
    ['Material.128']: THREE.MeshStandardMaterial
    ['Material.129']: THREE.MeshStandardMaterial
    ['Material.130']: THREE.MeshStandardMaterial
    ['Material.131']: THREE.MeshStandardMaterial
    ['Material.126']: THREE.MeshStandardMaterial
    ['Material.127']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.154']: THREE.MeshStandardMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Material.121']: THREE.MeshStandardMaterial
  }
}

function getConvexHullFromMeshes(meshes: THREE.Mesh[], position: THREE.Vector3, rotation: THREE.Euler, scale: THREE.Vector3) {
  // Recolecta todos los vértices transformados por posición, rotación y escala
  const points: THREE.Vector3[] = []

  const matrix = new THREE.Matrix4()
  matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale)

  meshes.forEach(mesh => {
    const posAttr = mesh.geometry.attributes.position
    for (let i = 0; i < posAttr.count; i++) {
      const vertex = new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
      vertex.applyMatrix4(matrix)
      points.push(vertex)
    }
  })

  return new ConvexGeometry(points)
}

export function PisoVereda5(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoVereda5.glb') as unknown as GLTFResult

  // Definición de grupos con sus transformaciones y meshes
  const groups = [
    {
      name: 'curb003',
      position: new THREE.Vector3(-575.581, -4.216, 60.901),
      rotation: new THREE.Euler(-Math.PI, 0.664, 0),
      scale: new THREE.Vector3(-13.438, -11.258, -7.68),
      meshes: [nodes.Plane100, nodes.Plane100_1],
      materials: [materials['Material.128'], materials['Material.129']],
    },
    {
      name: 'curb007',
      position: new THREE.Vector3(-732.487, -4.216, 145.569),
      rotation: new THREE.Euler(-Math.PI, 0.664, 0),
      scale: new THREE.Vector3(-13.438, -11.258, -7.68),
      meshes: [nodes.Plane085, nodes.Plane085_1],
      materials: [materials['Material.130'], materials['Material.131']],
    },
    {
      name: 'road007',
      position: new THREE.Vector3(-465.979, -4.216, -164.703),
      rotation: new THREE.Euler(0, -1.568, 0),
      scale: new THREE.Vector3(5.09, 11.258, 14.195),
      meshes: [nodes.Plane099, nodes.Plane099_1],
      materials: [materials['Material.126'], materials['Material.127']],
    },
    {
      name: 'piso_gris001',
      position: new THREE.Vector3(-455.786, -4.216, -263.412),
      rotation: new THREE.Euler(0, 0, -Math.PI),
      scale: new THREE.Vector3(-0.319, -1, -0.83),
      meshes: [nodes.piso_gris001],
      materials: [materials['Material.031']],
    },
    {
      name: 'road004',
      position: new THREE.Vector3(-406.536, -4.216, -85.252),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(17.387, 11.258, 10.745),
      meshes: [nodes.road004],
      materials: [materials['Material.154']],
    },
    {
      name: 'road002',
      position: new THREE.Vector3(-646.937, -4.216, 8.19),
      rotation: new THREE.Euler(-Math.PI, 1.568, -Math.PI),
      scale: new THREE.Vector3(6.96, 11.258, 38.979),
      meshes: [nodes.Plane094, nodes.Plane094_1],
      materials: [materials['Material.039'], materials['Material.121']],
    },
  ]

  // Crear colisiones con refs
  const refs = groups.map(({ meshes, position, rotation, scale }) => {
    const hullGeometry = getConvexHullFromMeshes(meshes, new THREE.Vector3(0, 0, 0), new THREE.Euler(0, 0, 0), new THREE.Vector3(1, 1, 1))

    // Extraer vertices y caras
    const vertices: THREE.Vector3[] = []
    const convexPositions = hullGeometry.attributes.position.array
    for (let i = 0; i < convexPositions.length; i += 3) {
      vertices.push(new THREE.Vector3(convexPositions[i], convexPositions[i + 1], convexPositions[i + 2]))
    }
    const faces: number[][] = []
    if (hullGeometry.index) {
      const idx = hullGeometry.index.array
      for (let i = 0; i < idx.length; i += 3) {
        faces.push([idx[i], idx[i + 1], idx[i + 2]])
      }
    }

    return useConvexPolyhedron(() => ({
      args: [vertices, faces],
      position: position.toArray() as [number, number, number],
      rotation: [rotation.x, rotation.y, rotation.z],
      type: 'Static',
    }))[0]
  })

  return (
    <group {...props} dispose={null}>
      {groups.map(({ name, position, rotation, scale, meshes, materials }, i) => (
        <group
          key={name}
          ref={refs[i]}
          name={name}
          position={position.toArray()}
          rotation={[rotation.x, rotation.y, rotation.z]}
          scale={scale.toArray()}
        >
          {meshes.map((mesh, idx) => (
            <mesh
              key={idx}
              geometry={mesh.geometry}
              material={materials[idx]}
              castShadow
              receiveShadow
            />
          ))}
        </group>
      ))}
    </group>
  )
}

useGLTF.preload('models/pisos/pisoVereda5.glb')
