import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterCampus = () => {
    setIsLoading(true);
    
    // Simular carga y luego navegar
    setTimeout(() => {
      navigate('/entrada');
    }, 2000);
  };

  const handleLabDirect = (labNumber: number) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/lab${labNumber}`);
    }, 1500);
  };

  return (
    <div className="welcome-container">
      {/* Fondo animado */}
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className={`welcome-content ${showContent ? 'show' : ''}`}>
        <div className="welcome-header">
          <h1 className="welcome-title">
            <span className="title-line">Bienvenido al</span>
            <span className="title-highlight">Campus Virtual</span>
          </h1>
          <p className="welcome-subtitle">
            Explora nuestras instalaciones educativas en un entorno 3D inmersivo
          </p>
        </div>

        <div className="welcome-actions">
          <button 
            className="btn-primary"
            onClick={handleEnterCampus}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-content">
                <span className="spinner"></span>
                Cargando Campus...
              </span>
            ) : (
              <>
                <span className="btn-icon">🏛️</span>
                Explorar Campus
              </>
            )}
          </button>

          <div className="quick-access">
            <h3>Acceso Rápido a Laboratorios</h3>
            <div className="lab-buttons">
              {[1, 2, 3, 4, 5, 6].map((labNum) => (
                <button
                  key={labNum}
                  className="btn-lab"
                  onClick={() => handleLabDirect(labNum)}
                  disabled={isLoading}
                >
                  <span className="lab-icon">🔬</span>
                  Lab {labNum}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="welcome-features">
          <div className="feature">
            <div className="feature-icon">🎮</div>
            <h4>Controles Intuitivos</h4>
            <p>Usa WASD para moverte y ratón para mirar</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🏗️</div>
            <h4>Entorno Realista</h4>
            <p>Física realista y gráficos 3D inmersivos</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📚</div>
            <h4>Espacios Educativos</h4>
            <p>Laboratorios, oficinas y áreas de estudio</p>
          </div>
        </div>

        <div className="welcome-footer">
          <p>Presiona ESC en cualquier momento para volver al menú</p>
          <div className="controls-hint">
            <span><strong>WASD:</strong> Movimiento</span>
            <span><strong>Shift:</strong> Correr</span>
            <span><strong>Ratón:</strong> Mirar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;