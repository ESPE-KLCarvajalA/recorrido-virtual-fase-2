// src/components/ui/NavigationPanel.tsx
import  { useState } from 'react';

interface NavigationPanelProps {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
}

function NavigationPanel({ 
  currentRoute = 'entrada', 
  onNavigate = (route: string) => console.log('Navigate to:', route)
}: NavigationPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigationButtons = [
    { id: 'entrada', label: 'Entrada', route: '/entrada', icon: '🏛️' },
    { id: 'lab1', label: 'Lab 1', route: '/lab1', icon: '🔬' },
    { id: 'lab2', label: 'Lab 2', route: '/lab2', icon: '⚗️' },
    { id: 'lab3', label: 'Lab 3', route: '/lab3', icon: '🧪' },
    { id: 'lab4', label: 'Lab 4', route: '/lab4', icon: '🔍' },
    { id: 'lab5', label: 'Lab 5', route: '/lab5', icon: '💊' },
    { id: 'lab6', label: 'Lab 6', route: '/lab6', icon: '🩺' },
  ];

  const handleNavigation = (route: string) => {
    onNavigate(route);
    setIsExpanded(false);
  };

  return (
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
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '15px',
            padding: '15px',
            minWidth: '250px',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div style={{ color: 'white', marginBottom: '15px', fontWeight: 'bold' }}>
            🎯 Navegación
          </div>
          
          {navigationButtons.map((button) => {
            const isActive = currentRoute.includes(button.id);
            return (
              <button
                key={button.id}
                onClick={() => handleNavigation(button.route)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px',
                  marginBottom: '5px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: isActive ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                <span style={{ fontSize: '20px' }}>{button.icon}</span>
                <span>{button.label}</span>
                {isActive && <span style={{ marginLeft: 'auto' }}>📍</span>}
              </button>
            );
          })}
          
          <div style={{ 
            marginTop: '15px', 
            padding: '10px', 
            backgroundColor: 'rgba(59, 130, 246, 0.2)', 
            borderRadius: '8px',
            fontSize: '12px',
            color: '#93c5fd',
            textAlign: 'center'
          }}>
            💡 Usa WASD para moverte
          </div>
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
          fontSize: '24px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = isExpanded ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isExpanded ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(1)';
        }}
      >
        {isExpanded ? '✕' : '🗺️'}
      </button>
    </div>
  );
}

export default NavigationPanel;