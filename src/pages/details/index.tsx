import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from 'settings/apiConfig.json';
import DetailedUser from 'models/DetailedUser';
import Repository from 'models/Repository';
import RepoList from './components/repo-list';
import styles from './style.module.css';

function Details() {

  const [user, setUser] = useState<DetailedUser|null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [isLoadingRepos, setIsLoadingRepos] = useState<boolean>(true);

  const { username } = useParams();

  // Fetch user
  useEffect(() => {
    setIsLoadingUser(true);
    fetch(`${apiConfig.baseUrl}/users/${username}`, apiConfig.getOptions)
      .then((response) => response.status === 200 ? response.json() : null)
      .then((data) => {
        console.log(data);
        setUser(data !== null ? new DetailedUser(data) : null);
      })
      .catch(err => {
        console.error(err);
        setUser(null);
      })
      .finally(() => setIsLoadingUser(false));
  }, [username]);

  // Fetch repos
  useEffect(() => {
    setIsLoadingRepos(true);
    fetch(
        `${apiConfig.baseUrl}/users/${username}/repos?per_page=10`,
        apiConfig.getOptions)
      .then((response) => response.status === 200 ? response.json() : [])
      .then((data) => {
        console.log(data);
        setRepos(data.map((repoData:any) => new Repository(repoData)));
      })
      .finally(() => setIsLoadingRepos(false));
  }, [username]);

  return (
    <div className={styles.wrapper}>
      {
        isLoadingUser ? "Loading..." :
        user === null ? "That user doesn't exist" :
        <>
          <section className={styles.leftSection}>
            <img className={styles.avatar} src={user.avatarUrl} alt="avatar" />
            <h1 className={styles.title}>
              <span className={styles.name}>{user.name}</span>
              <span className={styles.username}>{user.username}</span>
            </h1>
            <ul>
              <li>Followers: {user.followers}</li>
              <li>Following: {user.following}</li>
              <li>Public repos: {user.publicRepos}</li>
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
          <section className={styles.rightSection}>
            <h2>Repositories{user.publicRepos > 10 ? " (first 10)" : ""}</h2>
            {
              isLoadingRepos ? "Loading..." :
              <RepoList repos={repos} />
            }
          </section>
        </>
      }
    </div>
  );
}

export default Details;
