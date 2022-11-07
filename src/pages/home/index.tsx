import { useState, useEffect } from "react";
import config from 'config.json';
import UserList from './components/UserList';
import User from 'models/User';

function Home() {

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const options = { headers: {
      accept: "application/vnd.github+json"
    }};
    fetch(`${config.api.baseUrl}/users`, options)
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
