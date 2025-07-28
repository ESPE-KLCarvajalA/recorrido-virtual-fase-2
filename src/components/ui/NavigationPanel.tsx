// src/components/ui/NavigationPanel.tsx
import React, { useState } from 'react';

interface NavigationButton {
  id: string;
  label: string;
  route: string;
  icon: string;
  color: string;
  description?: string;
}

interface NavigationPanelProps {
  currentRoute?: string;
  onNavigate?: (route: string) => void;
  customButtons?: NavigationButton[];
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'dark' | 'light';
}

const defaultNavigationButtons: NavigationButton[] = [
  { 
    id: 'entrada', 
    label: 'Entrada Principal', 
    route: '/entrada', 
    icon: '🏛️', 
    color: 'from-blue-500 to-blue-600',
    description: 'Punto de inicio del recorrido virtual'
  },
  { 
    id: 'lab1', 
    label: 'Laboratorio 1', 
    route: '/lab1', 
    icon: '🔬', 
    color: 'from-green-500 to-green-600',
    description: 'Laboratorio de investigación principal'
  },
  { 
    id: 'lab2', 
    label: 'Laboratorio 2', 
    route: '/lab2', 
    icon: '⚗️', 
    color: 'from-purple-500 to-purple-600',
    description: 'Laboratorio de análisis químico'
  },
  { 
    id: 'lab3', 
    label: 'Laboratorio 3', 
    route: '/lab3', 
    icon: '🧪', 
    color: 'from-red-500 to-red-600',
    description: 'Laboratorio de síntesis'
  },
  { 
    id: 'lab4', 
    label: 'Laboratorio 4', 
    route: '/lab4', 
    icon: '🔍', 
    color: 'from-yellow-500 to-yellow-600',
    description: 'Laboratorio de microscopía'
  },
  { 
    id: 'lab5', 
    label: 'Laboratorio 5', 
    route: '/lab5', 
    icon: '💊', 
    color: 'from-pink-500 to-pink-600',
    description: 'Laboratorio farmacéutico'
  },
  { 
    id: 'lab6', 
    label: 'Laboratorio 6', 
    route: '/lab6', 
    icon: '🩺', 
    color: 'from-indigo-500 to-indigo-600',
    description: 'Laboratorio biomédico'
  },
];

const getPositionClasses = (position: string): string => {
  switch (position) {
    case 'bottom-left':
      return 'bottom-4 left-4';
    case 'top-right':
      return 'top-4 right-4';
    case 'top-left':
      return 'top-4 left-4';
    default:
      return 'bottom-4 right-4';
  }
};

// Estilos CSS como string para usar con style attribute
const floatAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  .shimmer-effect {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 1s;
  }

  .shimmer-effect.active {
    transform: translateX(100%);
  }
