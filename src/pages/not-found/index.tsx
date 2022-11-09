import styles from './style.module.css';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>Oops!</h1>
      <p>We couldn't find that page.</p>
    </div>
  );
}

export default NotFound;
