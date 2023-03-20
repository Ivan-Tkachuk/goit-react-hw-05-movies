import { useEffect, useState } from "react";
import { getTrendingList } from "services/themoviedbAPI";
import { nanoid } from 'nanoid';
import { Link, useLocation } from "react-router-dom";
// import Loader from "components/Loader/Loader";

const Home = () => {

const [trendingMovies, setTrendingMovies] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
const location = useLocation();

useEffect(() => {
    try {
        // setIsLoading(true);
        getTrendingList().then(data => {
            setTrendingMovies(data.results);
            // setIsLoading(false);
        });
    } catch (error) {
        console.log('error: ', error);
    }
}, [])

return (
    <div>
        {/* {isLoading && <Loader />} */}
        <ul>
    {trendingMovies.map(movie => {
        return <li key={nanoid()}> 
            <Link to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
            </li>;
    }) }
        </ul>
</div>
)
}

export default Home;