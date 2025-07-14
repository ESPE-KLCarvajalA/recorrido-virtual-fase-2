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