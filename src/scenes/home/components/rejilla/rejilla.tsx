import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import { GLTF } from 'three-stdlib';
import { useThree } from '@react-three/fiber';

type GLTFResult = GLTF & {
    nodes: {
        rejilla_puerta004: THREE.Mesh;
    };
    materials: {
        ['Material.006']: THREE.MeshStandardMaterial;
    };
};

type InstanceData = {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
};

// 🎯 PASO 3: Material único compartido
const SharedRejillaMaterial = new THREE.MeshStandardMaterial({ 
    color: '#444444',
    roughness: 0.8,
    metalness: 0.6,
    side: THREE.DoubleSide // Para rejillas
});

// 🎯 Geometría compartida
let SharedRejillaGeometry: THREE.BufferGeometry | null = null;

function useCameraDistance() {
    const { camera } = useThree();
    return useMemo(() => {
        return camera.position.length();
    }, [Math.floor(camera.position.x / 80), Math.floor(camera.position.z / 80)]);
}

export function Rejilla() {
    const { nodes } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/rejilla/rejilla.glb') as unknown as GLTFResult;

    const meshRef = useRef<THREE.InstancedMesh>(null);
    const cameraDistance = useCameraDistance();

    // 🎯 REJILLAS IMPORTANTES RESTAURADAS
    const allInstances: InstanceData[] = [
        // ✅ ÁREA PRINCIPAL - Siempre importantes
        { position: [431.91, 32.253, -349.326], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [477.383, 32.218, -361.549], rotation: [0, 0, 0], scale: [1, 1, 1] },
        { position: [539.536, 32, -378], rotation: [0, 0, 0], scale: [0.8, 0.95, 1] },
        { position: [578.679, 32, -278.097], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [587.731, 32, -245.404], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [603.677, 32, -186.33], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        { position: [397.316, 32, -373.437], rotation: [0, -1.6, 0], scale: [1, 0.95, 1] },
        
        // ✅ EDIFICIO PRINCIPAL - Importante para navegación
        { position: [239, 36.024, -94], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [237, 36.024, -35], rotation: [0, -1.8, 0], scale: [1.6, 1, 1] },
        { position: [307.456, 35, -167.029], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [307.456, 35, -231.007], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [307.456, 35, -305.134], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        { position: [307.456, 35, -368.625], rotation: [0, -1.8, 0], scale: [1.5, 1, 1] },
        
        // ✅ ÁREAS SECUNDARIAS - Visibles cuando cerca
        { position: [274, 32, -407.077], rotation: [0, -0.1, 0], scale: [1.5, 0.9, 1] },
        { position: [201.321, 33, -475.267], rotation: [0, -0.2, 0], scale: [1.5, 0.9, 1] },
        { position: [54.762, 33, -475.287], rotation: [0, -0.2, 0], scale: [1.5, 0.9, 1] },
        { position: [-29, 33, -443], rotation: [0, -1.7, 0], scale: [1.6, 0.9, 1] },
        { position: [169.422, 42, -316], rotation: [0, -1.8, 0], scale: [1, 0.5, 1] },
        { position: [169.422, 42, -230.945], rotation: [0, -1.8, 0], scale: [1.7, 0.5, 1] },
        { position: [65.279, 31, -131], rotation: [0, -0.2, 0], scale: [1.5, 0.9, 1] },
        { position: [65.279, 35, -3.785], rotation: [0, 0, 0], scale: [1.5, 1, 1] },
        { position: [-95.102, 35, -104], rotation: [0, -0.2, 0], scale: [1.5, 1, 1] },
        
        // ✅ OFICINAS - Importantes para experiencia
        { position: [164, 19, -279], rotation: [0, -1.94, 0], scale: [0.7, 1.7, 1] },
        { position: [112.5, 20, -133], rotation: [0, -0.4, 0], scale: [0.7, 1.7, 1] },
        { position: [164, 19, -143], rotation: [0, -1.94, 0], scale: [0.7, 1.7, 1] },
        { position: [596, 22, -214], rotation: [0, -1.7, 0], scale: [0.7, 1.7, 1] },
        { position: [-34.06, 20, -369.5], rotation: [0, -1.94, 0], scale: [0.7, 1.8, 1] },
        { position: [148, 20, -344], rotation: [0, -0.35, 0], scale: [0.7, 1.7, 1] },
        { position: [-60, 19, -223], rotation: [0, -1.94, 0], scale: [0.7, 1.7, 1] },
        { position: [-241, 26, -257.5], rotation: [0, -1.75, 0], scale: [1.56, 2, 1] }
        
        // 🎯 Restauré las rejillas más importantes para navegación
    ];

    // 🎯 LOD BALANCEADO: Filtrar rejillas según distancia pero mostrar contenido importante
    const visibleInstances = useMemo(() => {
        if (cameraDistance < 350) {
            return allInstances; // Todas las rejillas si está cerca
        } else if (cameraDistance < 600) {
            return allInstances.slice(0, 20); // Mostrar 20 principales si está lejos
        } else {
            return allInstances.slice(0, 12); // Mostrar 12 esenciales si está muy lejos
        }
    }, [cameraDistance]);

    // 🎯 Inicializar geometría compartida una vez
    useEffect(() => {
        if (nodes.rejilla_puerta004 && !SharedRejillaGeometry) {
            SharedRejillaGeometry = nodes.rejilla_puerta004.geometry.clone();
            
            // Optimizar geometría
            SharedRejillaGeometry.computeBoundingSphere();
            SharedRejillaGeometry.computeVertexNormals();
            
            // Eliminar atributos innecesarios
            if (SharedRejillaGeometry.attributes.uv2) {
                SharedRejillaGeometry.deleteAttribute('uv2');
            }
        }
    }, [nodes]);

    useEffect(() => {
        if (!SharedRejillaGeometry || !meshRef.current) return;

        visibleInstances.forEach((inst, i) => {
            const pos = new THREE.Vector3(...inst.position);
            const rot = new THREE.Euler(...inst.rotation);
            const scl = new THREE.Vector3(...inst.scale);
            const matrix = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(rot), scl);
            meshRef.current!.setMatrixAt(i, matrix);
        });

        // 🎯 Optimizaciones críticas
        meshRef.current.instanceMatrix.needsUpdate = true;
        meshRef.current.frustumCulled = true;
        meshRef.current.count = visibleInstances.length; // Actualizar count dinámico
        meshRef.current.computeBoundingSphere(); // Optimizar culling
    }, [visibleInstances]);

    // No renderizar si no hay geometría
    if (!SharedRejillaGeometry) {
        return null;
    }

    return (
        <instancedMesh
            ref={meshRef}
            args={[SharedRejillaGeometry, SharedRejillaMaterial, visibleInstances.length]}
        />
    );
}

useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/rejilla/rejilla.glb');