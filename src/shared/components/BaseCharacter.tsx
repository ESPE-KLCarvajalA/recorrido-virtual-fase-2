import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { usePlayerControls } from '../../utils/helpers.js';
import * as THREE from 'three';

const BaseCharacter = ({ positionCharacter, velocidad, altura, args, position }: any) => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  //const speed = new THREE.Vector3();
  const SPEED = velocidad;

  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position,
    args,
  }));

  const { forward, backward, left, right, run } = usePlayerControls();
  const velocity = useRef([0, 0, 0]);

  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  // Actualiza la posición física cuando cambie `positionCharacter`
  useEffect(() => {
    if (positionCharacter) {
      api.position.set(positionCharacter[0], positionCharacter[1], positionCharacter[2]);
    }
  }, [positionCharacter, api]);

  useFrame((_state) => {
    let spherePosition = new THREE.Vector3();
    ref.current.getWorldPosition(spherePosition);
    camera.position.set(spherePosition.x, spherePosition.y + altura, spherePosition.z);
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);

    if (run && Math.abs(velocity.current[1]) < 0.05) {
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED * 3.5).applyEuler(camera.rotation);
    } else {
      direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);
    }

    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return (
    <group>
      <mesh castShadow ref={ref as React.Ref<THREE.Mesh>}>
        <sphereGeometry args={args} />
        <meshStandardMaterial color="#FFFF00" opacity={0.5} />
      </mesh>
    </group>
  );
};

export default BaseCharacter;
