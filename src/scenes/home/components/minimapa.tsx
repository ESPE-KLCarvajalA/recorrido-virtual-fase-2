import { useGLTF } from '@react-three/drei'

export function Minimapa(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}models/minimapa.glb`) as any

    return (
      <group {...props} dispose={null}>

        <group name="minimapa" position={[0, 0,0]}>
          <mesh name="Cubo384" geometry={nodes.Cubo384.geometry} material={materials.techo} />
          <mesh
            name="Cubo384_1"
            geometry={nodes.Cubo384_1.geometry}
            material={materials['vidrio sala']}
          />
          <mesh name="Cubo384_2" geometry={nodes.Cubo384_2.geometry} material={materials.barras} />
          <mesh
            name="Cubo384_3"
            geometry={nodes.Cubo384_3.geometry}
            material={materials['barras cuartos.001']}
          />
          <mesh
            name="Cubo384_4"
            geometry={nodes.Cubo384_4.geometry}
            material={materials['madera paredes']}
          />
          <mesh
            name="Cubo384_5"
            geometry={nodes.Cubo384_5.geometry}
            material={materials['barras cuartos']}
          />
          <mesh
            name="Cubo384_6"
            geometry={nodes.Cubo384_6.geometry}
            material={materials['cafe oscuro']}
          />
          <mesh
            name="Cubo384_7"
            geometry={nodes.Cubo384_7.geometry}
            material={materials['pared bordes negro']}
          />
          <mesh name="Cubo384_8" geometry={nodes.Cubo384_8.geometry} material={materials.vidrio} />
          <mesh
            name="Cubo384_9"
            geometry={nodes.Cubo384_9.geometry}
            material={materials['pared negro']}
          />
          <mesh
            name="Cubo384_10"
            geometry={nodes.Cubo384_10.geometry}
            material={materials['pared blanca']}
          />
          <mesh
            name="Cubo384_11"
            geometry={nodes.Cubo384_11.geometry}
            material={materials['madera clara 2']}
          />
          <mesh
            name="Cubo384_12"
            geometry={nodes.Cubo384_12.geometry}
            material={materials['madera clara 2.004']}
          />
          <mesh
            name="Cubo384_13"
            geometry={nodes.Cubo384_13.geometry}
            material={materials['plateado columnas']}
          />
          <mesh
            name="Cubo384_14"
            geometry={nodes.Cubo384_14.geometry}
            material={materials['Material.009']}
          />
          <mesh
            name="Cubo384_15"
            geometry={nodes.Cubo384_15.geometry}
            material={materials['piso aulas']}
          />
          <mesh
            name="Cubo384_16"
            geometry={nodes.Cubo384_16.geometry}
            material={materials['pared blanca externa']}
          />
          <mesh
            name="Cubo384_17"
            geometry={nodes.Cubo384_17.geometry}
            material={materials['blanca externa pisos']}
          />
          <mesh
            name="Cubo384_18"
            geometry={nodes.Cubo384_18.geometry}
            material={materials['verde.001']}
          />
          <mesh
            name="Cubo384_19"
            geometry={nodes.Cubo384_19.geometry}
            material={materials['madera clara 1']}
          />
          <mesh
            name="Cubo384_20"
            geometry={nodes.Cubo384_20.geometry}
            material={materials['04_-_Default']}
          />
          <mesh
            name="Cubo384_21"
            geometry={nodes.Cubo384_21.geometry}
            material={materials['madera clara 1.001']}
          />
          <mesh
            name="Cubo384_22"
            geometry={nodes.Cubo384_22.geometry}
            material={materials['led techo']}
          />
          <mesh name="Cubo384_23" geometry={nodes.Cubo384_23.geometry} material={materials.acera} />
          <mesh
            name="Cubo384_24"
            geometry={nodes.Cubo384_24.geometry}
            material={materials.escaleras}
          />
          <mesh
            name="Cubo384_25"
            geometry={nodes.Cubo384_25.geometry}
            material={materials['piso base']}
          />
          <mesh
            name="Cubo384_26"
            geometry={nodes.Cubo384_26.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Cubo384_27"
            geometry={nodes.Cubo384_27.geometry}
            material={materials['Material.002']}
          />
          <mesh name="Cubo384_28" geometry={nodes.Cubo384_28.geometry} material={materials.terreno} />
          <mesh
            name="Cubo384_29"
            geometry={nodes.Cubo384_29.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cubo384_30"
            geometry={nodes.Cubo384_30.geometry}
            material={materials.terreno2}
          />
          <mesh
            name="Cubo384_31"
            geometry={nodes.Cubo384_31.geometry}
            material={materials.terreno3}
          />
          <mesh name="Cubo384_32" geometry={nodes.Cubo384_32.geometry} material={materials.mat15} />
          <mesh name="Cubo384_33" geometry={nodes.Cubo384_33.geometry} material={materials.mat10} />
          <mesh
            name="Cubo384_34"
            geometry={nodes.Cubo384_34.geometry}
            material={materials['03___Default']}
          />
          <mesh name="Cubo384_35" geometry={nodes.Cubo384_35.geometry} material={materials.mat20} />
          <mesh name="Cubo384_36" geometry={nodes.Cubo384_36.geometry} material={materials.Mat} />
          <mesh name="Cubo384_37" geometry={nodes.Cubo384_37.geometry} material={materials.tronco} />
          <mesh name="Cubo384_38" geometry={nodes.Cubo384_38.geometry} material={materials.logo} />
          <mesh name="Cubo384_39" geometry={nodes.Cubo384_39.geometry} material={materials.figura} />
        </group>
      </group>
    )
  }
useGLTF.preload(`${import.meta.env.BASE_URL}models/minimapa.glb`)
