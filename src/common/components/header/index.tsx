import { Link } from 'react-router-dom';
import config from 'settings/appConfig.json';
import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <p className={styles.brandTitle}>{config.name}</p>
        </div>
        <nav className={styles.headerMenu}>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
