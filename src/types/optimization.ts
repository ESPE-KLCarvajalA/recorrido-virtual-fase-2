export interface QualityProps {
  quality?: number;
}

export interface LODProps {
  position: [number, number, number];
  maxDistance?: number;
}

export interface OptimizedComponentProps extends QualityProps {
  // Otros props comunes si los hay
}

export interface PerformanceState {
  fps: number;
  drawCalls: number;
  triangles: number;
  geometries: number;
  textures: number;
  memory: number;
  adaptiveQuality: number; // 0.1 - 1.0
}

export interface AssetGroup {
  [key: string]: string[];
}

export interface CameraDistanceOptions {
  updateFrequency?: number;
  threshold?: number;
}