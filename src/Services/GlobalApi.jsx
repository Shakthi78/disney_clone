import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = 'bc6dede044dc8ffe150106dd53551658'

// 'https://api.themoviedb.org/3/trending/tv/day?api_key=bc6dede044dc8ffe150106dd53551658'

const getTrendingVideos = fetch(movieBaseUrl+ '/trending/tv/day?api_key='+api_key)

export default getTrendingVideos;