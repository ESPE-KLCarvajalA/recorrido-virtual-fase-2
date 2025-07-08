// src/types/campus.types.ts
export interface Zone {
    center: readonly [number, number, number];
    radius: number;
    priority: number;
  }
  
  export interface PlayerPosition {
    x: number;
    y: number;
    z: number;
  }