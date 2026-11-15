import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Mock de MSW activo también en producción: la demo en GitHub Pages
// no cuenta con un backend real, así que el Service Worker responde
// las solicitudes de /api directamente en el navegador.
async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
