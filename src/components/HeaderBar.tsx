import { Link, useLocation } from 'react-router-dom';
import './HeaderBar.scss';

const HeaderBar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/historia', label: 'História' },
    { path: '/geografia', label: 'Geografia' },
    { path: '/deuses', label: 'Deuses' },
    { path: '/bestiario', label: 'Bestiário' },
    { path: '/mapa', label: 'Mapa' },
  ];

  return (
    <header className="header-bar">
      <div className="logo">Honra & Egoísmo</div>
      <nav>
        <ul className="nav-list">
          {navLinks.map(link => (
            <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBar;

