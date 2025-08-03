// src/components/ui/NavigationPanel.tsx
import { useState, useEffect } from 'react';

// 🗺️ Definir ubicaciones de teletransporte
const TELEPORT_LOCATIONS = {
  entrada: [-80, -1, 170],
  lab1: [-100, 19, -500],
  lab2: [-32, 20, -370],
  lab3: [-62.334, 19.5, -221.824],
  lab4: [-179, 20, -68.5],
  lab5: [-165, 20, -56.541],
  lab6: [167.089, 20, -279.414],
  oficinas: [72.124, 20, -68.044],
  bar: [-710.344, -6, -210.603],
  secretaria: [-155.823, 26, -39.883],
  enfermeria: [537.62, 25, -330.33],
  parking: [-300, 0, 100],
 
} as const;

type LocationKey = keyof typeof TELEPORT_LOCATIONS;

// 🏷️ Nombres amigables para las ubicaciones
const LOCATION_NAMES: Record<LocationKey, string> = {
  entrada: 'Entrada Principal',
  lab1: 'Laboratorio de Biotecnología 1',
  lab2: 'Laboratorio de Biotecnología 2', 
  lab3: 'Laboratorio de Biotecnología 3',
  lab4: 'Laboratorio de Biotecnología 4',
  lab5: 'Laboratorio de Biotecnología 5',
  lab6: 'Laboratorio de Tecnologías de la Información',
  oficinas: 'Oficinas Administrativas',
  bar: 'Cafetería',
  secretaria: 'Secretaría',
  enfermeria: 'Enfermería',

  parking: 'Estacionamiento',
 
};

// 🎨 Iconos para cada ubicación
const LOCATION_ICONS: Record<LocationKey, string> = {
  entrada: '🏛️',
  lab1: '🔬',
  lab2: '⚗️',
  lab3: '🧪',
  lab4: '🔍',
  lab5: '💊',
  lab6: '🩺',
  oficinas: '🏢',
  bar: '☕',
  secretaria: '📋',
  enfermeria: '🏥',
  parking: '🚗',
  
};

function NavigationPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<LocationKey>('entrada');

  // 🚀 Botones de teletransporte (generados dinámicamente)
  const teleportButtons = Object.keys(TELEPORT_LOCATIONS).map(key => {
    const locationKey = key as LocationKey;
    return {
      id: locationKey,
      label: LOCATION_NAMES[locationKey],
      icon: LOCATION_ICONS[locationKey]
    };
  });

  // 🚀 Función de teletransporte usando CustomEvent
  const handleTeleport = (location: LocationKey) => {
    const newPosition = TELEPORT_LOCATIONS[location];
    
    // Dispatch evento personalizado para que BaseCharacter lo escuche
    const teleportEvent = new CustomEvent('teleportCharacter', {
      detail: {
        position: newPosition,
        location: location,
        locationName: LOCATION_NAMES[location]
      }
    });
    
    window.dispatchEvent(teleportEvent);
    setCurrentLocation(location);
    setIsExpanded(false);
    
    console.log(`🚀 Teletransportando a ${LOCATION_NAMES[location]}:`, newPosition);
  };

  // 🎧 Escuchar eventos de cambio de posición del personaje
  useEffect(() => {
    const handlePositionUpdate = (event: any) => {
      const { position } = event.detail;
      
      // Determinar la ubicación más cercana
      let closestLocation: LocationKey | null = null;
      let minDistance = Infinity;
      
      Object.entries(TELEPORT_LOCATIONS).forEach(([key, pos]) => {
        const distance = Math.sqrt(
          Math.pow(position[0] - pos[0], 2) +
          Math.pow(position[1] - pos[1], 2) +
          Math.pow(position[2] - pos[2], 2)
        );
        
        if (distance < minDistance && distance < 50) {
          minDistance = distance;
          closestLocation = key as LocationKey;
        }
      });
      
      if (closestLocation) {
        setCurrentLocation(closestLocation);
      }
    };

    window.addEventListener('characterPositionUpdate', handlePositionUpdate);
    return () => window.removeEventListener('characterPositionUpdate', handlePositionUpdate);
  }, []);

  const renderTeleportButtons = () => {
    return teleportButtons.map((button) => {
      const isActive = currentLocation === button.id;
        
      return (
        <button
          key={button.id}
          onClick={() => handleTeleport(button.id as LocationKey)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px',
            marginBottom: '8px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: isActive ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.3s ease',
            transform: 'translateX(0)',
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateX(5px)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateX(0)';
            }
          }}
        >
          <span style={{ fontSize: '20px' }}>{button.icon}</span>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
              {button.label}
            </div>
          </div>
          {isActive && (
            <span style={{ marginLeft: 'auto', fontSize: '16px' }}>📍</span>
          )}
        </button>
      );
    });
  };

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          fontFamily: 'Arial, sans-serif'
        }}
      >
        {/* Panel expandido */}
        {isExpanded && (
          <div 
            style={{
              marginBottom: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              borderRadius: '20px',
              padding: '20px',
              minWidth: '300px',
              maxWidth: '350px',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              maxHeight: '70vh',
              overflowY: 'auto',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Header */}
            <div style={{ 
              color: 'white', 
              marginBottom: '15px', 
              fontWeight: 'bold',
              fontSize: '18px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span>🚀</span>
              <span>Panel de Navegación</span>
            </div>
            
            {/* Instrucción ESC */}
            <div style={{ 
              marginBottom: '20px', 
              padding: '12px', 
              backgroundColor: 'rgba(255, 193, 7, 0.2)', 
              borderRadius: '10px',
              fontSize: '12px',
              color: '#ffc107',
              textAlign: 'center',
              border: '1px solid rgba(255, 193, 7, 0.3)'
            }}>
              ⚠️ Presiona <strong>ESC</strong> para liberar el cursor y hacer clic
            </div>

            {/* Descripción */}
            <div style={{ 
              marginBottom: '20px', 
              padding: '10px', 
              backgroundColor: 'rgba(16, 185, 129, 0.2)', 
              borderRadius: '10px',
              fontSize: '12px',
              color: '#6ee7b7',
              textAlign: 'center',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              🚀 Mueve tu personaje instantáneamente a cualquier ubicación
            </div>
            
            {/* Botones de teletransporte */}
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {renderTeleportButtons()}
            </div>
            
           
          </div>
        )}

        {/* Botón principal flotante */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '18px',
            borderRadius: '50%',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            fontSize: '28px',
            boxShadow: '0 6px 25px rgba(16, 185, 129, 0.4)',
            transition: 'all 0.3s ease',
            transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = isExpanded 
              ? 'rotate(45deg) scale(1.1)' 
              : 'rotate(0deg) scale(1.1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(16, 185, 129, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = isExpanded 
              ? 'rotate(45deg) scale(1)' 
              : 'rotate(0deg) scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(16, 185, 129, 0.4)';
          }}
        >
          {isExpanded ? '✕' : '🚀'}
        </button>
      </div>

      {/* 📍 Indicador de ubicación actual */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '12px 18px',
        borderRadius: '15px',
        fontSize: '14px',
        zIndex: 1000,
        border: '2px solid rgba(16, 185, 129, 0.3)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px' }}>{LOCATION_ICONS[currentLocation]}</span>
          <div>
            <div style={{ fontWeight: 'bold' }}>
              {LOCATION_NAMES[currentLocation]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationPanel;