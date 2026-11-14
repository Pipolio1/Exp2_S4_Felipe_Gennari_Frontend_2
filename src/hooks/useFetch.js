import { useState, useEffect, useCallback } from 'react';

// Hook que centraliza el ciclo de una petición: estados de datos,
// carga y error, cancelación al desmontar/cambiar dependencias
// (AbortController) y reintento manual ante errores.
function useFetch(fetcher, deps) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetcher({ signal: controller.signal })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, retryCount]);

  const retry = useCallback(() => setRetryCount((count) => count + 1), []);

  return { data, loading, error, retry };
}

export default useFetch;
