import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/themoviedbAPI";
// import Loader from "../components/Loader/Loader";
import pictureNotFound from "../pages/pictureNotFound.jpg";

const Cast = () => {
    const {movieId} = useParams();
    // const [isLoading, setIsLoading] = useState(false);
    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {

        // const showNotification = data => {
        //     if (data.succsess === false) {
        //       toast.error(`There is't results`);
        //     }
        //   };
    
        try {
            // setIsLoading(true);
            getMovieCast(movieId).then(response => {
                // showNotification(data);
                console.log('resp:', response);
                setMovieCast(response.cast);
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

    console.log(movieCast.length);


    return (
        <>
{!movieCast.length ? (<p>No information</p>):(<div>
{/* {isLoading && <Loader />} */}
<ul>
{movieCast.map(({profile_path, name, character}) => {
return (<li key={nanoid()}> 
    <img src={profile_path? `https://image.tmdb.org/t/p/w500${profile_path}`: pictureNotFound} alt={name} />
    <p>{name}</p>
    <p>Character: {character}</p>
    </li>);
}) }
</ul>
</div>)}
</>
    ); 
}


export default Cast;