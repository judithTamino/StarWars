import axios from "axios";

// get film
export const getFilm = (url:string) => axios.get(url);