import Repository from 'models/Repository';

interface RepoListItemProps {
  repo: Repository
}

function RepoListItem({repo}:RepoListItemProps) {
  return <li>{repo.name}</li>
}
export default RepoListItem;
