import ListItem from './ListItem';
import User from 'models/User';

interface UserListProps {
  users: User[]
}

function UserList({users}:UserListProps) {
  return (
    <ul className="user-list">
      {users.map(user => <ListItem key={user.id} user={user}/>)}
    </ul>
  );
}
export default UserList;
