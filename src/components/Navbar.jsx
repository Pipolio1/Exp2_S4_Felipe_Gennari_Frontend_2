import { NavLink } from 'react-router-dom';

const links = [
  { to: '/categoria/Ficción', label: 'Ficción' },
  { to: '/categoria/Ciencia Ficción', label: 'Ciencia Ficción' },
  { to: '/categoria/Misterio', label: 'Misterio' },
  { to: '/categoria/Drama', label: 'Drama' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        📚 Tienda de Libros
      </NavLink>
      <ul className="navbar-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
