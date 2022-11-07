import { Link } from 'react-router-dom';
import config from 'settings/appConfig.json';
import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <Link to="/">
            <p className={styles.brandTitle}>{config.name}</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
