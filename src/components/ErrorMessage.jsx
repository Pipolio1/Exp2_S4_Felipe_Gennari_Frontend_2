import { Link } from 'react-router-dom';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box" role="alert">
      <h2>Algo salió mal</h2>
      <p>{message}</p>
      <div className="error-actions">
        {onRetry && (
          <button type="button" className="btn" onClick={onRetry}>
            Reintentar
          </button>
        )}
        <Link to="/" className="btn btn-secondary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default ErrorMessage;
