import { useState, useEffect } from "react";
import apiConfig from 'settings/apiConfig.json';
import LoadingComponent from 'common/components/loading-component';
import SearchBar from './components/search-bar';
import UserList from './components/user-list';
import User from 'models/User';

interface Query {
  value: string,
  // The time stamp of the search bar's last ChangeEvent
  timeStamp: number
}
interface UsersResult {
  users: User[],
  errorOccurred: boolean,
  // Time stamp of the search bar's ChangeEvent associated with this result
  // Since older fetches may finish after newer fetches, keeping track of time
  // should prevent newer results from being overridden by old results
  timeStamp: number
}

function Home() {

  const [query, setQuery] = useState<Query>({value: "", timeStamp: 0});
  const [users, setUsers] = useState<UsersResult>({
    users: [],
    errorOccurred: false,
    timeStamp: -1 // Initial value must be lower than query.timeStamp
  });
  const isLoading = users.timeStamp < 0;

  useEffect(() => {
    // Sets the users state unless the prev state is from a more recent search
    function setUsersIfNewer(users:User[], errorOccurred:boolean) {
      setUsers(prev => {
        return query.timeStamp > prev.timeStamp ? {
          users: users,
          errorOccurred: errorOccurred,
          timeStamp: query.timeStamp
        } : prev;
      });
    }

    // Compose fetch URL
    const url = apiConfig.baseUrl + (query.value ?
      `/search/users?q=${encodeURIComponent(query.value)}` :
      '/users'
    );
    // Fetch users
    fetch(url, apiConfig.getOptions)
      .then((response) => response.status === 200 ? response.json() : null)
      .then((data) => {
        console.log(data);
        if (data && !Array.isArray(data)) {
          data = data.items;
        }
        const users:User[] = data.map((userData:any) => new User(userData));
        setUsersIfNewer(users, false);
      })
      .catch(err => {
        console.error(err);
        setUsersIfNewer([], true);
      });
  }, [query.value, query.timeStamp]);

  function onSearchChange(event:React.ChangeEvent<HTMLInputElement>) {
    setQuery({
      value: event.currentTarget.value,
      timeStamp: event.timeStamp
    });
  }

  return (
    <div>
      <SearchBar onChange={onSearchChange} />
      { isLoading ? <LoadingComponent /> :
        users.errorOccurred ? 'Failed to load users' :
        <UserList users={users.users} /> }
    </div>
  );
}
export default Home;
