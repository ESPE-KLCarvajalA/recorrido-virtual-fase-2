import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export const WebGLContextHandler: React.FC = () => {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleContextLost = (event: WebGLContextEvent) => {
      console.error('🚨 WebGL Context Lost!');
      event.preventDefault();
      
      // Mostrar alerta al usuario
      alert('Error gráfico detectado. La página se recargará automáticamente.');
      
      // Recargar después de 2 segundos
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    };

    const handleContextRestored = () => {
      console.log('✅ WebGL Context Restored!');
    };

    canvas.addEventListener('webglcontextlost', handleContextLost as EventListener);
    canvas.addEventListener('webglcontextrestored', handleContextRestored as EventListener);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl]);

  return null;
};