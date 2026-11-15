# Tienda de Libros — Semana 4 (PFY2202)

Aplicación React que consume una **API REST mock** con [Mock Service Worker (MSW)](https://mswjs.io/) para explorar categorías de libros, con navegación mediante **React Router**.

**Demo en vivo:** https://pipolio1.github.io/Exp2_S4_Felipe_Gennari_Frontend_2/

## Características

- Mock REST con MSW (`GET /api/categories`, `GET /api/books?genre=...`), activo solo en desarrollo.
- Navegación con React Router: home con categorías, vista por categoría y página 404.
- Indicador de carga en cada petición.
- Manejo de errores con mensajes claros, botón de reintento y opción de volver al inicio.
- Optimización: caché en memoria para no repetir consultas y `AbortController` para cancelar peticiones obsoletas.

## Requisitos

- Node.js 18+

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

Abrir http://localhost:5173

## Build de producción

```bash
npm run build
```

## Desplegar en GitHub Pages

```bash
npm run deploy
```

Publica `dist/` en la rama `gh-pages`. El mock de MSW también funciona en
producción, por lo que la demo responde las solicitudes de `/api` sin backend.

## Estructura

```
src/
├── mocks/        # MSW: datos, handlers y worker
├── services/     # Cliente fetch + caché en memoria
├── hooks/        # useFetch: estados de carga/error y reintento
├── components/   # Navbar, LoadingSpinner, ErrorMessage
└── pages/        # HomePage, CategoryPage, NotFoundPage
```
