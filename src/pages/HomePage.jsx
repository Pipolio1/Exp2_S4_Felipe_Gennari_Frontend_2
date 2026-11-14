import { Link } from 'react-router-dom';
import { fetchCategories } from '../services/api';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function HomePage() {
  const { data: categories, loading, error, retry } = useFetch(fetchCategories, []);

  if (loading) {
    return <LoadingSpinner message="Cargando categorías..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={retry} />;
  }

  return (
    <section>
      <h1>Explora nuestras categorías</h1>
      <p className="subtitle">Elige una categoría para ver los libros disponibles.</p>
      <div className="category-grid">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/categoria/${encodeURIComponent(category)}`}
            className="category-card"
          >
            <span className="category-icon">📖</span>
            <span>{category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
