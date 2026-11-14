// Caché en memoria: evita repetir consultas al "servidor" por datos
// que ya fueron obtenidos durante la sesión.
const cache = new Map();

export function getCached(key) {
  return cache.has(key) ? cache.get(key) : undefined;
}

export function setCached(key, value) {
  cache.set(key, value);
}
