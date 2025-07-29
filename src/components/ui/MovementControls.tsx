// src/components/ui/MovementControls.tsx
import { useState } from 'react';

function MovementControls() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      color: 'white',
      padding: isMinimized ? '12px' : '18px 22px',
      borderRadius: '15px',
      fontSize: '13px',
      zIndex: 1000,
      border: '2px solid rgba(59, 130, 246, 0.3)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '300px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: isMinimized ? 'pointer' : 'default'
    }}
    onClick={() => isMinimized && setIsMinimized(false)}
    >
      {isMinimized ? (
        // Vista minimizada
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          fontSize: '16px'
        }}>
          <span>🎮</span>
          <span style={{ fontSize: '12px' }}>Controles</span>
        </div>
      ) : (
        // Vista expandida
        <>
          {/* Header con botón minimizar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '12px' 
          }}>
            <div style={{ fontWeight: 'bold', color: '#93c5fd' }}>
              🎮 Controles de Movimiento
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(true);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                fontSize: '14px',
                padding: '2px 6px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
            >
              ✕
            </button>
          </div>
          
          {/* Iconos de teclas visuales */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '6px', 
            marginBottom: '8px' 
          }}>
            {/* Flecha arriba (W) */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '16px',
              minWidth: '40px',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}>
            
              <div style={{ fontSize: '9px', opacity: 0.7, marginTop: '2px' }}>W</div>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '6px', 
            marginBottom: '15px' 
          }}>
            {/* Izquierda (A) */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '16px',
              minWidth: '40px',
              transition: 'all 0.2s ease'
            }}>
              
              <div style={{ fontSize: '9px', opacity: 0.7, marginTop: '2px' }}>A</div>
            </div>
            
            {/* Abajo (S) */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '16px',
              minWidth: '40px',
              transition: 'all 0.2s ease'
            }}>
              
              <div style={{ fontSize: '9px', opacity: 0.7, marginTop: '2px' }}>S</div>
            </div>
            
            {/* Derecha (D) */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '16px',
              minWidth: '40px',
              transition: 'all 0.2s ease'
            }}>
              
              <div style={{ fontSize: '9px', opacity: 0.7, marginTop: '2px' }}>D</div>
            </div>
          </div>
          
         
          
          {/* Tip adicional */}
          <div style={{ 
            marginTop: '10px',
            fontSize: '10px', 
            opacity: 0.6,
            fontStyle: 'italic'
          }}>
            💡 Mantén <strong>Shift</strong> para correr más rápido
          </div>
        </>
      )}
    </div>
  );
}

export default MovementControls;