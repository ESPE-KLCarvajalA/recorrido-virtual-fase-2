import { useFrame, useThree } from '@react-three/fiber';
import { useState, useCallback, useEffect } from 'react';

interface PerformanceState {
  fps: number;
  drawCalls: number;
  triangles: number;
  geometries: number;
  textures: number;
  memory: number;
  adaptiveQuality: number; // 0.1 - 1.0
}

export function PerformanceMonitor({ 
  onQualityChange 
}: { 
  onQualityChange?: (quality: number) => void 
}) {
  const { gl } = useThree();
  const [stats, setStats] = useState<PerformanceState>({
    fps: 60,
    drawCalls: 0,
    triangles: 0,
    geometries: 0,
    textures: 0,
    memory: 0,
    adaptiveQuality: 1.0
  });

  const [visible, setVisible] = useState(true);

  // Adaptive quality logic
  const adjustQuality = useCallback((fps: number) => {
    let newQuality = stats.adaptiveQuality;
    
    if (fps < 30) {
      newQuality = Math.max(0.3, newQuality - 0.1);
    } else if (fps > 50) {
      newQuality = Math.min(1.0, newQuality + 0.05);
    }
    
    if (newQuality !== stats.adaptiveQuality && onQualityChange) {
      onQualityChange(newQuality);
    }
    
    return newQuality;
  }, [stats.adaptiveQuality, onQualityChange]);

  useFrame((_, delta) => {
    const fps = Math.round(1 / delta);
    const adaptiveQuality = adjustQuality(fps);
    
    setStats({
      fps,
      drawCalls: gl.info.render.calls,
      triangles: gl.info.render.triangles,
      geometries: gl.info.memory.geometries,
      textures: gl.info.memory.textures,
      memory: Math.round((performance as any).memory?.usedJSHeapSize / 1024 / 1024) || 0,
      adaptiveQuality
    });
  });

  // Toggle visibility with 'P' key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P') {
        setVisible(!visible);
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [visible]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: '#00ff00',
      padding: '15px',
      borderRadius: '10px',
      fontFamily: 'Consolas, Monaco, monospace',
      fontSize: '12px',
      lineHeight: '1.5',
      zIndex: 9999,
      border: '1px solid #333',
      minWidth: '220px'
    }}>
      <div style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '10px' }}>
        🎮 Performance Monitor
      </div>
      
      <div style={{ 
        color: stats.fps > 45 ? '#00ff00' : stats.fps > 30 ? '#ffaa00' : '#ff0000',
        fontWeight: 'bold'
      }}>
        ⚡ FPS: {stats.fps}
      </div>
      
      <div style={{ 
        color: stats.adaptiveQuality > 0.8 ? '#00ff00' : stats.adaptiveQuality > 0.5 ? '#ffaa00' : '#ff0000' 
      }}>
        🎯 Quality: {Math.round(stats.adaptiveQuality * 100)}%
      </div>
      
      <div style={{ color: stats.drawCalls > 100 ? '#ff0000' : '#00ff00' }}>
        🎨 Draw Calls: {stats.drawCalls}
      </div>
      
      <div style={{ color: '#00aaff' }}>
        📐 Triangles: {stats.triangles.toLocaleString()}
      </div>
      
      <div style={{ marginTop: '10px', fontSize: '10px', color: '#888' }}>
        Press 'P' to toggle • Auto-adaptive quality
      </div>
    </div>
  );
}