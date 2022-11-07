import { Link } from 'react-router-dom';
import User from 'models/User';

import './ListItem.css';

interface ListItemProps {
  user: User
}

function ListItem({user}:ListItemProps) {
  return (
    <li className="list-item">
      <Link to={`/user/${user.username}`}>
        <img className="avatar-small" src={user.avatarUrl} alt="avatar" />
        {user.username}
      </Link>
    </li>
  );
}
export default ListItem;
