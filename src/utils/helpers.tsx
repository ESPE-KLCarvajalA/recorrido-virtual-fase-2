import { useState, useEffect } from 'react';

/*****************
 * Player Controls
 ****************/
export const usePlayerControls = () => {
  // const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump', ShiftLeft: 'run' };
  const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', ShiftLeft: 'run' };
  const moveFieldByKey = (key: keyof typeof keys) => keys[key];

  // const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false, run: false });
   const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, run: false });

  useEffect(() => {
    const handleKeyDown = (e : any) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e : any) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
