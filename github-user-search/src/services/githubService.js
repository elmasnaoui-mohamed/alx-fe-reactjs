import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users?q=';

export const fetchAdvancedUserData = (query) => {
  return axios.get(`${GITHUB_API_URL}${query}`);
};
