import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'
import { useTrimesh } from '@react-three/cannon'

type GLTFResult = GLTF & {
  nodes: {
    piso_oficinas: THREE.Mesh
  }
  materials: {
    ['Granite Tiles.001']: THREE.MeshPhysicalMaterial
  }
}

export default function PisoMedio(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/pisos/pisoMedio.glb') as unknown as GLTFResult

  const geometry = nodes.piso_oficinas.geometry
  const position: [number, number, number] = [9.373, -4, -247.046]

  // 🚩 Validación: asegúrate de que la geometría tiene índices
  if (!geometry.index) {
    console.error('⚠️ El modelo piso_oficinas.glb no tiene índice de geometría. Asegúrate de exportarlo con "Triangulate faces" y "Include Indices" en Blender.')
    return null
  }

  // ⚙️ Extrae una vez los buffers
  const vertices = geometry.attributes.position.array as Float32Array
  const indices = geometry.index.array as Uint16Array | Uint32Array

  // 🛠️ Crea la física con useTrimesh (tipo Static = sin gravedad)
  const [ref] = useTrimesh(() => ({
    args: [vertices, indices],
    position,
    type: 'Static',
  }))

  return (
    <group {...props} dispose={null}>
      {/* 🧱 Físicas solo van en el group */}
      <group ref={ref} />
      <mesh
        name="piso_oficinas"
        geometry={geometry}
        material={materials['Granite Tiles.001']}
        position={position}
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('models/pisos/pisoMedio.glb')
