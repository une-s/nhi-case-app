import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiConfig from 'settings/apiConfig.json';
import User from 'models/User';

function Details() {

  const [user, setUser] = useState<User|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiConfig.baseUrl}/users/${username}`, apiConfig.getOptions)
      .then((response) => response.status === 200 ? response.json() : null)
      .then((data) => {
        console.log(data);
        setUser(data !== null ? new User(data) : null);
        setIsLoading(false);
      });
  }, [username]);

  return (
    <div>
      {
        isLoading ? "Loading..." :
        user === null ? "That user doesn't exist" :
        user.username
      }
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Details;
