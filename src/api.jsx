import axios from "axios";

export const searchMovie = async (q) => {
  const search = await axios.get(`${process.env.REACT_APP_SERVER}/search/movie?query=${q}&api_key=${process.env.REACT_APP_KEY}`);
  return search.data
}