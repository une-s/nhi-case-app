import { GoSearch } from 'react-icons/go'
import styles from './style.module.css';

interface SearchBarProps {
  onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({onChange}:SearchBarProps) {
  return (
    <div className={styles.wrapperOuter}>
      <div className={styles.wrapperInner}>
        <input
          className={styles.searchBar}
          onChange={onChange}
          placeholder="Search..." />
        <span className={styles.searchIcon}><GoSearch /></span>
      </div>
    </div>
  );
}
export default SearchBar;
