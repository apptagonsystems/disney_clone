import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey=import.meta.env.VITE_API_KEY
 
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='+apiKey;

const getTrendingVideos =  axios.get(movieBaseUrl+"/trending/all/day?api_key="+apiKey)

const getMovieByGenreId=(id)=>
axios.get(movieByGenreBaseURL+"&with_genres="+id)
export default {
    getTrendingVideos,
    getMovieByGenreId
}