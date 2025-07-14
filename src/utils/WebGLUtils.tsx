// src/utils/WebGLUtils.tsx - VERSIÓN CORREGIDA CON TIPOS
import React from 'react';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export const WebGLContextHandler = (): React.ReactElement | null => {
  const { gl } = useThree();

  useEffect((): (() => void) => {
    const canvas = gl.domElement;

    // ✅ CORREGIDO: Usar Event genérico con tipos explícitos
    const handleContextLost = (event: Event): void => {
      console.error('🚨 WebGL Context Lost!');
      event.preventDefault();
      
      // Mostrar alerta al usuario
      alert('Error gráfico detectado. La página se recargará automáticamente.');
      
      // Recargar después de 2 segundos
      setTimeout((): void => {
        window.location.reload();
      }, 2000);
    };

    const handleContextRestored = (_event: Event): void => {
      console.log('✅ WebGL Context Restored!');
    };

    // ✅ CORREGIDO: Cast de tipos para eventos WebGL
    canvas.addEventListener('webglcontextlost', handleContextLost as EventListener);
    canvas.addEventListener('webglcontextrestored', handleContextRestored as EventListener);

    return (): void => {
      canvas.removeEventListener('webglcontextlost', handleContextLost as EventListener);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored as EventListener);
    };
  }, [gl]);

  return null;
};

// ✅ OPCIONAL: Monitor de memoria con tipos explícitos
export const MemoryMonitor = (): React.ReactElement | null => {
  const { gl } = useThree();

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      const info = gl.info;
      const memory = (performance as any).memory;
      
      const stats = {
        geometries: info.memory.geometries,
        textures: info.memory.textures,
        programs: info.programs?.length || 0,
        calls: info.render.calls,
        triangles: info.render.triangles,
        jsHeap: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB' : 'N/A'
      };
      
      console.log('📊 GPU Stats:', stats);
      
      // 🚨 Alertas críticas
      if (stats.geometries > 50) {
        console.warn('⚠️ Demasiadas geometrías:', stats.geometries);
      }
      if (stats.textures > 30) {
        console.warn('⚠️ Demasiadas texturas:', stats.textures);
      }
    }, 5000); // Cada 5 segundos

    return (): void => clearInterval(interval);
  }, [gl]);

  return null;
};