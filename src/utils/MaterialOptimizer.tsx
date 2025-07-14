import * as THREE from 'three';

export class MaterialOptimizer {
  private static materialCache = new Map<string, THREE.Material>();
  
  static optimizeMaterial(material: THREE.Material, quality: number = 1.0): THREE.Material {
    const key = `${material.uuid}-${quality}`;
    
    if (this.materialCache.has(key)) {
      return this.materialCache.get(key)!;
    }
    
    const optimized = material.clone();
    
    if (optimized instanceof THREE.MeshStandardMaterial) {
      // Ajustar calidad según rendimiento
      optimized.roughness = Math.max(0.1, (material as THREE.MeshStandardMaterial).roughness * quality);
      optimized.metalness = (material as THREE.MeshStandardMaterial).metalness * quality;
      
      // Reducir calidad de texturas si es necesario
      if (quality < 0.7 && optimized.map) {
        optimized.map.minFilter = THREE.LinearFilter;
        optimized.map.magFilter = THREE.LinearFilter;
      }
    }
    
    this.materialCache.set(key, optimized);
    return optimized;
  }
  
  static clearCache() {
    this.materialCache.clear();
  }
}

// Hook para usar en componentes
export function useOptimizedMaterial(material: THREE.Material, quality: number = 1.0) {
  return MaterialOptimizer.optimizeMaterial(material, quality);
}