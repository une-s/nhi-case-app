import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoOrganization } from 'react-icons/go';
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
        user === null ? "Couldn't find that user" :
        <>
          <section className={styles.leftSection}>
            <img className={styles.avatar} src={user.avatarUrl} alt="avatar" />
            <h1 className={styles.title}>
              <span className={styles.name}>{user.name}</span>
              <span className={styles.username}>{user.username}</span>
            </h1>
            <div className={styles.profileBody}>
              <div className={styles.followStats}>
                <GoOrganization />
                <span>{user.followers} followers</span>
                <span>·</span>
                <span>{user.following} following</span>
              </div>
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
            </div>
          </section>
          <section className={styles.rightSection}>
            <h2>Public Repositories <span className={styles.small}>(total {user.publicRepos})</span></h2>
            <p>
              Viewing first {repos.length}.
              You can browse all on their <a
                href={user.githubUrl + '?tab=repositories'}
                target="_blank"
                rel="noreferrer">GitHub profile</a>.
            </p>
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
