// src/utils/MaterialManager.ts - SIMPLIFIED VERSION
import * as THREE from 'three';

// 🎯 PASO 3: Materiales base MUY simplificados
class MaterialManagerClass {
  // Solo 6 materiales esenciales para toda la aplicación
  private readonly baseMaterials = {
    // Arquitectura básica
    wall: new THREE.MeshStandardMaterial({ 
      color: '#FFFFFF',
      roughness: 0.8,
      metalness: 0.0
    }),
    
    glass: new THREE.MeshStandardMaterial({ 
      color: '#FFFFFF',
      transparent: true,
      opacity: 0.4,
      roughness: 0.0,
      metalness: 0.1
    }),
    
    metal: new THREE.MeshStandardMaterial({ 
      color: '#666666',
      roughness: 0.3,
      metalness: 0.8
    }),
    
    concrete: new THREE.MeshStandardMaterial({ 
      color: '#888888',
      roughness: 0.8,
      metalness: 0.1
    }),
    
    green: new THREE.MeshStandardMaterial({ 
      color: '#03562C',
      roughness: 0.7,
      metalness: 0.0
    }),
    
    // Material catch-all
    default: new THREE.MeshStandardMaterial({ 
      color: '#AAAAAA',
      roughness: 0.5,
      metalness: 0.2
    })
  };
  
  // Obtener material - mapping simple
  getMaterial(key: string): THREE.Material {
    if (key.includes('glass') || key.includes('Glass')) return this.baseMaterials.glass;
    if (key.includes('metal') || key.includes('Metal')) return this.baseMaterials.metal;
    if (key.includes('concrete') || key.includes('Concrete')) return this.baseMaterials.concrete;
    if (key.includes('green') || key.includes('verde')) return this.baseMaterials.green;
    if (key.includes('wall') || key.includes('pared')) return this.baseMaterials.wall;
    
    return this.baseMaterials.default;
  }
  
  // Obtener material directo
  getBaseMaterial(type: keyof typeof this.baseMaterials): THREE.Material {
    return this.baseMaterials[type];
  }
}

// Singleton simplificado
export const MaterialManager = new MaterialManagerClass();

// Hook simple para React

export function useMaterialManager() {
  return MaterialManager;
}