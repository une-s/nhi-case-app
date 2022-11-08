import { Location } from 'history';
import { Link, useLocation } from "react-router-dom";
import styles from './style.module.css';

function BeforeFooter(props:any) {
  const location:Location = useLocation();
  if (location.pathname === '/') {
    return <></>;
  }
  return (
    <div className={styles.beforeFooter}>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
export default BeforeFooter;
