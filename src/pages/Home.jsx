import { useEffect, useState } from "react";
import { getTrendingList } from "services/getTrendingList";
import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";

const Home = () => {

const [trendingMovies, setTrendingMovies] = useState([]);

useEffect(() => {
    try {
        getTrendingList().then(data => {
            setTrendingMovies(data.results);
        });
    } catch (error) {
        console.log('error: ', error);
    }
}, [])

return (
    <div>
        <ul>
    {trendingMovies.map(film => {
        return <li key={nanoid()}> 
            <Link to={`movies/${film.id}`}>{film.title}</Link>
            </li>;
    }) }
        </ul>
</div>
)
}

export default Home;