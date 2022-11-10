import { BsStar } from 'react-icons/bs';
import { BiGitRepoForked } from 'react-icons/bi';
import Repository from 'models/Repository';
import styles from './style.module.css';

interface RepoListItemProps {
  repo: Repository
}

function RepoListItem({repo}:RepoListItemProps) {
  return (
    <li className={styles.repoListItem}>
      <header className={styles.header}>
        <h3 className={styles.title}>{repo.name}</h3>
        <span className={styles.stats}>
          <span className={styles.stars}><BsStar />{repo.stars}</span>
          <span className={styles.forks}><BiGitRepoForked />{repo.forks}</span>
        </span>
      </header>
      <div className={styles.itemBody}>
        { repo.description ?
          <p className={styles.description}>{repo.description}</p> :
          null }
      </div>
    </li>
  );
}
export default RepoListItem;
