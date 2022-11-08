import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from 'settings/apiConfig.json';
import DetailedUser from 'models/DetailedUser';
import Repository from 'models/Repository';
import RepoListItem from './components/repo-list-item';
import styles from './style.module.css';

function Details() {

  const [user, setUser] = useState<DetailedUser|null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);
  const [isLoadingRepos, setIsLoadingRepos] = useState<boolean>(true);

  const { username } = useParams();

  useEffect(() => {
    // Fetch user
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

    // Fetch repos
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
          <section className={styles.profile}>
            <img className={styles.avatar} src={user.avatarUrl} alt="avatar" />
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
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
          <section className={styles.repos}>
            <h2>Repositories{user.publicRepos > 10 ? " (first 10)" : ""}</h2>
            {
              isLoadingRepos ? "Loading..." :
              <ul>{ repos.map(repo => <RepoListItem
                repo={repo}
                key={repo.id} />) }</ul>
            }
          </section>
        </>
      }
    </div>
  );
}

export default Details;
