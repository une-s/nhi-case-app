import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from 'settings/apiConfig.json';
import DetailedUser from 'models/DetailedUser';

function Details() {

  const [user, setUser] = useState<DetailedUser|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${apiConfig.baseUrl}/users/${username}`, apiConfig.getOptions)
      .then((response) => response.status === 200 ? response.json() : null)
      .then((data) => {
        console.log(data);
        setUser(data !== null ? new DetailedUser(data) : null);
        setIsLoading(false);
      });
  }, [username]);

  return (
    <div>
      {
        isLoading ? "Loading..." :
        user === null ? "That user doesn't exist" :
        <>
          <h1>{user.username}</h1>
          <img src={user.avatarUrl} alt="avatar" />
        </>
      }
    </div>
  );
}

export default Details;
