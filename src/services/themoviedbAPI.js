import axios from "axios";


const API_KEY = '148c9397aa3eec308089adaec56ced74';

export const getTrendingList = async () => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
  
    // if (abortController.current) {
    //   abortController.current.abort();
    // }
    // abortController.current = new AbortController();
  
    const response = await axios.get(`${BASE_URL}trending/movie/day?&api_key=${API_KEY}`
    );
    return response.data;

    // if (response.ok) {
    //   return response.json();
    // }
    // return await Promise.reject(
    //   new Error(`There is't result`)
    // );
  };


  export const getMovieDetail = async (movieId) => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
  
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?&api_key=${API_KEY}&language=en-US`
    );

      return response.data;
    // if (response.ok) {
    //   return response.json();
    // }
    // return await Promise.reject(
    //   new Error(`There is't result`)
    // );
  };

  export const getMovieCast = async (movieId) => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
  
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?&api_key=${API_KEY}&language=en-USpage=1`
    );

      return response.data;
    // if (response.ok) {
    //   return response.json();
    // }
    // return await Promise.reject(
    //   new Error(`There is't result`)
    // );
  };

  export const getMovieReviews = async (movieId) => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
  
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?&api_key=${API_KEY}&language=en-US&page=1`
    );

      return response.data;
    // if (response.ok) {
    //   return response.json();
    // }
    // return await Promise.reject(
    //   new Error(`There is't result`)
    // );
  };

  export const getMovieSearch = async (query) => {
    const BASE_URL = 'https://api.themoviedb.org/3/';
  
    const response = await axios.get(
      `${BASE_URL}/search/movie?&api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );

      return response.data;
    // if (response.ok) {
    //   return response.json();
    // }
    // return await Promise.reject(
    //   new Error(`There is't result`)
    // );
  };
