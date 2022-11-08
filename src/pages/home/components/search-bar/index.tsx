import styles from './style.module.css';

function submit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

function SearchBar() {
  return (
    <form className={styles.searchForm} onSubmit={submit}>
      <div className={styles.searchBarWrapper}>
        <input className={styles.searchBar} placeholder="Search..." />
        <button type="submit" className={styles.searchButton}>OK</button>
      </div>
    </form>
  );
}
export default SearchBar;
