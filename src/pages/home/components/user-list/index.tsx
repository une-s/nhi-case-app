import ListItem from '../list-item';
import User from 'models/User';
import styles from './style.module.css';

interface UserListProps {
  users: User[]
}

function UserList({users}:UserListProps) {
  return (
    <ul className={styles.userList}>
      {users.map(user => <ListItem key={user.id} user={user}/>)}
    </ul>
  );
}
export default UserList;
