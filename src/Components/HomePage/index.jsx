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
          <img className={style.card__profileImage} src={userData.avatar_url} alt="User avatar" />
          <h2 className={style.card__name}> {userData.name}</h2> 
     
          <p className={style.card__profileName}>User: <a className={style.card__link} href={userData.html_url} target="blank">{userData.login}</a></p>
          <p className={style.card__followers}>Followers: {userData.followers}</p>
        </section>
      )}
    </>
  );
};

export default HomePage;

