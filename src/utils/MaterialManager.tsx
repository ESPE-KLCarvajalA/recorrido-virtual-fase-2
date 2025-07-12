// src/utils/MaterialManager.ts
import * as THREE from 'three';

// 🎯 PASO 2: Pool de materiales compartidos
class MaterialManagerClass {
  private materials: Map<string, THREE.Material> = new Map();
  
  // Materiales base optimizados
  private createBaseMaterials() {
    return {
      // Materiales arquitectónicos
      concrete: new THREE.MeshStandardMaterial({ 
        color: '#888888',
        roughness: 0.8,
        metalness: 0.1
      }),
      
      wall: new THREE.MeshStandardMaterial({ 
        color: '#FFFFFF',
        roughness: 0.9,
        metalness: 0.0
      }),
      
      darkWall: new THREE.MeshStandardMaterial({ 
        color: '#555555',
        roughness: 0.7,
        metalness: 0.1
      }),
      
      // Vidrio optimizado
      glass: new THREE.MeshPhysicalMaterial({ 
        color: '#FFFFFF',
        transparent: true,
        opacity: 0.3,
        roughness: 0.0,
        metalness: 0.1,
        transmission: 0.9
      }),
      
      glassFrosted: new THREE.MeshStandardMaterial({ 
        color: '#FFFFFF',
        transparent: true,
        opacity: 0.7,
        roughness: 0.3,
        metalness: 0.0
      }),
      
      // Metales
      metal: new THREE.MeshStandardMaterial({ 
        color: '#666666',
        roughness: 0.2,
        metalness: 0.8
      }),
      
      metalDark: new THREE.MeshStandardMaterial({ 
        color: '#333333',
        roughness: 0.3,
        metalness: 0.7
      }),
      
      // Techos
      roof: new THREE.MeshStandardMaterial({ 
        color: '#8B4513',
        roughness: 0.8,
        metalness: 0.0
      }),
      
      roofGreen: new THREE.MeshStandardMaterial({ 
        color: '#03562C',
        roughness: 0.7,
        metalness: 0.0
      }),
      
      // Pisos
      floor: new THREE.MeshStandardMaterial({ 
        color: '#CCCCCC',
        roughness: 0.6,
        metalness: 0.1
      }),
      
      floorWood: new THREE.MeshStandardMaterial({ 
        color: '#8B4513',
        roughness: 0.8,
        metalness: 0.0
      }),
      
      // Césped y naturaleza
      grass: new THREE.MeshStandardMaterial({ 
        color: '#4CAF50',
        roughness: 0.9,
        metalness: 0.0
      }),
      
      // Genérico neutro
      neutral: new THREE.MeshStandardMaterial({ 
        color: '#AAAAAA',
        roughness: 0.5,
        metalness: 0.2
      })
    };
  }
  
  private baseMaterials = this.createBaseMaterials();
  
  // Obtener material por nombre o crear uno similar
  getMaterial(key: string): THREE.Material {
    if (this.materials.has(key)) {
      return this.materials.get(key)!;
    }
    
    // Mapeo inteligente basado en nombres comunes
    let material: THREE.Material;
    
    if (key.includes('glass') || key.includes('Glass') || key.includes('frosted')) {
      material = key.includes('frosted') ? this.baseMaterials.glassFrosted : this.baseMaterials.glass;
    } else if (key.includes('concrete') || key.includes('Concrete')) {
      material = this.baseMaterials.concrete;
    } else if (key.includes('metal') || key.includes('Metal')) {
      material = key.includes('dark') || key.includes('Dark') ? this.baseMaterials.metalDark : this.baseMaterials.metal;
    } else if (key.includes('roof') || key.includes('techo') || key.includes('Techo')) {
      material = key.includes('green') || key.includes('verde') ? this.baseMaterials.roofGreen : this.baseMaterials.roof;
    } else if (key.includes('floor') || key.includes('piso') || key.includes('Piso')) {
      material = key.includes('wood') || key.includes('madera') ? this.baseMaterials.floorWood : this.baseMaterials.floor;
    } else if (key.includes('grass') || key.includes('cesped') || key.includes('Cesped')) {
      material = this.baseMaterials.grass;
    } else if (key.includes('wall') || key.includes('pared') || key.includes('Pared')) {
      material = key.includes('dark') || key.includes('Dark') ? this.baseMaterials.darkWall : this.baseMaterials.wall;
    } else {
      // Material genérico para casos no identificados
      material = this.baseMaterials.neutral;
    }
    
    this.materials.set(key, material);
    return material;
  }
  
  // Obtener material directo
  getBaseMaterial(type: keyof typeof this.baseMaterials): THREE.Material {
    return this.baseMaterials[type];
  }
  
  // Limpiar cache
  dispose() {
    this.materials.forEach(material => {
      if (material.dispose) {
        material.dispose();
      }
    });
    this.materials.clear();
    
    Object.values(this.baseMaterials).forEach(material => {
      if (material.dispose) {
        material.dispose();
      }
    });
  }
  
  // Estadísticas
  getStats() {
    return {
      cached: this.materials.size,
      base: Object.keys(this.baseMaterials).length,
      total: this.materials.size + Object.keys(this.baseMaterials).length
    };
  }
}

// Singleton
export const MaterialManager = new MaterialManagerClass();

// Hook para React
import { useEffect } from 'react';

export function useMaterialManager() {
  useEffect(() => {
    return () => {
      // Cleanup al desmontar componentes principales
      // MaterialManager.dispose(); // Solo si es necesario
    };
  }, []);
  
  return MaterialManager;
}