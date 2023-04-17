import React, { useState } from "react";
import api from "../services/api";
import style from "./HomePage.module.scss"

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const response = await api(username);
    setUserData(response.data);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <main className={style.main}>
          <h1>DevHunt</h1>
          <input type="text" placeholder="Enter a GitHub username" value={username} onChange={handleInputChange} />
          <button className={style.button} onClick={handleSearch}>Search</button>
      </main>
      {userData && (
        <section className={style.card}>
          <img src={userData.avatar_url} alt="User avatar" />
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
          <a href={userData.html_url}>GitHub Profile</a>
          <p>Followers: {userData.followers}</p>
        </section>
      )}
    </>
  );
};

export default HomePage;