`;

const NavigationPanel: React.FC<NavigationPanelProps> = ({ 
  currentRoute = 'entrada', 
  onNavigate = (route: string) => console.log('Navigate to:', route),
  customButtons,
  position = 'bottom-right',
  theme = 'dark'
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showTooltips, setShowTooltips] = useState<boolean>(true);

  const navigationButtons = customButtons || defaultNavigationButtons;

  const handleNavigation = (route: string): void => {
    onNavigate(route);
    setIsExpanded(false);
  };

  const getCurrentRouteId = (): string => {
    return currentRoute.replace('/', '') || 'entrada';
  };

  const currentButton = navigationButtons.find(btn => btn.id === getCurrentRouteId());

  const themeClasses = theme === 'dark' 
    ? 'bg-black/80 text-white border-white/20' 
    : 'bg-white/90 text-gray-800 border-gray-200';

  if (!isVisible) {
    return (
      <div className={`fixed ${getPositionClasses(position)} z-50`}>
        <button
          onClick={() => setIsVisible(true)}
          className={`${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border`}
          title="Mostrar panel de navegación"
        >
          🗺️
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Inyectar estilos CSS */}
      <style dangerouslySetInnerHTML={{ __html: floatAnimation }} />
      
      <div className={`fixed ${getPositionClasses(position)} z-50`}>
        {/* Panel expandido */}
        {isExpanded && (
          <div className={`mb-4 ${themeClasses} backdrop-blur-md rounded-2xl p-4 shadow-2xl border min-w-64 max-h-96 overflow-y-auto`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} font-bold text-lg flex items-center gap-2`}>
                🎯 <span>Navegación</span>
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowTooltips(!showTooltips)}
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors p-1 text-sm`}
                  title={showTooltips ? "Ocultar descripciones" : "Mostrar descripciones"}
                >
                  {showTooltips ? '💬' : '💭'}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors p-1`}
                  title="Ocultar panel"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              {navigationButtons.map((button) => {
                const isActive = getCurrentRouteId() === button.id;
                return (
                  <div key={button.id} className="relative group">
                    <button
                      onClick={() => handleNavigation(button.route)}
                      className={`
                        w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden
                        ${isActive 
                          ? `bg-gradient-to-r ${button.color} text-white shadow-lg border border-white/30` 
                          : `${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-white border-transparent hover:border-white/20' : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-transparent hover:border-gray-300'} border`
                        }
                      `}
                    >
                      {/* Efecto de brillo en hover */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ pointerEvents: 'none' }}
                      />
                      
                      <span className="text-2xl group-hover:scale-110 transition-transform relative z-10">
                        {button.icon}
                      </span>
                      <div className="flex-1 text-left relative z-10">
                        <span className="font-medium block">{button.label}</span>
                        {showTooltips && button.description && (
                          <span className={`text-xs opacity-80 block mt-1 ${isActive ? 'text-white/80' : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {button.description}
                          </span>
                        )}
                        {isActive && (
                          <span className="text-xs opacity-90 block mt-1 font-medium">
                            📍 Ubicación actual
                          </span>
                        )}
                      </div>
                      {isActive && (
                        <span className="text-lg animate-pulse relative z-10">📍</span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className={`mt-4 pt-3 border-t ${theme === 'dark' ? 'border-white/20' : 'border-gray-200'}`}>
              <div className={`text-center text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                📍 Ubicación: <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} font-medium`}>{currentButton?.label}</span>
              </div>
            </div>

            {/* Información adicional */}
            <div className={`mt-3 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30' : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300'} rounded-lg p-3 border`}>
              <div className={`text-xs text-center ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>
                💡 Usa WASD para moverte y el mouse para mirar alrededor
              </div>
            </div>
          </div>
        )}

        {/* Botón principal y controles */}
        <div className="flex flex-col items-end space-y-2">
          {/* Indicador de ubicación actual (solo cuando está colapsado) */}
          {!isExpanded && currentButton && (
            <div 
              className={`
                bg-gradient-to-r ${currentButton.color} 
                px-3 py-2 rounded-full shadow-lg border-2 border-white/30
                animate-pulse transform hover:scale-105 transition-transform cursor-pointer
              `}
              onClick={() => setIsExpanded(true)}
              title="Ver todas las ubicaciones"
            >
              <span className="text-white text-sm font-medium">
                {currentButton.icon} {currentButton.label}
              </span>
            </div>
          )}

          <div className="flex items-center space-x-2">
            {/* Controles adicionales */}
            {isExpanded && (
              <div className="flex space-x-2">
                <button
                  onClick={() => window.location.reload()}
                  className={`${theme === 'dark' ? 'bg-gray-700/80 hover:bg-gray-600 border-gray-600' : 'bg-gray-200 hover:bg-gray-300 border-gray-400'} text-sm p-2 rounded-lg transition-all backdrop-blur-sm border hover:scale-105`}
                  title="Recargar escena"
                >
                  🔄
                </button>
                <button
                  onClick={() => {
                    if (document.fullscreenElement) {
                      document.exitFullscreen();
                    } else {
                      document.documentElement.requestFullscreen();
                    }
                  }}
                  className={`${theme === 'dark' ? 'bg-gray-700/80 hover:bg-gray-600 border-gray-600' : 'bg-gray-200 hover:bg-gray-300 border-gray-400'} text-sm p-2 rounded-lg transition-all backdrop-blur-sm border hover:scale-105`}
                  title="Pantalla completa"
                >
                  📺
                </button>
                <button
                  onClick={() => {
                    const helpText = `🎮 CONTROLES DEL RECORRIDO VIRTUAL:

🚶 MOVIMIENTO:
• W, A, S, D - Caminar
• Shift + Movimiento - Correr
• Mouse - Mirar alrededor

🗺️ NAVEGACIÓN:
• Usa este panel para ir a diferentes laboratorios
• Busca marcadores verdes en la escena para interactuar
• Haz clic en puertas para ingresar a laboratorios

🎯 CONSEJOS:
• Acércate a los objetos para obtener más información
• Explora diferentes ángulos de cada laboratorio
• Usa pantalla completa para una mejor experiencia`;
                    alert(helpText);
                  }}
                  className={`${theme === 'dark' ? 'bg-blue-600/80 hover:bg-blue-500 border-blue-500' : 'bg-blue-200 hover:bg-blue-300 border-blue-400'} text-sm p-2 rounded-lg transition-all backdrop-blur-sm border hover:scale-105`}
                  title="Ayuda y controles"
                >
                  ❓
                </button>
              </div>
            )}

            {/* Botón de toggle principal */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`
                bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500
                text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110
                border-2 border-white/30 backdrop-blur-sm group
                ${isExpanded ? 'rotate-45' : 'rotate-0'}
              `}
              title={isExpanded ? "Cerrar panel" : "Abrir panel de navegación"}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {isExpanded ? '✕' : '🗺️'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationPanel;