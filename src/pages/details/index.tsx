import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from 'config.json';
import User from 'models/User';

function Details() {

  const [user, setUser] = useState<User|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const options = { headers: {
      accept: "application/vnd.github+json"
    }};
    fetch(`${config.api.baseUrl}/users/${username}`, options)
      .then((response) => response.status === 200 ? response.json() : null)
      .then((data) => {
        setUser(data !== null ? new User(data) : null);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }
  else if (user === null) {
    return <div>That user doesn't exist</div>;
  }
  return (
    <div>{user.username}</div>
  );
}

export default Details;
