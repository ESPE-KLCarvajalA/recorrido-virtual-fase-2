// hooks/usePositionRestore.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePositionRestore = () => {
  const location = useLocation();

  useEffect(() => {
    // Leer parámetros de query de la URL
    const params = new URLSearchParams(location.search);
    const x = params.get('x');
    const y = params.get('y');
    const z = params.get('z');

    // Si hay parámetros de posición, disparar evento personalizado
    if (x && y && z) {
      const positionData = {
        x: parseFloat(x),
        y: parseFloat(y),
        z: parseFloat(z)
      };

      // Disparar evento personalizado que BaseCharacter puede escuchar
      window.dispatchEvent(
        new CustomEvent('restorePlayerPosition', {
          detail: positionData
        })
      );

      // Limpiar los parámetros de la URL sin recargar la página
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [location.search]);
};