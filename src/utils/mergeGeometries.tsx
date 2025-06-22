import * as THREE from 'three';
import { mergeGeometries as mergeBufferGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Une múltiples geometrías de tipo BufferGeometry en una sola.
 * Retorna los vértices y los índices necesarios para `useTrimesh`.
 *
 * @param geometries - Array de geometrías a unir.
 * @returns Objecto con `vertices` y `indices` para uso en física.
 */
export function mergeGeometries(
  geometries: THREE.BufferGeometry[]
): { vertices: Float32Array; indices: Uint16Array | Uint32Array } {
  // Unifica las geometrías en una sola BufferGeometry
  const mergedGeometry = mergeBufferGeometries(geometries, true);

  if (!mergedGeometry) {
    throw new Error('❌ Error al unir geometrías: Verifica que sean válidas y no estén vacías.');
  }

  const vertices = mergedGeometry.attributes.position.array as Float32Array;
  const indices = mergedGeometry.index?.array;

  if (!indices) {
    throw new Error('❌ La geometría combinada no tiene índices. Asegúrate de exportar modelos con caras trianguladas.');
  }

  return {
    vertices,
    indices: indices as Uint16Array | Uint32Array,
  };
}
