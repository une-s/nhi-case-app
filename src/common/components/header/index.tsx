import { Link } from 'react-router-dom';
import config from 'settings/appConfig.json';
import './style.css';

function Header() {
  return (
    <header className="page-header">
      <div className="page-header-inner">
        <div className="brand">
          <p className="brand-title">{config.name}</p>
        </div>
        <nav className="header-menu">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
