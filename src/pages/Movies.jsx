import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "services/themoviedbAPI";
import { nanoid } from 'nanoid';
// import Loader from "components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    // const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();


    useEffect(() => {

        // const showNotification = data => {
        //     if (data === []) {
        //       console.log(`There is't results`);
        //     }
        //   };
    
        try {
            // setIsLoading(true);
            getMovieSearch(query).then(response => {
                setSearchMovies([...response.results]);
                // showNotification(response.results);
                console.log(response.results);
                // setIsLoading(false);
            });
            
            // .catch(function (error) {
            //     console.log(error.toJSON());
            //     // setError(true);
            //   });
    
    
        } catch (error) {
            console.log('error: ', error);
            // setIsLoading(false);
        }
        getMovieSearch();
    }, [query])

// const updateQueryString = evt => {
//     evt.preventDefault();

//     if (evt.target.value === '') {
//        return setSearchParams({});
//     }
//     setSearchParams({ query: evt.target.value})
// }

// const visibleMovies = searchMovies.filter(movie => movie.title.includes(query));
    

// const handleSubmit = event => {
//     event.preventDefault();

//     if (query.trim() === '') {
//       return console.log('Enter the search name please');
//     }

//   };

console.log(query);

const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.elements.query.value === '') {
        toast.warning(`Please, enter movie name`);
        return setSearchParams({});
     } else if (form.elements.query.value && searchMovies) {
        toast.warning(`There isn't result with name ${query}`);
     }
     setSearchParams({ query: form.elements.query.value})
    form.reset();
  };


    return (
        <div>
            {/* <input type="text"
            value={query}
            onChange={updateQueryString}
            /> */}

<form onSubmit={handleSubmit}>
<input type="text" name="query" />
        <button type="submit">Search</button>
  </form>
  {/* {isLoading && <Loader />} */}

            <ul>  
            {searchMovies.map(movie => {
                return <li key={nanoid()}><Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link></li>;
            }) }
        </ul>
        <ToastContainer autoClose={3000} />
        </div>
    )
}

export default Movies;