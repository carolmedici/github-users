import React, { useState } from "react";
import api from "../services/api";

const HomePage = () => {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    const userData = await api(username);
    console.log(userData);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <h1>DevHunt</h1>
      <input type="text" placeholder="Enter a GitHub username" value={username} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default HomePage;
