import { useParams } from 'react-router-dom';
import { fetchBooksByGenre } from '../services/api';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

function CategoryPage() {
  const { genre } = useParams();
  const { data: books, loading, error, retry } = useFetch(
    (options) => fetchBooksByGenre(genre, options),
    [genre]
  );

  if (loading) {
    return <LoadingSpinner message={`Cargando libros de ${genre}...`} />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={retry} />;
  }

  return (
    <section>
      <h1>{genre}</h1>
      {books.length === 0 ? (
        <p className="empty-message">
          No hay libros disponibles en esta categoría por ahora. Vuelve pronto.
        </p>
      ) : (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.title} className="book-card">
              <h2>{book.title}</h2>
              <p className="book-author">{book.author}</p>
              <p className="book-price">{book.price}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CategoryPage;
