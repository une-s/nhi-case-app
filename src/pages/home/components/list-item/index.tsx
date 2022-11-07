import { Link } from 'react-router-dom';
import User from 'models/User';
import styles from './style.module.css';

interface ListItemProps {
  user: User
}
console.log(styles);

function ListItem({user}:ListItemProps) {
  return (
    <li className={styles.listItem}>
      <Link to={`/user/${user.username}`}>
        <img className={styles.avatarSmall} src={user.avatarUrl} alt="avatar" />
        {user.username}
      </Link>
    </li>
  );
}
export default ListItem;
