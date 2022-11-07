import { useState, useEffect } from "react";
import apiConfig from 'settings/apiConfig.json';
import UserList from './components/user-list';
import User from 'models/User';

function Home() {

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiConfig.baseUrl}/users`, apiConfig.getOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.map((userData:any) => new User(userData)));
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
export default Home;
