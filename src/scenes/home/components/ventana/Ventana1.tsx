import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { GLTF } from 'three-stdlib';
import { MaterialManager } from '../../../../utils/MaterialManager';

type GLTFResult = GLTF & {
  nodes: {
    WindowFrane005: THREE.Mesh;
    WindowFrane005_1: THREE.Mesh;
  };
  materials: {
    ['Material.072']: THREE.MeshStandardMaterial;
    ['Material.102']: THREE.MeshStandardMaterial;
  };
};

type InstanceData = {
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

// 🎯 PASO 2: Geometrías compartidas para todas las ventanas
const SharedGeometries = {
  frame: null as THREE.BufferGeometry | null,
  glass: null as THREE.BufferGeometry | null,
};

export function Ventana1() {
  const { nodes } = useGLTF('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana1.glb') as unknown as GLTFResult;

  const frameRef = useRef<THREE.InstancedMesh>(null);
  const glassRef = useRef<THREE.InstancedMesh>(null);

  // 🎯 Materiales optimizados usando MaterialManager
  const frameMaterial = MaterialManager.getMaterial('window-frame');
  const glassMaterial = MaterialManager.getBaseMaterial('glass');
  const customBrownMaterial = MaterialManager.getMaterial('window-brown');

  const allInstances: InstanceData[] = [
    { name: 'VentanaPrincipal', position: [430.901, 32.5174, -351.084], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { name: 'WindowR001', position: [477.353, 32.834, -363.356], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { name: 'WindowL001', position: [539.9, 32.517, -382], rotation: [0, -0.07, 0], scale: [0.8, 1, 1] },
    { name: 'WindowFrane001_1', position: [556.373, 32.857, -368.78], rotation: [0, -1.63, 0], scale: [0.8, 1, 1] },
    { name: 'WindowFrane001_2', position: [580.481, 32.715, -278.365], rotation: [0, -1.6, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane001_3', position: [589, 32.758, -245.441], rotation: [0, -1.6, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane001_4', position: [606, 32.936, -187], rotation: [0, -1.6, 0], scale: [1, 1, 1] },
    { name: 'WindowFrane001_41', position: [400.129, 32.8, -374.283], rotation: [0, -1.56, 0], scale: [1.1, 1, 1] },
    { name: 'WindowFrane001_42', position: [391.794, 30.338, -427.515], rotation: [0, -0.9, 0], scale: [1, 0.8, 0] },
    { name: 'WindowFrane001_43', position: [345, 31, -489], rotation: [0, -0.9, 0], scale: [1, 0.8, 0] },
    { name: 'WindowFrane001_44', position: [-137, 41, -0.946], rotation: [0, 2.9, 0], scale: [1.19, 0.5, 1] },
    { name: 'WindowFrane001_1', position: [-240.959, 37, -177.872], rotation: [0, 1.4, 0], scale: [0.8, 0.5, 0.5] },
    { name: 'WindowFrane001_2', position: [-240.959, 37, -153.122], rotation: [0, 1.4, 0], scale: [0.8, 0.5, 0.5] }
  ];

  // Separar las ventanas especiales (solo las que realmente necesitan material diferente)
  const customWindows = allInstances.filter(w =>
    w.name === 'WindowFrane001_42' || w.name === 'WindowFrane001_43'
  );

  // El resto sí va como instanced
  const instancedWindows = allInstances.filter(w =>
    w.name !== 'WindowFrane001_42' && w.name !== 'WindowFrane001_43'
  );

  // 🎯 Inicializar geometrías compartidas una vez
  useEffect(() => {
    if (nodes.WindowFrane005 && !SharedGeometries.frame) {
      SharedGeometries.frame = nodes.WindowFrane005.geometry.clone();
      SharedGeometries.glass = nodes.WindowFrane005_1.geometry.clone();
      
      // Optimizar geometrías
      SharedGeometries.frame.computeBoundingSphere();
      SharedGeometries.glass.computeBoundingSphere();
    }
  }, [nodes]);

  useEffect(() => {
    if (!SharedGeometries.frame || !SharedGeometries.glass) return;

    instancedWindows.forEach((instance, i) => {
      const position = new THREE.Vector3(...instance.position);
      const rotation = new THREE.Euler(...instance.rotation);
      const scale = new THREE.Vector3(...instance.scale);
      const matrix = new THREE.Matrix4();
      matrix.compose(position, new THREE.Quaternion().setFromEuler(rotation), scale);

      frameRef.current!.setMatrixAt(i, matrix);
      glassRef.current!.setMatrixAt(i, matrix);
    });

    // 🎯 Optimizaciones de performance
    if (frameRef.current) {
      frameRef.current.instanceMatrix.needsUpdate = true;
      frameRef.current.frustumCulled = true;
      frameRef.current.count = instancedWindows.length;
    }
    
    if (glassRef.current) {
      glassRef.current.instanceMatrix.needsUpdate = true;
      glassRef.current.frustumCulled = true;
      glassRef.current.count = instancedWindows.length;
    }
  }, [instancedWindows, nodes]);

  // No renderizar si no hay geometrías
  if (!SharedGeometries.frame || !SharedGeometries.glass) {
    return null;
  }

  return (
    <group>
      {/* 🎯 Ventanas instanciadas optimizadas */}
      <instancedMesh
        ref={frameRef}
        args={[SharedGeometries.frame, frameMaterial, instancedWindows.length]}
      />
      <instancedMesh
        ref={glassRef}
        args={[SharedGeometries.glass, glassMaterial, instancedWindows.length]}
      />

      {/* 🎯 Solo ventanas que realmente necesitan material personalizado */}
      {customWindows.map((win, i) => (
        <group
          key={`custom-window-${i}`}
          position={win.position}
          rotation={win.rotation}
          scale={win.scale}
        >
          <mesh
            geometry={SharedGeometries.frame}
            material={customBrownMaterial}
            frustumCulled={true}
          />
          <mesh
            geometry={SharedGeometries.glass}
            material={glassMaterial}
            frustumCulled={true}
          />
        </group>
      ))}
    </group>
  );
}

// 🎯 Preload optimizado
useGLTF.preload('https://pub-c5bac125f50b4d948ed14a01abf7fef0.r2.dev/models/ventana/ventana1.glb');