import { useFrame, useThree } from '@react-three/fiber';
import { useState } from 'react';

export function PerformanceMonitor() {
  const { gl } = useThree();
  const [stats, setStats] = useState({
    fps: 0,
    drawCalls: 0,
    triangles: 0,
    geometries: 0,
    textures: 0,
    memory: 0
  });

  useFrame((_, delta) => {
    // Actualizar estadísticas cada frame
    setStats({
      fps: Math.round(1 / delta),
      drawCalls: gl.info.render.calls,
      triangles: gl.info.render.triangles,
      geometries: gl.info.memory.geometries,
      textures: gl.info.memory.textures,
      memory: Math.round((performance as any).memory?.usedJSHeapSize / 1024 / 1024) || 0
    });
  });

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'rgba(0, 0, 0, 0.85)',
      color: '#00ff00',
      padding: '12px',
      borderRadius: '8px',
      fontFamily: 'Consolas, Monaco, monospace',
      fontSize: '13px',
      lineHeight: '1.4',
      zIndex: 9999,
      border: '1px solid #333',
      minWidth: '200px'
    }}>
      <div style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '8px' }}>
        🎮 Performance Monitor
      </div>
      
      <div style={{ color: stats.fps > 45 ? '#00ff00' : stats.fps > 30 ? '#ffaa00' : '#ff0000' }}>
        ⚡ FPS: {stats.fps}
      </div>
      
      <div style={{ color: stats.drawCalls > 100 ? '#ff0000' : stats.drawCalls > 50 ? '#ffaa00' : '#00ff00' }}>
        🎨 Draw Calls: {stats.drawCalls}
      </div>
      
      <div style={{ color: '#00aaff' }}>
        📐 Triangles: {stats.triangles.toLocaleString()}
      </div>
      
      <div style={{ color: '#ff9900' }}>
        🗂️ Geometries: {stats.geometries}
      </div>
      
      <div style={{ color: '#9900ff' }}>
        🖼️ Textures: {stats.textures}
      </div>
      
      {stats.memory > 0 && (
        <div style={{ color: stats.memory > 100 ? '#ff0000' : '#00ff00' }}>
          💾 Memory: {stats.memory}MB
        </div>
      )}
      
      <div style={{ marginTop: '8px', fontSize: '11px', color: '#888' }}>
        Press 'P' to toggle
      </div>
    </div>
  );
}