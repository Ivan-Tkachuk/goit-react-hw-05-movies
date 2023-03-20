import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/themoviedbAPI";
// import Loader from "../components/Loader/Loader";


const Reviews = () => {
    const {movieId} = useParams();
    // const [isLoading, setIsLoading] = useState(false);
    const [movieReviews, setMovieReviews] = useState({});

    useEffect(() => {

        // const showNotification = data => {
        //     if (data.succsess === false) {
        //       toast.error(`There is't results`);
        //     }
        //   };
    
        try {
            // setIsLoading(true);
            getMovieReviews(movieId).then(response => {
                // showNotification(data);
                console.log('resp:', response);
                setMovieReviews(response.results);
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
    }, [movieId]);

    console.log(movieReviews.length);


    return (
        <>
{!movieReviews.length ? (<p>We don`t have any rewiews on this movie</p>):(<div>
{/* {isLoading && <Loader />} */}
<ul>
{movieReviews.map(({author, content}) => {
return (<li key={nanoid()}> 
    <h3>Author: {author}</h3>
    <p>{content}</p>
    </li>);
}) }
</ul>
</div>)}
</>
    ); 
}


export default Reviews;