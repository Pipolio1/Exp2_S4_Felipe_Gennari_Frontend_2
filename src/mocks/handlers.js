import { http, HttpResponse, delay } from 'msw';
import { categories, booksByGenre } from './data';

export const handlers = [
  http.get('/api/categories', async () => {
    await delay(800);
    return HttpResponse.json(categories);
  }),

  http.get('/api/books', async ({ request }) => {
    const genre = new URL(request.url).searchParams.get('genre');

    await delay(1000);

    // Simula un fallo de servidor ocasional (~10%) para probar
    // el manejo de errores 500 en el frontend.
    if (Math.random() < 0.1) {
      return HttpResponse.json(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    }

    const books = booksByGenre[genre];
    if (!books) {
      return HttpResponse.json(
        { message: `No existe la categoría "${genre}"` },
        { status: 404, statusText: 'Genre not found' }
      );
    }

    return HttpResponse.json(books);
  }),
];
