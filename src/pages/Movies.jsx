import { Link } from "react-router-dom";

const Movies = () => {
// useEffect(() => {
//     http 
// }, [])



    
    return (
        <div>
            {['film1', 'film2', 'film3', 'film4', 'film5',].map(film => {
                return <Link key={film} to={`${film}`}>{film}</Link>;
            }) }
        </div>
    )
}

export default Movies;