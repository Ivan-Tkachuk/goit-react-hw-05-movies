import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FilmDetails = () => {
    const {filmId} = useParams();

// useEffect(() => {
//     http 
// }, [])

    return (
<>
<h1>FilmDetails: {filmId}</h1>
<ul>
    <li>
        <Link to="cast">Cast</Link>
    </li>
    <li>
    <Link to="reviews">Reviews</Link>
    </li>
</ul>
<Outlet />
</>
    ) 
}

export default FilmDetails;