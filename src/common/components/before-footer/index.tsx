import { Location } from 'history';
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import styles from './style.module.css';

function BeforeFooter(props:any) {
  const location:Location = useLocation();
  if (location.pathname === '/') {
    return <></>;
  }
  return (
    <div className={styles.beforeFooter}>
      <div className={styles.backLink}>
        <Link to="/"><BsArrowLeftCircle /> Back to Home</Link>
      </div>
    </div>
  );
}
export default BeforeFooter;
