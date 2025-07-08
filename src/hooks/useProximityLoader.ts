// src/hooks/useProximityLoader.ts
import { useState, useEffect } from 'react';
import { CAMPUS_CONFIG } from '../constants/campusConfig';
import { PlayerPosition } from '../types/campus.types';

export const useProximityLoader = (playerPosition: PlayerPosition) => {
  const [loadedZones, setLoadedZones] = useState<Set<string>>(new Set(['entrance']));

  useEffect(() => {
    const checkProximity = () => {
      const zones = CAMPUS_CONFIG.ZONES;
      
      const getDistance = (pos1: PlayerPosition, pos2: readonly [number, number, number]) => {
        const dx = pos1.x - pos2[0];
        const dz = pos1.z - pos2[2];
        return Math.sqrt(dx * dx + dz * dz);
      };

      Object.entries(zones).forEach(([zoneName, zone]) => {
        const distance = getDistance(playerPosition, zone.center);
        const zoneKey = zoneName.toLowerCase();

        if (distance < zone.radius) {
          setLoadedZones(prev => new Set([...prev, zoneKey]));
        } else if (distance > zone.radius * 1.5) {
          if (zoneKey !== 'entrance') {
            setLoadedZones(prev => {
              const newSet = new Set(prev);
              newSet.delete(zoneKey);
              return newSet;
            });
          }
        }
      });
    };

    checkProximity();
  }, [playerPosition]);

  return {
    loadedZones,
    shouldLoad: (zoneName: string) => loadedZones.has(zoneName.toLowerCase()),
    getCurrentZones: () => Array.from(loadedZones)
  };
};