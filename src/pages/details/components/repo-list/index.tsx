import Repository from 'models/Repository';
import RepoListItem from '../repo-list-item';
import styles from './style.module.css';

interface RepoListProps {
  repos: Repository[]
}

function RepoList({repos}:RepoListProps) {
  return (
    <ul className={styles.repoList}>
      { repos.map(repo => <RepoListItem
          repo={repo}
          key={repo.id} />) }
    </ul>
  );
}
export default RepoList;
