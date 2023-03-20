import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getMovieDetail } from "services/themoviedbAPI";
import Loader from "../components/Loader/Loader";
import pictureNotFound from "../pages/pictureNotFound.jpg";
import { Suspense } from "react";
import { isEmpty } from "lodash";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FilmDetails = () => {
    const [movieDetail, setMovieDetail] = useState({});
    const {movieId} = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? `/`);
    // const [error, setError] = useState(false);

    // const abortController = useRef();

useEffect(() => {

    // const showNotification = data => {
    //     if (data.succsess === false) {
    //       toast.error(`There is't results`);
    //     }
    //   };

    try {
        getMovieDetail(movieId).then(response => {
            // showNotification(data);
            setMovieDetail(response);
            
        })
        
        .catch(function (error) {
            console.log(error.toJSON());
            toast.error(`There is't results`);
            // setError(true);
          });


    } catch (error) {
        console.log('error: ', error);
        toast.error(`There is't results`);
    }

}, [movieId])

console.log(movieDetail);

const {id, poster_path, title, release_date='', vote_average, overview, genres} = movieDetail;

    return (
<>
<Link to={backLinkLocationRef.current}><button type="button">Go back</button></Link>

{(!isEmpty(movieDetail) && movieId === String(id)) && (
    <>
    <div>
    
<div>
    <img src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`: pictureNotFound} alt={title} />
    <div>
        <h1>{title} {`(${release_date.slice(0, 4)})`}</h1> 
        <p>User Score: {vote_average? `${Math.round(vote_average*10)}%`: `No information`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>


        <h2>Genres</h2>

       <p>{(genres || []).length === 0 ? 'No information': genres.map(genre=> genre.name).join(', ')}</p> 

    </div>
    
</div>
</div>
<p>Additional Information: </p>
<ul>
    <li>
        <Link to="cast">Cast</Link>
    </li>
    <li>
    <Link to="reviews">Reviews</Link>
    </li>
</ul>
</>
) }



<Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
</>
    ) 
}

export default FilmDetails;