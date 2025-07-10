// src/utils/helpers.js
import { useState, useEffect } from 'react';

/*****************
 * Player Controls
 ****************/
export const usePlayerControls = () => {
  
  
  const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump', ShiftLeft: 'run' }; // <--- ¡Asegúrate de que esta sea la línea activa!
  
  const moveFieldByKey = (key: keyof typeof keys) => keys[key];

  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, run: false , jump: false});

  useEffect(() => {
    const handleKeyDown = (e : any) => {
      // Solo actualiza si la tecla está en nuestro mapeo 'keys'
      if (moveFieldByKey(e.code)) { // <--- Pequeña mejora para evitar errores si e.code no está en 'keys'
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
      }
    };
    const handleKeyUp = (e : any) => {
      if (moveFieldByKey(e.code)) { // <--- Pequeña mejora
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};