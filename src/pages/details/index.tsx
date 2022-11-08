import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from 'settings/apiConfig.json';
import DetailedUser from 'models/DetailedUser';
import styles from './style.module.css';

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
    <>
    <div className={styles.wrapper}>
      {
        isLoading ? "Loading..." :
        user === null ? "That user doesn't exist" :
        <>
          <section className={styles.profile}>
            <img className={styles.avatar} src={user.avatarUrl} alt="avatar" />
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <ul>
              <li>Followers: {user.followers}</li>
              <li>Following: {user.following}</li>
            </ul>
            <h2>Websites</h2>
            <ul>
              <li><a href={user.githubUrl} target="_blank" rel="noreferrer">
                Github Page
              </a></li>
              {
                user.blogUrl ?
                  <li><a href={user.blogUrl} target="_blank" rel="noreferrer">
                    Blog Website
                  </a></li> :
                  null
              }
            </ul>
          </section>
        </>
      }
    </div>
    </>
  );
}

export default Details;
