// src/constants/campusConfig.ts
export const CAMPUS_CONFIG = {
    PHYSICS: {
      GRAVITY: [0, -9.81, 0] as const,
      ITERATIONS: 10,
      BROADPHASE: "SAP" as const
    },
    CHARACTER: {
      INITIAL_POSITION: [-92, -1, 170] as const,
      CAMERA_POSITION: [-92, 0, 29] as const,
      RADIUS: 2.2,
      HEIGHT: 20,
      SPEED: 40,
      JUMP_FORCE: 20
    },
    ZONES: {
      ENTRANCE: {
        center: [-92, 0, 170] as const,
        radius: 30,
        priority: 0
      },
      OFFICES: {
        center: [-40, 0, 120] as const,
        radius: 25,
        priority: 1
      },
      LABS: {
        center: [0, 0, 100] as const,
        radius: 30,
        priority: 2
      },
      RECREATION: {
        center: [50, 0, 80] as const,
        radius: 35,
        priority: 3
      }
    }
  } as const;