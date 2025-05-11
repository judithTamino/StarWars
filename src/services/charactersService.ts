import axios from 'axios';

const API = 'https://swapi.info/api';

// Get all characters
export const getCharacters = () => {
  return axios.get(`${API}/people`);
};

// Get Character
export const getCharacter = (id:string) => {
  return axios.get(`${API}/people/${id}`);
}
