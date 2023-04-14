import axios from "axios";

function api(username) {
  const api = axios.create({
    baseURL: `https://api.github.com/users/${username}`,
  });

  return api.get();
}

export default api;
