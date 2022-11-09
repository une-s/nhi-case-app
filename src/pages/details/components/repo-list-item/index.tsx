import Repository from 'models/Repository';
import styles from './style.module.css';

interface RepoListItemProps {
  repo: Repository
}

function RepoListItem({repo}:RepoListItemProps) {
  return <li className={styles.repoListItem}>{repo.name}</li>
}
export default RepoListItem;
