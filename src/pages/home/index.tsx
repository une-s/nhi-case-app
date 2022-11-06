import { useState, useEffect } from "react";
import config from 'config.json';

function Home() {

  useEffect(() => {
    fetch(`${config.api.baseUrl}/users`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, []);

  return (
    <div>
      <ul className="user-list">
      </ul>
    </div>
  );
}
export default Home;
