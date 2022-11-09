import Repository from 'models/Repository';
import styles from './style.module.css';

interface RepoListItemProps {
  repo: Repository
}

function RepoListItem({repo}:RepoListItemProps) {
  return (
    <li className={styles.repoListItem}>
      <h3 className={styles.title}>{repo.name}</h3>
      <div className={styles.itemBody}>
        { repo.description ?
          <p className={styles.description}>{repo.description}</p> :
          null }
      </div>
    </li>
  );
}
export default RepoListItem;
