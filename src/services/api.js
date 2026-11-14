import { getCached, setCached } from './cache';

async function fetchJson(url, { signal } = {}) {
  const cached = getCached(url);
  if (cached !== undefined) {
    return cached;
  }

  let response;
  try {
    response = await fetch(url, { signal });
  } catch (err) {
    if (err.name === 'AbortError') throw err;
    throw new Error('No se pudo conectar con el servidor. Revisa tu conexión e inténtalo nuevamente.');
  }

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('La categoría solicitada no existe en el catálogo.');
    }
    if (response.status >= 500) {
      throw new Error('El servidor tuvo un problema al responder. Inténtalo de nuevo en unos segundos.');
    }
    throw new Error(`La solicitud falló con estado ${response.status}.`);
  }

  const data = await response.json();
  setCached(url, data);
  return data;
}

export function fetchCategories(options) {
  return fetchJson('/api/categories', options);
}

export function fetchBooksByGenre(genre, options) {
  return fetchJson(`/api/books?genre=${encodeURIComponent(genre)}`, options);
}
