import User from 'models/User';

import './ListItem.css';

interface ListItemProps {
  user: User
}

function ListItem({user}:ListItemProps) {
  return (
    <li className="list-item">
      <img className="avatar-small" src={user.avatarUrl} alt="avatar" />
      {user.login}
    </li>
  );
}
export default ListItem;
