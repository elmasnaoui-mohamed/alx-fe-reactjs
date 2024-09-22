import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = (username) => {
  return axios.get(`${GITHUB_API_URL}/${username}`);
};

export const fetchAdvancedUserData = (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  return axios.get(`${GITHUB_SEARCH_API_URL}${query}`);
};
