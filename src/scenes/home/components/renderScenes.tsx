import BaseSceneBar2 from './groups/BaseSceneBar2'
import BaseSceneVilla2 from './groups/BaseSceneVilla2'
import BaseSceneLab from './groups/BaseSceneLab'
import BaseSceneLab2 from './groups/BaseSceneLab2'

// 🧩 Tus modelos optimizados (veredas, pisos, etc.)
import { PisoOctagono } from './primer/PisoOctagono'
import { Vereda1 } from './primer/vereda1'
import { Vereda2 } from './primer/vereda2'
import { PisoVereda2 } from './primer/pisoVereda2'
import { PisoVereda } from './primer/pisoVereda'
import { PisoVereda5 } from './primer/pisoVereda5'

export const RENDER_DISTANCES = {
  CLOSE: 150,
  MEDIUM: 300,
  FAR: 500,
}

// Posiciones de referencia central para calcular distancias
export const scenePositions = {
  afuera: [0, 0, 0] as [number, number, number],
  arco: [-2, 30, 40],
  bar: [-710, -6, -210],
  bar2: [-710, -6, -210],
  lab: [200, 36, -300],
  lab2: [-50, 44, -410],
  oficina: [100, 30, -100],
  villa: [-485, 25, -500],
  villa2: [-500, 30, -750],

  // 🆕 Nuevos centros para pisos y veredas
  pisoOctagono: [-63.105, -5, 133.726],
  vereda1: [-89.377, -1, 103],
  vereda2: [311.258, -1, -224.822],
  vereda2b: [-253.469, -7, 418.937],
  vereda3: [-528.547, -1.587, -519.508],
}

// Agrupaciones de escenas para renderizado condicional
export const renderGroups = [
  {
    position: scenePositions.bar2,
    distance: RENDER_DISTANCES.MEDIUM,
    children: <BaseSceneBar2 />,
  },
  {
    position: scenePositions.lab,
    distance: RENDER_DISTANCES.MEDIUM,
    children: <BaseSceneLab />,
  },
  {
    position: scenePositions.lab2,
    distance: RENDER_DISTANCES.MEDIUM,
    children: <BaseSceneLab2 />,
  },
  {
    position: scenePositions.villa2,
    distance: RENDER_DISTANCES.FAR,
    children: <BaseSceneVilla2 />,
  },

  // 🚧 PISOS Y VEREDAS OPTIMIZADAS
  {
    position: scenePositions.pisoOctagono,
    distance: RENDER_DISTANCES.CLOSE,
    children: <PisoOctagono />,
  },
  {
    position: scenePositions.vereda1,
    distance: RENDER_DISTANCES.CLOSE,
    children: <Vereda1 />,
  },
  {
    position: scenePositions.vereda2,
    distance: RENDER_DISTANCES.CLOSE,
    children: <Vereda2 />,
  },
  {
    position: scenePositions.vereda2b,
    distance: RENDER_DISTANCES.CLOSE,
    children: <PisoVereda2 />,
  },
  {
    position: scenePositions.vereda3,
    distance: RENDER_DISTANCES.CLOSE,
    children: <PisoVereda />,
  },
  {
    position: [-575.581, -4.216, 60.901], // Uno de los grupos de PisoVereda5
    distance: RENDER_DISTANCES.MEDIUM,
    children: <PisoVereda5 />,
  },
]
