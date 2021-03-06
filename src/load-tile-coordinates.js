import { InstancedBufferAttribute } from './three/build/three.module.js'

export default function(pve) {
  const size = 2
  const data = new Float32Array(pve.tiles.length * size)

  for (let i = 0; i < pve.tiles.length; i++) {
    data[i * size] = i % pve.width
    data[i * size + 1] = Math.floor(i / pve.width)
  }

  return new InstancedBufferAttribute(data, size)
}
