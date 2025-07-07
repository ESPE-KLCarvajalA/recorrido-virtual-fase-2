import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { usePlayerControls } from '../../utils/helpers.js';
import * as THREE from 'three';

const BaseCharacter = ({ positionCharacter, velocidad, altura, args, position }: any) => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const SPEED = velocidad;

  const { camera } = useThree();
  const velocity = useRef([0, 0, 0]);

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position,
    args,
    // ⚠️ Se eliminan fricción, restitución y sleep para evitar problemas de física y colisiones
  }));

  const { forward, backward, left, right, run } = usePlayerControls();

  // Suscribirse a cambios de velocidad física
  useEffect(() => {
    const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v));
    return () => unsubscribe();
  }, [api.velocity]);

  // Establecer la posición inicial cuando cambie positionCharacter
  useEffect(() => {
    if (
      Array.isArray(positionCharacter) &&
      positionCharacter.length === 3 &&
      positionCharacter.every((v) => typeof v === 'number')
    ) {
      api.position.set(positionCharacter[0], positionCharacter[1], positionCharacter[2]);
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
    } else {
      console.warn('positionCharacter no es un vector [x, y, z] válido:', positionCharacter);
    }
  }, [positionCharacter, api]);

  // Lógica de movimiento
  useFrame(() => {
    const spherePosition = new THREE.Vector3();
    ref.current.getWorldPosition(spherePosition);
    camera.position.set(spherePosition.x, spherePosition.y + altura, spherePosition.z);

    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);

    const moving = forward || backward || left || right;

    if (moving) {
      const speed = run ? SPEED * 3.5 : SPEED;
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(speed)
        .applyEuler(camera.rotation);
      api.velocity.set(direction.x, velocity.current[1], direction.z);
    } else {
      // Aplica fricción manual para evitar que se quede "pegado" si está en contacto con algo
      api.velocity.set(velocity.current[0] * 0.9, velocity.current[1], velocity.current[2] * 0.9);
    }
  });

  return (
    <group>
      <mesh castShadow ref={ref as React.Ref<THREE.Mesh>}>
        <sphereGeometry args={args} />
        <meshStandardMaterial color="#00FF00" opacity={0.5}  />
      </mesh>
    </group>
  );
};

export default BaseCharacter;
