import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeftCircle } from "react-icons/bs";
import config from 'settings/appConfig.json';
import styles from './style.module.css';

function Header() {

  const location = useLocation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <Link to="/">
              <p className={styles.brandTitle}>{config.name}</p>
            </Link>
          </div>
          { location.pathname !== "/" ?
            <div className={styles.backLink} title="Back">
              <Link to="/"><BsArrowLeftCircle /></Link>
            </div> :
            null }
        </div>
      </header>
      <div className={styles.behindHeader}></div>
    </>
  );
}
export default Header;
