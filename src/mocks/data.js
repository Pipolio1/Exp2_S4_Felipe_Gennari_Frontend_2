export const categories = ['Ficción', 'Ciencia Ficción', 'Misterio', 'Drama'];

export const booksByGenre = {
  'Ficción': [
    { title: '1984', author: 'George Orwell', price: '$10.990' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: '$14.990' },
    { title: 'Orgullo y prejuicio', author: 'Jane Austen', price: '$9.990' },
  ],
  'Ciencia Ficción': [
    { title: 'Dune', author: 'Frank Herbert', price: '$16.990' },
    { title: 'Fundación', author: 'Isaac Asimov', price: '$12.990' },
    { title: 'El problema de los tres cuerpos', author: 'Liu Cixin', price: '$15.990' },
  ],
  'Misterio': [
    { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', price: '$11.990' },
    { title: 'La chica del tren', author: 'Paula Hawkins', price: '$10.490' },
  ],
  // Arreglo vacío a propósito: permite probar cómo reacciona la interfaz
  // cuando una categoría no tiene libros disponibles.
  'Drama': [],
};
