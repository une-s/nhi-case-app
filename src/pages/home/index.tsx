import { useState, useEffect } from "react";
import config from 'config.json';
import ListItem from './components/ListItem';
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
      .then((response) => {console.log(response); return response.json();})
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
      <ul className="user-list">
        {users.map(user => {
          return <ListItem user={user}/>;
        })}
      </ul>
    </div>
  );
}
export default Home;
