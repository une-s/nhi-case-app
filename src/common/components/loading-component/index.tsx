import { BiLoader } from 'react-icons/bi';
import styles from './style.module.css';

function LoadingComponent() {
  return (
    <div className={styles.loading}><BiLoader /> Loading...</div>
  );
}
export default LoadingComponent;
