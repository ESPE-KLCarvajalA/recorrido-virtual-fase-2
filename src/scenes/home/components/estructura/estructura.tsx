import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import { GLTF } from 'three-stdlib';
import { useThree } from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
        Plane056: THREE.Mesh;
        Plane056_1: THREE.Mesh;
        Plane056_2: THREE.Mesh;
    };
    materials: {
        ['verde.002']: THREE.MeshStandardMaterial;
        ['Material.045']: THREE.MeshStandardMaterial;
        ['White Glazed Bricks.001']: THREE.MeshStandardMaterial;
    };
};

type Instance = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

// 🎯 PASO 3: Materiales compartidos optimizados
const SharedMaterials = {
    green: new THREE.MeshStandardMaterial({ 
        color: '#03562C', 
        roughness: 0.8,
        metalness: 0.1 
    }),
    gray: new THREE.MeshStandardMaterial({ 
        color: '#666666', 
        roughness: 0.7,
        metalness: 0.2 
    }),
    white: new THREE.MeshStandardMaterial({ 
        color: '#FFFFFF', 
        roughness: 0.9,
        metalness: 0.0 
    })
};

// 🎯 Geometrías compartidas
const SharedGeometries = {
    base: null as THREE.BufferGeometry | null,
    detail1: null as THREE.BufferGeometry | null, 
    detail2: null as THREE.BufferGeometry | null
};

// 🎯 BALANCED: Instancias importantes restauradas pero con LOD inteligente
const instances: Instance[] = [
    // ✅ ÁREA PRINCIPAL - Siempre visible
    { position: [-58.822, 23, 553.073], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-18.424, 23, 517.935], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [22.378, 23, 482.444], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [63.249, 23, 446.895], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [102.23, 23, 412.212], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [142.14, 23, 375.582], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [182.007, 23, 338.991], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [221.898, 22.212, 302.378], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [261.773, 20.403, 265.78], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [299.982, 21.011, 228.489], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [337.772, 21.028, 189.72], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [375.478, 21.028, 151.037], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [413.248, 21.028, 112.143], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [451.042, 21.028, 72.884], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [488.901, 21.028, 33.568], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    
    // ✅ ÁREA SECUNDARIA - Visible cuando cerca
    { position: [527.31, 21.094, -4.754], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [564.132, 21.177, -44.198], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [600.397, 21.177, -82.993], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [640.04, 21.177, -120.383], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [679.872, 21.177, -157.263], rotation: [0, 0.1, 0], scale: [1, 1, 1] },
    { position: [695, 21.177, -200], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    
    // ✅ ÁREA IMPORTANTE - Estructura lateral
    { position: [539.998, 21.177, -714.755], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [555.212, 21.177, -662.757], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [570.822, 21.177, -611.763], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [586.06, 21.177, -560.212], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    { position: [601.67, 21.177, -508.739], rotation: [0, 1.2, 0], scale: [1, 1, 1] },
    
    // ✅ ENTRADA SECUNDARIA - Importante para navegación
    { position: [-100, 23, 590], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { position: [-140, 23, 627], rotation: [0, 0, 0], scale: [1, 1, 1] },
    
    // ✅ ÁREA LEJANA - Solo visible cuando muy cerca o navegando hacia allá
    { position: [-322.682, 15.372, 785.385], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-364.275, 15.372, 820.301], rotation: [0, 3.1, 0], scale: [1, 1, 1] },
    { position: [-405.855, 15.372, 855.401], rotation: [0, 3.1, 0], scale: [1, 1, 1] }
    
    // 🎯 Mantengo las instancias MÁS importantes pero con LOD inteligente
];

function useCameraDistance() {
    const { camera } = useThree();
    return useMemo(() => {
        return camera.position.length();
    }, [Math.floor(camera.position.x / 100), Math.floor(camera.position.z / 100)]);
}

export function Estructura() {
    const { nodes } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura.glb') as unknown as GLTFResult;

    const ref1 = useRef<THREE.InstancedMesh>(null);
    const ref2 = useRef<THREE.InstancedMesh>(null);
    const ref3 = useRef<THREE.InstancedMesh>(null);
    
    const cameraDistance = useCameraDistance();

    // 🎯 LOD BALANCEADO: Filtrar instancias según distancia pero mostrar contenido
    const visibleInstances = useMemo(() => {
        if (cameraDistance < 400) {
            return instances; // Todas las instancias si está relativamente cerca
        } else if (cameraDistance < 800) {
            return instances.slice(0, 20); // Mostrar 20 si está lejos
        } else {
            return instances.slice(0, 15); // Mostrar 15 si está muy lejos
        }
    }, [cameraDistance]);

    // 🎯 Inicializar geometrías compartidas una vez
    useEffect(() => {
        if (nodes.Plane056 && !SharedGeometries.base) {
            SharedGeometries.base = nodes.Plane056.geometry.clone();
            SharedGeometries.detail1 = nodes.Plane056_1.geometry.clone();
            SharedGeometries.detail2 = nodes.Plane056_2.geometry.clone();
            
            // Optimizar geometrías
            SharedGeometries.base.computeBoundingSphere();
            SharedGeometries.detail1.computeBoundingSphere();
            SharedGeometries.detail2.computeBoundingSphere();
            
            // Aplicar optimizaciones
            [SharedGeometries.base, SharedGeometries.detail1, SharedGeometries.detail2].forEach(geo => {
                if (geo) {
                    geo.deleteAttribute('uv2'); // Quitar UV secundario si existe
                    geo.computeVertexNormals(); // Optimizar normales
                }
            });
        }
    }, [nodes]);

    useEffect(() => {
        if (!SharedGeometries.base) return;

        visibleInstances.forEach((inst, i) => {
            const matrix = new THREE.Matrix4();
            const position = new THREE.Vector3(...inst.position);
            const rotation = new THREE.Euler(...inst.rotation);
            const scale = new THREE.Vector3(...inst.scale);
            matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

            ref1.current?.setMatrixAt(i, matrix);
            ref2.current?.setMatrixAt(i, matrix);
            ref3.current?.setMatrixAt(i, matrix);
        });

        // 🎯 Optimizaciones críticas
        [ref1, ref2, ref3].forEach((ref) => {
            if (ref.current) {
                ref.current.instanceMatrix.needsUpdate = true;
                ref.current.frustumCulled = true;
                ref.current.count = visibleInstances.length; // Actualizar count
                ref.current.computeBoundingSphere(); // Optimizar culling
            }
        });
    }, [visibleInstances]);

    // No renderizar si no hay geometrías
    if (!SharedGeometries.base) {
        return null;
    }

    return (
        <group>
            {/* 🎯 Usar geometrías y materiales compartidos */}
            <instancedMesh
                ref={ref1}
                args={[SharedGeometries.base, SharedMaterials.green, visibleInstances.length]}
            />
            <instancedMesh
                ref={ref2}
                args={[SharedGeometries.detail1, SharedMaterials.gray, visibleInstances.length]}
            />
            <instancedMesh
                ref={ref3}
                args={[SharedGeometries.detail2, SharedMaterials.white, visibleInstances.length]}
            />
        </group>
    );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/estructura/estructura.glb');