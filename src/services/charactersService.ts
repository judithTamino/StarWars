import axios from 'axios';

const API = 'https://swapi.info/api';
const URL = 'http://localhost:3000/favorites';

// Get all characters
export const getCharacters = () => {
  return axios.get(`${API}/people`);
};
