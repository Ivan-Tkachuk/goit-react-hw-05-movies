export const getTrendingList = async () => {
    const API_KEY = '148c9397aa3eec308089adaec56ced74';
    const BASE_URL = 'https://api.themoviedb.org/3/';
  
    // if (abortController.current) {
    //   abortController.current.abort();
    // }
    // abortController.current = new AbortController();
  
    const response = await fetch(
      `${BASE_URL}trending/movie/day?&api_key=${API_KEY}`
    );
    if (response.ok) {
      return response.json();
    }
    return await Promise.reject(
      new Error(`There is't result`)
    );
  };