import styles from './style.module.css';

interface SearchBarProps {
  onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({onChange}:SearchBarProps) {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        className={styles.searchBar}
        onChange={onChange}
        placeholder="Search..." />
    </div>
  );
}
export default SearchBar;
